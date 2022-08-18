export default {
  vsip: {
    clientName: 'Visit Someone in Prison',
    faqs: [
      {
        id: 1,
        heading: 'Missing prisoner (or missing details about prisoners)',
        body: 'If the prisoner is not found, they should use global search to see if they’ve been moved or should tell the person they might have the wrong prisoner number and to use the find a prisoner service. If details about the prisoner are missing, they should contact the prison.',
      },
      {
        id: 2,
        heading: 'Missing visitors (or missing details about visitors)',
        body: 'If visitor details are missing, my suggestion to the team was we shouldn’t let that visitor be added to the booking but that sparked a debate that I’ve paused until post-MVP. However, the guidance should be if the visitor is missing a name, DOB and/or address, they should contact the prison to get their details updated and the visit should not be booked (as they won’t be allowed through the gate when they arrive anyway).',
      },
      {
        id: 3,
        heading:
          'Time slots for visits being incorrect (and other data related to visits i.e. room capacity, room location etc)',
        body: 'If time slots are incorrect or other details about the visit, they should raise as a request through Service Now and we can get that changed.',
      },
      {
        id: 4,
        heading: 'VOs/PVOs missing (or showing as 0 when they shouldn’t be)',
        body: 'If the VOs or PVOs are wrong, they should check when they were last issued on the screen as well as their visits history and upcoming visits and then they can override our system to mark that they booked without a VO. This will flag in our system (post MVP anyway) and they should also contact the prison.',
      },
      {
        id: 5,
        heading: 'Bans of longer than 3 months still on a prisoner or visitor account',
        body: 'They should not book any visitor who has a ban (prisoner’s can’t be banned from visits anyway) even if they believe the ban is incorrect, they should always contact the prison.',
      },
    ],
  },
  incentives: {
    clientName: 'Incentives',
    faqs: [
      {
        id: 1,
        heading: 'What is incentives?',
        body: 'Incentives is a data visualisation to support senior management at a local, regional and national level to use data in their decision-making so they can better deliver against the incentives framework .',
      },
      {
        id: 2,
        heading: 'How do I access incentives?',
        body: 'If you have a valid NOMIS account with a caseload you will be able to access the incentives service',
      },
    ],
  },
}
