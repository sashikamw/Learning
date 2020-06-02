const{Builder, By, Key, util} = require("selenium-webdriver");

async function login(){
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://consumer-dev.homexlabs.com/login");
    await driver.findElement(By.id("identifier")).sendKeys("development+test@homex.com");
    await driver.findElement(By.id("secret")).sendKeys("HOMEX@123");
    await driver.findElement(By.xpath("//button[@type='submit']")).click();
   // await driver.findElement(By.xpath("//*[contains(text(), 'Log in')])")).click();
    await driver.quit();
}

login();
