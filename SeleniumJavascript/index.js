const{Builder, By, Key, util} = require("selenium-webdriver");
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

async function login(){
    //let driver = await new Builder().forBrowser("chrome").build();
    var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    await driver.get("https://consumer-dev.homexlabs.com/login");
    await driver.findElement(By.id("identifier")).sendKeys("development+test@homex.com");
    await driver.findElement(By.id("secret")).sendKeys("HOMEX@123");
    await driver.findElement(By.xpath("//button[@type='submit']")).click();
   // await driver.findElement(By.xpath("//*[contains(text(), 'Log in')])")).click();
    await driver.quit();
}

login();
