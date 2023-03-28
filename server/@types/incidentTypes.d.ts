export type FAQ = {
  id: number
  heading: string
  body: string
}

export type Service = {
  value: string
  text: string
  selected: boolean
}

export type IncidentSessionData = {
  services?: Service[]
  incidentType?: string
  incidentCategory?: string
  incidentShortDescription?: string
  incidentContactType?: string
  incidentTelephone?: string
  incidentAvailability?: string
  incidentDescription?: string
  clientId?: string
  incidentService: string
}

export type FormError = {
  value: string
  msg: string
  param: string
  location: string
}

export type ServiceNowIncidentSuccess = {
  message: string
  incident_number: string
}

export type ServiceNowIncidentFailure = {
  caller_id?: string
  u_moj_estate?: string
  contact_type?: string
  category?: string
  subcategory?: string
  service_offering?: string
  cmdb_ci?: string
  impact?: string
  assignment_group?: string
  short_description?: string
  description?: string
  u_logged_on_behalf?: string
  u_external_reference?: string
}

export type ServiceNowResponse = {
  result: ServiceNowIncidentSuccess | ServiceNowIncidentFailure
}
