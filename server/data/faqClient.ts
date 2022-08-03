import { FAQ } from '../@types/incidentTypes'
import faqData from './faqData'

export const faqClientBuilder = (): FaqClient => {
  const faqClient = new FaqClient()

  return faqClient
}

class FaqClient {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  getFaqs(clientId: string): { clientName: string; faqs: FAQ[] } {
    const clientInformation = faqData[clientId]

    return {
      clientName: clientInformation.clientName,
      faqs: clientInformation.faqs,
    }
  }
}

export default FaqClient
