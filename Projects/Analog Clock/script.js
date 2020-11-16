//For 1st clock
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
//For 2nd clock
const HOURHAND1 = document.querySelector("#hour1");
const MINUTEHAND1 = document.querySelector("#minute1");
const SECONDHAND1 = document.querySelector("#second1");
//For 3rd clock
const HOURHAND2 = document.querySelector("#hour2");
const MINUTEHAND2 = document.querySelector("#minute2");
const SECONDHAND2 = document.querySelector("#second2");
// Above are the hour, minute and second arm code in the SVG

//A function to calculate offset from the GMT/UTC timezone
function calcTime(offset) {

    // create Date object for current location
    var d = new Date();

    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000); //The funtion returns the time zone offset in minutes and so convert it to milliseconds


    // create new Date object using supplied offset
    var new_date = new Date(utc + (3600000*offset)); //The offset is in hours and hence converted to milliseconds

    // return time as a string
    return new_date;

}
//The purpose of this funtion is to calculate the current hours,minutes and seconds
function run_clock(offset) {
  var date = calcTime(offset); // To get the current time


  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let yr = date.getFullYear();


  let hrdeg = ((hr/12) * 360) + (((min/60)*360)/12);
  let mindeg = ((min/60) * 360) + (((sec/60)*360)/60); /* The seconds arithmetic has been added to min degrees because we want the minute hand to move
  along with the second hand rather than just move 1 minute everytime second hand covers 60 seconds */
  let secdeg = (sec/60) * 360;

  return [hrdeg,mindeg,secdeg];
}

function analog_clock(){


//Now we need to apply the above variables as degrees in the inline styles for transform on each objects
var arr = run_clock(-8);
HOURHAND.style.transform = "rotate(" + arr[0] + "deg)";
MINUTEHAND.style.transform = "rotate(" + arr[1] + "deg)";
SECONDHAND.style.transform = "rotate(" + arr[2] + "deg)";
}

var repeated_call = setInterval(analog_clock,1000); //This method will call the function analog_clock repeatedly every 1000 milliseconds




function analog_clock1(){

//Now we need to apply the above variables as degrees in the inline styles for transform on each objects
var arr1 = run_clock(-5);
HOURHAND1.style.transform = "rotate(" + arr1[0] + "deg)";
MINUTEHAND1.style.transform = "rotate(" + arr1[1] + "deg)";
SECONDHAND1.style.transform = "rotate(" + arr1[2] + "deg)";
}

var repeated_call1 = setInterval(analog_clock1,1000); //This method will call the function analog_clock repeatedly every 1000 milliseconds


function analog_clock2(){

var arr2 = run_clock(-6);
HOURHAND2.style.transform = "rotate(" + arr2[0] + "deg)";
MINUTEHAND2.style.transform = "rotate(" + arr2[1] + "deg)";
SECONDHAND2.style.transform = "rotate(" + arr2[2] + "deg)";
}

var repeated_call2= setInterval(analog_clock2,1000); //This method will call the function analog_clock repeatedly every 1000 milliseconds
