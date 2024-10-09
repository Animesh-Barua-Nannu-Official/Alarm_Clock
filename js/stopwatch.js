let st = document.querySelectorAll('.stopwatch')

// console.log(st)
function allZero(){
    st[0].innerHTML = '0<br>Hour';
    st[1].innerHTML = '0<br>Minute';
    st[2].innerHTML = '0<br>Second';
   
};
// allZero()
let start = document.getElementById('start')
let reset = document.getElementById('reset')
let a ;

start.addEventListener('click', function(){
    let sec = 0
    let min = 0
    let hour = 0
    a = setInterval(function(){
        sec += 1
        if (sec == 60){
            sec = 0
            min += 1
        }
        if (min == 60){
            min = 0
            hour += 1
        }
        st[0].innerHTML = `${hour}<br>Hour`;
        st[1].innerHTML = `${min}<br>Minute`;
        st[2].innerHTML = `${sec}<br>Second`;

    },900)
})

reset.addEventListener('click', ()=>{
    clearInterval(a)
    allZero()
})