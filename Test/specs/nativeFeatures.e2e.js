describe('App activity n package', () => {
    it('Try it with App activity n package', async () => {

        //launch the specific activity and package
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.DeviceAdminSample");

        //Access the element
       const title = await $("//android.widget.TextView[@text='App/Device Admin']");
       await expect(title).toExist(); 
    });
 it('Access with Dialouge box', async () => {

        //launch the specific activity and package
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

        //access the element
        const showDialogBtn = await $("~OK Cancel dialog with a message");
        await showDialogBtn.click();

        const okButton = await $("//android.widget.Button[@resource-id='android:id/button1']");
        await okButton.click();

        const title = await $("//android.widget.TextView[@text='App/Alert Dialogs']");
        await expect(title).toExist();





        
    });

});