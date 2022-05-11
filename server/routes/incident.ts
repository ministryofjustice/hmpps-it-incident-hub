import type { Router } from 'express'
// import { body, validationResult } from 'express-validator'
import sessionCheckMiddleware from '../middleware/sessionCheckMiddleware'
import { getFlashFormValues } from './utils'

export default function routes(router: Router): Router {
  router.get('/type', async (req, res) => {
    const formValues = getFlashFormValues(req)

    res.render('pages/incidentType', {
      errors: req.flash('errors'),
      formValues,
    })
  })

  //   router.post(
  //     '/select-visitors',
  //     sessionCheckMiddleware({ stage: 1 }),
  //     body('visitors').custom((value: string, { req }) => {
  //       const selected = [].concat(value)

  //       if (value === undefined) {
  //         throw new Error('No visitors selected')
  //       }

  //       const selectedAndBanned = req.session.visitorList.visitors.filter((visitor: VisitorListItem) => {
  //         return selected.includes(visitor.personId.toString()) && visitor.banned
  //       })
  //       if (selectedAndBanned.length) {
  //         throw new Error('Invalid selection')
  //       }

  //       if (selected.length > 3) {
  //         throw new Error('Select no more than 3 visitors with a maximum of 2 adults')
  //       }

  //       const adults = req.session.visitorList.visitors
  //         .filter((visitor: VisitorListItem) => selected.includes(visitor.personId.toString()))
  //         .reduce((count: number, visitor: VisitorListItem) => {
  //           return visitor.adult ?? true ? count + 1 : count
  //         }, 0)

  //       if (adults === 0) {
  //         throw new Error('Add an adult to the visit')
  //       }

  //       if (adults > 2) {
  //         throw new Error('Select no more than 2 adults')
  //       }

  //       return true
  //     }),
  //     (req, res) => {
  //       const { incidentSessionData } = req.session
  //       const errors = validationResult(req)

  //       if (!errors.isEmpty()) {
  //         req.flash('errors', errors.array() as [])
  //         req.flash('formValues', req.body)
  //         return res.redirect(req.originalUrl)
  //       }

  //       const selectedIds = [].concat(req.body.visitors)
  //       const selectedVisitors = req.session.visitorList.visitors.filter((visitor: VisitorListItem) =>
  //         selectedIds.includes(visitor.personId.toString())
  //       )

  //       const adults = selectedVisitors.reduce((adultVisitors: VisitorListItem[], visitor: VisitorListItem) => {
  //         if (visitor.adult ?? true) {
  //           adultVisitors.push(visitor)
  //         }

  //         return adultVisitors
  //       }, [])

  //       if (!req.session.adultVisitors) {
  //         req.session.adultVisitors = { adults: [] }
  //       }
  //       req.session.adultVisitors.adults = adults

  //       incidentSessionData.visitors = selectedVisitors

  //       return res.redirect('/book-a-visit/select-date-and-time')
  //     }
  //   )

  router.get('/confirmation', sessionCheckMiddleware({ stage: 6 }), async (req, res) => {
    res.render('pages/confirmation')
  })

  return router
}
