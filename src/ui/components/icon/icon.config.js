const fs = require('fs');
const path = require('path');
const icons = fs.readdirSync(path.join(__dirname, '../../assets/svg'));

const getIconVariants = () => {
  return icons
    .filter(file => file.includes('.svg'))
    .map(icon => {
      const name = icon.split('.')[0];
      return { name, status: 'done', context: { name, label: null } };
    });
};

module.exports = {
  name: 'Ikoner',
  handle: 'icon',
  default: 'Alla',
  preview: '@layout--icon',
  context: {
    icons: getIconVariants()
  },
  variants: getIconVariants()
};
