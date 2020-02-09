const container = document.querySelector('.container');
let numDivs = 16;

// create a 16 x 16 grid of square divs and put inside the container div
const toAdd = document.createDocumentFragment();
for(let i=1; i <= (numDivs*numDivs); i++){
   const newDiv = document.createElement('div');
   newDiv.id = 'r'+i;
   newDiv.className = 'box';
   toAdd.appendChild(newDiv);
}
container.appendChild(toAdd);

// set up a hover effect so that the grid divs change color when the mouse passes over them and leaving a pixelated trail like a pen would
container.addEventListener("mouseover", function ( e ) {
  e.stopPropagation();
  e.target.style.backgroundColor = "white";
  
})
// add a button to the top of the screen which will clear the current grid and send the user a popup asking for how many squares per side to make the new grid. Once entered the new grid should be generated in the same total space as before (eg. 960px wid) and now you've got a new sketch pad

const btnReset = document.createElement('button');
btnReset.textContent = 'Reset';
container.insertAdjacentElement('beforebegin', btnReset);

function clearSketch() {
  document.querySelectorAll(".box").forEach(function(c){
    c.parentNode.removeChild(c);
  });
  
  numDivs = prompt('How big do you want your canvas to be?');
  container.style.gridTemplateRows = `repeat(${numDivs}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${numDivs}, 1fr)`;

 for(let i=1; i <= (numDivs*numDivs); i++){
   const newDiv = document.createElement('div');
   newDiv.id = 'r'+i;
   newDiv.className = 'box';
   toAdd.appendChild(newDiv);
}

container.appendChild(toAdd);
  


}

btnReset.addEventListener('click', clearSketch);