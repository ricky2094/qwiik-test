Feature: Login Feature
  As a user
  I want to be able to login to the system
  So that I can access my account and use the application's features

  Background:
    Given the login page is open

  Scenario: Successful Login
    Given I enter valid username "<username>" and password "<password>"
    When I click the login button
    Then I should be redirected to the dashboard

  Examples:
    | username | password  |
    | standard_user    | secret_sauce |