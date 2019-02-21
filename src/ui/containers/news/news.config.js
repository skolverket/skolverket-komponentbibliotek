module.exports = {
  name: 'Nyhetslista',
  handle: 'news-list',
  status: 'wip',
  context: {
    title: 'Nyhetslista',
    items: [
      {
        date: '14 april',
        link: {
          label: 'Glad påsk!',
          url: 'glad-pask'
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
        date: '24 december 2018',
        link: {
          label: 'Amet sit dolor ipsum lorem',
          url: 'amet-sit-dolor-ipsum-lorem'
        }
      },
      {
        date: '31 december 2018',
        link: {
          label: 'Gott nytt år!',
          url: 'gott-nytt-ar'
        }
      }
    ]
  },
  variants: [
    {
      name: "Utan titel",
      handle: "without-title",
      context: {
        title: null
      }
    }
  ] 
}
