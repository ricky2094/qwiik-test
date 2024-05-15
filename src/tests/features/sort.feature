Feature: Sort Product Feature
  As a user
  I want to be able to sort products on the commerce site
  So that I can easily find what I'm looking for

  Background:
    Given the login page is open

  Scenario: Sort Products by Price - Low to High
    And I enter valid username "<username>" and password "<password>"
    And I click the login button
    When I select to sort products by "Price - Low to High"
    Then The products should be displayed in ascending order of price

 Examples:
    | username | password  |
    | standard_user    | secret_sauce |