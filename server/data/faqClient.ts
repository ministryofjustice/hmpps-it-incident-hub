import { FAQ } from '../@types/faqTypes'
import faqData from './faqData'

export const faqClientBuilder = (): FaqClient => {
  const faqClient = new FaqClient()

  return faqClient
}

class FaqClient {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  getFaqs(): FAQ[] {
    return faqData.faqs
  }
}

export default FaqClient
