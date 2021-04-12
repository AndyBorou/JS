const {Builder, By, Key} = require('selenium-webdriver');
const assert = require('assert');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://the-internet.herokuapp.com/tables');

        await driver.findElement(By.xpath(".//*[@id='table2']//*[contains(text(), 'Due')]")).click();

        let numbers;
        await driver.findElements(By.xpath(".//*[@id='table2']//td[@class='dues']")).then((res)=> numbers=res);

        for(let i = 0; i<numbers.length-1; i++){
            let price1;
            let price2;
            await numbers[i].getText().then((res)=> price1 = res);
            price1 = Number(price1.slice(1));

            await numbers[i+1].getText().then((res)=> price2 = res);
            price2 = Number(price2.slice(1));

            assert.equal( (price1<price2 || price1 == price2), true);
        }

    } finally {
        await driver.quit();
    }
})();