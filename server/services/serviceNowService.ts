import ServiceNowClient from '../data/serviceNowClient'

type ServiceNowClientBuilder = () => ServiceNowClient

export default class ServiceNowService {
  constructor(private readonly serviceNowClientBuilder: ServiceNowClientBuilder) {}

  async createIncident(category: string, subcategory: string, description: string): Promise<string> {
    const serviceNowClient = this.serviceNowClientBuilder()
    const response = await serviceNowClient.createIncident(category, subcategory, description)
    const incidentNumber: string = response.result.incident_number

    return incidentNumber
  }
}
