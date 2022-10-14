import './style.scss'
// Fields of timer
const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const millisecondElement = document.querySelector('.millisecond')
// Buttons 
const buttonStart = document.querySelector('.start')
const buttonStop = document.querySelector('.stop')
const buttonPause = document.querySelector('.pause')
const lapButton = document.querySelector('.lap')

// Results block
const resultsBlock = document.querySelector('.list')
let resultList = [];

lapButton.addEventListener('click', function(){
    let newResult = {
        result: addMessage.value,
        important: false
    };
    resultList.push(newResult)
    displayResult()
    
});

function displayResult() {
    resultList.forEach(function(item, i){
        console.log(item)
    })
        }

// Listeners
buttonStart.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
    startAudio.play();
    pauseAudio.pause();
    pauseAudio.currentTime = 0;
    stopAudio.pause(); 
    stopAudio.currentTime = 0;
})

buttonPause.addEventListener('click', () => {
clearInterval(interval)
stopAudio.pause(); 
stopAudio.currentTime = 0;
startAudio.pause(); 
startAudio.currentTime = 0;
pauseAudio.play()
})

buttonStop.addEventListener('click', () => {
    clearInterval(interval)
    hour = 0o0, 
    minute = 0o0, 
    second = 0o0,
    millisecond = 0o0, 
    hourElement.textContent = '00'
    minuteElement.textContent = '00'
    secondElement.textContent = '00'
    millisecondElement.textContent = '00'
    stopAudio.play()
    startAudio.pause(); 
    startAudio.currentTime = 0;
})

// Audio 
const minuteAudio = new Audio('./minuteElement.mp3')
const pauseAudio = new Audio('./pauseButton.mp3')
const stopAudio = new Audio('./stopButton.mp3')
const startAudio = new Audio('./startButton.mp3')
// Variables 
let hour = 0o0, 
    minute = 0o0, 
    second = 0o0,
    millisecond = 0o0, 
    interval

    function startTimer() {

        // Milliseconds
        millisecond++ 
        if(millisecond < 9 ){
        millisecondElement.innerText = "0" + millisecond
        }
        if(millisecond > 9){
            millisecondElement.innerText =  millisecond    
        }
        if(millisecond > 99 ){
            second++ 
            secondElement.innerText = "0" + second
            millisecond = 0 
            millisecondElement.innerText = "0" + millisecond
            }

        // Seconds
            if (second > 9){
                secondElement.innerText = second
            }
            if(second > 59 ){
                minuteAudio.play(); 
                minute++ 
                minuteElement.innerText = "0" + minute
                second = 0 
                secondElement.innerText = "0" + second
                }

        // Minutes
            if (minute < 9){
                minuteElement.innerText = "0" + minute
        }
        if(minute > 9){
            minuteElement.innerText =  minute    
        }
        if(minute > 59 ){
            hour++ 
            minuteElement.innerText = "0" + minute
            minute = 0 
            minuteElement.innerText = "0" + minute
            }

        // Hours
        if(hour < 9){
            hourElement.innerText = '0' + hour
        }
        if(hour > 9){
            hourElement.innerText = hour
        }
        if(hour > 24 ){
            minute++ 
            minuteElement.innerText = "0" + minute
            second = 0 
            secondElement.innerText = "0" + second
            }
 
    }        
    
    // Results block
 
   

    