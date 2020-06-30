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
