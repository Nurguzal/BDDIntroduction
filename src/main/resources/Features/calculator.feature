Feature: Calculator
  As a user
  I want to use a calculator to add a number
  so that i don't need to add myself

  Scenario Outline: Add two number <num1> and <num2>
    Given I have a calculator
    When I have <num1> and <num2>
    Then The result should be <total>

    Examples:
    |num1|num2|total|
    |2   |5   |7    |
    |10  |-5  |5    |
    |99  |1   |100  |
