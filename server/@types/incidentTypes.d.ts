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
  incidentService: string
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
