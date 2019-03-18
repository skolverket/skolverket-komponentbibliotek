module.exports = {
  name: 'Largepuff',
  status: 'done',
  default: 'Standard',
  context: {
    background: '/styleguide/tmp/img/bildstartsida.png',
    title: 'En lång rubrik som sträcker sig över flera rader',
    url: '#',
    shouldOverlap: false
  },
  variants: [
    {
      name: 'Utan titel',
      context: {
        title: null,
        background: '/styleguide/tmp/img/bildstartsida.png'
      }
    }
  ]
};
