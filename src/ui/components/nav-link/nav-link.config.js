module.exports = {
  name: 'Länk',
  handle: 'nav-link',
  context: {
    url: '#',
    label: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    icon: 'chevron-right'
  },
  variants: [
    {
      name: 'Extern',
      context: {
        label: 'Navigera till extern sida',
        icon: 'external'
      }
    },
    {
      label: 'Ljus',
      name: 'light',
      context: {
        theme: 'light'
      }
    }
  ]
}
