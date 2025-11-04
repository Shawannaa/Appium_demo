describe('Select elements', () => {
    it('Try it with accessibility id', async () => {

        const appButton = await $('~App');
        await appButton.waitForDisplayed({ timeout: 15000 });
        await appButton.click();

        const actionBar = await $('~Action Bar');
        await actionBar.waitForDisplayed({ timeout: 10000 });
        expect(await actionBar.isDisplayed()).toBeTruthy();
    });
});
