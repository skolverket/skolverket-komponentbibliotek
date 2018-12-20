module.exports = {
  name: 'Visa/Dölj',
  handle: 'reveal',
  context: {
    id: 1321,
    title: 'Lorem ipsum dolor sit amet',
    toggleCloseText: 'Dölj',
    toggleOpenText: 'Visa',
    expanded: false,
    body: 'rich-text',
  },
  variants: [
    {
      name: 'nojs',
      hidden: true
    },
    {
      name: 'expanded',
      context: {
        expanded: true
      }
    }
  ]
}
