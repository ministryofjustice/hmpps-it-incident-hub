/* eslint-disable no-param-reassign */
import path from 'path'
import nunjucks, { Environment } from 'nunjucks'
import express from 'express'
import { FormError } from '../@types/incidentTypes'

const production = process.env.NODE_ENV === 'production'

export default function nunjucksSetup(app: express.Express): void {
  app.set('view engine', 'njk')

  app.locals.asset_path = '/assets/'
  app.locals.applicationName = 'IT Incident Hub'

  // Cachebusting version string
  if (production) {
    // Version only changes on reboot
    app.locals.version = Date.now().toString()
  } else {
    // Version changes every request
    app.use((req, res, next) => {
      res.locals.version = Date.now().toString()
      return next()
    })
  }

  registerNunjucks(app)
}

export function registerNunjucks(app?: express.Express): Environment {
  const njkEnv = nunjucks.configure(
    [
      path.join(__dirname, '../../server/views'),
      'node_modules/govuk-frontend/dist/',
      'node_modules/govuk-frontend/dist/components/',
    ],
    {
      autoescape: true,
      express: app,
      trimBlocks: true,
      lstripBlocks: true,
    }
  )

  njkEnv.addFilter('initialiseName', (fullName: string) => {
    // this check is for the authError page
    if (!fullName) {
      return null
    }
    const array = fullName.split(' ')
    return `${array[0][0]}. ${array.reverse()[0]}`
  })

  // convert errors to format for GOV.UK error summary component
  njkEnv.addFilter('errorSummaryList', (errors = []) => {
    return Object.keys(errors).map(error => {
      return {
        text: errors[error].msg,
        href: `#${errors[error].param}-error`,
      }
    })
  })

  // find specific error and return errorMessage for field validation
  njkEnv.addFilter('findError', (errors, formFieldId) => {
    if (!errors || !formFieldId) return null
    const errorForMessage = errors.find((error: FormError) => error.param === formFieldId)

    if (errorForMessage === undefined) return null

    return {
      text: errorForMessage?.msg,
    }
  })

  return njkEnv
}
