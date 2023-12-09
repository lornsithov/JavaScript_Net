//date at the bottom
function dateInformation(){
    let date = new Date();
    let weekday = date.toLocaleDateString('en-us', { 
        weekday:"long", 
        year:"numeric", 
        month:"short", 
        day:"numeric"
    });
    document.getElementById("dateInfo").innerHTML = weekday;
    console.log(weekday);
}
dateInformation();

// time next to the date at the bottom
let dateTime = () =>{
    let dTime = new Date();
    let dDateTime = dTime.toLocaleTimeString();
    document.getElementById("dateTime").innerHTML = dDateTime;
}
setInterval(dateTime,1000);

//start function
let startDocGet = document.getElementById("startTime");
let start_time;
let liveSt = () =>{
    start_time = new Date(); 
    let toStartLocalTime = start_time.toLocaleTimeString();
    startDocGet.innerHTML = toStartLocalTime;
}
let startLiveTime = () =>{  
    document.getElementById("btn").innerHTML = "Stop";
    document.getElementById("btn-bg").style = "background-color:#F55050;";
    document.getElementById("btn-icon").name = "stop-circle-outline";
    liveSt();
}

//stop function
let stopDocGet = document.getElementById("stopTime");
let end_time;
let liveSp = () =>{
    end_time = new Date();
    let toStopLocalTime = end_time.toLocaleTimeString();
    stopDocGet.innerHTML = toStopLocalTime;
}
let stopLiveTime = () =>{
    document.getElementById("btn").innerHTML = "Clear";
    document.getElementById("btn-bg").style = "background-color: #E8D2A6;";
    document.getElementById("btn-icon").name = "trash-outline";
    liveSp();
}

//clear function
let clearLiveTime = () =>{
    document.getElementById("btn").innerHTML = "Start";
    document.getElementById("btn-bg").style.backgroundColor = "#03C988";
    document.getElementById("btn-icon").name = "play-outline";
    document.getElementById("stopTime").innerHTML = "0:00";
    document.getElementById("startTime").innerHTML = "0:00";
    document.getElementById("pay-min").innerHTML = "0";
    payMon.innerHTML = "0";
    // btn.onclick = startLiveTime;
}

let startTime = true;
let stopTime = false;
let clearTime = false;
const start = () =>{
    if (startTime){
        startLiveTime();
        startTime = false;
        stopTime = true;
    }else if (stopTime){
        stopLiveTime();
        calculate();
        stopTime = false;
        clearTime = true;
    }else if (clearTime){
        clearLiveTime();
        clearTime = false;
        startTime = true;
    }
}

// calculate money by every minutes
let sum = 0;
let ms;
let payMin = document.getElementById("pay-min");
let payMon = document.getElementById("pay-mon");
const calculate = () =>{
    ms = end_time - start_time;
    min = Math.floor((ms/1000/60) << 0)
    let con = parseInt(min%60);
    if(con>=0 && con<16){
        sum=500;
        payMon.innerHTML=sum;
    } else if(con>=16 && con<31) {
        sum=1000;
        payMon.innerHTML=sum;
    
    } else if(con>=31 && con<60) {
        sum=1000+500;
        payMon.innerHTML=sum;
    }
    let a=(parseInt(min/60))
    sum+=1500*a;
    payMin.innerHTML = min;
    payMon.innerHTML = sum;
}

// Customize TailWindCSS
tailwind.config = {
    theme: {
      extend: {
        backgroundImage: {
            future: "url('../img/future01.jpg')",
        },
        colors: {
          color1: "#86A3B8",
          color2: "#E8D2A6",
          color3: "#F48484",
          color4: "#F55050",
          color5: "#645CBB",
          color6: "#A084DC",
          color7: "#03C988"
        }
      }
    }
  }