import { expect, test } from "@playwright/test";
import { HomePage } from "../homePage";

const sampleFile = "tests/Sample_Files/sample.txt"; // Import file to upload In Test

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
  await page
    .getByPlaceholder("Email", { exact: true })
    .fill("suhaimkhalid@gmail.com");
  await page.getByPlaceholder(/subject/i).fill("Testing Contact Us Form");
  await page
    .getByRole("textbox", { name: "Message" })
    .fill("This is a msg to run tests on Contact Us Form");

  //4. Upload a file as an attachment.
  await page.locator('input[name = "upload_file"]').setInputFiles(sampleFile);

  //   5. Submit the form.
  await page.locator('input[type="submit"][value="Submit"]').click();
  // 6. Handle the native browser confirmation dialog that appears on submit.
  // 7. Verify the success message "Success! Your details have been submitted
  // successfully."
  // 8. Click "Home" and verify the user lands back on the home page.
});
