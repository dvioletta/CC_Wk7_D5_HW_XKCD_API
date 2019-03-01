const PubSub = require('../helper/pub_sub');
const RequestHelper = require('../helper/request_helper');

const Xkcd = function() {
  this.comic = [];
}

Xkcd.prototype.getData = function(comicId){
  const url = `https://xkcd.now.sh/${comicId}`;
  const request = new RequestHelper(url);
  request.get()
  .then((data)=>{
    this.data = data;
    PubSub.publish('Xkcd:Comic-ready', this.data);
  })
  .catch((error)=>console.error(error));
}


module.exports = Xkcd;

// `https://xkcd.now.sh/${comicId}`
