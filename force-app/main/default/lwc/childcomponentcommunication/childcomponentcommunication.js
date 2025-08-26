import { LightningElement,api } from 'lwc';

export default class Childcomponentcommunication extends LightningElement {


    // adding extra line for moving
    @api messagefromparent;
    @api projectcode;

}