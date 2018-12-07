const mandelbrot = require('@frctl/mandelbrot');
const process = require('process');
const PRODUCTION = process.env.NODE_ENV === 'production';
const rootUrl = PRODUCTION ? '' : '/styleguide';

const customTheme = mandelbrot({
  skin: "black",
  nav: ['docs', 'components'],
  panels: ["notes", "resources", "context", "view", "html", "info"],
  styles: ['default', '/theme/main.css']
}, rootUrl);

customTheme.addLoadPath(__dirname + '/views');
customTheme.addStatic(__dirname + '/assets', '/theme');

module.exports = customTheme;
