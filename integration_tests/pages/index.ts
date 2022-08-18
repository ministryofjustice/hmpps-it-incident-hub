import Page, { PageElement } from './page'

export default class IndexPage extends Page {
  constructor() {
    super('IT Incident Hub')
  }

  headerUserName = (): PageElement => cy.get('[data-qa=header-user-name]')
}
