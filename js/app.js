document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
})

const handleFormSubmit = function (event) {
  event.preventDefault();
  console.log(event.target.title.value);
  console.log(event.target.author.value);
  console.log(event.target.category.value);
  const itemTitle = event.target.title.value;
  const itemAuthor = event.target.author.value;
  const itemType = event.target.category.value;
  const newDiv = makeItemDiv(itemTitle, itemAuthor, itemType);
  const readingListDiv = document.querySelector('#reading-list');
  readingListDiv.appendChild( newDiv);
  event.target.reset();

};

const makeItemDiv = function (titleText, authorName, typeText) {
  const itemDiv = document.createElement('div');
  itemDiv.setAttribute("id", "item-div");
  itemDiv.appendChild( makeTitleDiv(titleText) );
  itemDiv.appendChild( makeAuthorDiv(authorName) );
  itemDiv.appendChild( makeTypeDiv(typeText) );
  return itemDiv;
}

const makeTitleDiv = function (x) {
  const title = document.createElement('h2');
  title.textContent = `Title: ${x}`;
  return title;
}

const makeAuthorDiv = function (x) {
  const author = document.createElement('h3');
  author.textContent = `Author: ${x}`;
  return author;
}

const makeTypeDiv = function (x) {
  const type = document.createElement('h4');
  type.textContent = `Type: ${x}`;
  return type;
}
