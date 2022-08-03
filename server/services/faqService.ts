import FaqClient from '../data/faqClient'
import { FAQ } from '../@types/incidentTypes'

type FaqClientBuilder = () => FaqClient

export default class FaqService {
  constructor(private readonly faqClientBuilder: FaqClientBuilder) {}

  async getFaqs(clientId: string): Promise<{ clientName: string; faqs: FAQ[] }> {
    const faqClient = this.faqClientBuilder()
    const clientInformation = await faqClient.getFaqs(clientId)

    return clientInformation
  }
}
