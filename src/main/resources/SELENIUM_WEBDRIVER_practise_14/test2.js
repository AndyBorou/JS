require('chromedriver');

const assert = require('assert');

// suite name
const {Builder, Key, By, until} = require('selenium-webdriver');
// test name
describe('Checkout Google.com', function() {
    let  driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Search on Google', async function() {
        await driver.get('http://the-internet.herokuapp.com/hovers');
        await driver.sleep(2000); // just for demonstration

        let el;
        await driver.findElement(By.xpath(".//img[@src][@alt='User Avatar']")).then(res=> el = res);

        console.log("! " + el);

        const actions = driver.actions({async: true});

        await actions.move({x: 150, y: 150}).perform();

        await driver.sleep(2000);

        let info;
        await driver.findElement(By.xpath(".//div[@class='figcaption']/h5")).then((res)=> info=res);

        await driver.wait(until.elementIsVisible(info), 5000);

        let result = await info.isDisplayed().then(res=> res);

        assert.equal(result, true);

        result = await info.getText().then(res=> res)

        assert.equal(result, "name: user1");

    });

    after(() => driver && driver.quit());
});
