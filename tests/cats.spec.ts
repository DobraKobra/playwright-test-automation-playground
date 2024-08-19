import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Cats", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.catsPage.visit();
  });

  test("add a cat card", async ({ page }) => {
    //pises kod sem :)
    await pages.catsPage.addCatButton.click();
    await expect(pages.catsPage.catCards).toBeVisible();
  });

  test("add multiple cat cards", async ({ page }) => {
    //pises kod sem :)
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.expectToAddMoreCats();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.expectToAddMoreCats();
    //await expect(pages.catsPage.catCards).toBeVisible();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.expectToAddMoreCats();
   // await expect(pages.catsPage.catCards).toBeVisible();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.expectToAddMoreCats();
   // await expect(pages.catsPage.catCards).toBeVisible();
  });

  test("remove a cat card", async ({ page }) => { 
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.expectToAddMoreCats();

    await pages.catsPage.removeCaButton.click();
    await pages.catsPage.expectToRemoveCats();
  });

  test("remove all cat cards", async ({ page }) => { 
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.expectToAddMoreCats();

    await pages.catsPage.addCatButton.click();
    await pages.catsPage.expectToAddMoreCats();

    await pages.catsPage.addCatButton.click();
    await pages.catsPage.expectToAddMoreCats();

    await pages.catsPage.addCatButton.click();
    await pages.catsPage.expectToAddMoreCats();

    await pages.catsPage.apocalypseButton.click();
    await pages.catsPage.expectToRemoveAllCats();
  });

  test("add one, remove one and remove all cat cards", async ({ page }) => { 
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.getCountOfCatCards();

    await pages.catsPage.addCatButton.click();
    await pages.catsPage.getCountOfCatCards();

    await pages.catsPage.addCatButton.click();
    await pages.catsPage.getCountOfCatCards();

    await expect(pages.catsPage.catCounter).toHaveText("3");


    await pages.catsPage.removeCaButton.click();
    await pages.catsPage.getCountOfCatCards();

    await expect(pages.catsPage.catCounter).toHaveText("2");

    await pages.catsPage.apocalypseButton.click();
    await pages.catsPage.getCountOfCatCards();

    await expect(pages.catsPage.catCounter).toHaveText("0");
});

test("counter counts radding 20 cat cards", async ({ page }) => {
  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await expect(pages.catsPage.catCounter).toHaveText("20");

});


test("counter counts adding cat cards", async ({ page }) => {
  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await expect(pages.catsPage.catCounter).toHaveText("3");
});
test("counter counts removing cat cards", async ({ page }) => {
  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.removeCaButton.click();
  await pages.catsPage.getCountOfCatCards();

  await expect(pages.catsPage.catCounter).toHaveText("2");
});

test("counter counts removing all cat cards", async ({ page }) => {
  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await pages.catsPage.apocalypseButton.click();
  await pages.catsPage.getCountOfCatCards();

  await expect(pages.catsPage.catCounter).toHaveText("0");
});

test.only("remove and apocalypse button active only when at least one cat card is visible", async ({ page }) => {
  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();

  await expect(pages.catsPage.removeCaButton).toHaveClass("btn btn-danger removing");
  await expect(pages.catsPage.apocalypseButton).toHaveClass("btn btn-danger removing");

});

test.only("remove and apocalypse button inactive only when cat cards are zero", async ({ page }) => {
  await pages.catsPage.addCatButton.click();
  await pages.catsPage.getCountOfCatCards();
  await pages.catsPage.removeCaButton.click();

  await expect(pages.catsPage.removeCaButton).toHaveClass("btn btn-danger removing disabled");
  await expect(pages.catsPage.apocalypseButton).toHaveClass("btn btn-danger removing disabled");
});
});
