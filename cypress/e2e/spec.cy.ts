describe('Main Page Loading and Character Verification', () => {
  it('should load the main page and verify characters', () => {
    cy.visit('http://localhost:4200/?page=1');

    cy.get('body > app-root > app-characters-list > div > mat-list > mat-list-item:nth-child(1)')
      .should('contain', 'Luke Skywalker');

    cy.get('body > app-root > app-characters-list > div > mat-list > mat-list-item:nth-child(2)')
      .should('contain', 'C-3PO');
  });
});

describe('Details and Planet details Tests', () => {
  it('should navigate to the first character\'s detail page, verify details and then navigate to planet details', () => {
    cy.visit('http://localhost:4200/?page=1');

    cy.get('body > app-root > app-characters-list > div > mat-list > mat-list-item:nth-child(1)').click();

    cy.url().should('include', '/character-details/1');

    cy.get('body > app-root > app-characters-detail > mat-card > mat-card-content > div > mat-list > mat-list-item:nth-child(1)').should('contain', 'ID: 5f63a36eee9fd7000499be42');
    cy.get('body > app-root > app-characters-detail > mat-card > mat-card-content > div > mat-list > mat-list-item:nth-child(2)').should('contain', 'Name: Luke Skywalker');
    cy.get('body > app-root > app-characters-detail > mat-card > mat-card-content > div > mat-list > mat-list-item:nth-child(3)').should('contain', 'Height: 172');
    cy.get('body > app-root > app-characters-detail > mat-card > mat-card-content > div > mat-list > mat-list-item:nth-child(4)').should('contain', 'Mass: 77');


    cy.get('body > app-root > app-characters-detail > mat-card > mat-card-content > div > mat-list > mat-list-item:nth-child(12) > span > span > a').click();

    cy.url().should('include', '/planet-detail/1');

    cy.get('body > app-root > app-planet-detail > div > mat-card > mat-card-content')
      .should('contain', 'Climate:')
      .and('contain', 'Diameter:')
      .and('contain', 'Gravity:');
  });
});




