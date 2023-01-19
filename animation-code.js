
/************************************************ 
                    Functions
*************************************************/

// Returns a single item at random from any array passed to the function
function randomArrItemSelection(array){
  return gsap.utils.random(array)
}

// Returns a random duration in seconds between a min & max number of miliseconds
function randomDuration(min, max) {
  return gsap.utils.random(min, max) / 1000
}

// Returns a random duration in miliseconds between a min & max number of miliseconds
function randomLoopDuration(min, max) {
  return gsap.utils.random(min, max)
}

/* 
  selectArray(id, arrayType) function: Returns the specific array needed for the random symbol src attribute
  to be selected from.
  1. Takes in an id & one of 2 arrayType(s) as params: arrayType can be "full" (including default letters) or 
  "justSymbols".
  2. To normalise the footer id difference we first strip the "f" from them.
  3. Gets the colour of the svg characters using the svgcolor attribute.
  4. Then the simple switch maps the letter id to its corresponding array, whether full or symbols, and determined by colour as well.
  5. Once matched, the function returns that array.
*/
function selectArray(id, arrayType){
  let currentSvgEl = document.querySelector(`#${id}`);

  if(id.includes('f')) id = id.substring(1)
  let svgColor = currentSvgEl.getAttribute("svgcolor")

  let svgArray;
  if(arrayType == "full"){
    switch (id) {
        case 'r1':
          svgArray = rFArr;
          break;
        case 'o1':
          svgArray = oFArr;
          break;
        case 'd1':
          svgArray = dFArr;
          break;
        case 'r2':
          svgArray = rFArr;
          break;
        case 'i1':
          svgArray = iFArr;
          break;
        case 'g1':
          svgArray = gFArr;
          break;
        case 'o2':
          svgArray = oFArr;
          break;
        default:
          svgArray = rFArr;
      }
  }
  if(arrayType == "justSymbols" && svgColor == "black"){
    switch (id) {
        case 'r1':
          svgArray = rArr;
          break;
        case 'o1':
          svgArray = oArr;
          break;
        case 'd1':
          svgArray = dArr;
          break;
        case 'r2':
          svgArray = rArr;
          break;
        case 'i1':
          svgArray = iArr;
          break;
        case 'g1':
          svgArray = gArr;
          break;
        case 'o2':
          svgArray = oArr;
          break;
        default:
          svgArray = rArr;
      }
  } else if(arrayType == "justSymbols" && svgColor == "white"){
    switch (id) {
        case 'r1':
          svgArray = rWArr;
          break;
        case 'o1':
          svgArray = oWArr;
          break;
        case 'd1':
          svgArray = dWArr;
          break;
        case 'r2':
          svgArray = rWArr;
          break;
        case 'i1':
          svgArray = iWArr;
          break;
        case 'g1':
          svgArray = gWArr;
          break;
        case 'o2':
          svgArray = oWArr;
          break;
        default:
          svgArray = rWArr;
      }
  }
  return svgArray
}

/*
createTween Function: 
Creates a tween for a particular element id with a random svg and random duration.
  1. Inits an svgArray variable.
  2. Calls the selectArray() function passing in the id, arrayType, durationSpeed & delaySpeed variables.
  3. Embedded getSrc() Function:
    1. Inits 2 variables: 1. Grabs the current on-page element connected with the id passed in.
                          2. Uses the randomArrItemSelection() Function to randomly select an item from the 
                             associated array (set using switch statement) and stores it in the randomSrc variable.
    2. Runs a while loop that checks if the current on page element src is identical to the randomly selected source, 
    and if they are the same, it re-runs the randomisation function until it selects a different symbol src. It then 
    returns that item.
  4. The createTween() returns a gsap "tween" (short animation) that targets the id passed in and changes the src.
     attribute by calling the getSrc() embedded function described above. It sets a duration using the randomDuration()
     function passing in a min & max duration in miliseconds. It sets an optional delay using pre-defined variables.
*/
function createTween(id, arrayType, durationSpeed, delaySpeed){
  let svgArray = selectArray(id, arrayType)
  function getSrc(){
    let currentEl = document.querySelector(`#${id}`);
    let randomSrc = randomArrItemSelection(svgArray);
    while(currentEl.src == randomSrc){
      randomSrc = randomArrItemSelection(svgArray)
    } 
    return randomSrc
  }
  // Returns the constructed tween.
  return gsap.to(`#${id}`, 
    { attr: { src: getSrc() }, 
      opacity:1,
      duration: durationSpeed,
      delay: delaySpeed, 
      ease: "none",
      })
}

/* 
createTimeline(type) Function: Creates a timeline of type "symbols" or "default"
  1. Takes in type, arrayType, durationSpeed & delaySpeed variables as params.
  2. Inits id variable & idsUsedArr array. 
  3. Inits a new empty gsap timeline and stores it in a tl variable. 
  4. Inits tweenToAddToTl variable.
  5. Starts a while loop that runs until the idsUsedArray contains 7 items.
    1. Randomly selects an id from the array of ids and saves it in the id variable.
    2. Runs an if statement to check that the selected id is not already in the idsUsedArr array.
       If it's not already there, puts that id in the array.
    3. Checks if the timeline "type" is "symbols" or "default".
    4. Creates the corresponding tween using the createTween() function and passing in the randomly selected id.
    5. Immediately adds that tween to the timeline saved in the tl variable.
    6. Continues until the timeline has all 7 characters filled by random symbols / letters.
  6. Returns the tl (timeline).   
*/
function createTimeline(type, arrayType, durationSpeed, delaySpeed){
  let id;
  let idsUsedArr = [];
  let tl = gsap.timeline()
  let tweenToAddToTl;
    while(idsUsedArr.length < 7){
        id = randomArrItemSelection(arrOfIds)
        if(!idsUsedArr.includes(id)){
          idsUsedArr.push(id)
          if(type=="symbols") tl.add((createTween(id, arrayType, durationSpeed, delaySpeed)))
          if(type=="default") tl.add((createDefaultTween(id, durationSpeed, delaySpeed)))
        }
  }
  return tl
}

