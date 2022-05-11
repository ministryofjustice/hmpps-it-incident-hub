import { RequestHandler } from 'express'

export default function sessionCheckMiddleware({ stage }: { stage: number }): RequestHandler {
  return (req, res, next) => {
    const { incidentSessionData } = req.session

    if (!incidentSessionData) {
      return res.redirect('/search/?error=missing-session')
    }

    if (
      !incidentSessionData.prisoner ||
      !incidentSessionData.prisoner.name ||
      !incidentSessionData.prisoner.dateOfBirth ||
      !incidentSessionData.prisoner.location
    ) {
      return res.redirect('/search/?error=missing-prisoner')
    }

    if (stage > 1 && (!incidentSessionData.visitors || incidentSessionData.visitors.length === 0)) {
      return res.redirect(`/prisoner/${incidentSessionData.prisoner.offenderNo}?error=missing-visitors`)
    }

    if (
      stage > 2 &&
      (!incidentSessionData.visit ||
        !incidentSessionData.visit.id ||
        !incidentSessionData.visit.availableTables ||
        !incidentSessionData.visit.startTimestamp ||
        !incidentSessionData.visit.endTimestamp)
    ) {
      return res.redirect(`/prisoner/${incidentSessionData.prisoner.offenderNo}?error=missing-visit`)
    }

    if (
      stage > 4 &&
      (!incidentSessionData.mainContact ||
        !incidentSessionData.mainContact.phoneNumber ||
        (!incidentSessionData.mainContact.contact && !incidentSessionData.mainContact.contactName))
    ) {
      return res.redirect(`/prisoner/${incidentSessionData.prisoner.offenderNo}?error=missing-main-contact`)
    }

    return next()
  }
}
