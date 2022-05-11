export type FAQ = {
  id: number
  heading: string
  body: string
}

export type IncidentSessionData = {
  incidentType: string
}

export type FormError = {
  value: string
  msg: string
  param: string
  location: string
}
