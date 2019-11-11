// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const container = document.querySelector('.header-container');

function Header() {
  // Define new elements
  const header = document.createElement('div');
  const aDate = document.createElement('span');
  const aTitle = document.createElement('h1');
  const aTemp = document.createElement('span');

  // Map over the header, creating a compnent for each object and add each component to the DOM as children of the 'header' div

  // Set up structure of elements
  header.append(aDate, aTitle, aTemp);

  // Set text content
  aDate.textContent = `MARCH 28, 2019`;
  aTitle.textContent = `Lambda Times`;
  aTemp.textContent = `98°`;

  // Style
  header.classList.add('header');
  aDate.classList.add('date');
  aTitle.classList.add('title');
  aTemp.classList.add('temp');

  return header
}

const newHeader = Header();
  container.appendChild(newHeader);

