describe('example', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  const URL = 'http://www.banshujiang.cn/e_books/'

  it('example1', () => {
    for (let i = 1312; i <= 2065; i++) {
      cy.visit(URL + i)
      cy.get('.link-name.PDF')
        .contains('百度网盘')
        .click()
      cy.get('#remain_time+a').click()

      cy.get('iframe').then($iframe => {
        if ($iframe.contents().find('.input-area input').length) {
          cy.get('iframe').then($iframe => {
            const PWD = Cypress.$('#imbedWebStorage')
              .text()
              .substr(-4)
            const iframe = $iframe.contents()
            cy.wrap(iframe.find('.input-area input')).type(PWD)
            cy.wrap(iframe.find('.g-button-blue-large')).click()
          })
          cy.wait(2000).then(() => {
            cy.get('iframe').then($iframe => {
              const iframe = $iframe.contents()
              cy.wrap(iframe.find('.icon[title="保存到网盘"]')).click()
            })
          })
          cy.wait(2000).then(() => {
            cy.get('iframe').then($iframe => {
              const iframe = $iframe.contents()
              cy.wrap(iframe.find('[node-path="/3-  学习书籍"]')).click()
            })
          })
          cy.wait(2000).then(() => {
            cy.get('iframe').then($iframe => {
              const iframe = $iframe.contents()
              cy.wrap(iframe.find('[node-path="/3-  学习书籍/搬书匠"]')).click()
              cy.wrap(iframe.find('[title="确定"]')).click()
            })
          })
        }
      })
    }
  })
})
