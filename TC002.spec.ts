import {test} from '@playwright/test'

import { General } from '../lib/General'

test('TC002',async({page}) =>{

    let job = new General(page);
   await job.openapplication();
   await job.waitStmt();
   await  job.login();
   await job.waitStmt();
   await job.addEmployee();
   await job.logout();
   await job.waitStmt();

})