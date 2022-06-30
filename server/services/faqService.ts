import FaqClient from '../data/faqClient'
import { FAQ } from '../@types/incidentTypes'

type FaqClientBuilder = () => FaqClient

export default class FaqService {
  constructor(private readonly faqClientBuilder: FaqClientBuilder) {}

  async getFaqs(): Promise<FAQ[]> {
    const faqClient = this.faqClientBuilder()
    const faqs = await faqClient.getFaqs()
    return faqs
  }
}