/*
createDefaultTween(id, durationSpeed, delaySpeed) Function: Creates a tween using only default characters. 
  1.Takes in the id, durationSpeed & delaySpeed variables as params.  
  3.Inits the defSrc variable
  4. Sets the src. attribute for the animation based on the id passed in. As there is only 
     one option, this is set directly.
  5. Returns a tween using the new src attribute.
*/
function createDefaultTween(id, durationSpeed, delaySpeed){
  let defSrc;
  switch (id) {
    case 'r1':
      defSrc = "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c1875d4177627e2d29e69a_R.svg";
      break;
    case 'o1':
      defSrc = "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c1875bf4a7f8241bbc2096_O.svg";
      break;
    case 'd1':
      defSrc = "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c1875b3486b63c4a44475f_D.svg";
      break;
    case 'r2':
      defSrc = "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c1875d4177627e2d29e69a_R.svg";
      break;
    case 'i1':
      defSrc = "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c1875b403e4c341f25d9cf_I.svg";
      break;
    case 'g1':
      defSrc = "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c1875b33943e0bc0446002_G.svg";
      break;
    case 'o2':
      defSrc = "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c1875bf4a7f8241bbc2096_O.svg";
      break;
    default:
      defSrc = "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c1875d4177627e2d29e69a_R.svg";
  }
  return gsap.to(`#${id}`, 
    { attr: { src: defSrc }, 
      opacity:1,
      duration: durationSpeed,
      delay: delaySpeed, 
      ease: "none",
      })
}

/*
  function randomSymbolLoop(): Selects a random id and then selects a corresponding random symbol
    to match the id and animates that symbol onto the logo.
  1. Inits id, svgArr, symbolSrcToUse & delay variables.
  2. Selects a random id using randomArrItemSelection() function and stores it in the id variable.
  3. Stores the corresponding on page id in the currentEl variable.
  4. Finds the correct "full" symbol array using the selectArray() function.
  5. Randomly selects an element src from that array, using the randomArrItemSelection() function.
  6. Checks to see if the on-page element src matches the element src that was just selected.
    If they match, runs the random selection again, until they are different.
  7. Sets a random delay on when the symbol will load using the randomLoopDuration() function and passing
    in a min & max time delay in miliseconds.
  8. Embedded function that sets the new src (the code that changes the symbol on the page) - this is wrapped in
   a function, so it can be used with a setTimeout
  9. setTimeout that runs the src-changing function after the previously set random delay.
*/
function randomSymbolLoop(){
let id;
let svgArr;
let symbolSrcToUse;
let delay;
id = randomArrItemSelection(arrOfIds);
let currentEl = document.querySelector(`#${id}`);
svgArr = selectArray(id, "full")
symbolSrcToUse = randomArrItemSelection(svgArr)
while(currentEl.src == symbolSrcToUse){
  symbolSrcToUse = randomArrItemSelection(svgArr)
} 
delay = randomLoopDuration(50,1000)
function setNewSrc(){
  currentEl.src = symbolSrcToUse
}
setTimeout(setNewSrc, delay )
}

/************************************************ 
      Event Listeners / Footer Functionality
*************************************************/
/*
  Footer Hover Symbol Changing Functionality
  1. Loops through all footer on-page svg elements placed in the footerSymbols array.
  2. Adds an event listener on hover in to each of those symbols - passing through the event (e)
  3. For each symbol, saves its id in a variable called charId
  4. Uses the selectArray() function, passing in charId to return the specific array associated with
  the svg the user hovered over. Saves this array in a variable called svgFooterArray.
  5. Saves the current hovered over element in a variable called currentFooterEl.
  6. Creates a scoped function called getFooterSrc() that returns a random svg src based on the hovered
  over item. Also ensures this is not the same as the item currently in view.
  7. Sets the on-page src attribute to the randomly selected one, thus changing the symbol on hover.
*/
footerSymbols.forEach((symbol) => {
  let charId;
  symbol.addEventListener('mouseover', (e) => {
    charId = e.target.id;
    let svgFooterArray = selectArray(charId, "justSymbols");
    let currentFooterEl = document.querySelector(`#${charId}`);
    function getFooterSrc(){
      let randomFooterSrc = randomArrItemSelection(svgFooterArray);
      while(currentFooterEl.src == randomFooterSrc){
        randomFooterSrc = randomArrItemSelection(svgFooterArray)
      } 
      return randomFooterSrc
    }
    let symbolToUse = getFooterSrc()
    currentFooterEl.src = symbolToUse
  })
  symbol.addEventListener('mouseout', (e) => {
    /*
      In the future, if you want something to happen on hover out,
      this is where that code can live.
    */
  })
})


