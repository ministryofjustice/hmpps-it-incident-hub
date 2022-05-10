import { readFile } from 'fs/promises'
import { FAQ } from '../@types/faqTypes'

export const faqClientBuilder = (): FaqClient => {
  const faqClient = new FaqClient()

  return faqClient
}

class FaqClient {
  async getFaqs(): Promise<FAQ[]> {
    const faqs = JSON.parse(await readFile('./faq.data.json', { encoding: 'utf-8' }))

    return faqs.faqs
  }
}

export default FaqClient
