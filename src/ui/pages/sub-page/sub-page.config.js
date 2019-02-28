module.exports = {
  name: 'Understartsida',
  preview: '@layout--page',
  context: {
    heroTitle: null,
    sectionNavModel: {
      shouldOverlap: true
    },
    globalBanner: {
      type: 'error',
      dismissable: true,
      local: false
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
