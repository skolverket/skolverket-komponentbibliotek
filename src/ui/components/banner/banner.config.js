module.exports = {
  name: 'Banner',
  handle: 'banner',
  status: 'wip',
  context: {
    id: 'banner-1',
    type: 'info',
    title: 'En banner har en titel i fetstil',
    body: 'Och en brödtext. Aliquip sit minim duis cupidatat quis duis eiusmod excepteur. Ullamco fugiat fugiat sint aliqua culpa minim. Aute tempor mollit consectetur dolor cillum dolore. Ullamco proident mollit magna occaecat occaecat anim et',
    link: {
      label: 'Läs mer om hur vi hanterar cookies',
      url: '#'
    },
    dismissable: false
  },
  variants: [
    {
      name: 'Borttagbar',
      context: {
        title: 'Den här notisen har en stängknapp',
        dismissable: true
      }
    },
    {
      name: 'Konfirmering',
      context: {
        type: 'confirm',
        title: 'Ditt konto har skapats, du har fått ett bekräfteslemail',
        body: null,
        link: null,
      }
    },
    {
      name: 'Fel',
      context: {
        type: 'error',
        title: 'Något gick fel. Kontaka oss om problemet kvarstår',
        body: null,
        link: null
      }
    },
    {
      name: 'Varning',
      context: {
        type: 'warning',
        title: 'Vi har en del problem med sajten för tillfället',
        body: null,
        link: null
      }
    }
  ]
}
