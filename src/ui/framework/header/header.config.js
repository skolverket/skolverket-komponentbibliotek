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
        text: 'Innehåll A-Ö',
        url: '#',
        type: 'content-a-to-o'
      },
      {
        text: 'Lyssna',
        url: '#',
        type: 'listen'
      },
      {
        text: 'Languages',
        url: '#',
        type: 'translate',
        lang: 'en'
      },
      {
        text: 'Sök',
        url: '#',
        type: 'search'
      }
    ]
  }
};
