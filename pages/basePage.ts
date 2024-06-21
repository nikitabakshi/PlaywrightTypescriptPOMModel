import { LoginPage } from "./LoginPage";
import { Homepage } from "./Homepage";
import {test as basetest} from "@playwright/test"

type pages={
    loginPage:LoginPage,
    homePage :Homepage
}

const test=basetest.extend<pages>({
    loginPage:async({page},use)=>{
        await use(new LoginPage(page));
    },

    homePage:async({page},use)=>{
        await use(new Homepage(page));
    }
})

export default test;