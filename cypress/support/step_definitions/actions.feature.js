import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

// Given
Given('a user visits actions page', () => { cy.visit('https://example.cypress.io/commands/actions') });

When('the user types into DOM elements', () => { 
	cy.get('.action-email')
		.type('fake@email.com').should('have.value', 'fake@email.com')

		// .type() with special character sequences
		.type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
		.type('{del}{selectall}{backspace}')

		// .type() with key modifiers
		.type('{alt}{option}') //these are equivalent
		.type('{ctrl}{control}') //these are equivalent
		.type('{meta}{command}{cmd}') //these are equivalent
		.type('{shift}')

		// Delay each keypress by 0.1 sec
		.type('slow.typing@email.com', { delay: 100 })
		.should('have.value', 'slow.typing@email.com');
	cy.get('.action-disabled')
		// Ignore error checking prior to type
		// like whether the input is visible or disabled
		.type('disabled error checking', { force: true })
		.should('have.value', 'disabled error checking');
});

When('the user focus on a DOM element', () => { 
	cy.get('.action-focus').focus()
	.should('have.class', 'focus')
	.prev().should('have.attr', 'style', 'color: orange;');
});

When('the user blur off a DOM element', () => { 
	cy.get('.action-blur').type('About to blur').blur()
	.should('have.class', 'error')
	.prev().should('have.attr', 'style', 'color: red;');
});

When('the user clears an input or textarea element', () => { 
	cy.get('.action-clear').type('Clear this text')
	.should('have.value', 'Clear this text')
	.clear()
	.should('have.value', '')
});

When('the user submit a form', () => { 
	cy.get('.action-form')
	.find('[type="text"]').type('HALFOFF');
	cy.get('.action-form').submit()
	.next().should('contain', 'Your form has been submitted!');
});
