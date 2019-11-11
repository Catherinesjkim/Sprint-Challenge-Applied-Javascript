// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const artArr = [];

const createArticles = (array) => {
  // Create Elements
  const card = document.createElement('div');
  const headline1 = document.createElement('div');
  const author = document.createElement('div');
  const imgHold = document.createElement('div');
  const aImg = document.createElement('img');
  const aName = document.createElement('span');

  // Style
  card.classList.add('card');
  headline1.classList.add('headline');
  author.classList.add('author');
  imgHold.classList.add('img-container');

  // Nesting of Elements
  card.append(headline1, author);
  author.append(imgHold, aName);
  imgHold.append(aImg);

  // Element Text Content
  headline1.textContent = array.headline;
  aImg.src = array.authorPhoto;
  aName.textContent = array.authorName;

  return card;
}

const ep = document.querySelector('.cards-container') // entry point
axios 
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data.articles);

    const keys = Object.keys(response.data.articles);
    // console.log(keys);

    keys.forEach(element => {
      response.data.articles[element].forEach(array => {
        const newCard1 = createArticles(array);
        ep.append(newCard1)
      })
    });
  })
.catch(err => {
  console.log('Sorry No Info!', err)
})