import RestClient from './restClientUserPass'
import config from '../config'

export const serviceNowApiClientBuilder = (): ServiceNowApiClient => {
  const restClient = new RestClient('serviceNowApi', config.apis.serviceNow)
  const serviceNowClient = new ServiceNowApiClient(restClient)

  return serviceNowClient
}

class ServiceNowApiClient {
  constructor(private readonly restclient: RestClient) {}

  createIncident(category: string, subcategory: string, description: string): Promise<boolean> {
    return this.restclient.post({
      path: '/api/moju2/cloud_ops/create_incident',
      data: {
        caller_id: config.apis.serviceNow.callerId,
        u_moj_estate: config.apis.serviceNow.departmentId,
        contact_type: config.apis.serviceNow.contactType,
        category,
        subcategory,
        service_offering: config.apis.serviceNow.serviceOffering,
        cmdb_ci: config.apis.serviceNow.configItem,
        impact: '2',
        assignment_group: config.apis.serviceNow.assignmentGroup,
        short_description: description,
      },
    })
  }
}

export default ServiceNowApiClient
