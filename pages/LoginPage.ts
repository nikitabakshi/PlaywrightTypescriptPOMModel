import { test, expect ,Browser,Page,Locator} from '@playwright/test';
export class LoginPage
{
    readonly page:Page;
    readonly loginBtn:Locator;
    readonly email:Locator;
    readonly password:Locator;
    readonly signin:Locator;
    constructor(page:Page)
    {
        this.page=page
        this.email=page.locator("id=email")
        this.password=page.locator("xpath=//input[@name='login[password]']")
        this.signin=page.getByRole('button',{name:' Sign In'})
    }

    async login(email:string,password:string)
    {
     await  this.email?.fill(email);
     await this.password?.fill(password);
     await this.signin.click();
    }

   
 
}