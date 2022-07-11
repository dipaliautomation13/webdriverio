const Page = require('./page');

class SignInPage extends Page {

    get inputUsername() {
        return $('label[for="username"]');
    }

    get btnContinue() {
        return $('[data-testid="AUTHN__SUBMIT_BTN"]');
    }

    get txtCreatePasswordTitle() {
        return $('[data-testid="CREATE_PASSWORD__TITLE"]');
    }

    get frameSignIn() {
        return $('iframe[title="iFrame containing Sky Sign-In application"]');
    }

    async enterUsername(username) {

        //var myFrame = this.frameSignIn.value;
        console.log('inside method-======')
        browser.switchToFrame($('iframe[title="iFrame containing Sky Sign-In application"]'));
        console.log('after frame-======')
        await this.inputUsername.click();
        console.log('after click-======')
        await this.inputUsername.setValue(username);
    }

    async clickContinue() {
        await this.btnContinue.click();
    }
}

module.exports = new SignInPage();