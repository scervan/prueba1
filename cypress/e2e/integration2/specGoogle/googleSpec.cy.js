import GooglePage from '../pagesGoogle/googlePage.cy';

describe('Búsqueda en Google',()  =>  {
  const google = new GooglePage()

  // Visitamos la página de Google
  it('Visitar la pagina de Google', () => {
    google.visit()

  // Escribimos "Automatizacion" en el buscador y presionamos Enter
    google.typeSearch('Automatizacion')

    // Damos clic en el enlace de Wikipedia
    google.clickOnLink('Wikipedia')
    
    // Valididamos fecha
    cy.origin('https://es.wikipedia.org', () => {
    cy.contains('1785, convirtiéndose en el primer proceso industrial completamente automatizado.')
    .scrollIntoView().should('be.visible').screenshot()
  })

})

})