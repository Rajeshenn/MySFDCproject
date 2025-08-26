import { LightningElement } from 'lwc';

export default class JavascriptToHTMLComponent extends LightningElement {

    //old way : @track fulname='Rajesh Nataraj';
    
fulname='Rajesh Nataraj';

changeNamehandler(event)
{
this.fulname='Vignesh Nataraj';
}

} 