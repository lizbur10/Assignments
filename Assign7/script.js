// JSJQ Assignment #7, Displaying Your Data in the DOM
// Modified: 10/11/15      Authors: Ashby Utting & Liz Burton


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
    oldestYear, mostRecentYear,
    donatePrompt
    ;

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
  return function () {

    var writeInfo = document.getElementById("ConsoleDisplay");

    writeInfo.innerHTML ='<p>This speech was written by ' + speechesArray[index].author + ' in ' + Math.abs(speechesArray[index].year) + '.</p>';

    if(speechesArray[index].year < 0){
      writeInfo.innerHTML += '<p>This speech took place before the common era.</p>';
    } else {
      writeInfo.innerHTML += '<p>This speech took place during the common era.</p>';
    }

  if (speechesArray[index].year === oldestYear)
    writeInfo.innerHTML += '<p>This is the oldest speech on the page.</p>';
  else if (speechesArray[index].year === mostRecentYear)
    writeInfo.innerHTML += '<p>This is the most recent speech on the page.</p>';
  };
}

//Event handler for DONATE button 
document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donateMessageDiv = document.getElementById("ConsoleDisplay"),
      donateMessageNode = document.createElement('h3'),
      donateMessageText = document.createTextNode('')
  ;
  
  //Clear out the current text, if any
  var currentText = document.getElementById('ConsoleDisplay');
  //currentText.innerHTML = ('');
  while(currentText.firstChild) {
    currentText.removeChild(currentText.firstChild);
    console.log('Removed one child'); //testing the code
}

  //Prompt user to enter an amount and display an appropriate response
  donatePrompt = window.prompt('How much would you like to donate?');

  if (donatePrompt < 100 && donatePrompt > 0) {
    donateMessageText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  } else if (donatePrompt >= 100) {
    donateMessageText = document.createTextNode('Thank you for your very generous donation!');
    donateMessageNode.setAttribute('style','color: #DB152C');
    //Change styling on article elements
    var articles = document.getElementsByTagName('article');
    for (i=0; i<articles.length; i++) {
      articles[i].className = 'generous-donation';
    }
  } else {
    alert('Please enter a valid amount greater than 0');
  }

  //Add new node and its text to the DOM
  donateMessageDiv.appendChild(donateMessageNode);
  donateMessageNode.appendChild(donateMessageText);
});

//Create event listeners for AUTHOR buttons
for (i=0; i<speechesArray.length; i++) {
  document.getElementById('Btn' + speechesArray[i].author).addEventListener('click', showSpeechInfo(i)); //https://jslinterrors.com/dont-make-functions-within-a-loop
}
