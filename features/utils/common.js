
class Common {

    async verifyCurrentUrl(url) {
        expect(await browser.getUrl()).toBe(url);
    }

}

module.exports = new Common();