import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Cats", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.catsPage.visit();
  });

  test.only("add a cat card", async ({ page }) => {
    //pises kod sem :)
    await pages.catsPage.addCatButton.click();
    await expect(pages.catsPage.catCards).toBeVisible();
  });

  test.only("add multiple cat cards", async ({ page }) => {
    //pises kod sem :)
    await pages.catsPage.addCatButton.click();
    await expect(pages.catsPage.catCards).toHaveCount(1);
  //  await pages.catsPage.expectToAddMoreCats();
    await pages.catsPage.addCatButton.click();
    await expect(pages.catsPage.catCards).toHaveCount(2);
  //  await pages.catsPage.expectToAddMoreCats();
    //await expect(pages.catsPage.catCards).toBeVisible();
    await pages.catsPage.addCatButton.click();
    await expect(pages.catsPage.catCards).toHaveCount(3);
   // await pages.catsPage.expectToAddMoreCats();
   // await expect(pages.catsPage.catCards).toBeVisible();
    await pages.catsPage.addCatButton.click();
    await expect(pages.catsPage.catCards).toHaveCount(4);
   // await pages.catsPage.expectToAddMoreCats();
   
  });

  test.only("remove a cat card", async ({ page }) => { 
    await pages.catsPage.addCatButton.click();
    await expect(pages.catsPage.catCards).toHaveCount(1);
  //  await pages.catsPage.expectToAddMoreCats();

    await pages.catsPage.addCatButton.click();
    await expect(pages.catsPage.catCards).toHaveCount(2);
   //await pages.catsPage.expectToAddMoreCats();

    await pages.catsPage.removeCaButton.click();
   // await pages.catsPage.expectToRemoveCats();
   await expect(pages.catsPage.catCounter).toHaveCount(1);
  });

  test.only("remove all cat cards", async ({ page }) => { 
    await pages.catsPage.addCatButton.click();
    await expect(pages.catsPage.catCards).toHaveCount(1);
   // await pages.catsPage.expectToAddMoreCats();

    await pages.catsPage.addCatButton.click();
    await expect(pages.catsPage.catCards).toHaveCount(2);
    //await pages.catsPage.expectToAddMoreCats();

    await pages.catsPage.addCatButton.click();
    await expect(pages.catsPage.catCards).toHaveCount(3);
   // await pages.catsPage.expectToAddMoreCats();

    await pages.catsPage.addCatButton.click();
    await expect(pages.catsPage.catCards).toHaveCount(4);
   // await pages.catsPage.expectToAddMoreCats();

    await pages.catsPage.apocalypseButton.click();
    await expect(pages.catsPage.catCards).toHaveCount(0);
  });

  test.only("add one, remove one and remove all cat cards", async ({ page }) => { 
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.getCountOfCatCards();

    await expect(pages.catsPage.catCounter).toHaveText("1");

    await pages.catsPage.addCatButton.click();
    await pages.catsPage.getCountOfCatCards();

    await expect(pages.catsPage.catCounter).toHaveText("2");

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

test.only("counter counts adding 20 cat cards", async ({ page }) => {
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
