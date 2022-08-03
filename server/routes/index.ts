import type { RequestHandler, Router } from 'express'
import { decode } from 'html-entities'

import asyncMiddleware from '../middleware/asyncMiddleware'
import FaqService from '../services/faqService'
import { IncidentSessionData } from '../@types/incidentTypes'

export default function routes(router: Router, faqService: FaqService): Router {
  const validClients = ['VSIP']
  const get = (path: string | string[], handler: RequestHandler) => router.get(path, asyncMiddleware(handler))

  get(['/', '/:clientId'], async (req, res, next) => {
    const clientId = req.params.clientId ?? ''

    if (!validClients.includes(clientId.toUpperCase())) {
      return res.render('pages/indexNewClient')
    }

    const clientInformation = await faqService.getFaqs(clientId)
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

    req.session.incidentSessionData = incidentSessionData

    return res.render('pages/index', { faqsForDisplay, clientName: clientInformation.clientName })
  })

  return router
}
