const PubSub = require('../helper/pub_sub');
const RequestHelper = require('../helper/request_helper');

const Xkcd = function() {
  this.comic = [];
}

Xkcd.prototype.getData = function(comic){
  const url = 'https://xkcd.now.sh/34';
  const request = new RequestHelper(url);
  request.get()
  .then((data)=>{
    console.log(data)
    this.data = data;
    PubSub.publish('Xkcd:Comic-ready', this.data);
  })
  .catch((error)=>console.error(error));
}


module.exports = Xkcd;

// `https://xkcd.com/${user_input}/info.0.json`
