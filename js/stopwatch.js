let st = document.querySelectorAll('.stopwatch')

// console.log(st)
//to set the value of min, hour and second to zero
function allZero(){
    st[0].innerHTML = '0<br>Hour';
    st[1].innerHTML = '0<br>Minute';
    st[2].innerHTML = '0<br>Second';
   
};

allZero()

let start = document.getElementById('start')
let reset = document.getElementById('reset')
let a ; // to the the id of setInterval so that we can cancel it later

start.addEventListener('click', function(){
    //initializing
    let sec = 0
    let min = 0
    let hour = 0
    a = setInterval(function(){
        sec += 1
        //when sec is 60 then minute increase 1
        if (sec == 60){
            sec = 0 
            min += 1
        }
        //when min is 60 then hour ++
        if (min == 60){
            min = 0
            hour += 1
        }
        st[0].innerHTML = `${hour}<br>Hour`;
        st[1].innerHTML = `${min}<br>Minute`;
        st[2].innerHTML = `${sec}<br>Second`;

    },900) //900 because the code need time to run 
})

reset.addEventListener('click', ()=>{
    clearInterval(a) // cancel the setIntevel
    allZero()
})