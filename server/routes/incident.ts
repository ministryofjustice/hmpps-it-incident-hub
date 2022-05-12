import type { Router } from 'express'
import { body, validationResult } from 'express-validator'
import { getFlashFormValues } from './utils'

export default function routes(router: Router): Router {
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
      .isIn(['access-denied', 'account-locked', 'access-issue', 'security-issue'])
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

      return res.redirect('/incident/description')
    }
  )

  router.get('/description', async (req, res) => {
    const { incidentSessionData } = req.session
    const formValues = getFlashFormValues(req)

    if (!Object.keys(formValues).length && incidentSessionData.incidentDescription) {
      formValues.incidentDescription = incidentSessionData.incidentDescription
    }

    res.render('pages/incidentDescription', {
      errors: req.flash('errors'),
      formValues,
    })
  })

  router.post(
    '/description',
    body('incidentDescription').trim().not().isEmpty().withMessage('Please enter a short incident description'),
    (req, res) => {
      const { incidentSessionData } = req.session
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        req.flash('errors', errors.array() as [])
        req.flash('formValues', req.body)
        return res.redirect(req.originalUrl)
      }

      incidentSessionData.incidentDescription = req.body.incidentDescription

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
      if (incidentSessionData.incidentContactDetails) {
        formValues.incidentContactDetails = incidentSessionData.incidentContactDetails
      }
      if (incidentSessionData.incidentAvailability) {
        formValues.incidentAvailability = incidentSessionData.incidentAvailability
      }
    }

    res.render('pages/incidentContact', {
      errors: req.flash('errors'),
      formValues,
    })
  })

  router.post(
    '/contact',
    body('incidentContactType').trim().isIn(['email', 'phone']).withMessage('Please select a valid contact type'),
    body('incidentContactDetails').trim().not().isEmpty().withMessage('Please enter some contact details'),
    body('incidentAvailability').trim().not().isEmpty().withMessage('Please enter your availability'),
    body('incidentSupportingInformation').trim().not().isEmpty().withMessage('Please enter supporting information'),
    (req, res) => {
      const { incidentSessionData } = req.session
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        req.flash('errors', errors.array() as [])
        req.flash('formValues', req.body)
        return res.redirect(req.originalUrl)
      }

      incidentSessionData.incidentDescription = req.body.incidentDescription
      incidentSessionData.incidentContactDetails = req.body.incidentContactDetails
      incidentSessionData.incidentAvailability = req.body.incidentAvailability
      incidentSessionData.incidentSupportingInformation = req.body.incidentSupportingInformation

      return res.redirect('/incident/summary')
    }
  )

  router.get('/summary', async (req, res) => {
    const { incidentSessionData } = req.session

    res.render('pages/summary', {
      errors: req.flash('errors'),
      incidentType: incidentSessionData.incidentType,
      incidentCategory: incidentSessionData.incidentCategory,
      incidentDescription: incidentSessionData.incidentDescription,
      incidentContactType: incidentSessionData.incidentContactType,
      incidentContactDetails: incidentSessionData.incidentContactDetails,
      incidentAvailability: incidentSessionData.incidentAvailability,
      incidentSupportingInformation: incidentSessionData.incidentSupportingInformation,
    })
  })

  return router
}
