export default {
  vsip: {
    clientName: 'Visit Someone in Prison',
    faqs: [
      {
        id: 1,
        heading: 'What is the visit someone in prison service',
        body: 'The visit someone in prison service provides the ability for prisoners friends and relatives to book visiting times.',
      },
      {
        id: 2,
        heading: 'Is there a user guide for the visit someone in prison service?',
        body: 'For guidance on how to use the service, you can view the user guide [here].',
      },
      {
        id: 3,
        heading: 'What are technical issues with the service?',
        body: 'Technical issues are unintended problems with the service, such as slow loading pages and error messages presented by the service. You can report them via the ’raise an incident’ button below',
      },
      {
        id: 4,
        heading: 'How do I provide feedback on the visit someone in prison service?',
        body: 'You can send us feedback to help us to improve the service [here].',
      },
    ],
    services: [
      {
        value: 'manageprisonvisits',
        text: 'Manage Prison Visits',
      },
      {
        value: 'onlinevisitrequests',
        text: 'Online Visit Requests',
      },
    ],
  },
  manageincentives: {
    clientName: 'Manage Incentives',
    faqs: [
      {
        id: 1,
        heading: 'What is the manage incentives service?',
        body: 'Incentives is a data visualisation to support senior management at a local, regional and national level to use data in their decision-making so they can better deliver against the incentives framework .',
      },
      {
        id: 2,
        heading: 'How do I access incentives?',
        body: 'The service can be accessed via the ’Manage Incentives’ tile within the HMPPS Digital Services page. An active NOMIS account with caseload is required to access the service.',
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
        heading: 'I have quesitons about case responsibility?',
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
        body: 'Check how the offender was booked out & into the restrcited patients service - was it using the new service or was the offender booked out via classic NOMIS. If the latter, then the prison need to book the offender back in, & then out again using the RP Service tool. ',
      },
      {
        id: 3,
        heading: 'Offenders have appeared on POM allocation service, yet are in a secure hospital?',
        body: 'If the offender is still serving a prison sentence, then this is correct. The prison has a responsibility to manage a serving offender when they are in a secure hospital. They should therefore be allocated to a POM & managed accordingly.',
      },
    ],
  },
}
