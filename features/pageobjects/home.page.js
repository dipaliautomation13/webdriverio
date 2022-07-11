const Page = require('./page');

class HomePage extends Page {

    get lnkDeals() {
        return $('[data-tracking-label="masthead_visit_primary_deals_link"]');
    }

    get lnkSignIn() {
        return $('[data-tracking-label="masthead_signin"]');
    }

    get iframeConsentMsg() {
        return $('iframe[title="SP Consent Message"]');
    }

    get btnCookieAccept() {
        return $('button[title="Agree"]');
    }

    get btnSearch() {
        return $('#masthead-search-toggle');
    }

    get inputSearch() {
        return $('input[type="search"]');
    }

    get sectionSearchEditorial() {
        return $('#search-results-container');
    }

    async clickDealsLink() {
        await this.lnkDeals.click();
    }

    async clickSignInLnk() {
        await this.lnkSignIn.click();
    }

    async search(searchKey) {
        await this.btnSearch.click();
        await this.inputSearch.click();
        await this.inputSearch.setValue(searchKey);
    }

    async acceptCookie() {
        await browser.pause(3000);
        await browser.switchToFrame($('iframe[title="SP Consent Message"]'));
        await browser.pause(3000);
        //await this.btnCookieAccept.click();

    }

    open() {
        super.open('');
        //this.btnCookieAccept.click();
    }
}

module.exports = new HomePage();