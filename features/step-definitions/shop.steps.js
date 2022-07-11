const { Given, When, Then } = require('@wdio/cucumber-framework');


const HomePage = require('../pageobjects/home.page');
const ShopPage = require('../pageobjects/shop.page');
const SignInPage = require('../pageobjects/signIn.page');
const Common = require('../utils/common');

const pages = {
    home: HomePage
}

const actualPrice = ['£26', '£46', '£38'];
const offersOnPage = '6';

When(/^I navigate to Deals$/, async () => {
    await HomePage.clickDealsLink();
});

Then(/^I should be on the Deals page$/, async () => {
    await expect(ShopPage.txtHeading).toHaveTextContaining("Sky Deals");
    await Common.verifyCurrentUrl("https://www.sky.com/deals");
});

When(/^I try to sign in with invalid credentials$/, async () => {
    await HomePage.clickSignInLnk();
    await browser.pause(3000);
    //await browser.switchToFrame('#b23ccc6694_mjm6ndc6mje');
    await SignInPage.enterUsername("invalid@gmail.com");
    await SignInPage.clickContinue();
});

Then(/^I should see a box with the text Create your My Sky password$/, async () => {
    await expect(SignInPage.txtCreatePasswordTitle).toHaveText("Create your My Sky password");
});

Then(/^I see a list of deals with a price to it$/, async () => {
    await browser.pause(3000);
    await ShopPage.clickSkyQ();
    await expect(ShopPage.getNumberOfDealItem()).toBe(offersOnPage);
    await (ShopPage.getListOfPrices()).array.forEach(element => {
        let count = 0;
        expect(element).toBe(actualPrice[count]);
        count++;
    });
});