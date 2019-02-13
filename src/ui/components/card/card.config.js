const status = require('../../../dev/fractal/fractal-component-status')

const linkTypes = {
  internal: 'internal',
  external: 'external',
  anchor: 'anchor'
}

module.exports = {
  status: status.prototype,
  name: 'kort',
  handle: 'card',
  context: {
    url: '#',
    image: null,
    linkType:linkTypes.internal,
    preHeadline: null,
    headline: 'Så förbättrade Dalhemsskolan elevernas resultat',
    teaser: 'Mellan 2016 och 2018 deltog Dalhemsskolan i Skolverkets satsning Samverkan för bästa skola. Tio medarbetare berättar hur de utvecklat verksamheten för att bättre kunna möta elevernas behov.'
  },
  variants: [
    {
      name: 'image',
      context: {
        image: {
          src: '/styleguide/tmp/img/graphics/student.jpg',
          alt: 'Ung flicka som studerar'
        },
        linkType:linkTypes.external,
        headline: 'Skillnader mellan provresultat och betyg i gymnasieskolan',
        teaser: null
      }
    },
    {
      name: 'with-graphics-charts',
      context: {
        image: {
          src: '/styleguide/tmp/img/graphics/graphics-charts.png',
          alt: 'Abstrakt grafik på ett diagram'
        },
        linkType:linkTypes.internal,
        headline: 'Statistik över betyg inom gymnasieskolan 2018',
        teaser: null
      }
    },
    {
      name: 'with-graphics-computer',
      context: {
        image: {
          src: '/styleguide/tmp/img/graphics/graphics-computer.png',
          alt: 'Abstrakt grafik på en dator'
        },
        linkType:linkTypes.internal,
        preHeadline: 'Webbkurs',
        headline: 'Identitet, jämställdhet och digitalisering i förskolan',
        teaser: null
      }
    },
    {
      name: 'with-graphics-calendar',
      context: {
        image: {
          src: '/styleguide/tmp/img/graphics/graphics-calendar.png',
          alt: 'Abstrakt grafik på en kalender'
        },
        linkType:linkTypes.internal,
        preHeadline: '15 januari 2019',
        headline: 'Webbinarium om Specialpedagogik för lärande',
        teaser: null
      }
    }
  ]
}
