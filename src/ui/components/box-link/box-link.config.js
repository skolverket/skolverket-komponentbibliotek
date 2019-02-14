const linkTypes = {
  internal: 'internal',
  external: 'external',
  anchor: 'anchor'
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
  status: 'done',
  context: {
    url: '#',
    linkType: linkTypes.internal,
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
      name: 'external-link',
      context: {
        url: 'http://google.se',
        linkType: linkTypes.external
      }
    },
    {
      name: 'text-link-green-squares',
      context: {
        layout: layouts.textLink,
        pattern: patterns.greenSquares,
        image: null,
        teaser: 'Vi arbetar för att digitalisera de nationella proven och möjliggöra extern bedömning. Redan från hösten 2018 ska skolorna använda <strong>digitala enheter</strong> vid vissa prov'
      }
    },
    {
      name: 'text-link-green-waves',
      context: {
        layout: layouts.textLink,
        pattern: patterns.greenWaves,
        image: null,
        teaser: 'Vi arbetar för att digitalisera de nationella proven och möjliggöra extern bedömning. Redan från hösten 2018 ska skolorna använda <strong>digitala enheter</strong> vid vissa prov'
      }
    },
    {
      name: 'text-link-purple-squares',
      context: {
        layout: layouts.textLink,
        pattern: patterns.purpleSquares,
        image: null,
        teaser: 'Vi arbetar för att digitalisera de nationella proven och möjliggöra extern bedömning. Redan från hösten 2018 ska skolorna använda <strong>digitala enheter</strong> vid vissa prov'
      }
    },
    {
      name: 'text-link-purple-waves',
      context: {
        layout: layouts.textLink,
        pattern: patterns.purpleWaves,
        image: null,
        teaser: 'Vi arbetar för att digitalisera de nationella proven och möjliggöra extern bedömning. Redan från hösten 2018 ska skolorna använda <strong>digitala enheter</strong> vid vissa prov'
      }
    }
  ]
}
