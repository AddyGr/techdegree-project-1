/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * This code has been checked, and is working with the following browsers: 
 *  Chrome
 *  Microsoft Edge
 *  Firefox
 ***/

/*** 
 * array to store quotes in. 
***/
let quotes = [
  {
    quote: "I am the culmination of one man's dream. This is not ego, or vanity. But when Dr. Soong created me, he added to the substance of the universe. If, by your experiments, I am destroyed, something unique, something wonderful will be lost. I cannot permit that. I must protect his dream.",
    source: 'Lt. Commander Data',
    citation: 'Star Trek: The Next Generation. "The Measure of a Man" S02E09',
    year: 1989,
    type: 'Next Generation'},

  {
    quote: 'The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.',
    source: 'Dr. Martin Luther King Jr.',
    citation: 'The book - Strength to Love',
    year: 1963},

  {
    quote: 'The Nation that destroys its soil destroys itself.',
    source: 'Franklin D. Roosevelt',
    citation: 'Letter to all State Governors on a Uniform Soil Conservation Law',
    year: 1937},

  {
    quote: 'Logic is the beginning of wisdom, not the end.',
    source: 'Mr. Spock',
    citation: 'Star Trek VI: The Undiscovered Country',
    year: 1991,
    type: 'Original series movie'},

  {
    quote: 'Live now; make now always the most precious time. Now will never come again.',
    source: 'Captain Jean-Luc Picard',
    citation: 'Star Trek: The Next Generation. "Inner Light" S05E25',
    year: 1992,
    type: 'Next Generation'},

  {
    quote: 'Sometimes a feeling is all we humans have to go on.',
    source: 'Captain James T. Kirk',
    citation: 'Star Trek "A Taste of Armageddon" S05E25',
    year: 1967,
    type: 'Original series'},

  {
    quote: "If we're going to be damned, let's be damned for what we really are.",
    source: 'Captain Jean-Luc Picard',
    citation: 'Star Trek: The Next Generation. "Encounter At Farpoint" Pilot episode',
    year: 1987,
    type: 'Next Generation'},

  {
    quote: 'Insufficient facts always invite danger.',
    source: 'Mr. Spock',
    citation: 'Star Trek "Space Seed" S01E22',
    year: 1967, 
    type: 'Original series'},

  {
    quote: 'Could you please continue the petty bickering? I find it most intriguing.',
    source: 'Lt. Cmdr. Data',
    citation: 'Star Trek: The Next Generation. "Haven" S01E10',
    year: 1987, 
    type: 'Next Generation'},

  {
    quote: 'If you had an off switch Doctor, would you not keep it secret?',
    source: 'Lt. Cmdr. Data',
    citation: 'Star Trek: The Next Generation. "Datalore" S01E12',
    year: 1988, 
    type: 'Next Generation'},

  {
    quote: "Engage",
    source: 'Captain Jean-Luc Picard',
    citation: 'Star Trek: The Next Generation',},

  {
    quote: "Resistance is futile.",
    source: 'The Borg',
    citation: 'Star Trek: The Next Generation',},

  {
    quote: "Live long and prosper",
    source: 'Vulcans',
    citation: 'Star Trek',}
]


/***
 * This function will generate a random number between 0 and the
 * length of the above array. 
***/
let getRandomQuote = () => {
  let randomNumber;
  randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/**
 * 1st Function to generate and return a random color. 
 * 2nd function uses the randomColor function and creates 3 random colors, 
 * which are then combined into an rbg color (for use with the CSS
 * body "background-color"). 
 */
let randomColor = () => Math.floor(Math.random() * 256 );
let randomFinalColor = () => {
  let colorA = randomColor();
  let colorB = randomColor();
  let colorC = randomColor();
  let mixColor = `rgb(${colorA}, ${colorB}, ${colorC})`;
  return document.body.style.setProperty('background-color', mixColor);
}


/***
 * This function will use the random number function above to choose
 * a random quote from the 'quotes' array. 
 * Once a random quote is selected, the parts will be put together then returned
 * for display on the webpage. 
 * Note: all of the quotes may not contain 'citation' and 'year'. The two 
 * if statments will check to see if those are present. 
***/
let printQuote = () => {
  let currentQuote = getRandomQuote(); 
  let htmlString = `<p class="quote"> ${currentQuote['quote']}</p>
                    <p class="source"> ${currentQuote['source']}`;
  if(currentQuote['citation']){
    htmlString += `<span class="citation"> ${currentQuote['citation']}`;
      if(currentQuote['year']) {
        htmlString += `<span class="year"> ${currentQuote['year']}`;
      }
      if(currentQuote['type']){
        htmlString += `(${currentQuote['type']})`;
      }
  }
  htmlString += `</p>`;
  //Calls on the function randomColor(), to change the color of the background
  //whenever a random quote is generated.
  randomFinalColor(); 
  return document.getElementById('quote-box').innerHTML = htmlString;
}

/***
 * Sets a timer for the printQuote function to rerun every 15 seconds.
***/
let timer = setInterval(printQuote, 15000);

//return document.getElementById().
/***
 * When the button on the webpage is clicked to type a new quote, 
 * this code will call on the printQuote function to generate a new, random
 * quote. This will then allow it to be typen on the webpage. 
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
