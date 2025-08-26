import { LightningElement } from 'lwc';

export default class TaskTimerComponent extends LightningElement {
   
    // Decides if we need to show the start button or not
    showStarBtn=true;
    //responsible to show the timer output
    timeVal= '0 : 0 : 0 : 0';
    // this property hold the ID which we will be getting as return value from function setInterval
    timeIntervalInstance;
    // very imp property to help the counting of time
    totalMilliSeconds=0;

    startHandler(event)
    {
      this.showStarBtn=false;
        var parentThis=this;

        //Below code runs in every 100 milliseconds(1000 milliseconds means 1 second)
         this.timeIntervalInstance = setInterval(function() {

            // This will help to perform the calculation for hours, minutes ,seconds and milliseconds
            //Initially totalMilliseconds = zero .Then it will be 100 .Then 200 .SO on

            //total milliseconds %(mod -divisional remainder) total millionseconds in a day/ total milliseconds in one hour
            var hours=Math.floor((parentThis.totalMilliSeconds % (1000*60*60*24 ))/(1000*60*60));
            var minutes=Math.floor((parentThis.totalMilliSeconds % (1000*60*60 ))/(1000*60));
            var seconds=Math.floor((parentThis.totalMilliSeconds % (1000*60 ))/1000);
            var milliseconds=Math.floor((parentThis.totalMilliSeconds % (1000)));

            parentThis.timeVal=hours + " : " + minutes+ " : " + seconds + " : " + milliseconds;
            parentThis.totalMilliSeconds += 100;

         },100);
        }
          
        stopHandler(event){
         this.showStarBtn=true;
         clearInterval(this.timeIntervalInstance);
          }

          resetHandler(event){
            this.showStarBtn=true;
            this.timeVal= '0 : 0 : 0 : 0';
            this.totalMilliSeconds=0;
            clearInterval(this.timeIntervalInstance);
            }


}