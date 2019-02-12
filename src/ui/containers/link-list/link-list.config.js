const status = require('../../../dev/fractal/fractal-component-status')

module.exports = {
  status: status.prototype,
  name: 'Länklista',
  handle: 'link-list',
  context: {
    outlined: false,
    title: 'Många frågar om...',
    links: [
      {
        url: '#',
        text: 'Bedömningsportalen'
      },
      {
        url: '#',
        text: 'För det vidare'
      },
      {
        url: '#',
        text: 'Jämförelseportalen'
      },
      {
        url: '#',
        text: 'Lärportalen'
      }
    ]
  },
  variants: [
    {
      name: 'outlined',
      context: {
        title: 'Ta mig till...',
        outlined: true,
        links: [
          {
            url: '#',
            text: 'Lärarlegitimation'
          },
          {
            url: '#',
            text: 'Särskilt stöd'
          },
          {
            url: '#',
            text: 'Trygghet i skolan'
          },
          {
            url: '#',
            text: 'Nationella prov'
          }
        ]
      }
    }
  ]
}
