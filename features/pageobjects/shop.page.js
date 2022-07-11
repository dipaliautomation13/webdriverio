const Page = require('./page');

class ShopPage extends Page {

    get btnDeals() {
        return $('[data-tracking-label="masthead_visit_primary_deals_link"]');
    }

    get txtHeading() {
        return $('#deals-primary-heading');
    }

    get btnSkyQ() {
        return $('//span[test()="Sky Q"]');
    }

    get listOfDeals() {
        return $$("//section[@id='deals']//div[contains(@data-content-id,'offer')]'");
    }

    get listOfDealPrices() {
        return $$("//section[@id='deals']//div[contains(@data-content-id,'offer')]//span[contains(@id,'price')]")
    }

    async clickSkyQ() {
        await this.btnSkyQ.click();
    }

    async getNumberOfDealItem() {
        return this.listOfDeals.size();
    }

    async getListOfPrices() {
        const priceList = [];
        this.listOfDealPrices.map((element) => priceList.push(element.getText()));
        return priceList;
    }

    open() {
        super.open('deals');
    }

}

module.exports = new ShopPage();