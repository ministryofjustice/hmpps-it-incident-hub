import nock from 'nock'
import config from '../config'
import ServiceNowApiClient, { serviceNowApiClientBuilder } from './serviceNowClient'
import type { ServiceNowResponse } from '../@types/incidentTypes'

describe('Service Now Client', () => {
  let fakeServiceNowApi: nock.Scope
  let client: ServiceNowApiClient

  beforeEach(() => {
    fakeServiceNowApi = nock(config.apis.serviceNow.url)
    client = serviceNowApiClientBuilder()
  })

  afterEach(() => {
    nock.cleanAll()
  })

  describe('createIncident', () => {
    it('should return a ServiceNow response from the Service Now API', async () => {
      const category = 'cat'
      const subcategory = 'sub'
      const email = 'email'
      const shortDescription = 'shortDesc'
      const description = 'desc'
      const data = {
        caller_id: config.apis.serviceNow.callerId,
        u_moj_estate: config.apis.serviceNow.departmentId,
        contact_type: config.apis.serviceNow.contactType,
        category,
        subcategory,
        service_offering: config.apis.serviceNow.serviceOffering,
        cmdb_ci: config.apis.serviceNow.configItem,
        impact: '2',
        assignment_group: config.apis.serviceNow.assignmentGroup,
        short_description: shortDescription,
        description,
        u_logged_on_behalf: email,
      }
      const results = {
        result: {
          message: 'success',
          incident_number: 'id1234',
        },
      } as ServiceNowResponse

      fakeServiceNowApi.post('/api/moju2/v1/service_ops/create_incident', JSON.stringify(data)).reply(200, results)

      const output = await client.createIncident(category, subcategory, email, shortDescription, description)

      expect(output).toEqual(results)
    })
  })
})
