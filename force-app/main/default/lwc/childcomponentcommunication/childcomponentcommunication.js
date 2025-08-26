import { LightningElement,api } from 'lwc';

export default class Childcomponentcommunication extends LightningElement {

    @api messagefromparent;
    @api projectcode;

}