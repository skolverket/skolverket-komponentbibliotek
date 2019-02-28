module.exports = {
  name: 'Sidlayout'
  handle: 'page--layout',
  context: {
    globalBanner: null
  },
  variants: [
    {
      name: 'Med global banner',
      handle: 'page--layout--with-banner',
      context: {
        globalBanner: {
          message: 'lorem ipsum',
          local: false
        }
      }
    }
  ]
}
