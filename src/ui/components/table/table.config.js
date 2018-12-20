module.exports = {
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
