this.switchPopup = function (browser) {
    browser.window_handles(function(result) {
        // var handle = result.value[1]
        var original = result.value[0];
        var temp = result.value[1];
        this.switchWindow(temp)
        .assert.urlContains('accounts.google.com')
        // .browser.switchWindow(handle)
        .browser
        .waitForElementVisible('@headerText', 3000)
        .pause(2000)
        .setValue('@emailField', 'betpuppytester@gmail.com')
        .click('@emailNextButton')
        .pause(3000)
    })
}