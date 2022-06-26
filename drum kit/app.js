window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keycode}"]`);
    const key = document.querySelector(`key[data-key="${e.keycode}"]`);
    if(!audio) return; //stop function running
    audio.currentTime = 0; //rewind to start
    audio.play();
    key.addClass('playing');
    key.classList.add('playing');
    });