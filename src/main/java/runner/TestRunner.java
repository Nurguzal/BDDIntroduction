package runner;

import io.cucumber.junit.*;

import org.junit.runner.*;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "C:\\Users\\ELYAS TURSUN\\IdeaProjects\\BDDIntroduction\\src\\main\\resources\\Features",
        glue = {"stepdefination"},
        monochrome = true,
        plugin = {
                "pretty",
                "junit:junit_xml/cucumber.xml",
                "html:test-out/cucumber-report.html"
        },
        dryRun = false
       // tags = "@smoke"
)

public class TestRunner {
}
