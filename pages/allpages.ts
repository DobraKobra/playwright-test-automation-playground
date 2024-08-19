import { Page } from "@playwright/test";
import { ButtonPage } from "./buttons";
import { LoginPage } from "./login";
import { LocatorsPage } from "./locators";
import { CatsPage } from "./cats";
import { TablePage } from "./table";
import { FillinPage } from "./fillin";
import { HoverPage } from "./hover";
import { ModalPage } from "./modal";
import { WaitingPage } from "./waiting";
import { FoxPage } from "./fox";

export class AllPages {
  readonly buttonPage: ButtonPage;
  readonly loginPage: LoginPage;
  readonly locatorsPage: LocatorsPage;
  readonly catsPage: CatsPage;
  readonly tablePage: TablePage;
  readonly fillinPage: FillinPage;
  readonly hoverPage: HoverPage;
  readonly modalPage: ModalPage;
  readonly waitingPage: WaitingPage;
  readonly foxPage: FoxPage;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.locatorsPage = new LocatorsPage(page);
    this.buttonPage = new ButtonPage(page);
    this.catsPage = new CatsPage(page);
    this.tablePage = new TablePage(page);
    this.fillinPage = new FillinPage(page);
    this.hoverPage = new HoverPage(page);
    this.modalPage = new ModalPage(page);
    this.waitingPage = new WaitingPage(page);
    this.foxPage = new FoxPage(page);
  }

  async visit(url: string) {
    await this.page.goto(url);
  }
}
