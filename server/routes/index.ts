import type { RequestHandler, Router } from 'express'
import { decode } from 'html-entities'

import asyncMiddleware from '../middleware/asyncMiddleware'
import FaqService from '../services/faqService'
import { IncidentSessionData } from '../@types/incidentTypes'

export default function routes(router: Router, faqService: FaqService): Router {
  const get = (path: string | string[], handler: RequestHandler) => router.get(path, asyncMiddleware(handler))

  get(['/', '/:clientId'], async (req, res, next) => {
    const clientId = req.params.clientId?.toLowerCase().replace(/[^A-Za-z]/g, '') ?? ''
    const clientInformation = await faqService.getFaqs(clientId)

    if (clientInformation.clientName === 'Unknown') {
      return res.render('pages/indexNewClient')
    }

    const hasFaqs = clientInformation.faqs.length > 0

    if (!hasFaqs) {
      return res.render('pages/indexNoFaqs', { clientName: clientInformation.clientName })
    }

    const faqsForDisplay = clientInformation.faqs.map(faq => {
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
    incidentSessionData.services = clientInformation.services

    req.session.incidentSessionData = incidentSessionData

    return res.render('pages/index', { faqsForDisplay, clientName: clientInformation.clientName })
  })

  return router
}
