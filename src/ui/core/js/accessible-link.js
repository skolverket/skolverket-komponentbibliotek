// For documentation - see /styleguide/docs/kod/core/accessible-links

(() => {
  const AccessibleLink = function(el) {
    this.root = el
    this.link = this.root.querySelector('[data-js-accessible-link-url]')
    this.url = this.link.getAttribute('href')
    this.rootFocusClass = this.root.getAttribute('data-js-accessible-link-focus-class')

    this.registerEvents()
  }

  AccessibleLink.prototype = {

    registerEvents() {
      this.onRootClick = this.onRootClick.bind(this)
      this.onLinkFocus = this.onLinkFocus.bind(this)
      this.onLinkBlur = this.onLinkBlur.bind(this)

      this.root.addEventListener('click', this.onRootClick)
      this.link.addEventListener('focus', this.onLinkFocus)
      this.link.addEventListener('blur', this.onLinkBlur)
    },

    onRootClick() {
      window.location.href = this.url
    },

    onLinkFocus() {
      this.root.classList.add(this.rootFocusClass)
    },

    onLinkBlur() {
      this.root.classList.remove(this.rootFocusClass)
    }

  }

  const components = document.querySelectorAll('[data-js-accessible-link]')

  for(let i=0; i < components.length; i++) {
    new AccessibleLink(components[i])
  }

})()
