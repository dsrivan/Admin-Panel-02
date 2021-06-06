// 'btn' Click to animate the hour assistant above
const lCanAnimate = document.querySelector('.lCanAnimate');
const divCheck = document.querySelector('.divCheck');

// active/disable the animations
lCanAnimate.addEventListener('click', toggleAnimation);
divCheck.addEventListener('click', toggleAnimation);

// the assistant element
const hourAssistant = document.querySelector('.hourAssistant');

// the checkbox label than show the message 'HOUR ASSISTANT ANIMATION'
const optionCanAnimate = document.querySelector('.optionCanAnimate');

function toggleAnimation(){
    hourAssistant.classList.toggle('pauseAnimation');
    optionCanAnimate.classList.toggle('active');
}