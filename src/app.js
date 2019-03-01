const SelectView = require('./views/select_view.js');
const InfoView = require('./views/info_view.js');
const Xkcd = require('./models/xkcd.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const comicContainer = document.querySelector('#comic');
  const infoView = new InfoView(comicContainer);
  infoView.bindEvents();

  const selectView = new SelectView();
  selectView.bindEvents();

  const comic = new Xkcd();
  comic.getData(547)

});
