var wagerCommands = {

    editWager: function (wagerEdit) {
        if (wagerEdit.wager) {
            this
                .setValue('@wagerField', wagerEdit.wager)
        }
        if (wagerEdit.amount) {
            this
                .clearValue('@amountField')
                .setValue('@amountField', wagerEdit.amount)
        }
        if (wagerEdit.expire) {
            this
                .clearValue('@expireField')
                .setValue('@expireField', wagerEdit.expire)
        }
        if (wagerEdit.newFriend) {
            this
                .setValue('@newFriendField', wagerEdit.newFriend)
        }
        return this
    },

    editTest: function (wagerEdit) {
        this
            .expect.element('@iBet').text.to.equal('I bet').before(500)
            .wagerEdit(wagerEdit)
        this.expect.element('@wagerField').value.to.equal(wagerEdit.wager).before(2000)
        this.expect.element('@amountField').value.to.equal(wagerEdit.amount)
        this.expect.element('@expireField').value.to.equal(wagerEdit.expire)
        this.expect.element('@newFriendField').value.to.equal(wagerEdit.newFriend)
        return this
    }
}

module.exports = {
    url: 'https://www.betpuppy.com',
    commands: [wagerCommands],
    elements: {
        menu: {
            selector: '//*[@class="fas fa-bars fa-lg"]',
            locateStrategy: 'xpath'
        },
        logo: {
            selector: '//*[@class="ml-3"]',
            locateStrategy: 'xpath'
        },
        signInSignUp: {
            selector: '(//*[@class="btn btn-primary"])[1]',
            locateStrategy: 'xpath'
        },
        emailSignInText: {
            selector: '//*[text()="Sign in with email"]',
            localStorage: 'Xpath'
        },
        googleSignInText: {
            selector: '//*[text()="Sign in with Google"]',
            localStorage: 'Xpath'
        },
        enterField: {
            selector: '(//*[@class="whsOnd zHQkBf"])[1]',
            localStorage: 'Xpath'
        },
        nextButton: {
            selector: '(//*[@class="ZFr60d CeoRYc"])[1]',
            localStorage: 'Xparh'
        },
        wagerPageButton: {
            selector: '(//*[@class="btn w-100 px-1 btn-selected-tab btn-lg"])[1]',
            localStorage: 'Xpath'
        },
        handShakeIcon: {
            selector: '//*[@class="far fa-handshake fa-lg"]',
            localStorage: 'Xpath'
        },

        googleSignInButton: '[data-provider-id="google.com"]',
        emailSignInButton: '[data-provider-id="password"]',
        headerText: '[id="headingText"]',
        iBet: '#toplevelForPopover__BV_label_',
        wagerField: '#wager',
        amountField: '#__BVID__19',
        expireField: '#__BVID__21',
        newFriendField: '#newFriends'

    }
}

