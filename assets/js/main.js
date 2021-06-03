// 'btn' Click to animate the hour assistant above
const canAnimate = document.querySelector('#canAnimate');
const divCheck = document.querySelector('#divCheck');

// the assistant element
const hourAssistant = document.querySelector('.hour-assistant');

// the checkbox label than show the message 'HOUR ASSISTANT ANIMATION'
const optionCanAnimate = document.querySelector('.optionCanAnimate');

// active/disable the animations
canAnimate.addEventListener('click', toggleAnimation);
divCheck.addEventListener('click', toggleAnimation);

function toggleAnimation(){
    hourAssistant.classList.toggle('pauseAnimation');
    optionCanAnimate.classList.toggle('active');
}