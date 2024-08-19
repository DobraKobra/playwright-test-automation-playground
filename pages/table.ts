import { Locator, Page, expect } from "@playwright/test";

export class TablePage {
  readonly page: Page;
  readonly navigationBar: string;
  readonly header: Locator;

  readonly tableByClass: Locator;
  readonly tableLvl: Locator;
  readonly tableAnimal: Locator;
  readonly tableSize: Locator;
  readonly buttonByXPath: Locator;
  readonly buttonByPartialText: Locator;
  readonly buttonByDataQA: Locator;

  readonly buttonOutsideDiv: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigationBar = "nav";
    this.header = page.getByRole("heading", { name: "Tlačítka" });

    // OH! Fill this! Check the HTML and fill the selectors. Use whatever selector you want.
    this.tableByClass = page.locator("td.qa-animal-name");
    this.tableLvl = page.getByText("LVL úžasnosti");
    this.tableAnimal = page.locator("td.qa-animal-name");
    this.tableSize = page.locator("th.Velikost");
    this.buttonByXPath;
    this.buttonByPartialText;
    this.buttonByDataQA;

    this.buttonOutsideDiv;
  }

  async visit() {
    await this.page.goto("/selectorsButtons.html");
  }

  async expectToAllButtonsAreClicked() {
    // this.header.waitFor({ state: "visible" });
    const buttons = this.page.getByRole("button");

    for (const button of await buttons.all()) {
      await expect.soft(button).toHaveClass("btn-success", { timeout: 100 });
    }
  }
}
