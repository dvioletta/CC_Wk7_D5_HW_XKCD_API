const SelectView = require('./views/select_view.js');
const InfoView = require('./views/info_view.js');
const Xkcd = require('./models/xkcd.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const xkcdData = new Xkcd();
  xkcdData.bindEvents();

  const container = document.querySelector('#xkcd-form');
  const selectView = new SelectView(container);
  selectView.bindEvents();

  const comicContainer = document.querySelector('#comic');
  const infoView = new InfoView(comicContainer);
  infoView.bindEvents();

});
