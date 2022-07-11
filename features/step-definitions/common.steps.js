const { Given, When, Then } = require('@wdio/cucumber-framework');


const HomePage = require('../pageobjects/home.page');
const ShopPage = require('../pageobjects/shop.page');
const Common = require('../utils/common');

const pages = {
    home: HomePage,
    deals: ShopPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
    await browser.pause(3000);
    await HomePage.acceptCookie();
    //await browser.manage().getCookies();
    //await sleep(60000);
    //await browser.acceptAlert();
    var cookies = await browser.getCookies()
    console.log('printing========' + cookies);
});