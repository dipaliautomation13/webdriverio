const { Given, When, Then } = require('@wdio/cucumber-framework');


const HomePage = require('../pageobjects/home.page');

When(/^I search sky in the search bar$/, async () => {
    await HomePage.search();
});

Then(/^I should see editorial section$/, async () => {
    await expect((HomePage.sectionSearchEditorial).isDisplayed()).toBe(true);
});