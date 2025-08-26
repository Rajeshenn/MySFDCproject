import { LightningElement } from 'lwc';

export default class TabInLWC extends LightningElement {

    VarTabOneBool;
    VarTabTwoBool;

    handleClick(event){

   let buttonClicked=event.target.label;

   switch(buttonClicked){
   
    case 'Show Cashless Info':
    this.VarTabOneBool=true;
    break;
    
   case 'Show Reimbursement Info':
   this.VarTabTwoBool=true;
   break;
   
   case 'Hide Cashless Info':
    this.VarTabOneBool=false;
    break;

    case 'Hide Reimbursement Info':
    this.VarTabTwoBool=false;
    break;

   }


    }
}