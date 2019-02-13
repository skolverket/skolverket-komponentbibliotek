module.exports = {
  name: 'Sidhuvud',
  handle: 'header',
  context: {
    rootUrl: '#',
    logo: {
      src: '/styleguide/assets/img/skolverket-logotype.svg',
      alt: 'Skolverket'
    },
    utilities: [
      {
        text: 'Lyssna',
        url: '#',
        type: 'listen'
      },
      {
        text: 'Languages',
        url: '#',
        type: 'translate'
      },
      {
        text: 'Sök',
        url: '#',
        type: 'search'
      }
    ]
  }
};
