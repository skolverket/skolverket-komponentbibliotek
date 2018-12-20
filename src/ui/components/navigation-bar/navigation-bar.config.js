const status = require('../../../dev/fractal/fractal-component-status')

module.exports = {
  status: status.prototype,
  name: 'Många frågor om...',
  handle: 'navigation-bar',
  context: {
    title: 'Många frågar om...',
    links: [
      {
        label: 'Lärarlegitimation',
        url: '#'
      },
      {
        label: 'Särskilt stöd',
        url: '#'
      },
      {
        label: 'Trygghet i skolan',
        url: '#'
      },
      {
        label: 'Nationella prov',
        url: '#'
      }
    ]
  }
}
