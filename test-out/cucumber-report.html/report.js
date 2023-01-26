$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/Features/UserLogin.feature");
formatter.feature({
  "name": "user login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "login to the application as admin",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.UserLogin.i_am_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i use following admin credential",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.UserLogin.i_use_following_admin_credential(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.UserLogin.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.UserLogin.i_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/main/resources/Features/calculator.feature");
formatter.feature({
  "name": "Calculator",
  "description": "  As a user\n  I want to use a calculator to add a number\n  so that i don\u0027t need to add myself",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add two number \u003cnum1\u003e and \u003cnum2\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "name": "I have \u003cnum1\u003e and \u003cnum2\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "The result should be \u003ctotal\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "total"
      ]
    },
    {
      "cells": [
        "2",
        "5",
        "7"
      ]
    },
    {
      "cells": [
        "10",
        "-5",
        "5"
      ]
    },
    {
      "cells": [
        "99",
        "1",
        "100"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add two number 2 and 5",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.CalculatorSteps.i_have_a_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have 2 and 5",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.CalculatorSteps.i_have_and(java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The result should be 7",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.CalculatorSteps.the_result_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add two number 10 and -5",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.CalculatorSteps.i_have_a_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have 10 and -5",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.CalculatorSteps.i_have_and(java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The result should be 5",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.CalculatorSteps.the_result_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add two number 99 and 1",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.CalculatorSteps.i_have_a_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have 99 and 1",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.CalculatorSteps.i_have_and(java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The result should be 100",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.CalculatorSteps.the_result_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/main/resources/Features/registeruser.feature");
formatter.feature({
  "name": "Register new account",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "register multiple users",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.RegisterAccount.user_is_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill out the registration form",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.RegisterAccount.user_fill_out_the_registration_form(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Register button on the page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.RegisterAccount.click_on_Register_button_on_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a new account should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.RegisterAccount.a_new_account_should_be_created()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "create multiple users account",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the register page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \"\u003cGender\u003e\",\"\u003cFName\u003e\",\"\u003cLName\u003e\",\"\u003cDay\u003e\",\"\u003cMonth\u003e\",\"\u003cYear\u003e\",\"\u003cEmail\u003e\",\"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on Register button on the page",
  "keyword": "And "
});
formatter.step({
  "name": "a new account should be created",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Gender",
        "FName",
        "LName",
        "Day",
        "Month",
        "Year",
        "Email",
        "Password"
      ]
    },
    {
      "cells": [
        "male",
        "James",
        "Harden",
        "19",
        "june",
        "1990",
        "j.harden@gmail.com",
        "pass123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "create multiple users account",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.RegisterAccount.user_is_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"male\",\"James\",\"Harden\",\"19\",\"june\",\"1990\",\"j.harden@gmail.com\",\"pass123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.RegisterAccount.user_enters(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Register button on the page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.RegisterAccount.click_on_Register_button_on_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a new account should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.RegisterAccount.a_new_account_should_be_created()"
});
formatter.result({
  "status": "passed"
});
});