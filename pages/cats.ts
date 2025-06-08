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


  getCountOfCatCards = async () => {
    return await this.catCards.count();
};
};