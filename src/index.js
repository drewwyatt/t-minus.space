'use strict';

require('ace-css/css/ace.css');
require('font-awesome/css/font-awesome.css');

// Require index.html so it gets copied to dist
require('./index.html');

const Elm = require('./main.elm');
const mountNode = document.getElementById('main');

const app = Elm.Main.embed(mountNode);