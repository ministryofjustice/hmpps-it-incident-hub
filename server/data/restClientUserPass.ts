import superagent from 'superagent'
import Agent, { HttpsAgent } from 'agentkeepalive'

import logger from '../../logger'
import sanitiseError from '../sanitisedError'
import { ServiceNowConfig } from '../config'
import { restClientMetricsMiddleware } from './restClientMetricsMiddleware'

interface PostRequest {
  path?: string
  headers?: Record<string, string>
  responseType?: string
  data?: Record<string, unknown>
  raw?: boolean
}

export default class RestClientUserPass {
  agent: Agent

  constructor(private readonly name: string, private readonly config: ServiceNowConfig) {
    this.agent = config.url.startsWith('https') ? new HttpsAgent(config.agent) : new Agent(config.agent)
  }

  private apiUrl() {
    return this.config.url
  }

  private timeoutConfig() {
    return this.config.timeout
  }

  async post<T>({
    path = null,
    headers = {},
    responseType = '',
    data = {},
    raw = false,
  }: PostRequest = {}): Promise<T> {
    logger.info(`Post using user credentials: calling ${this.name}: ${path}`)
    try {
      const result = await superagent
        .post(`${this.apiUrl()}${path}`)
        .send(data)
        .agent(this.agent)
        .use(restClientMetricsMiddleware)
        .auth(this.config.username, this.config.password)
        .set(headers)
        .responseType(responseType)
        .timeout(this.timeoutConfig())

      return raw ? result : result.body
    } catch (error) {
      const sanitisedError = sanitiseError(error)
      logger.warn({ ...sanitisedError }, `Error calling ${this.name}, path: '${path}', verb: 'POST'`)
      throw sanitisedError
    }
  }
}
