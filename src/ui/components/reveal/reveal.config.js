module.exports = {
  name: 'Visa/Dölj',
  handle: 'reveal',
  status: 'done',
  default: 'Standard',
  context: {
    id: 1321,
    title: 'Lorem ipsum dolor sit amet',
    toggleCloseText: 'Dölj',
    toggleOpenText: 'Visa',
    expanded: false
  },
  variants: [
    {
      name: 'nojs',
      hidden: true
    },
    {
      name: 'expanded',
      label: 'Utfälld',
      context: {
        expanded: true
      }
    }
  ]
};
