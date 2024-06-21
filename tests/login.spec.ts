import { expect,Page, BrowserContext } from '@playwright/test';
import test from '../pages/basePage';


test.describe.configure({ mode: 'serial' });
const testdata=JSON.parse(JSON.stringify(require("../test-data.json")));

let page:Page;
let context:BrowserContext;


  test.beforeAll(async ({browser }) => {
    context= await browser.newContext();
    page = await browser.newPage();
   
    
  });

  test.afterAll(async () => {
    await page.close();
  });


test('login test',async({homePage,loginPage}) =>{

  await homePage.goTo(testdata.url);
  await homePage.clickonLoginBtn()

  await loginPage.login(testdata.username,testdata.password);
  const title = await homePage.getPageTitle();
  expect(title).toBe("Home Page")

 
});
