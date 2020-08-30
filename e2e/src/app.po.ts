import { browser, by, element } from 'protractor';
import { BasePage } from './base';

export class AppPage extends BasePage{
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getAppName(): Promise<string> {
    return element(by.id('app-name')).getText() as Promise<string>;
  }

  enterPlaceRobotInput(value: string) {
    return this.getElementById('place-robot-input').sendKeys(value);
  }

  clickPlaceRobotBtn() {
    this.getElementById('place-robot-btn').click();
  }

  getCellById(x: number, y: number) {
    return this.getElementById(`x${x}-y${y}`)
  }

  async getRobotCell() {
    const svgImg = this.getElementById('robot-img').getWebElement();
    const parentDiv = await svgImg.getDriver().findElement(by.tagName('div'));
    return parentDiv;
  }

  async getRobotYPos() {
    const robotCell = await this.getRobotCell();
    console.log('CSS', robotCell.getAttribute('css'))
    return robotCell;
  }
}
