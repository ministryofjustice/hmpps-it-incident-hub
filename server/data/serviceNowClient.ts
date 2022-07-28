import RestClientUserPass from './restClientUserPass'
import config from '../config'
import type { ServiceNowResponse } from '../@types/incidentTypes'

export const serviceNowApiClientBuilder = (): ServiceNowApiClient => {
  const restClient = new RestClientUserPass('serviceNowApi', config.apis.serviceNow)
  const serviceNowClient = new ServiceNowApiClient(restClient)

  return serviceNowClient
}

class ServiceNowApiClient {
  constructor(private readonly restclient: RestClientUserPass) {}

  createIncident(
    category: string,
    subcategory: string,
    email: string,
    shortDescription: string,
    description: string
  ): Promise<ServiceNowResponse> {
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
        short_description: shortDescription,
        description,
        logged_on_behalf: email,
      },
    })
  }
}

export default ServiceNowApiClient