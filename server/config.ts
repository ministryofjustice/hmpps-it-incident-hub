import 'dotenv/config'

const production = process.env.NODE_ENV === 'production'

function get<T>(name: string, fallback: T, options = { requireInProduction: false }): T | string {
  if (process.env[name]) {
    return process.env[name]
  }
  if (fallback !== undefined && (!production || !options.requireInProduction)) {
    return fallback
  }
  throw new Error(`Missing env var ${name}`)
}

const requiredInProduction = { requireInProduction: true }

export class AgentConfig {
  timeout: number

  constructor(timeout = 8000) {
    this.timeout = timeout
  }
}

export interface ApiConfig {
  url: string
  timeout: {
    response: number
    deadline: number
  }
  agent: AgentConfig
}

export interface ServiceNowConfig extends ApiConfig {
  callerId: string
  departmentId: string
  serviceOffering: string
  configItem: string
  assignmentGroup: string
  username: string
  password: string
  contactType: string
}

export default {
  https: production,
  staticResourceCacheDuration: 20,
  redis: {
    host: get('REDIS_HOST', 'localhost', requiredInProduction),
    port: parseInt(process.env.REDIS_PORT, 10) || 6379,
    password: process.env.REDIS_AUTH_TOKEN,
    tls_enabled: get('REDIS_TLS_ENABLED', 'false'),
  },
  session: {
    secret: get('SESSION_SECRET', 'app-insecure-default-session', requiredInProduction),
    expiryMinutes: Number(get('WEB_SESSION_TIMEOUT_IN_MINUTES', 120)),
  },
  apis: {
    hmppsAuth: {
      url: get('HMPPS_AUTH_URL', 'http://localhost:9090/auth', requiredInProduction),
      externalUrl: get('HMPPS_AUTH_EXTERNAL_URL', get('HMPPS_AUTH_URL', 'http://localhost:9090/auth')),
      timeout: {
        response: Number(get('HMPPS_AUTH_TIMEOUT_RESPONSE', 10000)),
        deadline: Number(get('HMPPS_AUTH_TIMEOUT_DEADLINE', 10000)),
      },
      agent: new AgentConfig(Number(get('HMPPS_AUTH_TIMEOUT_RESPONSE', 10000))),
      apiClientId: get('API_CLIENT_ID', 'clientid', requiredInProduction),
      apiClientSecret: get('API_CLIENT_SECRET', 'clientsecret', requiredInProduction),
      systemClientId: get('SYSTEM_CLIENT_ID', 'clientid', requiredInProduction),
      systemClientSecret: get('SYSTEM_CLIENT_SECRET', 'clientsecret', requiredInProduction),
    },
    tokenVerification: {
      url: get('TOKEN_VERIFICATION_API_URL', 'http://localhost:8100', requiredInProduction),
      timeout: {
        response: Number(get('TOKEN_VERIFICATION_API_TIMEOUT_RESPONSE', 5000)),
        deadline: Number(get('TOKEN_VERIFICATION_API_TIMEOUT_DEADLINE', 5000)),
      },
      agent: new AgentConfig(Number(get('TOKEN_VERIFICATION_API_TIMEOUT_RESPONSE', 5000))),
      enabled: get('TOKEN_VERIFICATION_ENABLED', 'false') === 'true',
    },
    hmppsManageUsersApi: {
      url: get('HMPPS_MANAGE_USERS_URL', 'http://localhost:8096', requiredInProduction),
      timeout: {
        response: Number(get('HMPPS_AUTH_TIMEOUT_RESPONSE', 20000)),
        deadline: Number(get('HMPPS_AUTH_TIMEOUT_DEADLINE', 20000)),
      },
      agent: new AgentConfig(),
      apiClientId: get('API_CLIENT_ID', 'interventions', requiredInProduction),
      apiClientSecret: get('API_CLIENT_SECRET', 'clientsecret', requiredInProduction),
      systemClientId: get('SYSTEM_CLIENT_ID', 'interventions', requiredInProduction),
      systemClientSecret: get('SYSTEM_CLIENT_SECRET', 'clientsecret', requiredInProduction),
    },
    serviceNow: {
      url: get('SERVICENOW_API_URL', 'http://localhost:8080', requiredInProduction),
      timeout: {
        response: Number(get('SERVICENOW_API_TIMEOUT_RESPONSE', 10000)),
        deadline: Number(get('SERVICENOW_API_TIMEOUT_DEADLINE', 10000)),
      },
      agent: new AgentConfig(Number(get('SERVICENOW_API_TIMEOUT_RESPONSE', 10000))),
      callerId: get('SERVICENOW_CALLER_ID', '1234', requiredInProduction),
      departmentId: get('SERVICENOW_DEPT_ID', '1234', requiredInProduction),
      serviceOffering: get('SERVICENOW_SERVICE_OFFERING', '1234', requiredInProduction),
      configItem: get('SERVICENOW_CONFIG_ITEM', '1234', requiredInProduction),
      assignmentGroup: get('SERVICENOW_ASSIGNMENT_GROUP', '1234', requiredInProduction),
      username: get('SERVICENOW_USER', '1234', requiredInProduction),
      password: get('SERVICENOW_PASS', '1234', requiredInProduction),
      contactType: get('SERVICENOW_CONTACT_TYPE', '1234', requiredInProduction),
    },
  },
  domain: get('INGRESS_URL', 'http://localhost:3000', requiredInProduction),
}
