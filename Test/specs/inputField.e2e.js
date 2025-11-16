describe('Select elements', () => {
    it('Try it with accessibility id', async () => {

        const OptionOne = await $('~Views');
        await OptionOne.click();

        const OptionTwo = await $('~Auto Complete');
        await OptionTwo.click();

         const OptionThree = await $('~1. Screen Top');
        await OptionThree.click();

        const textBox = await $('android.widget.AutoCompleteTextView');
        await textBox.setValue('Bangladesh');
        const country = "Bangladesh";
        await expect(textBox).toHaveText(country);

        
    });
});