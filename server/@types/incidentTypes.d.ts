export type FAQ = {
  id: number
  heading: string
  body: string
}

export type IncidentSessionData = {
  incidentType?: string
  incidentCategory?: string
  incidentShortDescription?: string
  incidentContactType?: string
  incidentTelephone?: string
  incidentAvailability?: string
  incidentDescription?: string
}

export type FormError = {
  value: string
  msg: string
  param: string
  location: string
}

export type ServiceNowIncident = {
  message: string
  incident_number: string
}

export type ServiceNowResponse = {
  result: ServiceNowIncident
}
