import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  //   Loading Home Page
  async goto() {
    await this.page.goto("https://automationexercise.com/");
  }

  //   Acceptig Cookies
  async cookiesAccepted() {
    const acceptCookies = this.page.getByRole("button", { name: /Consent/i });
    if (await acceptCookies.isVisible()) {
      await acceptCookies.click();
    }
  }

  //   Opening Contact Us Page

  async OpenContactUs() {
    await this.page.getByRole("link", { name: "Contact Us" }).click();
  }
}
