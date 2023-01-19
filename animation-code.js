
/************************************************ 
               Variables & Arrays
*************************************************/
// Arrays - Corresponding to each character & the defaults.
const rArr = ["https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f45164a994fbe148dd8_R_2.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f465af55d45479cf765_R_7.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f466b0a24588994c31e_R_6.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f46f70e343c378d6f1b_R_5.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f456b0a24f92694c31d_R_4.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f4533943e105f44e4ae_R_1.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f4543c5476509cb3d7a_R_3.svg"]
const oArr = ["https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f456b0a24014994c31b_O_7.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f453eb659b33a283a23_O_9.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f453eb6593100283a22_O_8.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f45c6cf6a77ebb16b35_O_4.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f455810581359e3a6a4_O_6.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f4543c54751f4cb3d79_O_3.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f4512ec1c7c128ab15a_O_5.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f45f666f0acb8abbe1e_O_2.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f45690e4a65f4a874dd_O_1.svg"]
const dArr = ["https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f4543c54784aacb3d77_D_3.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f45c33dfc7b696a586a_D_4.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f45c6cf6a2630b16b26_D_5.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f446b0a24243b94c31a_D_2.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f44f6ec2ad2f13accc1_D_1.svg"]
const iArr = ["https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f45b9baec4169ca47ea_I_5.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f45b9baecdfdfca47e8_I_4.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f4512ec1c8e8a8ab158_I_2.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f45650eb07bcc82d6d9_I_3.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f4482526481b59a94b1_I_1.svg"]
const gArr = ["https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f44415c66877b4948c7_G_4.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f44403e4c502f265d3b_G_3.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f4430f9613b9319da21_G_2.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c18f443eb659c3d6283a21_G_1.svg"]
const defaults = ["https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c1875d4177627e2d29e69a_R.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c1875bf4a7f8241bbc2096_O.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c1875b3486b63c4a44475f_D.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c1875b33943e0bc0446002_G.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c1875b403e4c341f25d9cf_I.svg"]
//Arrays with all symbols and default font characters.
const rFArr = rArr.concat("https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c1875d4177627e2d29e69a_R.svg");
const oFArr = oArr.concat("https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c1875bf4a7f8241bbc2096_O.svg");
const dFArr = dArr.concat("https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c1875b3486b63c4a44475f_D.svg");
const iFArr = iArr.concat("https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c1875b403e4c341f25d9cf_I.svg");
const gFArr = gArr.concat("https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c1875b33943e0bc0446002_G.svg");
// White SVG Arrays - Corresponding to each character & the defaults.
const rWArr = ["https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5625e739f8d61a5ba578c_letter-R-Flowers.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5625ea9b6a0728e89ca4e_letter-R-Starburst.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5625d8ec26458f7650b6e_letter-R-Circle%20Blend.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5625d2378568dda704ca4_letter-R-Medium%20Dots.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5625d8c9bf2c01806654e_letter-R-Simple%20Filled%20Shapes.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5625df6343e8d42a27c41_letter-R-Clouds.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5625d32910a50d5d74c75_letter-R-Maze.svg"]
const oWArr = ["https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5622de9a211ae2e9ce868_letter-O-Cursors.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5622d23785684677045d1_letter-O-Venn.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5622d739f8d6f62ba5632_letter-O-Flowers.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5622d7ae2254e1d6662d1_letter-O-Wavy.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5622d9bcbb43ecf9eacc0_letter-O-Blur.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5622d73b2b68248e93387_letter-O-Clouds.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5622d3b2b764cf4c37fc9_letter-O-Square%20Negative.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5622d965a123273a95362_letter-O-Starburst.svg"]
const dWArr = ["https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c561f6e76650309df4e509_letter-D-Clouds.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c561f683c05e3b8d6ecd15_letter-D-Flowers.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c561f6d4a4c3da674b29c8_letter-D-Semicircles.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c561f55cdbb21da030e6a3_letter-D-Large%20Dots.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c561f586cd789ad688ae7f_letter-D-Simple%20Outlined%20Shapes.svg"]
const iWArr = ["https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5621a9f1b45d182d5fce3_letter-I-Simple%20Outlined%20Shapes.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c56218ce5aa2124ef17dfe_letter-I-Flowers.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c56218ad4d63575b0d6ecc_letter-I-Starburst.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c562188cd0756df5277eca_letter-I-Maze.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c56218d06f10836c890142_letter-I-Clouds.svg"]
const gWArr = ["https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5620bf6343e816fa2735e_letter-G-Simple%20Outlined%20Shapes.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5620bd3f6693a8e7f7560_letter-G-Maze.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5620b965a124e1ea95250_letter-G-Flowers.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5620b7ae22524fe666172_letter-G-Circle%20Blend.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5620be76650634df4e778_letter-G-Clouds.svg"]
const Wdefaults = ["https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5625d72da9e2e3534ac15_letter-R-Default.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5622de9a211284d9ce869_letter-O-Default.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c56218f8fb9d4be95cd9a1_letter-I-Default.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c5620b99f3af760f7b3e92_letter-G-Default.svg", "https://uploads-ssl.webflow.com/6391c0af21c27966e0a10682/63c561f572da9e34cc34a17b_letter-D-Default.svg"]
// An Array of each of the non-default symbol arrays.
const arrOfArrays = [rArr, oArr, dArr, iArr, gArr]
// An Array of each of the full arrays.
const arrOfFArrays = [rFArr, oFArr, dFArr, iFArr, gFArr]
// Array of the element ids written as strings.
const arrOfIds = ['r1', 'o1', 'd1', 'r2', 'i1', 'g1', 'o2'];
// Mega array of all symbols and characters
let megaArray = [];
for (let i=0; i<arrOfFArrays.length; i++){
  megaArray = megaArray.concat(arrOfFArrays[i]);
}
const footerSymbols = document.querySelectorAll('.f-symbol');
// Pre-set Delay variables - Change at will - Time in seconds.
var delayGlobal = 0.2;
var delaySlower = 0.4;
var delayFaster = 0.1;
var delayNone = 0;
// Pre-set Duration ranges - Change at will - Time in seconds.
var durationStandard = randomDuration(100,300);
var durationSlower = randomDuration(500,800);
var durationFaster = randomDuration(30,80);
var durationHugeVariation = randomDuration(30,2000);
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
  3. Then the simple switch maps the letter id to its corresponding array, whether full or symbols.
  4. Once matched, the function returns that array.
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
               Function Calls
*************************************************/
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


