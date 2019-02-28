module.exports = {
  name: 'Understartsida',
  preview: '@layout--page--with-banner',
  context: {
    heroTitle: null,
    sectionNavModel: {
      shouldOverlap: true
    },
    globalBanner: {
      global: true,
      dismissable: true
    },
    banner: {
      dismissable: false
    },
    reveal: {
     title: 'Lorem ipsum dolor sit amet',
     body: 'table--minimal',
     expanded: true
    }
  }
}
