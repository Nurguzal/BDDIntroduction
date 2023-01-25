Feature: Register new account
 Scenario: register multiple users
  Given user is on the register page
  When user fill out the registration form
    |Gender|FName|LName |Day|Month |Year|Email             |Password|
    |male  |James|Harden|19|june   |1990|j.harden@gmail.com|pass123|
    And click on Register button on the page
    Then a new account should be created


    Scenario Outline: create multiple users account
      Given user is on the register page
      When user enters "<Gender>","<FName>","<LName>","<Day>","<Month>","<Year>","<Email>","<Password>"
      And click on Register button on the page
      Then a new account should be created

      Examples:
        |Gender|FName|LName |Day|Month|Year|Email             |Password|
        |male  |James|Harden|19 |june |1990|j.harden@gmail.com|pass123 |

