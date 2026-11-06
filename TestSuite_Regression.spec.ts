import{test} from '@playwright/test'
import { General } from "../lib/General";

test.describe('Regression',() => {
test('@Regression',async({page}) =>{
    let obj = new General(page)
       await obj.openapplication();
       await obj.login();
       await obj.logout();
    
    });
});
test('@smoke',async({page}) =>  {
     let job = new General(page);
    await job.openapplication();
    await job.waitStmt();
    await  job.login();
    await job.waitStmt();
    await job.addEmployee();
    await job.logout();
    await job.waitStmt();
});
    
