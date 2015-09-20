// JSJQ Assignment #4, Displaying Your Data
// Modified: 9/19/15			Authors: Ashby Utting & Liz Burton



// Constructor for the speech object
function Speech(author, year, bce) {

	this.author = author;
	this.year   = year;
	this.bce    = bce;
}

// Function to show the information for each speech (called when the "author" buttons are clicked)
function showSpeechInfo(index) {
    console.log("This speech was written by " + speech[index].author + " in "  + speech[index].year +
	". It is " + speech[index].bce + " that this year is B.C.E.");
	}


// Create an array to contain the speech objects
var speech = [  new Speech("Churchill",   1940,  false),
				new Speech("Ghandi",      1942,  false),
				new Speech("Demosthenes", 342,   true)    ];



// Create index variables to hold the array position for each speech; kind of overkill in this case,
// but avoids having to hard-code in the array positions. 

var churchillIndex, ghandiIndex, demosthenesIndex;

    for (i=0; i<speech.length; i++) {
        if (speech[i].author === "Churchill")
            churchillIndex = i;
        else if (speech[i].author === "Ghandi")
            ghandiIndex = i;
        else if (speech[i].author === "Demosthenes")
            demosthenesIndex = i;
    }



// Calculate the difference in years for the Churchill and Ghandi speeches 
var yearDifference = speech[ghandiIndex].year - speech[churchillIndex].year;

// ... and display in console
console.log("Ghandi's speech and Churchill's speech are " + yearDifference + " years apart.");



// Event handlers for button clicks

	// Donate button
	document.getElementById('BtnDonate').addEventListener('click', function(){
        console.log("There are " + speech.length + " speeches on the page.");
	});

	// Churchill button
	document.getElementById('BtnChurchill').addEventListener('click', function(){
        showSpeechInfo(churchillIndex);
	});

	// Ghandi button
	document.getElementById('BtnGhandi').addEventListener('click', function(){
        showSpeechInfo(ghandiIndex);
	});

	// Demosthenes button 
	document.getElementById('BtnDemosthenes').addEventListener('click', function(){
        showSpeechInfo(demosthenesIndex);
	});

// End button click event handlers