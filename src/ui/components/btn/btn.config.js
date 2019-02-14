module.exports = {
  status: 'done',
  name: 'Knappar',
  handle: 'btn',
  context: {
    theme: 'primary',
    text: 'Knapp',
    disabled: false,
    small: false,
    block: false
  },
  variants: [
    {
      name: 'theme-secondary',
      context: {
        theme: 'secondary'
      }
    },
    {
      name: 'disabled',
      context: {
        disabled: true
      }
    },
    {
      name: 'small',
      context: {
        small: true
      }
    },
    {
      name: 'block',
      context: {
        block: true
      }
    },
    {
      name: 'small-block',
      context: {
        small: true,
        block: true
      }
    }
  ]
}
