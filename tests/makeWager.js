let manager = {}

module.exports = {
    beforeEach: browser => {
        manager = browser.page.puppyPages()
        manager.navigate()
            .pause(40000)
            // .expect.element('@logo').text.to.equal('BetPuppy.com')
    },
    after: browser => {
        browser.end()
    },

    'add wager': browser => {
        manager
            .expect.element('@iBet').text.to.equal('I bet').before(500)
        manager
            .editTest({ wager: 'Tomorrow it will be sunny', amount: '10', expire: '1', newFriend: 'betbuddy@yahoo.com' })
    }
}
