export type FAQ = {
  id: number
  heading: string
  body: string
}

export type IncidentSessionData = {
  incidentType?: string
  incidentCategory?: string
  incidentDescription?: string
  incidentContactType?: string
  incidentContactDetails?: string
  incidentAvailability?: string
  incidentSupportingInformation?: string
}

export type FormError = {
  value: string
  msg: string
  param: string
  location: string
}
