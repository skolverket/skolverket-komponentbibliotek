module.exports = {
  name: 'Understartsida',
  preview: '@layout--page',
  context: {
    heroTitle: null,
    sectionNavModel: {
      shouldOverlap: true
    },
    globalBanner: {
      type: 'warning',
      dismissable: true,
      title: 'Det här är en global varning. Information.',
      body: null,
      link: null
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
