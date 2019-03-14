const files = [
  {
    note: 'Added displayName as property on the entity object',
    path: '../../node_modules/@frctl/fractal/src/core/mixins/entity.js',
    patches: [
      {
        pattern: `this.name = utils.slugify(name.toLowerCase());\n        this.handle`,
        replace: `this.name = utils.slugify(name.toLowerCase());\n        this.displayName = name.charAt(0).toUpperCase() + name.substr(1).replace(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g, ' ').toLowerCase();\n        this.handle`
      }
    ]
  },
  {
    note: 'Documenation model now uses displayName instead of label',
    path: '../../node_modules/@frctl/fractal/src/api/docs/doc.js',
    patches: [
      {
        pattern: `return config.title || this.label;`,
        replace: `return config.title || this.displayName;`
      }
    ]
  },
  {
    note: 'Fractals routes is now prefixed with "/styleguide/" during development',
    path: '../../node_modules/@frctl/mandelbrot/src/theme.js',
    patches: [
      {
        pattern: `module.exports = function(options){`,
        replace: `module.exports = function(options, rootUrl){`
      },
      {
        pattern: `theme.addRoute('`,
        replace: `theme.addRoute(rootUrl + '`
      },
      {
        pattern: `theme.addRoute(rootUrl + '/', {`,
        replace: `theme.addRoute('/', {`
      }
    ]
  },
  {
    note: 'Renamed navigation titles',
    path: '../../node_modules/@frctl/fractal/config.js',
    patches: [
      {
        pattern: `label: 'components',`,
        replace: `label: 'exempel',`
      },
      {
        pattern: `title: 'Components',`,
        replace: `title: 'Exempel',`
      },
      {
        pattern: `label: 'documentation',`,
        replace: `label: 'dokumentation',`
      },
      {
        pattern: `title: 'Documentation',`,
        replace: `title: 'Dokumentation',`
      }
    ]
  }
]

module.exports = files
