import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";
import { LocatorsPage } from "../pages/locators";

test.describe("Locators", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.locatorsPage.visit();
  });

  test("find data-qa element", async ({ page }) => {
    
    await pages.locatorsPage.locatorByDataQA.highlight();
    await expect(pages.locatorsPage.locatorByDataQA).toBeVisible();
  });

  test("find id zapletka", async ({ page }) => {

    await pages.locatorsPage.locatorById.highlight();
    await expect(pages.locatorsPage.locatorById).toBeVisible();
  });

  test("find class interesting-paragraph", async ({ page }) => {
    
    await pages.locatorsPage.locatorByClass.highlight();
    await pages.locatorsPage.expectToFindAllClasses();
  }); 

  test("find img element", async ({ page }) => {

    await pages.locatorsPage.locatorPicture.highlight();
    await expect(pages.locatorsPage.locatorPicture).toBeVisible();
  });

  test("find xpath zapletka", async ({ page }) => {

    await pages.locatorsPage.locatorByXPathId.highlight();
    await expect(pages.locatorsPage.locatorByXPathId).toBeVisible();
  });

  test("find xpath class interesting-paragraph", async ({ page }) => {
    
    await pages.locatorsPage.locatorByXPathClass.highlight();
    await pages.locatorsPage.expectToFindAllXPathClasses();
  }); 

 
  test("count paragraphs", async ({ page }) => {
    
    await pages.locatorsPage.locatorParagraph.all();
    await expect(pages.locatorsPage.locatorParagraph).toHaveCount(16);
  }); 

  test("give likes", async ({ page }) => {
    
    await pages.locatorsPage.locatorLikeButton.click();
    await pages.locatorsPage.getCountOfLikes();
    await pages.locatorsPage.locatorLikeButton.click();
    await pages.locatorsPage.getCountOfLikes();
    await pages.locatorsPage.locatorLikeButton.click();
    await pages.locatorsPage.getCountOfLikes();
    await pages.locatorsPage.locatorLikeButton.click();
    await pages.locatorsPage.getCountOfLikes();
    await pages.locatorsPage.locatorLikeButton.click();
    await pages.locatorsPage.getCountOfLikes();

  }); 


  
});
