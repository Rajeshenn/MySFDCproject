import { LightningElement } from 'lwc';

export default class PatientDetailsComponent extends LightningElement {


    booleanflagvalue=false;

    showformHandler()
    {
        this.booleanflagvalue=true;

    }

    hideformHandler()
    {
        this.booleanflagvalue=false;

    }
}