console.log('Dont Quit');


const daysEL = document.getElementById('days');
const hourEL = document.getElementById('hour');
const minEL = document.getElementById('min');
const secondsEL = document.getElementById('seconds');

const newYear = new Date(2021, 0)
console.log(newYear)


function countDown(){
    const todayDate = new Date();
    const newYear = new Date(2021, 0);

    const totalSeconds = (newYear - todayDate) /1000;

    const min = Math.floor(totalSeconds / 60) % 60;
    const hour = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 3600 /24);
    const seconds = Math.floor(totalSeconds) % 60;

    daysEL.innerHTML = format(days);
    hourEL.innerHTML = format(hour);
    minEL.innerHTML = format(min);
    secondsEL.innerHTML = format(seconds);

    // console.log(seconds, min, hour, days)



}

function format(input){
    return input<10 ? (`0${input}`) : input;
}

countDown();

setInterval(countDown,1000)