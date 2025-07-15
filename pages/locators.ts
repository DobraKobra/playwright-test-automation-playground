import { Locator, Page, expect } from "@playwright/test";
import { AllPages } from "./allpages";

export class LocatorsPage {
  readonly page: Page;
  readonly navigationBar: string;
  readonly header: Locator;

  readonly locatorByDataQA: Locator;
  readonly locatorById: Locator;
  readonly locatorByClass: Locator;
  readonly locatorPicture: Locator;
  readonly locatorByXPathId: Locator;
  readonly locatorByXPathClass: Locator;
  readonly locatorParagraph: Locator;
  readonly locatorLikeButton: Locator;
  readonly locatorLikeCountButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.navigationBar = "nav";
    this.header = page.getByRole("heading", { name: "Tlačítka" });

    // OH! Fill this! Check the HTML and fill the selectors. Use whatever selector you want.
    this.locatorByDataQA = page.locator('[data-qa = "selector-by-dataQA"]');
    this.locatorById = page.locator("#zapletka");
    this.locatorByClass = page.locator('.this-is-interesting-paragraph');
    this.locatorPicture = page.getByAltText('Ilustrace Budulínka');
    this.locatorByXPathId = page.locator('//*[@id = "zapletka"]');
    this.locatorByXPathClass = page.locator('//*[@class = "this-is-interesting-paragraph"]');  
    this.locatorParagraph = page.locator('p');
    this.locatorLikeButton = page.locator("#like-button");
    this.locatorLikeCountButton = page.locator("#lvlAwesome");
  }

  async visit() {
    await this.page.goto("/selectors.html");
  }

  
  getCountOfParagraphs = async () => {
    return await this.locatorParagraph.count();
  };

  async expectToFindAllClasses() {

    const ClassLocator = this.page.locator('.this-is-interesting-paragraph');

    for (const locatorByClass of await ClassLocator.all()) {
      await expect.soft(ClassLocator).toBeVisible;
    }
  };

  async expectToFindAllXPathClasses() {
    
    const XPathClassLocator = this.page.locator('//*[@class = "this-is-interesting-paragraph"]');

    for (const locatorByXPathClass of await XPathClassLocator.all()) {
      await expect.soft(XPathClassLocator).toBeVisible;
    }
  };

  async expectToAddLikes() {
   
    const locatorLikeCountButton = this.page.locator("#lvlAwesome");

    for (const locatorLikeButton of await locatorLikeCountButton.all()) {
      await expect.soft(locatorLikeCountButton).toHaveCount;
    }
  };

    getCountOfLikes = async () => {
      return await this.locatorLikeCountButton.count();
    }
  };
 
