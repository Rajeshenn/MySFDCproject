import { LightningElement } from 'lwc';

export default class HtmlToJavascriptComponent extends LightningElement {

letterHandler(event){

    var VarValueWeGetFromHTML=event.target.value;
    alert('you have entered a letter=' + VarValueWeGetFromHTML);

}


}