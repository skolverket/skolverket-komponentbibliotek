module.exports = {
  name: 'Banner',
  handle: 'banner',
  status: 'wip',
  context: {
    theme: 'info',
    icon: 'info',
    message: 'Aliquip sit minim duis cupidatat quis duis eiusmod excepteur. Ullamco fugiat fugiat sint aliqua culpa minim. Aute tempor mollit consectetur dolor cillum dolore. Ullamco proident mollit magna occaecat occaecat anim et',
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
        theme: 'confirm',
        icon: 'confirm'
      }
    },
    {
      name: 'Fel',
      context: {
        theme: 'error',
        icon: 'error'
      }
    },
    {
      name: 'Varning',
      context: {
        theme: 'warning',
        icon: 'warning'
      }
    }
  ]
}
