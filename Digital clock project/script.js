const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded',()=>{
    setInterval(showTime, 1000);
});

let showTime = () =>{
let date = new Date();

let hr = date.getHours();
let mins = date.getMinutes();
let secs = date.getSeconds();
let millisecs = date.getMilliseconds();
    

    hr = hr<10 ? `0${hr}` : hr;
    mins = mins<10 ? `0${mins}` : mins;
    secs = secs<10 ? `0${secs}` : secs;
    millisecs = millisecs<10 ? `0${millisecs}` : millisecs;
    
    
    time.innerHTML = `${hr} : ${mins} : ${secs} : ${millisecs}`; 

    timeformat.innerHTML = hr>12 ? "PM" : "AM";

    //console.log("hours " + hr + "mins " + mins + "secs " + secs + "millisecs " + millsecs);
}