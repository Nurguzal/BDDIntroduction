$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/Features/UserLogin.feature");
formatter.feature({
  "name": "user login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "login to the application as admin",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
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
});