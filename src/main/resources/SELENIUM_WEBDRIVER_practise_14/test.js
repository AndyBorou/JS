const {Builder, By, Key} = require('selenium-webdriver');
const assert = require('assert');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://the-internet.herokuapp.com/dropdown');
        await driver.findElement(By.id('dropdown')).click();
        let list;
            await driver.findElements(By.xpath("//select[@id='dropdown']/option[text()]")).then((res)=> {list= res; console.log(res)});

        let r = await list[0].isEnabled();

        assert.equal(r, false);

        r = await list[1].isEnabled();

        assert.equal(r, true);

        console.log("Test passed");
    } finally {
        await driver.quit();
    }
})();

