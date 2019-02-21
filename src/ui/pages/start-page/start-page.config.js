module.exports = {
  name: 'Startsida',
  handle: 'start-page',
  preview: '@layout--page',
  context: {
    heroModel: {
      title: 'Gå webbkursen om fritidshemmets uppdrag'
    },
    news: {
      title: null,
      items: [
        {
          date: '1 april 2019',
          link: {
            label: 'April april!',
            url: 'april-april'
          }
        },
        {
          date: '2 februari 2019',
          link: {
            label: 'Snart är det sommar!',
            url: 'snart-sommar'
          }
        },
        {
          date: '31 december 2018',
          link: {
            label: 'Gott nytt år!',
            url: 'gott-nytt-ar'
          }
        },
        {
          date: '24 december 2018',
          link: {
            label: 'Amet sit dolor ipsum lorem',
            url: 'amet-sit-dolor-ipsum-lorem'
          }
        },
        {
          date: '29 maj 2018',
          link: {
            label: 'Lorem ipsum dolor sit amet',
            url: 'lorem-ipsum-dolor-sit-amet',
          }
        },
        {
          date: '14 april',
          link: {
            label: 'Glad påsk!',
            url: 'glad-pask'
          }
        }
      ]
    }
  }
}
