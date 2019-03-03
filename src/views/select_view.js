const PubSub = require('../helper/pub_sub');
const InfoView = require('./info_view')

const SelectView = function(container){
  this.container = container;
};

SelectView.prototype.bindEvents = function () {
  this.container.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const comicId = evt.target['comicId'].value;
    PubSub.publish('SelectView:number-submitted', comicId);
    this.container.reset()
  });

  const randomButton = document.querySelector('#random-button');
  randomButton.addEventListener('click', (evt) => {
    const comicId = this.randomNumber(2118);
    PubSub.publish('SelectView:number-submitted', comicId);
});

}

SelectView.prototype.randomNumber = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
}


module.exports = SelectView
