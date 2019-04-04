const createFocusTrap = require('focus-trap');
require('classlist-polyfill');

(() => {
  const Navigation = function(element) {
    this.root = element;
    this.expanded = false;
    this.hasChildLinksItems = this.root.querySelectorAll(
      '.skv-navigation__list--level-2 .skv-navigation__list-item--has-child-links'
    );
    this.mainToggleButton = this.root.querySelector(
      '.skv-navigation__main-toggle-button'
    );
    this.setupUI();
    this.registerEvents();
  };

  Navigation.prototype = {
    setupUI() {
      this.createMaintoggleButton();
      this.createTopLevelButtons();
      this.createToggleButtons();
    },

    registerEvents() {
      window.addEventListener('resize', this.resetHeight.bind(this));
      this.root.addEventListener('keydown', this.onKeyDown.bind(this));
      this.root.addEventListener('scroll', this.onScroll.bind(this));
      this.root.addEventListener(
        'transitionend',
        this.onTransitionEnd.bind(this)
      );
    },

    onScroll(event) {
      if (event.target.scrollTop !== 0) {
        this.root.classList.add('skv-navigation--scrolled');
      } else {
        this.root.classList.remove('skv-navigation--scrolled');
      }
    },

    onKeyDown(event) {
      if (event.keyCode === 27) {
        const srcElement = event.srcElement;
        const list = srcElement.parentElement.parentElement;

        if (
          srcElement.classList.contains('skv-navigation__list-toggle-button') &&
          srcElement.getAttribute('aria-expanded') == 'true'
        ) {
          event.srcElement.click();
          event.srcElement.focus();
          return;
        }

        if (list.classList.contains('skv-navigation__list--level-2')) {
          const button = list.parentElement.querySelector('button');
          button.click();
          button.focus();
          return;
        }

        if (list.classList.contains('skv-navigation__list')) {
          this.closeOpenLists('.skv-navigation__list--level-2', true);
        }
      }
    },

    resetHeight() {
      if (!this.isDesktop() && this.root.style['height']) {
        this.root.classList.remove('skv-navigation--open');
        this.root.removeAttribute('style');
        this.closeOpenLists('.skv-navigation__list--level-1');
      }
    },

    createMaintoggleButton() {
      this.mainToggleButton = document.createElement('button');
      const list = this.root.querySelector('ul');
      this.mainToggleButton.classList.add('skv-navigation__main-toggle-button');
      this.mainToggleButton.innerHTML = `<span class="skv-navigation__main-toggle-button-text skv-navigation__main-toggle-button-text--open">Meny</span><span class="skv-navigation__main-toggle-button-text skv-navigation__main-toggle-button-text--close">Stäng</span>`;
      this.mainToggleButton.setAttribute('aria-expanded', false);
      this.mainToggleButton.setAttribute('aria-haspopup', true);
      this.root.insertBefore(this.mainToggleButton, list);
      this.mainToggleButton.addEventListener(
        'click',
        this.toggleNavigation.bind(this),
        false
      );
    },

    createTopLevelButtons() {
      const topLevelElements = document.querySelectorAll(
        '.skv-navigation__list--level-1 > .skv-navigation__list-item'
      );

      for (var i = 0; i < topLevelElements.length; i++) {
        const element = topLevelElements[i];

        const svg = element.querySelector('.skv-icon');
        const list = element.querySelector('.skv-navigation__list');
        const text = element.querySelector('.skv-navigation__list-item-text');
        text.appendChild(svg);

        const button = document.createElement('button');
        button.classList.add('skv-navigation__list-toggle-button');
        button.appendChild(text);

        button.setAttribute('aria-expanded', false);
        button.setAttribute('aria-haspopup', true);
        element.insertBefore(button, list);

        button.addEventListener(
          'click',
          this.onTopLevelButtonClick.bind(this),
          false
        );
      }
    },

    createToggleButtons() {
      for (var i = 0; i < this.hasChildLinksItems.length; i++) {
        const element = this.hasChildLinksItems[i];
        const link = element.querySelector('.skv-navigation__list-item-link');
        const svg = element.querySelector('.skv-icon');
        const button = document.createElement('button');
        button.classList.add('skv-navigation__list-item-toggle-button');
        button.appendChild(svg);
        if (element.classList.contains('skv-navigation__list-item--path')) {
          button.setAttribute('aria-expanded', true);
        } else {
          button.setAttribute('aria-expanded', false);
        }
        button.setAttribute('aria-haspopup', true);
        link.parentNode.insertBefore(button, link.nextSibling);

        button.addEventListener(
          'click',
          this.onToggleButtonClick.bind(this),
          false
        );
      }
    },

    isDesktop() {
      return window.getComputedStyle(this.mainToggleButton).display === 'none';
    },

    closeOpenLists(level, setFocus) {
      const buttons = this.root.querySelectorAll(
        `${level}>li>button[aria-expanded=true]`
      );

      if (buttons) {
        for (var i = 0; i < buttons.length; i++) {
          const button = buttons[i];
          button.parentElement
            .querySelector('.skv-navigation__list')
            .classList.add('skv-navigation__list-item--collapse');
          button.setAttribute('aria-expanded', false);
          if (setFocus) {
            button.focus();
          }
        }
      }
    },

    setRootLevelHeight(levelTwoList) {
      const levelThreeList = levelTwoList.querySelector(
        '.skv-navigation__list-item--open'
      );

      const topLevelHeight = levelTwoList.parentNode.getBoundingClientRect()
        .height;
      const levelTwoListHeight = levelTwoList.getBoundingClientRect().height;
      const levelThreeListHeight = levelThreeList
        ? levelThreeList.getBoundingClientRect().height
        : 0;

      return (
        Math.max(levelTwoListHeight, levelThreeListHeight) + topLevelHeight
      );
    },

    onTopLevelButtonClick(event) {
      const button =
        event.target.nodeName === 'SPAN'
          ? event.target.parentElement
          : event.target;
      const listItem = button.parentElement;
      const childList = button.parentNode.querySelector(
        '.skv-navigation__list'
      );

      if (button.getAttribute('aria-expanded') == 'false') {
        if (this.isDesktop()) {
          this.closeOpenLists('.skv-navigation__list--level-1');
        }
        button.setAttribute('aria-expanded', true);
        childList.classList.remove('skv-navigation__list-item--collapse');
        childList.classList.add('skv-navigation__list-item--open');
        if (this.isDesktop()) {
          this.root.classList.add('skv-navigation--open');
          this.root.style.height = `${this.setRootLevelHeight(childList)}px`;
        }
      } else {
        button.setAttribute('aria-expanded', false);
        childList.classList.add('skv-navigation__list-item--collapse');
        this.root.removeAttribute('style');
        if (this.isDesktop()) {
          this.root.classList.remove('skv-navigation--open');
        }
      }
    },

    toggleNavigation(event) {
      const button =
        event.target.nodeName === 'SPAN'
          ? event.target.parentElement
          : event.target;
      if (button.getAttribute('aria-expanded') == 'true') {
        this.focusTrap.deactivate();
        button.setAttribute('aria-expanded', false);
      } else {
        this.focusTrap = createFocusTrap('.skv-navigation');
        this.focusTrap.activate();
        if (!this.expanded) {
          this.expanded = true;
          const levelOnePathButton = this.root.querySelector(
            '.skv-navigation__list--level-1 > .skv-navigation__list-item--path > .skv-navigation__list-toggle-button'
          );

          if (levelOnePathButton) {
            levelOnePathButton.click();
          }
        }
        button.setAttribute('aria-expanded', true);
      }
      document.body.classList.toggle('skv-navigation-body--open');
      this.root.classList.toggle('skv-navigation--open');
    },

    onToggleButtonClick(event) {
      const button = event.target;
      const childList = button.parentNode.querySelector(
        '.skv-navigation__list'
      );

      if (button.getAttribute('aria-expanded') == 'false') {
        if (this.isDesktop()) {
          this.closeOpenLists('.skv-navigation__list--level-2');
        }
        button.setAttribute('aria-expanded', true);
        childList.classList.remove('skv-navigation__list-item--collapse');
        childList.classList.add('skv-navigation__list-item--open');
      } else {
        button.setAttribute('aria-expanded', false);
        childList.classList.add('skv-navigation__list-item--collapse');
      }
    },

    onTransitionEnd(event) {
      const srcElementClassList = event.srcElement.classList;

      if (
        srcElementClassList &&
        srcElementClassList.contains('skv-navigation__list') &&
        srcElementClassList.contains('skv-navigation__list-item--collapse')
      ) {
        srcElementClassList.remove('skv-navigation__list-item--open');

        if (srcElementClassList.contains('skv-navigation__list--level-3')) {
          if (this.isDesktop()) {
            this.root.style.height = `${this.setRootLevelHeight(
              event.srcElement.parentElement.parentElement
            )}px`;
          }
        }
      }

      if (
        this.isDesktop() &&
        srcElementClassList &&
        srcElementClassList.contains('skv-navigation__list') &&
        srcElementClassList.contains('skv-navigation__list-item--open') &&
        srcElementClassList.contains('skv-navigation__list--level-3')
      ) {
        this.root.style.height = `${this.setRootLevelHeight(
          event.srcElement.parentElement.parentElement
        )}px`;
      }

      if (
        srcElementClassList.contains('skv-navigation') &&
        !srcElementClassList.contains('skv-navigation--open') &&
        event.propertyName === 'height'
      ) {
        this.closeOpenLists('.skv-navigation');
      }
    }
  };

  const navigation = document.getElementById('main-navigation');
  if (navigation) {
    new Navigation(navigation);
  }
})();
