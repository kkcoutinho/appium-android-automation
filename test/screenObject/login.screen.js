class LoginScreen {
    constructor () {
        this.userNameInput = "~Username input field";
        this.passwordInput = "~Password input field";
        this.loginButton = "~Login button";
        this.errorMessage = '//android.widget.TextView[@text="Provided credentials do not match any user in this service."]';
        }

    async fillLoginForm(){
        await $(this.userNameInput).setValue("invalidUser");
        await $(this.passwordInput).setValue("invalidPassword");
        await $(this.loginButton).click();
    }
}

    export default new LoginScreen()