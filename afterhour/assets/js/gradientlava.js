const MIN_RADIUS = 50;
const MAX_RADIUS = 300;
const ANIMATION_DURATION_MIN_S = 3;
const ANIMATION_DURATION_MAX_S = 15;
const TOTAL_ELEMENTS = 20;

const body = document.querySelector('body');

const resetElement = (element) => {
  const radius = Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS;
  element.style.width = element.style.height = radius + 'px';
  element.style.left = (Math.random() * window.innerWidth) + 'px';
  element.style.top = (Math.random() * window.innerHeight) + 'px';
  element.style.animationDuration =  ANIMATION_DURATION_MIN_S + 
    (Math.random() * (ANIMATION_DURATION_MAX_S - ANIMATION_DURATION_MIN_S)) + 's';
};

const createElement = () => {
    const circleElement = document.createElement('div');
    circleElement.classList.add('circle', 'animated');
    resetElement(circleElement);
    body.appendChild(circleElement);
  
    circleElement.addEventListener('webkitAnimationEnd', (e) => {
      body.removeChild(e.target);
      createElement();
    });
}

for(let i = 0; i < TOTAL_ELEMENTS; i++) {
    createElement();
}