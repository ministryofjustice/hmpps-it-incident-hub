export default {
  faqs: [
    {
      id: 1,
      heading: 'I have a prisoner missing from the service? (Missing details)',
      body: "&lt;p class=&quot;govuk-body&quot;&gt;When the case is not showing up on the service to allocate please check all relevant informaiton has been added into C-NOMIS and check the priosner is:&lt;/p&gt;&lt;ul class=&quot;govuk-list govuk-list--bullet govuk-list--spaced&quot;&gt;&lt;li&gt;Convicted - prisoners on remand do not need a POM&lt;/li&gt;&lt;li&gt;Over 18 years-old - prisoners under 18 do not need a POM&lt;/li&gt;&lt;li&gt;Not a civil case&lt;/li&gt;&lt;li&gt;Sentenced - prisoners must have an earliest release date or parole date (CRD. ARD, TED, PED) in NOMIS&lt;/li&gt;&lt;/ul&gt;&lt;p class=&quot;govuk-body&quot;&gt;If the case is a 'lifer' but it is showing as a deteminate case then the case within C-NOMIS needs to be made active.&lt;/p&gt;",
    },
    {
      id: 2,
      heading: 'I have a visitor missing from the service? (Missing details)',
      body: "&lt;p class=&quot;govuk-body&quot;&gt;The case shows that the COM is responsible but I believe this should be a POM - Please check the following in C-NOMIS:&lt;/p&gt;&lt;ul class=&quot;govuk-list govuk-list--bullet govuk-list--spaced&quot;&gt;&lt;li&gt;The 'RECALL' Badge is showing on the case record, if this is showing and the case is not a recall then C-NOMIS will have n old recall showing and this needs to be made inactive&lt;/li&gt;&lt;li&gt;If this is not a recall issue, the case may be within the parole window? If yes; check that the TED or PED has been enetred into C-NOMIS.If no, then once this has been entered the service will calculate correctly.&lt;/li&gt;&lt;li&gt;If the case is post TED/PED; then please use the overide responsibility on the service and send to the community&lt;/li&gt;&lt;/ul&gt;",
    },
    {
      id: 3,
      heading: "VO's/PVO's missing?",
      body: '&lt;p class=&quot;govuk-body&quot;&gt;Normally the user can force an update through with a zero change to the sentence if they&rsquo;ve already entered one.&lt;/p&gt;&lt;p class=&quot;govuk-body&quot;&gt;If someone at site updates the legal case in NOMIS that should force the conviction flag on.&lt;/p&gt;&lt;p class=&quot;govuk-body&quot;&gt;It&rsquo;s possible they&rsquo;ve just marked as sentenced at the point of admission and nobody has updated it since.&lt;/p&gt;&lt;p class=&quot;govuk-body&quot;&gt;To fix this issue, going into the years column on the sentence page on NOMIS, hitting space and save should force it through &amp; update the offenders convicted status.&lt;/p&gt;',
    },
    {
      id: 4,
      heading: 'Bans of longer than 3 mnths still on prisoner/visitor account?',
      body: "&lt;p class=&quot;govuk-body&quot;&gt;You will need to contact your LSA who will be able to add the users&lt;/p&gt;&lt;div class=&quot;govuk-warning-text&quot;&gt;&lt;span class=&quot;govuk-warning-text__icon&quot; aria-hidden=&quot;true&quot;&gt;!&lt;/span&gt;&lt;strong class=&quot;govuk-warning-text__text&quot;&gt;&lt;span class=&quot;govuk-warning-text__assistive&quot;&gt;Warning&lt;/span&gt;Please only add the roles the user needs as adding additional roles which are not relevant to the user's requirements can cause compatbility issues, as well as breaching the Data Protection Act 2018. The Core priciples of the Data Protection Act 2018, which we muct comply with, are, roles are applied in a way that is adequate, relevant and limited to only what is necessary.&lt;/strong&gt;&lt;/div&gt;",
    },
  ],
}
