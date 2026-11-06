//To provide all the re-usable functions/methods for the whole application

import { Global } from "./Global";

export class General extends Global{

    async openapplication(){
        await this.page.goto(this.url);
        console.log('open application');

    }
    async login(){
        await this.page.locator(this.text_boxloginname).fill(this.username);
        await this.page.locator(this.text_boxpassword).fill(this.password);
        await this.page.locator(this.button_login).click();
        console.log('Login successfull');
    }
    async logout(){
        await this.page.getByText(this.button_logout).click();
        console.log('Logout successfull');
        
    }
    async addEmployee() {
    const frame = this.page.frameLocator(this.frame_empInfo);
    await frame.locator(this.button_add).click();
    await frame.locator(this.textbox_empfirstname).fill(this.empfirstname);
    await frame.locator(this.textbox_emplastname).fill(this.emplastname);
    await frame.locator(this.button_save).click();
    console.log("New Employee added");
}
async waitStmt(){
    await this.page.waitForTimeout(3000); // Wait for 3 seconds
    console.log("Waited for 3 seconds");
}
    }
    
    

