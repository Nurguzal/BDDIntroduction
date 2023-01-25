package stepdefination;

import com.google.common.collect.Lists;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.*;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

;import java.awt.*;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class UserLogin {
    public WebDriver driver;
    @Given("I am on the login page")
    public void i_am_on_the_login_page() {
        //System.out.println(" i am on login page now");
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }

    @When("I enter my credential")
    public void i_enter_my_credential() {
        // System.out.println("i have entered UID and password ");
        driver.findElement(By.name("username")).sendKeys("Admin");
        driver.findElement(By.name("password")).sendKeys("admin123");
    }



    @When("I login using {string} and {string}")
    public void i_login_using_and(String UID, String password) {
        driver.findElement(By.name("username")).sendKeys("Admin");
        driver.findElement(By.name("password")).sendKeys("admin123");
    }


    @When("i use admin credential")
    public void i_use_admin_credential(io.cucumber.datatable.DataTable dataTable) {
        List<String> list = dataTable.asList();
        String userName = list.get(0);
        String password = list.get(1);
        driver.findElement(By.name("username")).sendKeys(userName);
        driver.findElement(By.name("password")).sendKeys(password);

    }
    @When("i use following admin credential")
    public void i_use_following_admin_credential(io.cucumber.datatable.DataTable dataTable) {
        List<List<String>> list = dataTable.asLists();
        driver.findElement(By.name("username")).sendKeys(list.get(1).get(0));
        driver.findElement(By.name("password")).sendKeys(list.get(1).get(1));
    }



    @When("click on login button")
    public void click_on_login_button() throws InterruptedException {
       // System.out.println("i have clicked on the login button ");
        driver.findElement(By.xpath("//button[text()=' Login ']")).click();
        Thread.sleep(3000);
    }

    @Then("I should be able to login")
    public void i_should_be_able_to_login() {
        //System.out.println("I am successfully login to the Application");
        Assert.assertTrue(driver.findElement(By.xpath("//span[text()='Dashboard']")).isDisplayed());
        driver.quit();
    }


}
