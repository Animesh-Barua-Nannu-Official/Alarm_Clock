
let alarmSound = new Audio('/sound/alarmSound.wav')

let a ; //setInterval id to stop it 
let localTime ; 

//to get the alarm time from the form
const getValues = () =>{
    let sl = document.querySelectorAll('select')
    let hour = sl[0].value
    let min = sl[1].value + sl[2].value
    let am_pm = sl[3].value
    return hour + ':' + min + ' ' + am_pm
}

//button objects dom
let btn = document.querySelectorAll('.btn')
let delete_alarm = btn[0]
let stop_alarm = btn[1]
let set_alarm = btn[2]

//after setinng the alarm it will check and match alarmTime == local time after each 10 sec.
set_alarm.addEventListener('click', function(){
    let alarmTime = getValues()
    a = setInterval(()=>{
        const date = new Date()
        localTime = date.toLocaleString([], { hour: '2-digit', minute: '2-digit', hour12: true }) // return in '01:23 PM' this format. the hour and min is always 2 digits like 01, 12 etc. and time format is 12 hour
        if (alarmTime == localTime){
            alarmSound.play()
        }
    },10000)
})

//pause the audio and clear the setInterval
stop_alarm.onclick = ()=>{
    alarmSound.pause()
    clearInterval(a)
}

delete_alarm.onclick = function(){
   
}
   





