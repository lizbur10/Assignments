// JSJQ Assignment #6, Optimizing with Loops
// Modified: 10/04/15      Authors: Ashby Utting & Liz Burton



//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    userNamePrompt,
    favoriteSpeechPrompt,
    oldestYear, mostRecentYear;


//Resets the year to a negative value if the speech is BCE 
for (i=0; i<speechesArray.length; i++) {
  if (speechesArray[i].yearIsBCE)
    speechesArray[i].year = -speechesArray[i].year;
}

//Creates oldestYear and mostRecentYear variables 

oldestYear = speechesArray[0].year;       //initializes the values of the variables
mostRecentYear = speechesArray[0].year;

for (i=1; i<speechesArray.length; i++) {
  if (speechesArray[i].year < oldestYear)
    oldestYear = speechesArray[i].year;
  else if (speechesArray[i].year > mostRecentYear)
    mostRecentYear = speechesArray[i].year;
  
}

//End of variable declaration/creation



// Function to show the information for each speech (called when the "author" buttons are clicked)
function showSpeechInfo(index) {
  console.log('This speech was written by ' + speechesArray[index].author + ' in ' + Math.abs(speechesArray[index].year));

  if(speechesArray[index].year < 0){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

if (speechesArray[index].year === oldestYear)
  console.log("This is the oldest speech on the page.");
else if (speechesArray[index].year === mostRecentYear)
  console.log("This is the most recent speech on the page.");

}





//Writes out intial page information - runs when the page loads

var i=0;
console.log("There are " + speechesArray.length + " speeches on this page:");
while (i<speechesArray.length){
  console.log("Speech " + (i + 1) + " was written by " + speechesArray[i].author);
  i++;
}



//Event handlers for button clicks

  //DONATE button
  document.getElementById('BtnDonate').addEventListener('click', function(){
    //Code in here executes when the user clicks the "Donate" button.
    favoriteSpeechPrompt = window.prompt('Which speech author is your favorite?');


    var found = false;
    for (i=0; i<speechesArray.length; i++) {
      if (favoriteSpeechPrompt === speechesArray[i].author) {
        console.log(speechesArray[i].author + " was " + speechesArray[i].authorAge + " during this speech.");
        found = true;
      }
    }
    if (!found) console.log("Sorry - I do not recognize that name. Pease check your spelling and capitalization.");

  });


  //CHURCHILL button
  document.getElementById('BtnChurchill').addEventListener('click', function(){
    //Code in here executes when the user clicks the "Churchill" button.
    showSpeechInfo(0);
  });


  //GHANDI button
  document.getElementById('BtnGhandi').addEventListener('click', function(){
    //Code in here executes when the user clicks the "Ghandi" button.
    showSpeechInfo(1);
  });


  //DEMOSTHENES button
  document.getElementById('BtnDemosthenes').addEventListener('click', function(){
    //Code in here executes when the user clicks the "Demosthenes" button.
    showSpeechInfo(2);
  });


