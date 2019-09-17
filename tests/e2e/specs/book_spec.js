describe('example', () => {
  const URL = 'https://github.com/guanpengchn/awesome-books'

  it('book', () => {
    cy.visit(URL)
    cy.get('tr [align="center"]:last-child a:first-child').each(load => load.click())
  })
})
