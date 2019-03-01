const PubSub = require('../helper/pub_sub');
const InfoView = require('./info_view')

const SelectView = function(container){
  this.container = container;
};

SelectView.prototype.bindEvents = function(){
 PubSub.subscribe('Xkcd:Comic-ready', (evt) =>{
   this.comic = evt.detail;
   console.log("comic", this.comic);
   this.render();
 });
};

SelectView.prototype.render = function(){
  const infoView = new InfoView(this.container, this.comic)
  infoView.render();
};

module.exports = SelectView
