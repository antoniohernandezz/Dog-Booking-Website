/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35;
let numofdays = 0;
let tcost = 0;



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function daysbuttonsClicked(day) {
	if (day.classList.contains("clicked")) {
		day.classList.remove("clicked");
	} else {
		day.classList.add("clicked");
		numofdays++;
	}
	tcost = dailyRate * numofdays;
	calculateCost();
}

document.getElementById("monday").addEventListener("click", function() {
	daysbuttonsClicked(this);
});
document.getElementById("tuesday").addEventListener("click", function() {
	daysbuttonsClicked(this);
});
document.getElementById("wednesday").addEventListener("click", function() {
	daysbuttonsClicked(this);
});
document.getElementById("thursday").addEventListener("click", function() {
	daysbuttonsClicked(this);
});
document.getElementById("friday").addEventListener("click", function() {
	daysbuttonsClicked(this);
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDaysbutton() {
	document.getElementById("monday").classList.remove("clicked");
	document.getElementById("tuesday").classList.remove("clicked");
	document.getElementById("wednesday").classList.remove("clicked");
	document.getElementById("thursday").classList.remove("clicked");
	document.getElementById("friday").classList.remove("clicked");
	numofdays = 0;
	tcost = 0;
	calculateCost();
}

document.getElementById("clear-button").addEventListener("click", clearDaysbutton);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfdayButton() {
	document.getElementById("half").classList.add("clicked");
	document.getElementById("full").classList.remove("clicked");
	dailyRate = 20;
	tcost = numofdays * dailyRate;
	calculateCost();
}
document.getElementById("half").addEventListener("click", halfdayButton);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fulldayButton() {
	dailyRate = 35;
	document.getElementById("full").classList.add("clicked");
	document.getElementById("half").classList.remove("clicked");
	dailyRate = 35;
	tcost = numofdays * dailyRate;
	calculateCost();
}
document.getElementById("full").addEventListener("click", fulldayButton);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
	document.getElementById("calculated-cost").innerHTML = tcost;
}