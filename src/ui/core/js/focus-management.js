document.addEventListener('keydown', function(event) {
  if (!event.metaKey) {
    document.querySelector('body').classList.add('show-focus-outlines');
  }
});

document.addEventListener('mousedown', function(event) {
  if (event.clientX) {
    document.querySelector('body').classList.remove('show-focus-outlines');
  }
});
