import { Locator, Page, expect } from "@playwright/test";

export class ModalPage {
  readonly page: Page;
  readonly navigationBar: string;
  readonly header: Locator;

  readonly buttonById: Locator;
  readonly buttonByName: Locator;
  readonly buttonByClass: Locator;
  readonly buttonByText: Locator;
  readonly buttonByXPath: Locator;
  readonly buttonByPartialText: Locator;
  readonly buttonByDataQA: Locator;

  readonly buttonOutsideDiv: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigationBar = "nav";
    this.header = page.getByRole("heading", { name: "Tlačítka" });

    // OH! Fill this! Check the HTML and fill the selectors. Use whatever selector you want.
    this.buttonById = page.locator("#button1");
    this.buttonByName;
    this.buttonByClass;
    this.buttonByText;
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
