Feature:Checkout Feature
  As a user
  I want to be able to checkout the products

  Background:
    Given the login page is open
    
  Scenario: Successful Checkout
    And I enter valid username "<username>" and password "<password>"
    And I click the login button
    And I should be redirected to the dashboard
    When I add product to cart
    And I enter checkout information
    And I continue transaction until successful
    Then I will navigate to checkout success page

 Examples:
    | username         | password  |
    | standard_user    | secret_sauce |