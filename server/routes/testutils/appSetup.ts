import express, { Router, Express } from 'express'
import { Cookie, SessionData } from 'express-session'
import cookieSession from 'cookie-session'
import createError from 'http-errors'

import allRoutes from '../index'
import nunjucksSetup from '../../utils/nunjucksSetup'
import errorHandler from '../../errorHandler'
import standardRouter from '../standardRouter'
import UserService from '../../services/userService'
import FaqService from '../../services/faqService'
import { faqClientBuilder } from '../../data/faqClient'
import { IncidentSessionData } from '../../@types/incidentTypes'
import * as auth from '../../authentication/auth'

const user = {
  name: 'john smith',
  firstName: 'john',
  lastName: 'smith',
  username: 'user1',
  displayName: 'John Smith',
}

export const flashProvider = jest.fn()

class MockUserService extends UserService {
  constructor() {
    super(undefined)
  }

  async getUser(token: string) {
    return {
      token,
      ...user,
    }
  }
}

function appSetup(
  route: Router,
  production = false,
  sessionData = {
    cookie: new Cookie(),
    returnTo: '',
    nowInMinutes: 0,
    incidentSessionData: {} as IncidentSessionData,
  }
): Express {
  const app = express()

  app.set('view engine', 'njk')

  nunjucksSetup(app)

  app.use((req, res, next) => {
    res.locals = {}
    res.locals.user = user
    req.flash = flashProvider
    req.session = {
      ...sessionData,
      regenerate: jest.fn(),
      destroy: jest.fn(),
      reload: jest.fn(),
      id: 'sessionId',
      resetMaxAge: jest.fn(),
      save: jest.fn(),
      touch: jest.fn(),
    }
    next()
  })

  app.use(cookieSession({ keys: [''] }))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/', route)

  app.use((req, res, next) => next(createError(404, 'Not found')))
  app.use(errorHandler(production))

  return app
}

export default function appWithAllRoutes({
  production = false,
  sessionData,
}: {
  production?: boolean
  sessionData?: SessionData
}): Express {
  auth.default.authenticationMiddleware = () => (req, res, next) => next()
  return appSetup(
    allRoutes(standardRouter(new MockUserService()), new FaqService(faqClientBuilder)),
    production,
    sessionData
  )
}
