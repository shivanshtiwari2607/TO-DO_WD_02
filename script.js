// "use strict";


// Variables
const time = document.getElementById("time_min_sec");
const mins_span = document.getElementById("minutes");
const secs_span = document.getElementById("seconds");
const msecs_span = document.getElementById("m_seconds");
const lap_reset_btn = document.getElementById("lap_reset_btn");
const start_stop_btn = document.getElementById("start_stop_btn");
const laps_wrapper = document.getElementById("laps_wrapper");
var minutes = 0;
var seconds = 0;
var m_seconds = 0;
var timer;
function start_stop(){
    if (start_stop_btn.innerText == "Start"){
        timer = setInterval(function(){
            m_seconds++;
            if ( m_seconds == 100){
                m_seconds = 0;
                seconds++;
            }
            if (seconds == 60){
                seconds = 0;
                minutes++;
            }
            if (minutes == 60){
                minutes = 0;
            }
            if (m_seconds < 10){
                msecs_span.innerHTML = "0" + m_seconds.toString();
            }else {
                msecs_span.innerHTML = m_seconds.toString();
            }
            if (seconds < 10){
                secs_span.innerHTML = "0" + seconds.toString();
            }else {
                secs_span.innerHTML = seconds.toString();
            }
            if (minutes < 10){
                mins_span.innerHTML = "0" + minutes.toString();
            }else {
                mins_span.innerHTML = minutes.toString();
            }
        }, 10);
        start_stop_btn.innerText = "Stop";
        start_stop_btn.classList.add("stop");
        lap_reset_btn.innerText = "Lap";
    }
    else{
        clearInterval(timer);
        start_stop_btn.innerText = "Start";
        start_stop_btn.classList.remove("stop");
        lap_reset_btn.innerText = "Reset";
    }
}
function create_lap_or_reset(){
    if (lap_reset_btn.innerText == "Lap"){
        let lap_text = time.innerText;

        let lap = document.createElement("div");
        lap.className = "lap";
        laps_wrapper.prepend(lap);
        
        let lap_num = document.createElement("span");
        lap_num.className = "lap_num";
        lap_num.innerText = "Lap " + laps_wrapper.childElementCount;
        lap.appendChild(lap_num);

        let lap_time = document.createElement("span");
        lap_time.className = "lap_time";
        lap_time.innerText = lap_text;
        lap.appendChild(lap_time);
    }
    else{
        minutes = 0;
        seconds = 0;
        m_seconds = 0;
        mins_span.innerText = "00";
        secs_span.innerText = "00";
        msecs_span.innerText = "00";
        laps_wrapper.innerHTML = "";
    }
}
start_stop_btn.onclick = start_stop;
lap_reset_btn.onclick = create_lap_or_reset;