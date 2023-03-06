import { ServiceNowResponse } from '../@types/incidentTypes'
import ServiceNowClient from '../data/serviceNowClient'

type ServiceNowClientBuilder = () => ServiceNowClient

export default class ServiceNowService {
  constructor(private readonly serviceNowClientBuilder: ServiceNowClientBuilder) {}

  async createIncident(
    category: string,
    subcategory: string,
    email: string,
    shortDescription: string,
    description: string
  ): Promise<ServiceNowResponse> {
    const serviceNowClient = this.serviceNowClientBuilder()
    const response: ServiceNowResponse = await serviceNowClient.createIncident(
      category,
      subcategory,
      email,
      shortDescription,
      description
    )

    return response
  }
}
