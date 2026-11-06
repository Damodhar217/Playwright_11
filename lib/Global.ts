//To provide test data & objects/elements for whole application
import{Page} from '@playwright/test'
export class Global{
    constructor(public page:Page){

    }
    /*  we have to provide testdata*/

    public url:string = "https://sureshitacademy.in/hrms/login.php";
    public username:string = "sureshit";
    public password:string = "sureshit";
    public empfirstname : string = "Ashok";
    public emplastname  : string = "Goud";
     /* objects or elements*/
     public text_boxloginname:string = "//input[@name='txtUserName']";
     public text_boxpassword:string = "//input[@name='txtPassword']";
     public button_login:string = "//input[@name='Submit']";
     public button_logout:string="Logout";
     /*Add employee*/
     public frame_empInfo     : string = "//iframe[@id='rightMenu']";
     public button_add        : string = "//input[@value='Add']";
     public textbox_empfirstname : string = "//input[@name='txtEmpFirstName']";
     public textbox_emplastname  : string = "//input[@name='txtEmpLastName']";
     public button_save          : string = "//input[@id='btnEdit']";
}
     



