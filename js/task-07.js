const ranger = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

ranger.setAttribute('min', "4");
ranger.setAttribute('max', "100");
ranger.setAttribute('step', "1");


ranger.addEventListener('input', event => text.style.fontSize = event.currentTarget.value + 'px');
