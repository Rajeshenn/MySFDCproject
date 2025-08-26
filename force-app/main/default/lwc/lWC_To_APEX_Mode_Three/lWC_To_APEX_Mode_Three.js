import { LightningElement, track } from 'lwc';

import getAccountList from '@salesforce/apex/Accounthelper.getAccountList';


export default class LWC_To_APEX_Mode_Three extends LightningElement {

    @track accounts;
    @track error;

    handleLoad(){

        getAccountList()
        
        .then(result =>{
             this.accounts=result;
          })
        .catch(error =>{
             this.error=error;
          });
    
    }

}