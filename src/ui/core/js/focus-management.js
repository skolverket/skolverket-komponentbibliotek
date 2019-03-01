document.addEventListener('keydown', function(event) {
  if (event.keyCode === 9) { // Tab
    document.querySelector('body').classList.add('show-focus-outlines');
  }
});

document.addEventListener('click', function(event) {
  if(event.clientX) { // Tab
    document.querySelector('body').classList.remove('show-focus-outlines');
  }
});
