import type { Express } from 'express'
import request from 'supertest'
import appWithAllRoutes from './testutils/appSetup'

let app: Express

beforeEach(() => {
  app = appWithAllRoutes({})
})

afterEach(() => {
  jest.resetAllMocks()
})

describe('without a client id', () => {
  describe('GET /', () => {
    it('should render index page', () => {
      return request(app)
        .get('/')
        .expect('Content-Type', /html/)
        .expect(res => {
          expect(res.text).toContain('IT Incident Support Hub')
        })
    })
  })
})

describe('with a client id', () => {
  describe('GET /manageprisonvisits', () => {
    it('should render manage prison visits index page', () => {
      return request(app)
        .get('/manageprisonvisits')
        .expect('Content-Type', /html/)
        .expect(res => {
          expect(res.text).toContain('Help with')
        })
    })
  })
})
