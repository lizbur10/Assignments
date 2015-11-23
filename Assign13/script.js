// JSJQ Assignment #13, jQuery Project
// Modified: 11/22/15      Authors: Ashby Utting & Liz Burton

$(function() {
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

  //Creates oldestYear and mostRecentYear variables
  oldestYear = speechesArray[0].year;
  mostRecentYear = speechesArray[0].year;

  for (i=1; i<speechesArray.length; i++) {
    if (speechesArray[i].year < oldestYear)
      oldestYear = speechesArray[i].year;
    else if (speechesArray[i].year > mostRecentYear)
      mostRecentYear = speechesArray[i].year;
  }
  //End of variable declaration/creation


  //Initial page settings
  $("#BtnDonate").removeClass("hidden");
  $(".info-icon").removeClass("hidden");
  $(".side-nav").find("a").attr("href", "#");
  $("#Churchill").find("img").attr("id", "ChurchillInfo");
  $("#Ghandi").css("display", "none").find("img").attr("id", "GhandiInfo");
  $("#Demosthenes").css("display", "none").find("img").attr("id", "DemosthenesInfo");
  $("#BtnChurchill").addClass("selected");

  // Function to show each speech (called when the "author" buttons are clicked)
  function showSpeech(index) {
    return function () {
      $('article').css("display", "none");
      $('.selected').removeClass("selected");
      var selectedSpeech = '#' + speechesArray[index].author;
      $(selectedSpeech).fadeIn(1000);
      var selectedSpeechButton = "#Btn" + speechesArray[index].author;
      $(selectedSpeechButton).addClass("selected");
    };
  }


  //Event handler for DONATE button 
  $("#BtnDonate").click(function() {
    //Code in here executes when the user clicks the "Donate" button.
    $("#sideNavDisplay").empty();
    //Prompt user to enter an amount and display an appropriate response
    donatePrompt = window.prompt('How much would you like to donate?');

    if (donatePrompt < 100 && donatePrompt > 0) {
      $("#sideNavDisplay").append('Thank you for your donation of $' + donatePrompt);
    } else if (donatePrompt >= 100) {
      $("#sideNavDisplay").append('<p>Thank you for your very generous donation!</p>');
      $("#sideNavDisplay p").addClass('generous-donation');
      $("article").addClass('generous-donation');
    } else {
      alert('Please enter a valid amount greater than 0');
    }
  });


  //Event handler for Info button  
  //Code for positioning the hover text came from: http://www.alessioatzeni.com/blog/simple-tooltip-with-jquery-only-text/
  $(".info-icon").hover(function() {
    var index;
    if ($(this).attr("id") == 'ChurchillInfo') {
      index = 0;
    } else if ($(this).attr("id") == 'GhandiInfo') {
      index = 1;
    } else {
      index = 2;
    }
    $("#hoverText").empty();
    $("#hoverText").append('<p>This speech was written by ' + speechesArray[index].author + ' in ' + Math.abs(speechesArray[index].year) + '.</p>');

    if(speechesArray[index].year < 0){
      $("#hoverText").append('<p>This speech took place before the common era.</p>');
    } else {
      $("#hoverText").append('<p>This speech took place during the common era.</p>');
    }

    if (speechesArray[index].year === oldestYear)
      $("#hoverText").append('<p>This is the oldest speech on the page.</p>');
    else if (speechesArray[index].year === mostRecentYear)
      $("#hoverText").append('<p>This is the most recent speech on the page.</p>');

    $("#hoverText").toggleClass("hidden");

    }).mousemove(function(e) {
          var mousex = e.pageX + 20; //Get X coordinates
          var mousey = e.pageY + 10; //Get Y coordinates
          $('#hoverText')
          .css({ top: mousey, left: mousex });
        }
    );

  //Create event listeners for AUTHOR buttons
  for (i=0; i<speechesArray.length; i++) {
    var buttonName = '#Btn' + speechesArray[i].author;
    $(buttonName).click(showSpeech(i));
  }
});
