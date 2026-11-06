//To provide actual automation scripts 
import { test } from "@playwright/test";
import { General } from "../lib/General";

test('TC001_open application', async({page}) => {

    let obj = new General(page)
   await obj.openapplication();
   await obj.login();
   await obj.logout();


});