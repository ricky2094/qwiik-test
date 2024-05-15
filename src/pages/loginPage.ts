import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class LoginPage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        userInput: "user-name",
        passwordInput: "password",
        loginBtn: "login-button",
        errorMessage: "alert"
    }

    async navigateToLoginPage() {
        await this.base.goto("/login");
        await expect(this.page).toHaveTitle("Swag Labs");
    }
    async enterUserName(user: string) {
        await this.page.getByTestId(this.Elements.userInput).fill(user);
    }
    async enterPassword(Password: string) {
        await this.page.getByLabel(this.Elements.passwordInput).fill(Password);
    }

    async clickLoginButton() {
        await this.base.waitAndClick(this.Elements.loginBtn);
    }

    getErrorMessage() {
        return this.page.getByRole("alert");
    }

    async loginUser(user: string, password: string) {
        await this.enterUserName(user);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }


}