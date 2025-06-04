describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('abcdefghijklmnopqrsvwxyz', 10)

    //Acões 
    cy.get('#firstName').type('Renato')
    cy.get('#lastName').type('Carvalho Esteves')
    cy.get('#email').type('recarvalhoe@gmail.com')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.get('button[type="submit"]').click()

    //Resultados
    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('Renato')
    cy.get('#lastName').type('Carvalho Esteves')
    cy.get('#email').type('recarvalhoe@gmail,com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

  it('campo telefone continua vazio quando preenchido com um valor não númerico', () => {
    cy.get('#phone')
      .type('abcde')
      .should('have.value', '')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('Renato')
    cy.get('#lastName').type('Carvalho Esteves')
    cy.get('#email').type('recarvalhoe@gmail,com')
    cy.get('#open-text-area').type('Teste')
    cy.get('#phone-checkbox').click()
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
      .type('Renato')
      .should('have.value', 'Renato')
      .clear()
      .should('have.value', '')
    cy.get('#lastName')
      .type('Carvalho Esteves')
      .should('have.value', 'Carvalho Esteves')
      .clear()
      .should('have.value', '')
    cy.get('#email')
      .type('recarvalhoe@gmail.com')
      .should('have.value', 'recarvalhoe@gmail.com')
      .clear()
      .should('have.value', '')
    cy.get('#phone')
      .type('123456789')
      .should('have.value', '123456789')
      .clear()
      .should('have.value', '')
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    //Ação
    cy.get('button[type="submit"]').click()

    //Resultado esperado...
    cy.get('.error').should('be.visible')
  })

  it.only('envia o formuário com sucesso usando um comando customizado', () => {

    // const data = {
    //   firstName: 'Renato',
    //   lastName: 'Carvalho Esteves',
    //   email: 'recarvalhoe@gmail.com',
    //   text: 'Teste.'
    // }
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible')
  })
})