// TASK 0- Motivate demoing a small makeImage component
//  that takes an { imgURL } and returns an img element.
//  Then loop over these URLs making images as you go:
const imageData = [
  {
    imageURL: "https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_978.jpg",
  },
  { imageURL: "https://images.dog.ceo/breeds/mastiff-bull/n02108422_3398.jpg" },
  { imageURL: "https://images.dog.ceo/breeds/mastiff-bull/n02108422_2947.jpg" },
];

function makeImage({ imageURL }) {
  // destructuring
  //  make an image element
  const imgElement = document.createElement("img"); // detached img tag

  // set some attributes
  imgElement.style.width = "10em";

  imgElement.setAttribute("src", imageURL);

  // return the image
  return imgElement;
}

// attach the returned element to the DOM
imageData.length &&
  imageData.forEach((dataObj) => {
    const newImage = makeImage(dataObj); // make an image
    document.body.prepend(newImage); // attach it somewhere
  });

// TASK 1- Import the data we need to "hydrate" our component.
//  On the one hand, the default export from data/panelData.js
//  On the other hand, the default export from data/constants.js
//  Destructure `open` and `close` from the constants

import panelData from "./data/panelData";
import arrows from "./data/constants";

// TASK 2- Verify our imports using log statements
console.log(panelData); // log the panelData
console.log(arrows.open); // log the open arrow
console.log(arrows.close); // log the close arrow

// TASK 3- Comment out the div.panel from index.html and grab its parent element.
//  We will generate the panel with code, and we'll need the parent
//  so we can append the code-generated panel to the DOM.
const accordion = document.querySelector(".accordion");

// TASK 4- Create a function 'makePanel' that creates a panel exactly as you see it in the HTML.
function makePanel({ title, content }) {
  /* what data does the panel need? */

  console.log(arrows);

  const myInnerVariable = "Hello"; //reminder about JS closures

  // TASK 5- Instantiate all the elements needed for a panel
  const panel = document.createElement("div");
  const panelBar = document.createElement("div");
  const panelContent = document.createElement("div");
  const panelTitle = document.createElement("h3");
  const panelButtons = document.createElement("div");
  const openButton = document.createElement("button");
  const closeButton = document.createElement("button");

  // TASK 6- Setup the structure of our elements
  /*
    <div>                   // panel
      <div>                 // panelBar
        <h3></h3>           // panelTitle
        <div>               // panelButtons 
          <button></button> // openButton
          <button></button> // closeButton
        </div>
      </div>
      <div></div>           // panelContent
    </div>
  */

  panel.appendChild(panelBar);
  panel.appendChild(panelContent);
  panelBar.appendChild(panelTitle);
  panelBar.appendChild(panelButtons);
  panelButtons.appendChild(openButton);
  panelButtons.appendChild(closeButton);

  // TASK 7- Add proper class names to our elements (See index.html for reference)
  // paying attention to the elements that need to start out hidden
  panel.classList.add("panel");
  panelBar.classList.add("panel-bar");

  panelButtons.classList.add("panel-buttons");
  openButton.classList.add("open-button");
  closeButton.classList.add("close-button", "hide-btn");
  panelContent.classList.add("panel-content");

  // TASK 8- Set text content using arguments as raw material
  //  and also using the open and close arrows imported at the top of the file

  const { open, close } = arrows; //destructuring
  panelTitle.textContent = title;

  openButton.textContent = open;
  closeButton.textContent = close;
  panelContent.textContent = content;

  // TASK 9- When the 'open' or 'close' buttons are clicked, the content is toggled on/off:
  //  - the open button needs to go away (the 'hide-btn' class name controls this)
  //  - the close button needs to show (the 'hide-btn' class name controls this)
  //  - the contents need to show (the 'toggle-on' class name controls this)

  // toggle event

  // <div pnael> <div panelBar> <div panelButtons> <button>
  // openButton.addEventListener("click", event => {})
  // closeButton.addEventListener("click", event => {})

  panelButtons.addEventListener("click", (event) => {
    openButton.classList.toggle("hide-btn");
    closeButton.classList.toggle("hide-btn");
    panelContent.classList.toggle("toggle-on");
  });

  // don't forget to return the panel!
  return panel;
}
// console.log(myInnerVariable)
//  const panel = makePanel({
//   title: "this is our test title",
//   content: "this is our test content",
// });

// accordion.appendChild(panel);

// TASK 10- Loop through the panelData we imported from the data folder
//  creating panels for each content and title and append them to the DOM.
//  We can do this with a single forEach, or with a map and a forEach.

panelData.forEach((panelDataObj) => {
  accordion.append(makePanel(panelDataObj));
});

// panelData.length &&
//   panelData.forEach((panelDataObj) => {
//     const newPanel = makePanel(panelDataObj);
//     accordion.append(newPanel);
//   });

// [STRETCH] Comment out the links inside the nav and
// write a linkMaker that takes { href, className, text }
// and returns an anchor tag with the right href, class and textContent.
// Loop over the 'linkData' in the data folder, generate anchor tags
// and append them to the nav.
function linkMaker({ href, className, text }) {
  const newLink = document.createElement("a");
  nav.appendChild(newLink);
  newLink.classList.add(className);
  newLink.textContent = text;
  newLink.setAttribute("src", href);

  return newLink;
}
import linkData from "./data/linkData";
const nav = document.querySelector("nav");

linkData.forEach((linkDataObj) => {
  // use our linkMaker
  const newLink = linkMaker(linkDataObj);
  // append to the nav
  nav.append(newLink);
});
// and append them to the nav.
