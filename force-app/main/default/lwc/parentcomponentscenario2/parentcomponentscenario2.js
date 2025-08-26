import { LightningElement } from 'lwc';

export default class Parentcomponentscenario2 extends LightningElement {


    handlechildevent(event){

    const varchildcompname=event.detail.childcompname;
    const varchildcompdetails=event.detail.childcompdetails;

        alert('Event handled in Parent Comp');

        alert('Now whatever will come next it came from child component!');

        alert('child comp name is:' +varchildcompname);

        

        alert ('child comp description:' + varchildcompdetails);
    }
}