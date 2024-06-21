import { FAQData } from '../@types/incidentTypes'

const faqData = {
  manageprisonvisits: {
    clientName: 'Manage Prison Visits',
    faqs: [
      {
        id: 1,
        heading: 'What is the Manage prison visits service?',
        body: 'The Manage prison visits service can be used to book, amend and cancel social face to face visits. It has been designed to make the booking process as quick and seamless as possible. The service automatically takes into account things like prisoner non-associations, visitor restrictions and any locally specific booking schedules. The service is accessed via the Digital Prison Service (DPS) and it will ultimately replace the visitor booking service in NOMIS.',
      },
      {
        id: 2,
        heading: 'What type of visits can i book?',
        body: 'The service allows staff to book social face-to-face visits. We are working on supporting other visits types in the future (including official visits, Family Days and social video calls) but until then, these visits should be booked in NOMIS.',
      },
      {
        id: 3,
        heading: 'Do I still need to do anything in NOMIS?',
        body: '<p>Once your establishment has been onboarded it is vital that you do NOT make any more social face to face visit bookings or amendments in NOMIS. Any bookings made in NOMIS after the go live date will cause issues with overbooking as they are not synced back to the new service.</p><ul class="govuk-list govuk-list--bullet govuk-list--spaced"><li>All official visits and Family Days will still need to be booked, amended and cancelled in NOMIS.</li><li>All social video calls will still need to be booked, amended and cancelled in NOMIS.</li><li>Operational reports will still need to be created in NOMIS. All visits booked, amended and cancelled in the new service are automatically synced back to NOMIS so operational reports will be accurate. We are working on making operational reports available in the new service.</li><li>Establishments will need to continue to manage prisoner contacts in NOMIS, including adding or updating visitors and managing any visitor restrictions.</li><li>Establishments will need to continue to mark visitor attendance in NOMIS after visits have taken place. We are working on making attendance tracking available in the new service.</li><li>If your establishment uses a Biometric system, you will need to continue to download the visitor list from NOMIS.</li>',
      },
      {
        id: 4,
        heading: 'How can I get access to the service?',
        body: 'In order to access the service your establishment needs to have been onboarded which is happening in phases. If you are interested in using the service to manage your establishments social face to face visits, you can complete this short <a href="https://forms.office.com/e/K1ThmV7GmT" class="govuk-link govuk-link--no-visited-state">form</a> and the team will get in touch with you.',
      },
    ],
    services: [
      {
        value: 'manageprisonvisits',
        text: 'Manage Prison Visits',
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
    services: [
      {
        value: 'pathfinder',
        text: 'Pathfinder',
        selected: false,
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
    services: [
      {
        value: 'mpc',
        text: 'MPC (Manage a POM Case)',
        selected: false,
      },
    ],
  },
  dpsproductsupport: {
    clientName: 'HMPPS Digital Prison Services',
    faqs: [
      {
        id: 1,
        heading: 'What is the IT incident hub service?',
        body: 'This service can be used to gain assistance with issues affecting HMPPS digital prison services applications. If you cannot find help via the bespoke FAQ section then you will be able to raise an incident with the support team within the digital studio.',
      },
      {
        id: 2,
        heading: 'I have feedback on a HMPPS Digital prison service, where do I raise this?',
        body: 'Feedback can be given via the following <a href="https://support.hmpps.service.justice.gov.uk/feedback-and-support" class="govuk-link govuk-link--no-visited-state">link</a>',
      },
    ],
    services: [
      {
        value: 'dpsproductsupport',
        text: 'Book a Secure Move/PECS',
        selected: false,
      },
      {
        value: 'dpsproductsupport',
        text: 'Digital Categrisation Tool',
        selected: false,
      },
      {
        value: 'dpsproductsupport',
        text: 'HDC (Home Detention Curfew)',
        selected: false,
      },
      {
        value: 'dpsproductsupport',
        text: 'Restricted Patients',
        selected: false,
      },
      {
        value: 'dpsproductsupport',
        text: 'SOC',
        selected: false,
      },
      {
        value: 'dpsproductsupport',
        text: 'Use of Force',
        selected: false,
      },
    ],
  },
  sentencecalcs: {
    clientName: 'Calculate a Sentence',
    faqs: [
      {
        id: 1,
        heading: 'What is the calculate a sentence service?',
        body: 'The calculate a sentence service will allow users to work out sentence calculations for certain sentences away from the previous offering in C-NOMIS',
      },
      {
        id: 2,
        heading: 'How can I get access to the service?',
        body: 'In order to access the service your establishment needs to have been onboarded which is happening in phases and will be available to you once the service has rolled out to your prison',
      },
    ],
    services: [
      {
        value: 'calculateasentence',
        text: 'Calculate a Sentence',
        selected: false,
      },
    ],
  },
  onlinevisitrequests: {
    clientName: 'Online Visit Requests',
    faqs: [
      {
        id: 1,
        heading: 'What is the online visit requests service',
        body: 'The online visit requests service',
      },
      {
        id: 2,
        heading: 'How can I get access to the service?',
        body: 'In order to access the service your establishment needs to have been onboarded which is happening in phases and will be available to you once the service has rolled out to your prison',
      },
    ],
    services: [
      {
        value: 'onlinevisitrequests',
        text: 'Online Visit Requests',
        selected: false,
      },
    ],
  },
} as unknown as FAQData

export default faqData
