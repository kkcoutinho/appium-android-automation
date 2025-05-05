class MenuScreen {
    constructor () {
        this.leftMenuButton = '//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView';
        this.loginButton = "//*[@text='Log In']";
    }

    async accessLoginScreen(){
        await $(this.leftMenuButton).click();
        await $(this.loginButton).click();
    }
}

export default new MenuScreen()