import { Given, When } from 'cypress-cucumber-preprocessor/steps';

// Given
Given('a user visits aliasing page', () => { cy.visit('https://example.cypress.io/commands/aliasing') });

When('the user alias a DOM element for later use', () => { 
	cy.get('.as-table').find('tbody>tr')
		.first().find('td').first()
		.find('button').as('firstBtn');
	cy.get('@firstBtn').click();
	cy.get('@firstBtn')
		.should('have.class', 'btn-success')
		.and('contain', 'Changed');
});

When('the user alias a route for later use', () => { 
	cy.get('.action-focus').focus()
		.should('have.class', 'focus')
		.prev().should('have.attr', 'style', 'color: orange;');
});