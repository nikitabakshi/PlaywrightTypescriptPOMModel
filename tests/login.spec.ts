import { test, expect,Page, BrowserContext } from '@playwright/test';
import { Homepage } from '../pages/Homepage';
import { LoginPage } from '../pages/LoginPage';

test.describe.configure({ mode: 'serial' });
const testdata=JSON.parse(JSON.stringify(require("../test-data.json")));

let page:Page;
let context:BrowserContext;
let homepage:Homepage;
let loginpage:LoginPage;

  test.beforeAll(async ({browser }) => {
    context= await browser.newContext();
    page = await browser.newPage();
    homepage=new Homepage(page);
    loginpage=new LoginPage(page);
    
  });

   test.afterAll(async () => {
     await page.close();
   });


test('login test',async() =>{

  await homepage.goTo(testdata.url);
  await homepage.clickonLoginBtn()

  await loginpage.login(testdata.username,testdata.password);
  const title = await homepage.getPageTitle();
  expect(title).toBe("Home Page")

 
});
