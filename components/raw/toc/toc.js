const button = document.querySelectorAll('.skv-toc__toggle-button')[0];
if (button) {
  button.addEventListener('click', function() {
    this.closest('.skv-toc').classList.toggle('skv-toc--open');
  });
}

const links = document.querySelectorAll('.skv-toc__list-item-link');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    const selected = document.querySelectorAll(
      '.skv-toc__list-item-link--selected'
    )[0];
    if (selected) {
      selected.classList.toggle('skv-toc__list-item-link--selected');
    }
    this.classList.toggle('skv-toc__list-item-link--selected');
  });
}
