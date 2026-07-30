import { expect, test } from "@playwright/test";
import { HomePage } from "../homePage";

// Navigate to the home page and go to Contact Us
test("Navigate to Contact Us", async ({ page }) => {
  const homePage = new HomePage(page);

  //   Load HomePage
  await homePage.goto();
  //   Accept Cookies
  await homePage.cookiesAccepted();
  //  Open Contact Us Page
  await homePage.OpenContactUs();

  //   1. Navigate to the home page and go to Contact Us.
  //   Check Heading of the page
  await expect(page.getByRole("heading", { name: "Contact Us" })).toBeVisible();

  //   2. Verify "GET IN TOUCH" is visible.
  await expect(
    page.getByRole("heading", { name: "GET IN TOUCH" }),
  ).toBeVisible();

  //   3. Fill in name, email, subject, and message
  await page.getByPlaceholder(/name/i).fill("Suhaim");
  await page.getByPlaceholder(/email/i).fill("suhaimkhalid@gmail.com");
});
