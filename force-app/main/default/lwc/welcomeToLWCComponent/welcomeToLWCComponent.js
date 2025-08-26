import { LightningElement ,track} from 'lwc';

export default class WelcomeToLWCComponent extends LightningElement {

    fullname="Zero to Hero"
    title="aura"

    changeHandler(event)
    {

      this.title=event.target.value
    }
 /*     @track address={
        city:"melbourne",
        postalcode:3008,
        country:"Australia"

      }
*/

address={
    city:"melbourne",
    postalcode:3008,
    country:"Australia"

  }

    trackHandler(event)
    {
       //this.address.city=event.target.value
       this.address={...this.address,"city":event.target.value}
    }

    users=["john","smith","Ashwathi"]
    num1=20
    num2=36

    get firstUser(){
     return this.users[0]

    }

    get multiply()
    {
      return this.num1*this.num2
    }
}