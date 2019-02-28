(() => {
  const Banner = function(el) {
    this.root = el
    this.dismissButton = el.querySelector('button')
    this.container = el.querySelector('[data-js-banner-container]')

    this.registerEvents()
    this.dismissButton.classList.remove('visually-hidden')
  }

  Banner.prototype = {
    registerEvents() {
      this.onDismissClick = this.onDismissClick.bind(this)

      this.dismissButton.addEventListener('click', this.onDismissClick)
    },

    onDismissClick() {
      this.root.parentNode.removeChild(this.root)
    }
  }

  const components = document.querySelectorAll('[data-js-banner--dismissable]')

  for(let i=0; i < components.length; i++) {
    new Banner(components[i])
  }
})()
