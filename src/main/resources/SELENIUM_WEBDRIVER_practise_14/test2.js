const {Builder, By, Key} = require('selenium-webdriver');
const assert = require('assert');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://the-internet.herokuapp.com/hovers');
        let el = await driver.findElement(By.xpath(".//img[@src][@alt='User Avatar']"));
        // await driver.actions().mouseMove(el).click().perform();
        //
        // await driver.findElement(By.xpath(".//img[@src][@alt='User Avatar']")).then( (elem) =>{
        //     // driver.actions().move(elem).click().perform();
        //         driver.actions().mouseMove(elem).click().perform()
        // }
        // )


        await driver.actions().
        mouseMove(el).
        doubleClick().
        perform();

        console.log(el);
        // await driver.actions().mouseMove(el).perform();

    } finally {
        //  await driver.quit();
    }
})();