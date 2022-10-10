const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.key.toLowerCase()}"]`);
  const key = document.querySelector(`.key[data-key="${e.key.toLowerCase()}"]`);
  if(!audio) return; // stop function from running altogether
  audio.currentTime = 0; // rewind to start to allow spamming of button
  audio.play(); // play audio element
  key.classList.add('playing'); // jQuery equivalent is key.addClass('playing');
};

const removeTransition = (e) => {
  if(e.propertyName !== 'transform') return; // skip unless a transform transition
  e.target.classList.remove('playing');
};

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);