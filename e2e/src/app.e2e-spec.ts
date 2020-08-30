import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Robot Simulator', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  const placeRobotToPosition = (x: number, y:number, direction: string) => {
    page.enterPlaceRobotInput(`${x},${y},${direction}`);
    page.clickPlaceRobotBtn();
  }

  it('should display app name', () => {
    expect(page.getAppName()).toEqual('Robot Simulator');
  });

  it('should fill place _input_ and click place robot button', async () => {
    const xPos = 0;
    const yPos = 0;
    placeRobotToPosition(xPos, yPos, 'N');

    // expect(await page.getRobotYPos())
    browser.sleep(5000);
  })

  it('should fill place _input_ and click place robot button', async () => {
    const xPos = 0;
    const yPos = 0;
    placeRobotToPosition(xPos, yPos, 'N');

    // expect(await page.getRobotYPos())
    browser.sleep(5000);
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
