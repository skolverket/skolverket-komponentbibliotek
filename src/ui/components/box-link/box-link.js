(() => {
  const BoxLink = function(el) {
    this.root = el
    this.link = this.root.querySelector('[data-js-box-link-headline-link]')
    this.url = this.link.getAttribute('href')

    this.registerEvents()
  }

  BoxLink.prototype = {

    classNames: {
      rootFocus: 'skv-box-link--focused'
    },

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
      this.root.classList.add(this.classNames.rootFocus)
    },

    onLinkBlur() {
      this.root.classList.remove(this.classNames.rootFocus)
    }

  }

  const components = document.querySelectorAll('[data-js-box-link]')

  for(let i=0; i < components.length; i++) {
    new BoxLink(components[i])
  }

})()
