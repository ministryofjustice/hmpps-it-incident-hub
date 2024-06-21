import { ClientInformation } from '../@types/incidentTypes'
import faqData from './faqData'

export const faqClientBuilder = (): FaqClient => {
  const faqClient = new FaqClient()

  return faqClient
}

class FaqClient {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  getFaqs(clientId: string): ClientInformation {
    const existingClientInformation = faqData[clientId] as unknown as ClientInformation
    const clientInformation =
      existingClientInformation ||
      ({
        clientName: 'Unknown',
        services: [],
        faqs: [],
      } as ClientInformation)

    return {
      clientName: clientInformation.clientName,
      services: clientInformation.services,
      faqs: clientInformation.faqs,
    }
  }
}

export default FaqClient
