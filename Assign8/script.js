// JSJQ Assignment #8, Optimizing with Functions
// Modified: 10/16/15      Authors: Ashby Utting & Liz Burton


//Variable declarations
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
//End of variable declaration/creation


function getAuthorAndYearString(speechIndex) {
  return('<p>This speech was written by ' + speechesArray[speechIndex].author + ' in ' +
    Math.abs(speechesArray[speechIndex].year) + '.</p>');
}

function displayBCEString(isBCE) {
  if(isBCE) {
    return('<p>This speech took place before the common era.</p>');
  } else {
    return('<p>This speech took place during the common era.</p>');
  }
}

function getOldestOrYoungestString(speechIndex) {
    var oldest = speechesArray[speechIndex].year,
      newest = speechesArray[speechIndex].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }
  if(speechesArray[speechIndex].year === oldest){
    return('<p>This is the oldest speech on the page.</p>');
  }
  else if(speechesArray[speechIndex].year === newest){
    return('<p>This is the most recent speech on the page.</p>');
  }
  else {
    return('');
  }
}


//Event handler for DONATE button 
document.getElementById('BtnDonate').addEventListener('click', function(){
  var donateMessageDiv = document.getElementById("ConsoleDisplay"),
      donateMessageNode = document.createElement('h3'),
      donateMessageText = document.createTextNode(''),
      articles=document.getElementsByTagName('article')
  ;

  //Clear out the current text, if any
  while(donateMessageDiv.firstChild) {
    donateMessageDiv.removeChild(donateMessageDiv.firstChild);
  }

  //Prompt user to enter an amount and display an appropriate response
  donatePrompt = window.prompt('How much would you like to donate?');

  if (donatePrompt < 100 && donatePrompt > 0) {
      donateMessageText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
      donateMessageNode.setAttribute('style','color: inherit');
      for (i=0; i<articles.length; i++) {
        articles[i].removeAttribute('class');
      }
  } else if (donatePrompt >= 100) {
      donateMessageText = document.createTextNode('Thank you for your very generous donation!');
      donateMessageNode.setAttribute('style','color: #DB152C');
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

//Event listeners for AUTHOR buttons
document.getElementById('BtnChurchill').addEventListener('click', function(){
  document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(0) +
     displayBCEString(this.YearIsBCE) + getOldestOrYoungestString(0);
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(1) +
     displayBCEString(this.YearIsBCE) + getOldestOrYoungestString(1);
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(2) +
     displayBCEString(this.YearIsBCE) + getOldestOrYoungestString(2);
});
