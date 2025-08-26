import { LightningElement } from 'lwc';

export default class CustomValidation extends LightningElement {


    validateInfo(){
    
     //taking reference of components in HTML
    let searchCmp = this.template.querySelector(".nameCmp");
    let dateCmp = this.template.querySelector(".dateCmp");
      
    //fetching values
    let searchValue=searchCmp.value;
    let dateValue=dateCmp.value;

     //check if name is blank
     if(!searchValue)
         { searchCmp.setCustomValidity("Name  value is required ..") ; }
     else { searchCmp.setCustomValidity(" ");  }
     searchCmp.reportValidity();

     //check if Date is blank
      if(!dateValue)
      { dateCmp.setCustomValidity("Date value is required");  }
      else{ dateCmp.setCustomValidity(" "); }
      dateCmp.reportValidity(); 

  }

}