let time = document.querySelectorAll('.time')
// console.log(time)



// console.log(date.toLocaleString([], { hour: '2-digit', minute: '2-digit', hour12: true }))
//return hour, min, sec, am/pm as an object
const clock = () =>{
    const date = new Date()
    localTime = date.toLocaleString([], { hour: '2-digit', minute: '2-digit', hour12: true }) // return in '01:23 PM' this format. the hour and min is always 2 digits like 01, 12 etc. and time format is 12 hours
    let hour = localTime.slice(0, 2)
    let min = localTime.slice(3, 5)
    let sec = date.getSeconds()
    let am_pm = localTime.slice(6)
    return {hour:hour, min:min, sec:sec, am_pm: am_pm}

}

setInterval(()=>{
    const localTime = clock()
    time[0].innerHTML = localTime.hour
    time[1].innerHTML = localTime.min
    time[2].innerHTML = localTime.sec
    time[3].innerHTML = localTime.am_pm

}, 990)
