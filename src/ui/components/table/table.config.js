const status = require('../../../dev/fractal/fractal-component-status')

module.exports = {
  status: status.prototype,
  name: 'Tabell',
  handle: 'table',
  context: {
    title: 'Lorem ipsum dolor sit amet',
    isMinimal: false
  },
  variants: [
    {
      name: 'minimal',
      context: {
        title: null,
        isMinimal: true
      }
    }
  ]
}
