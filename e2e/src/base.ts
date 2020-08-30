import { browser, by, element } from 'protractor';

export class BasePage {
  browserSleep(milliseconds: number) {
    browser.sleep(milliseconds);
  }

  getElementById(id: string) {
    return element(by.id(id));
  }
}
