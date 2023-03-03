import type { Router } from 'express'
import { body, validationResult } from 'express-validator'
import ServiceNowService from '../services/serviceNowService'
import { Service } from '../@types/incidentTypes'
import { getFlashFormValues } from './utils'

export default function routes(router: Router, serviceNowService: ServiceNowService): Router {
  router.get('/type', async (req, res) => {
    const { incidentSessionData } = req.session
    const formValues = getFlashFormValues(req)

    if (!Object.keys(formValues).length && incidentSessionData.incidentType) {
      formValues.incidentType = incidentSessionData.incidentType
    }

    res.render('pages/incidentType', {
      errors: req.flash('errors'),
      formValues,
    })
  })

  router.post(
    '/type',
    body('incidentType')
      .trim()
      .isIn(['software', 'data', 'access', 'security'])
      .withMessage('Please select a valid incident type'),
    (req, res) => {
      const { incidentSessionData } = req.session
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        req.flash('errors', errors.array() as [])
        req.flash('formValues', req.body)
        return res.redirect(req.originalUrl)
      }

      incidentSessionData.incidentType = req.body.incidentType
      req.session.incidentSessionData = incidentSessionData

      return res.redirect('/incident/category')
    }
  )

  router.get('/category', async (req, res) => {
    const { incidentSessionData } = req.session
    const formValues = getFlashFormValues(req)

    if (!Object.keys(formValues).length && incidentSessionData.incidentCategory) {
      formValues.incidentCategory = incidentSessionData.incidentCategory
    }

    res.render('pages/incidentCategory', {
      errors: req.flash('errors'),
      formValues,
    })
  })

  router.post(
    '/category',
    body('incidentCategory')
      .trim()
      .isIn(['access denied', 'locked', 'user error', 'data breach'])
      .withMessage('Please select a valid incident category'),
    (req, res) => {
      const { incidentSessionData } = req.session
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        req.flash('errors', errors.array() as [])
        req.flash('formValues', req.body)
        return res.redirect(req.originalUrl)
      }

      incidentSessionData.incidentCategory = req.body.incidentCategory
      req.session.incidentSessionData = incidentSessionData

      return res.redirect('/incident/description')
    }
  )

  router.get('/description', async (req, res) => {
    const { incidentSessionData } = req.session
    const formValues = getFlashFormValues(req)

    if (!Object.keys(formValues).length && incidentSessionData.incidentShortDescription) {
      formValues.incidentShortDescription = incidentSessionData.incidentShortDescription
    }

    res.render('pages/incidentShortDescription', {
      errors: req.flash('errors'),
      formValues,
    })
  })

  router.post(
    '/description',
    body('incidentShortDescription').trim().not().isEmpty().withMessage('Please enter a short incident description'),
    (req, res) => {
      const { incidentSessionData } = req.session
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        req.flash('errors', errors.array() as [])
        req.flash('formValues', req.body)
        return res.redirect(req.originalUrl)
      }

      incidentSessionData.incidentShortDescription = req.body.incidentShortDescription
      req.session.incidentSessionData = incidentSessionData

      return res.redirect('/incident/contact')
    }
  )

  router.get('/contact', async (req, res) => {
    const { incidentSessionData } = req.session
    const formValues = getFlashFormValues(req)

    if (!Object.keys(formValues).length) {
      if (incidentSessionData.incidentContactType) {
        formValues.incidentContactType = incidentSessionData.incidentContactType
      }
      if (incidentSessionData.incidentTelephone) {
        formValues.incidentTelephone = incidentSessionData.incidentTelephone
      }
      if (incidentSessionData.incidentEmail) {
        formValues.incidentEmail = incidentSessionData.incidentEmail
      }
      if (incidentSessionData.incidentAvailability) {
        formValues.incidentAvailability = incidentSessionData.incidentAvailability
      }
      if (incidentSessionData.incidentDescription) {
        formValues.incidentDescription = incidentSessionData.incidentDescription
      }
      if (incidentSessionData.incidentService) {
        formValues.incidentService = incidentSessionData.incidentService
      }
    }

    const formServices = incidentSessionData.services.map((service: Service) => {
      return {
        value: service.value,
        text: service.text,
        selected: service.value === incidentSessionData.incidentService,
      }
    })

    res.render('pages/incidentContact', {
      errors: req.flash('errors'),
      formValues,
      services: formServices,
    })
  })

  router.post(
    '/contact',
    body('incidentContactType').trim().isIn(['email', 'phone']).withMessage('Please select a valid contact type'),
    body('incidentEmail').trim().isEmail().withMessage('Please enter a valid email address'),
    body('incidentAvailability').trim().not().isEmpty().withMessage('Please enter your availability'),
    body('incidentDescription').trim().not().isEmpty().withMessage('Please enter supporting information'),
    body('incidentService').trim().not().isEmpty().withMessage('Please select a service area'),
    (req, res) => {
      const { incidentSessionData } = req.session
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        req.flash('errors', errors.array() as [])
        req.flash('formValues', req.body)
        return res.redirect(req.originalUrl)
      }

      incidentSessionData.incidentContactType = req.body.incidentContactType
      incidentSessionData.incidentTelephone = req.body.incidentTelephone
      incidentSessionData.incidentEmail = req.body.incidentEmail
      incidentSessionData.incidentAvailability = req.body.incidentAvailability
      incidentSessionData.incidentDescription = req.body.incidentDescription
      incidentSessionData.incidentService = req.body.incidentService
      req.session.incidentSessionData = incidentSessionData

      return res.redirect('/incident/summary')
    }
  )

  router.get('/summary', async (req, res) => {
    const { incidentSessionData } = req.session

    res.render('pages/summary', {
      errors: req.flash('errors'),
      incidentType: incidentSessionData.incidentType,
      incidentCategory: incidentSessionData.incidentCategory,
      incidentShortDescription: incidentSessionData.incidentShortDescription,
      incidentContactType: incidentSessionData.incidentContactType,
      incidentTelephone: incidentSessionData.incidentTelephone,
      incidentEmail: incidentSessionData.incidentEmail,
      incidentAvailability: incidentSessionData.incidentAvailability,
      incidentDescription: incidentSessionData.incidentDescription,
      incidentService: incidentSessionData.incidentService,
    })
  })

  router.post('/summary', async (req, res) => {
    const { incidentSessionData } = req.session
    const description = `
      Email: ${incidentSessionData.incidentEmail}\n
      Telephone: ${incidentSessionData.incidentTelephone}\n
      Availability: ${incidentSessionData.incidentAvailability}\n
      Supporting Information: ${incidentSessionData.incidentDescription}\n
      Subject: ${incidentSessionData.incidentService}
    `

    try {
      const incident = await serviceNowService.createIncident(
        incidentSessionData.incidentType,
        incidentSessionData.incidentCategory,
        incidentSessionData.incidentEmail,
        incidentSessionData.incidentShortDescription,
        description
      )

      incidentSessionData.incidentReference = incident
    } catch (error) {
      return res.render('pages/summary', {
        errors: [
          {
            msg: 'Failed to raise an incident',
            param: 'id',
          },
        ],
        incidentType: incidentSessionData.incidentType,
        incidentCategory: incidentSessionData.incidentCategory,
        incidentShortDescription: incidentSessionData.incidentShortDescription,
        incidentContactType: incidentSessionData.incidentContactType,
        incidentTelephone: incidentSessionData.incidentTelephone,
        incidentEmail: incidentSessionData.incidentEmail,
        incidentAvailability: incidentSessionData.incidentAvailability,
        incidentDescription: incidentSessionData.incidentDescription,
        incidentService: incidentSessionData.incidentService,
      })
    }

    return res.redirect('/incident/confirmation')
  })

  router.get('/confirmation', async (req, res) => {
    const { incidentSessionData } = req.session

    res.render('pages/confirmation', { incidentNumber: incidentSessionData.incidentReference })
  })

  return router
}
