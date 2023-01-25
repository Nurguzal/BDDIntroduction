package stepdefination;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.*;

import java.util.List;
import java.util.Map;

public class RegisterAccount {

    @Given("user is on the register page")
    public void user_is_on_the_register_page() {
        System.out.println("Application launched and and navigated to register page");
    }



    @When("user fill out the registration form")
    public void user_fill_out_the_registration_form(DataTable dataTable) {
        List<Map<String,String>> userData  = dataTable.asMaps();
        for (Map<String,String> e : userData){
            System.out.println(e.get("Gender"));
            System.out.println(e.get("FName"));
            System.out.println(e.get("LName"));
            System.out.println(e.get("Day"));
            System.out.println(e.get("Month"));
            System.out.println(e.get("Year"));
            System.out.println(e.get("Email"));
            System.out.println(e.get("Password"));


        }

    }



    @When("click on Register button on the page")
    public void click_on_Register_button_on_the_page() {
    System.out.println("####### able to click on register button");
    }



    @Then("a new account should be created")
    public void a_new_account_should_be_created() {
    System.out.println("####### account created successfully");
    }

    @When("user enters {string},{string},{string},{string},{string},{string},{string},{string}")
    public void user_enters(String gender, String fname, String lanme, String day, String month, String year, String email, String pass) {
        System.out.println(gender);
        System.out.println(fname);
        System.out.println(lanme);
        System.out.println(day);
        System.out.println(month);
        System.out.println(year);
        System.out.println(email);
        System.out.println(pass);

    }


}
