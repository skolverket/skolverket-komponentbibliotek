const linkTypes = {
  internal: 'internal',
  external: 'external',
  page: 'page'
}

const layouts = {
  imageLink: 'imageLink',
  textLink: 'textLink'
}

const patterns = {
  greenSquares: 'green-squares',
  greenWaves: 'green-waves',
  purpleSquares: 'purple-squares',
  purpleWaves: 'purple-waves'
}

module.exports = {
  name: 'Boxlänk',
  handle: 'box-link',
  context: {
    url: '#',
    linkType: linkTypes.page,
    layout: layouts.imageLink,
    pattern: null,
    image: {
      src: '/styleguide/tmp/img/box-links/karlbergs_skola_fritidshem',
      alt: 'Karlbergs skola fritidshem'
    },
    headline: 'Digitalisering av de nationella proven genom successivt införande',
    teaser: null
  },
  variants: [
    {
      name: 'external',
      context: {
        url: 'http://google.se',
        linkType: linkTypes.external,
        layout: layouts.textLink,
        pattern: patterns.greenSquares,
        image: null,
        teaser: 'Vi arbetar för att digitalisera de nationella proven och möjliggöra extern bedömning. Redan från hösten 2018 ska skolorna använda <strong>digitala enheter</strong> vid vissa prov'
      }
    }
  ]
}
