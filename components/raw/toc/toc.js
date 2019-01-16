(() => {
  const TOC = function(el) {
    this.root = el;
    this.headings = document.querySelectorAll('.toc-heading');
    this.inner = this.root.querySelectorAll('.skv-toc__inner')[0];
    this.tocLinks = this.root.querySelectorAll('.skv-toc__list-item-link');
    this.toggleButton = this.root.querySelectorAll(
      '.skv-toc__toggle-button'
    )[0];
    this.closeButton = this.root.querySelectorAll('.skv-toc__close-button')[0];
    this.isExpanded = false;
    this.hasNotified = false;
    this.fixButton();

    this.setupUI();
    this.registerEvents();
  };

  TOC.prototype = {
    classList: {
      tocOpen: 'skv-toc--open',
      tocAnimateIn: 'skv-toc--animate-in',
      tocAnimateOut: 'skv-toc--animate-out',
      tocAnimateBump: 'skv-toc__toggle-button--animate-bump'
    },

    setupUI() {
      this.toggleButton.setAttribute('aria-expanded', this.isExpanded);
      this.toggleButton.classList.add(this.classList.tocAnimateBump);
    },

    registerEvents() {
      this.root.addEventListener('keydown', this.onKeyDown.bind(this));
      this.toggleButton.addEventListener(
        'click',
        this.onToggleButtonClick.bind(this)
      );
      this.closeButton.addEventListener(
        'click',
        this.onToggleButtonClick.bind(this)
      );

      this.inner.addEventListener(
        'transitionend',
        this.onTransitionEnd.bind(this)
      );

      for (var i = 0; i < this.tocLinks.length; i++) {
        this.tocLinks[i].addEventListener(
          'click',
          this.onLinksClick.bind(this)
        );
      }

      window.addEventListener('scroll', this.onScroll.bind(this));
    },

    onScroll() {
      this.updateToc();
      this.fixButton();
    },

    onKeyDown(e) {
      if (this.isExpanded && e.keyCode === 27) {
        this.toggleButton.click();
      }
    },

    onToggleButtonClick() {
      this.toggleButton.setAttribute('aria-expanded', !this.isExpanded);

      if (this.isExpanded) {
        this.root.classList.remove(this.classList.tocOpen);
        this.root.classList.add(this.classList.tocAnimateOut);
      } else {
        this.root.classList.add(this.classList.tocAnimateIn);
      }
      this.isExpanded = !this.isExpanded;
    },

    onTransitionEnd() {
      if (this.toggleButton.classList.contains(this.classList.tocAnimateBump)) {
        this.toggleButton.classList.remove(this.classList.tocAnimateBump);
      }
      if (this.root.classList.contains(this.classList.tocAnimateOut)) {
        this.root.classList.remove(this.classList.tocAnimateOut);
      } else {
        this.root.classList.add(this.classList.tocOpen);
        this.root.classList.remove(this.classList.tocAnimateIn);
      }
    },

    onCloseButtonClick() {
      this.toggleButton.click();
    },

    fixButton() {
      const offset = this.root.getBoundingClientRect();
      if (offset.top < 0) {
        this.root.classList.add('fixed');
      } else {
        this.root.classList.remove('fixed');
      }
    },

    findTopHeading() {
      let topHeading;
      for (var i = 0; i < this.headings.length; i++) {
        const offset = this.headings[i].getBoundingClientRect();
        if (offset.top < 20) {
          topHeading = i;
        }
      }
      return this.headings[topHeading];
    },

    findLinksInToc(target) {
      return document.querySelectorAll('a[href$="#' + target + '"]');
    },

    updateToc() {
      const topHeading = this.findTopHeading();
      const selected = this.root.querySelectorAll(
        '.skv-toc__list-item-link--selected'
      );
      if (selected) {
        for (var i = 0; i < selected.length; i++) {
          selected[i].classList.remove('skv-toc__list-item-link--selected');
        }
      }
      if (topHeading) {
        const links = this.findLinksInToc(topHeading.id);
        for (var i = 0; i < links.length; i++) {
          links[i].classList.add('skv-toc__list-item-link--selected');
        }
      }
    },

    onLinksClick() {
      if (this.isExpanded) {
        this.toggleButton.click();
      }
    }
  };

  const components = document.querySelectorAll('[data-js-toc]');

  for (let i = 0; i < components.length; i++) {
    new TOC(components[i]);
  }
})();
