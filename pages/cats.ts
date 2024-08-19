import { Locator, Page, expect } from "@playwright/test";

export class CatsPage {
  readonly page: Page;
  readonly navigationBar: string;
  readonly header: Locator;

  readonly addCatButton: Locator;
  readonly removeCaButton: Locator;
  readonly apocalypseButton: Locator;

  readonly catCards: Locator;
  readonly catCounter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigationBar = "nav";
    this.header = page.getByRole("heading", { name: "Tlačítka" });

    // OH! Fill this! Check the HTML and fill the selectors. Use whatever selector you want.
    this.addCatButton = page.locator("#addItem");
    this.removeCaButton = page.locator("#removeItem");
    this.apocalypseButton = page.locator("#removeAll");
    this.catCards = page.getByAltText("Kočka");

    this.catCounter = page.locator("#counter")
  };

  async visit() {
    await this.page.goto("/adding.html");
  };

  async expectToAddMoreCats() {

    const CatClassLocator = this.page.locator('.card-img-top');

    for (const catCards of await CatClassLocator.all()) {
      await expect.soft(catCards).toBeVisible();
    };


 // getCountOfCatCards = async () => {
 //   return await this.catCards.count();
 // };
 // getCountOfParagraphs = async () => {
 //   return await this.locatorParagraph.count();
  };

  async expectToRemoveCats() {

    const CatClassLocator = this.page.locator('.card-img-top');

    for (const catCards of await CatClassLocator.all()) {
    await expect.soft(catCards).toHaveCount(0);
    };
  };

  async expectToRemoveAllCats() {

    const CatClassLocator = this.page.locator('.card-img-top');

    for (const catCards of await CatClassLocator.all()) {
    await expect.soft(catCards).toHaveCount(0);
    };
  };

  getCountOfCatCards = async () => {
    return await this.catCards.count();
};

};