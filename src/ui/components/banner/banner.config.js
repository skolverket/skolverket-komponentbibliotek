module.exports = {
  name: 'Banner',
  handle: 'banner',
  status: 'wip',
  context: {
    id: 'banner-1',
    type: 'info',
    title: 'Lorem ipsum dolor sit amet',
    body: 'Aliquip sit minim duis cupidatat quis duis eiusmod excepteur. Ullamco fugiat fugiat sint aliqua culpa minim. Aute tempor mollit consectetur dolor cillum dolore. Ullamco proident mollit magna occaecat occaecat anim et',
    link: {
      label: 'Läs mer',
      url: '#'
    },
    dismissable: false
  },
  variants: [
    {
      name: 'Borttagbar',
      context: {
        dismissable: true
      }
    },
    {
      name: 'Konfirmering',
      context: {
        type: 'confirm',
        body: null,
        link: null
      }
    },
    {
      name: 'Fel',
      context: {
        type: 'error',
        body: null,
        link: null
      }
    },
    {
      name: 'Varning',
      context: {
        type: 'warning',
        body: null,
        link: null
      }
    }
  ]
}
