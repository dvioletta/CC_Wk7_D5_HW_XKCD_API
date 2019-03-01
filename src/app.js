const SelectView = require('./views/select_view.js');
const Xkcd = require('./models/xkcd.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const comicContainer = document.querySelector('#comic');
  const selectView = new SelectView(comicContainer);
  selectView.bindEvents();

  const comic = new Xkcd();
  comic.getData()

});
