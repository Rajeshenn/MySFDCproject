import { LightningElement } from 'lwc';

export default class ForEachComponent extends LightningElement {

CEOList

showlistHandler()
{
this.CEOList=[
    
    {
        id:1,
        Name:'Mark Benioff',
        title: 'CEO Of Salesforce',
    },
    {
        id:2,
        Name:'Sundar Pichai',
        title: 'CEO Of Google',
    },
    {
        id:3,
        Name:'Mark ZuckerBerg',
        title: 'CEO Of Facebook',
    },
    {
        id:4,
        Name:'Jack Dorsey',
        title: 'CEO Of Twitter',
    },
    {
        id:5,
        Name:'Jeff Bezos',
        title:'CEO Of Amazon',
    }
];

}


}