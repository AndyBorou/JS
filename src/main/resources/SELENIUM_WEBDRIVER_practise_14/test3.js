const {Builder, By, Key} = require('selenium-webdriver');
const assert = require('assert');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://formy-project.herokuapp.com/form');

        await driver.findElement(By.id("first-name")).sendKeys("Peter");

        await driver.findElement(By.id("last-name")).sendKeys("Peterson");

        await driver.findElement(By.id("job-title")).sendKeys("tester");

        await driver.findElement(By.id("radio-button-1")).click();

        await driver.findElement(By.id("checkbox-1")).click();

        await driver.findElement(By.id("select-menu")).click();

        await driver.findElement(By.xpath(".//option[contains(text(), '2-4')]")).click();

        await driver.findElement(By.id("datepicker")).sendKeys("12/12/2020");

        await driver.findElement(By.xpath(".//a[contains(text(), 'Submit')]")).click();

        await driver.findElement(By.xpath(".//a[contains(text(), 'Submit')]")).click();

        // await driver.wait(until.elementLocated(By.css('.alert-success')), 5000);
        await driver.manage().setTimeouts( { implicit: 10000 } );


        let resalt;
        await driver.findElement(By.className("alert")).getText().then((res)=>{console.log(res); resalt = res});

        assert.equal(resalt, "The form was successfully submitted!");

    } finally {
          await driver.quit();
    }
})();