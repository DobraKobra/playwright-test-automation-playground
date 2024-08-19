import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Login", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.loginPage.visit();
  });

  test("successful login", async ({ page }) => {
    //pises kod sem :)
    await pages.loginPage.userName.fill("czechitas");
    await pages.loginPage.password.fill("budoucnost")
    await pages.loginPage.loginButton.click();
    //await pages.loginPage.checkIsLoggedIn();
    await expect(pages.loginPage.loggedInAltText).toBeVisible();
  });
});
