var betPuppy = {}

module.exports = {
    beforeEach: browser => {
        betPuppy = browser.page.puppyPages()
        betPuppy.navigate()
            .waitForElementPresent('@logo', 5000)
    },
    after: browser => {
        browser.end()

    },
    'User Login': browser => {
        betPuppy
            .verify.visible('@logo', 'BetPuppy.com')
            .pause(1000)
            .click('@signInSignUp')
            // .pause(1000)
            // .verify.visible('@googleSignInButton', 'Sign in with Google')
            .pause(1000)
            .click('@googleSignInButton')
            .pause(3000)

        var originalWindow = "betpuppy.com"
        browser.windowHandle(result => {
            originalWindow = result.value
        })
        browser.windowHandles(function (result) {
            console.log(originalWindow)
            console.log(result.value)
            var handle = result.value[1]
            browser.switchWindow(handle)
            betPuppy
                .waitForElementVisible('@enterField', 10000)
                // .pause(1000)
                .setValue('@enterField', 'betpuppytester@gmail.com')
                .click('@nextButton')
                .pause(1000)
                .setValue('@enterField', 'B@tPuppyTester1')
                .click('@nextButton')

                .switchWindow(originalWindow)
        })

        betPuppy
            .verify.visible('@iBet', 'I bet')






    }
}