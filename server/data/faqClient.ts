import { FAQ, Service } from '../@types/incidentTypes'
import faqData from './faqData'

export const faqClientBuilder = (): FaqClient => {
  const faqClient = new FaqClient()

  return faqClient
}

class FaqClient {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  getFaqs(clientId: string): { clientName: string; services: Service[]; faqs: FAQ[] } {
    const clientInformation = faqData[clientId] ?? {
      clientName: 'Unknown',
      services: [],
      faqs: [],
    }

    return {
      clientName: clientInformation.clientName,
      services: clientInformation.services,
      faqs: clientInformation.faqs,
    }
  }
}

export default FaqClient
