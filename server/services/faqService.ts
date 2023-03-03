import FaqClient from '../data/faqClient'
import { FAQ, Service } from '../@types/incidentTypes'

type FaqClientBuilder = () => FaqClient

export default class FaqService {
  constructor(private readonly faqClientBuilder: FaqClientBuilder) {}

  async getFaqs(clientId: string): Promise<{ clientName: string; services: Service[]; faqs: FAQ[] }> {
    const faqClient = this.faqClientBuilder()
    const clientInformation = await faqClient.getFaqs(clientId)

    return clientInformation
  }
}
