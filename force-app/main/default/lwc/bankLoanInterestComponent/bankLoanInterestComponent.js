import { LightningElement } from 'lwc';

export default class BankLoanInterestComponent extends LightningElement {
// adding new line of comments to check git commit and  push

    loanResult;
    principal;
    rateofInterest;
    noOfYears;

    principalChangeHandler(event)
      {
       this.principal=parseInt(event.target.value);
       }

       durationChangeHandler(event)
       {
        this.noOfYears=parseInt(event.target.value);
        }

        rateChangeHandler(event)
       {
        this.rateofInterest=parseInt(event.target.value);
        }


        calculateLoanAmountHandler(event)
       {
        this.loanResult='The Loan Interest is =' +(this.principal*this.noOfYears*this.rateofInterest);
        }

}