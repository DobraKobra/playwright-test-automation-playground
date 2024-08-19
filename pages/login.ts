import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly navigationBar: string;
  readonly header: Locator;

  readonly userName: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly loggedInAltText: Locator;
 
  

  constructor(page: Page) {
    this.page = page;
    this.navigationBar = "nav";
    this.header = page.getByRole("heading", { name: "Tlačítka" });
    

    // OH! Fill this! Check the HTML and fill the selectors. Use whatever selector you want.
    this.userName = page.getByPlaceholder("mamamia@czechitas.cz");
    this.password = page.getByPlaceholder("your awesome password");
    this.loginButton = page.locator("#login-submit")
    this.loggedInAltText = page.getByAltText("Frajersky vyhlížející sova")
    
  }

  async visit() {
    await this.page.goto("/login.html");
  }

  async login() {
    // this.header.waitFor({ state: "visible" });
    await this.page.goto("/logged.html");
  }

  async checkIsLoggedIn(): Promise<void> {
    const loggedInAltText = await this.loggedInAltText.textContent();
    //expect(loggedInAltText).toBe("LOGGED!")
    await expect(this.page.getByRole('heading', { name: 'LOGGED!' })).toBeVisible();

    
    }
  }

