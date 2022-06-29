import ServiceNowClient from '../data/serviceNowClient'
import logger from '../../logger'

type ServiceNowClientBuilder = () => ServiceNowClient

export default class ServiceNowService {
  constructor(private readonly serviceNowClientBuilder: ServiceNowClientBuilder) {}

  async createIncident(category: string, subcategory: string, description: string): Promise<unknown> {
    const serviceNowClient = this.serviceNowClientBuilder()
    const response = await serviceNowClient.createIncident(category, subcategory, description)

    logger.info(JSON.stringify(response))

    return response
  }
}
