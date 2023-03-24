export default {
  vsip: {
    clientName: 'Visit Someone in Prison',
    faqs: [
      {
        id: 1,
        heading: 'What is the visit someone in prison (VSiP) service?',
        body: 'VSiP is a new service that is used to book, amend and cancel social face to face visits. It has been designed from the ground up to make the booking process as quick and seamless as possible. The service automatically takes into account things like prisoner non-associations, visitor restrictions and any locally specific booking schedules such as wing based booking or alternate week timetables. VSiP is accessed via the Digital Prison Service (DPS). VSiP will ultimately replace the visitor booking service in NOMIS.',
      },
      {
        id: 2,
        heading: 'Which establishments use the service?',
        body: 'The new service is being slowly rolled out across the prison estate. The initial focus is on establishments that manage their bookings through the Family Services contact centre, or establishments with significant operational challenges managing social visits.',
      },
      {
        id: 3,
        heading: 'What are the known technical issues with the service?',
        body: 'There can be occasional slow page loads on the service. These are often related to the HMPPS Auth service that is used to verify your identity in the service. We are working with the HMPPS Auth team to improve how the two services work together. You do not need to report these issues.',
      },
      {
        id: 4,
        heading: 'Why are some sessions not available?',
        body: '<p>The dates and times of available sessions shown in the service are dependent on a few things:</p><ul class="govuk-list govuk-list--bullet govuk-list--spaced"><li>There may be a non-association with another prisoner who is already booked into the session.</li><li>The prisoner might not have the required incentive level for that particular session.</li><li>The visitor might have a closed restriction which means they can only have closed visits and there are no closed slots available on that session.</li><li>The session has a local restriction (for example its only for a prisoners in a particular wing) and the prisoner does not meet the criteria.</li></ul><p>The service takes all these factors into account when presenting available sessions for a specific prisoner and their visitor(s).</p>',
      },
      {
        id: 5,
        heading: 'How can I get access to the service?',
        body: 'In order to access the service your establishment needs to have been onboarded. The VSiP team will work with you to understand your specific needs before we onboard your establishment. If you are interested in using the service to manage your establishments social face to face visits, you can complete this short <a href="https://forms.office.com/e/K1ThmV7GmT" class="govuk-link govuk-link--no-visited-state">form</a> and the team will get in touch with you.',
      },
      {
        id: 6,
        heading: 'How do I provide feedback on the service?',
        body: 'If you have feedback, you can contact the team via the prisonvisitsbooking@digital.justice.gov.uk email address.',
      },
    ],
    services: [
      {
        value: 'manageprisonvisits',
        text: 'Manage Prison Visits',
        selected: false,
      },
      {
        value: 'onlinevisitrequests',
        text: 'Online Visit Requests',
        selected: false,
      },
    ],
  },
  pathfinder: {
    clientName: 'Pathfinder',
    faqs: [
      {
        id: 1,
        heading: 'What is the pathfinder service?',
        body: 'The new Pathfinder IT service is a centralised case management service for nominals at risk of extremist behaviour, accessible by both prison and probation colleagues. It aims to bring together information from Delius, Nomis/CNomis and more into one IT system in order to access Pathfinder data in one place.',
      },
      {
        id: 2,
        heading: 'How do I access the pathfinder service?',
        body: 'Users wanting access to the service will need to be approved by a named approver prior to being granted access to this service. This is managed via [mailbox]. ',
      },
    ],
  },
  mpc: {
    clientName: 'Manage Prison Offender Managers’ cases',
    faqs: [
      {
        id: 1,
        heading: 'What is the manage prison offender managers cases service?',
        body: 'The manage prison offender managers’ cases service for POM and HOMDs which allows POMs to view their caseloads and manage their workload, whilst HOMDs can allocate cases to POMs and manage their staff.',
      },
      {
        id: 2,
        heading: 'How do I add staff members to start making allocations?',
        body: 'Guidance for adding staff can be found at https://moic.service.justice.gov.uk/help_step0',
      },
      {
        id: 3,
        heading: 'I have questions about case responsibility?',
        body: 'Guidance for case responsibility can be found at https://moic.service.justice.gov.uk/help/case_responsibility',
      },
    ],
  },
  restrictedpatients: {
    clientName: 'Restricted Patients',
    faqs: [
      {
        id: 1,
        heading: 'What is the restricted patients service?',
        body: 'This service is for managing offenders who are currently held in a secure hospital, but still under the responsibility of the prison. It allows users to transfer an offender to a hospital, remove them once they have been transferred back or released from hospital & also search for an offender to see if they are currently located within a hospital.',
      },
      {
        id: 2,
        heading: 'Offender is not showing in the restricted patients service?',
        body: 'Check how the offender was booked out & into the restricted patients service - was it using the new service or was the offender booked out via classic NOMIS. If the latter, then the prison need to book the offender back in, & then out again using the RP Service tool. ',
      },
      {
        id: 3,
        heading: 'Offenders have appeared on POM allocation service, yet are in a secure hospital?',
        body: 'If the offender is still serving a prison sentence, then this is correct. The prison has a responsibility to manage a serving offender when they are in a secure hospital. They should therefore be allocated to a POM & managed accordingly.',
      },
    ],
  },
}
