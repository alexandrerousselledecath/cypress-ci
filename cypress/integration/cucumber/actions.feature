@actions
Feature: Actions

  Scenario: .type() - type into a DOM element
    Given a user visits actions page
    When the user types into DOM elements

  Scenario: .focus() - focus on a DOM element
    Given a user visits actions page
    When the user focus on a DOM element

  Scenario: .blur() - blur off a DOM element
    Given a user visits actions page
    When the user blur off a DOM element

  Scenario: .clear() - clears an input or textarea element
    Given a user visits actions page
    When the user clears an input or textarea element  
    
  Scenario: .submit() - submit a form
    Given a user visits actions page
    When the user submit a form
  
  Scenario: .click() - click on a DOM element
    Given a user visits actions page
    When the user click on a DOM element
    
  Scenario: .dblclick() - double click on a DOM element
    Given a user visits actions page
    When the user double click on a DOM element
    
  Scenario: .rightclick() - right click on a DOM element
    Given a user visits actions page
    When the user right click on a DOM element
    
  Scenario: .check() - check a checkbox or radio element
    Given a user visits actions page
    When the user check a checkbox or radio element
    
  Scenario: .uncheck() - uncheck a checkbox element
    Given a user visits actions page
    When the user uncheck a checkbox element
    
  Scenario: .select() - select an option in a <select> element
    Given a user visits actions page
    When the user select an option in a <select> element
    
  Scenario: .scrollIntoView() - scroll an element into view
    Given a user visits actions page
    When the user scroll an element into view
    
  Scenario: .trigger() - trigger an event on a DOM element
    Given a user visits actions page
    When the user trigger an event on a DOM element
    
  Scenario: cy.scrollTo() - scroll the window or element to a position
    Given a user visits actions page
    When the user scroll the window or element to a position
