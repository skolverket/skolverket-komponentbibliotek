module.exports = {
  name: 'Tabell',
  handle: 'table',
  default: 'Standard',
  context: {
    title: 'Lorem ipsum dolor sit amet',
    isMinimal: false
  },
  variants: [
    {
      name: 'Minimal',
      context: {
        title: null,
        isMinimal: true
      }
    }
  ]
};
