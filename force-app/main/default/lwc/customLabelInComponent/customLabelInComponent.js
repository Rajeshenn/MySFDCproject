import { LightningElement } from 'lwc';


//importing custom labels from SF org
import WelcomeLabel from '@salesforce/label/c.WelcomeLabel';
import HomePageLabel from '@salesforce/label/c.HomaPageLabel';
import NewClientLabel from '@salesforce/label/c.NewCliantLabel';
// to create new content for sync all changes 

export default class CustomLabelInComponent extends LightningElement {

    //creating the container to collect the labels
    //Expose the labels to use in the template
    //to use the labels in the template use the same {property} syntax that you use to reference.


labelList={ WelcomeLabel,
           HomePageLabel,
           NewClientLabel
        };

        //function to handle the event.
        newClientHandler() {
        alert('entry done!!');
      }

}