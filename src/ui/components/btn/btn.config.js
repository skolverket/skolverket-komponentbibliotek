module.exports = {
  name: 'Knappar',
  handle: 'btn',
  default: 'Primär',
  context: {
    theme: 'primary',
    text: 'Knapp',
    disabled: false,
    small: false,
    block: false
  },
  variants: [
    {
      label: 'Sekundär',
      name: 'secondary',
      context: {
        theme: 'secondary'
      }
    },
    {
      label: 'Inaktiv',
      name: 'disabled',
      context: {
        disabled: true
      }
    },
    {
      label: 'Liten',
      name: 'small',
      context: {
        small: true
      }
    },
    {
      label: 'Fullbredd',
      name: 'block',
      context: {
        block: true
      }
    },
    {
      label: 'Fullbred, liten',
      name: 'small-block',
      context: {
        small: true,
        block: true
      }
    }
  ]
};
