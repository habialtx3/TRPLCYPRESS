describe('Sauce Demo Test', () => {
    it('berhasil', () => {
    cy.visit('https://kasirdemo.belajarqa.com/')
    cy.get('#email').type('elva@gmail.com')
    cy.get('#password').type('elva')
    cy.get('.chakra-button').click()
    cy.get('[href="/products"] > .css-ewi1jp').click()
    cy.get('.css-1piskbq').click()
    cy.get('#kode').type('AB3331')
    cy.get('#nama').type('Amba')
    cy.get('#deskripsi').type('Amba Banget')
    cy.get('#harga\ beli').type(500000)
    cy.get('#harga\ jual').type(800000)
    cy.get('#stok').type('5')
    }
    )
}
)