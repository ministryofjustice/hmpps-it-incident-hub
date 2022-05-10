import type { RequestHandler, Router } from 'express'

import asyncMiddleware from '../middleware/asyncMiddleware'
import FaqService from '../services/faqService'

export default function routes(router: Router, faqService: FaqService): Router {
  const get = (path: string, handler: RequestHandler) => router.get(path, asyncMiddleware(handler))

  get('/', async (req, res, next) => {
    const faqs = await faqService.getFaqs()
    const faqsForDisplay = faqs.map(faq => {
      return {
        heading: {
          text: faq.heading,
        },
        content: {
          html: faq.body,
        },
      }
    })
    res.render('pages/index', { faqsForDisplay })
  })

  return router
}
