// JSJQ Assignment #5, Deciding with Data
// Modified: 9/26/15      Authors: Ashby Utting & Liz Burton



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
    user, favoriteAuthor
    ;


// Create index variables to hold the array position for each speech

var churchillIndex, ghandiIndex, demosthenesIndex;

    for (i=0; i<speechesArray.length; i++) {
        if (speechesArray[i].author === "Churchill")
            churchillIndex = i;
        else if (speechesArray[i].author === "Ghandi")
            ghandiIndex = i;
        else if (speechesArray[i].author === "Demosthenes")
            demosthenesIndex = i;
    }


//End of variable declaration/creation


//Function to write out favorite author information
function WriteFavoriteAuthor(index) {
  console.log(speechesArray[index].author + " was " + speechesArray[index].authorAge + " during this speech.");
}



// Function to show the information for each speech (called when the "author" buttons are clicked)
function ShowSpeechInfo(index) {
    console.log("This speech was written by " + speechesArray[index].author + " in " + speechesArray[index].year + ".");
  if (speechesArray[index].yearIsBCE)
    console.log("This speech took place before the common era.");
  else
    console.log("This speech took place during the common era.");
}


//Function to determine whether the current speech is oldest/newest and display the appropriate message
  function CompareYears(index) {
    var oldest = true, newest = true, rescaleYear = [0,0,0];

    //resets the year to a negative value if the speech is BCE
    for (j=0; j<speechesArray.length; j++) {
      if (speechesArray[j].yearIsBCE)
        rescaleYear[j] = -speechesArray[j].year;
      else
        rescaleYear[j] = speechesArray[j].year;
    }
    //determines oldest/newest
    for (i=0; i<rescaleYear.length; i++) {
      if (rescaleYear[index] < rescaleYear[i])
        newest = false;
      else if (rescaleYear[index] > rescaleYear[i])
        oldest = false;
    }
    //writes out appropriate message
    if (oldest)
      console.log("This is the oldest speech on the page.");
    else if (newest)
      console.log("This is the newest speech on the page.");
  }



//Ask for the user's name - runs when the page loads
user = window.prompt("Please enter your name.");

  if(typeof user === "string" && user.length > 0) //If a number is entered, it looks like JS automatically converts it to a string so the 
    console.log("Hi " + user + "!");              //typeof part of the if statement doesn't really do anything. Not sure how to get around that.
  else
    console.log("Okay, I'll just call you User");



// Event handlers for button clicks

  // Donate button
  document.getElementById('BtnDonate').addEventListener('click', function(){
    favoriteAuthor = window.prompt("Who is your favorite author -- Churchill, Ghandi, or Demosthenes?");
    favoriteAuthor = favoriteAuthor.toLowerCase();

      switch (favoriteAuthor) {

        case "churchill":
          WriteFavoriteAuthor(churchillIndex);
        break;

        case "ghandi":
          WriteFavoriteAuthor(ghandiIndex);
        break;

        case "demosthenes":
          WriteFavoriteAuthor(demosthenesIndex);
        break;

        default:
          console.log("Sorry - I do not recognize that name. Pease try again.");
        break;
      }
  });

  // Churchill button
  document.getElementById('BtnChurchill').addEventListener('click', function(){
    ShowSpeechInfo(churchillIndex);
    CompareYears(churchillIndex);
  });

  // Ghandi button
  document.getElementById('BtnGhandi').addEventListener('click', function(){
    ShowSpeechInfo(ghandiIndex);
    CompareYears(ghandiIndex);
  });

  // Demosthenes button
  document.getElementById('BtnDemosthenes').addEventListener('click', function(){
    ShowSpeechInfo(demosthenesIndex);
    CompareYears(demosthenesIndex);
  });