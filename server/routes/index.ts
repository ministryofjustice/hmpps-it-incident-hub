import type { RequestHandler, Router } from 'express'
import { decode } from 'html-entities'

import asyncMiddleware from '../middleware/asyncMiddleware'
import FaqService from '../services/faqService'
import { IncidentSessionData } from '../@types/faqTypes'

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
          html: decode(faq.body),
        },
      }
    })

    const incidentSessionData: IncidentSessionData = req.session.incidentSessionData || {}

    req.session.incidentSessionData = incidentSessionData

    res.render('pages/index', { faqsForDisplay })
  })

  return router
}
