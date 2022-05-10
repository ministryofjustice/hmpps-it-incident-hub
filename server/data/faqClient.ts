import path from 'path'
import { readFile } from 'fs/promises'
import { FAQ } from '../@types/faqTypes'

export const faqClientBuilder = (): FaqClient => {
  const faqClient = new FaqClient()

  return faqClient
}

class FaqClient {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  async getFaqs(): Promise<FAQ[]> {
    const faqs = JSON.parse(await readFile(path.resolve(__dirname, './faq.data.json'), { encoding: 'utf-8' }))

    return faqs.faqs
  }
}

export default FaqClient
