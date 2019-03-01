const InfoView = function(comicContainer, comic) {
  this.comic = comic;
  this.comicContainer = comicContainer;
};

InfoView.prototype.render = function() {
  const comicContainer =document.createElement('div');
  comicContainer.classList.add('header')
  this.comicContainer.appendChild(comicContainer);


  const title = this.createComicTitle();
  comicContainer.appendChild(title);
  const image = this.createComicImage();
  comicContainer.appendChild(image);
  const altText = this.createAltText();
  comicContainer.appendChild(altText);
}

InfoView.prototype.createComicTitle = function (){
  const title = document.createElement('h2');
  title.textContent = this.comic.title

  return title;
}

InfoView.prototype.createComicImage = function() {
  const image = document.createElement('img');
  image.src = this.comic.img

  return image;
}

InfoView.prototype.createAltText = function() {
  const altText = document.createElement('h3');
  altText.textContent = this.comic.alt

  return altText
}

module.exports = InfoView
