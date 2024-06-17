import { test, expect ,Browser,Page,Locator} from '@playwright/test';
export class Homepage
{
    readonly page:Page;
    readonly loginBtn:Locator;
    constructor(page:Page)
    {
        this.page=page
        this.loginBtn=page.getByRole('link',{name:'Sign In' })
    }

    async goTo(url:string)
    {
        await this.page.goto(url)
    }

    async clickonLoginBtn()
    {
        this.loginBtn.click()
    }


    async  getPageTitle() {
        const title = await this.page.title();
        return title;
      }

    
}