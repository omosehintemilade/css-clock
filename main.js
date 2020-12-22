// alert('hello')
let secondsHand = document.querySelector('.second-hand')
let minutesHand = document.querySelector('.min-hand')
let hourHand = document.querySelector('.hour-hand')
console.log(minutesHand);

function setDate() {
    let today = new Date()
    let seconds = today.getSeconds()
    let minutes = today.getMinutes()
    let hour = today.getHours()
        // console.log(seconds);
        // console.log(minutes);
    console.log(hour);
    // hourHand.style.background = 'red'
    let secondsToDegrees = ((seconds / 60) * 360)
    let minutesToDegrees = ((minutes / 60) * 360)
    let hoursToDegrees = ((hour / 12) * 360)

    // console.log(minutesToDegrees);
    console.log(hoursToDegrees);
    secondsHand.style.transform = `rotate(${secondsToDegrees}deg)`
    minutesHand.style.transform = `rotate(${minutesToDegrees}deg)`
    hourHand.style.transform = `rotate(${hoursToDegrees}deg)`



}
// setDate()
setInterval(() => setDate(), 1000);

// setTimeout(() => setDate(), 1000)