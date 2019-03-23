

function clock(){
	// here we are using the new Data() obect to get the current time and date 
	// and we storing it in a varible called let or we can use var 
	let fullDate = new Date();
	// here we are extracting the hours for the let fullDate 
	let hours = fullDate.getHours();
	// here we are extracting the exact minute using the getMinutes() to the aka new Data() object
	let minutes = fullDate.getMinutes();
	// same with seconds
	let seconds = fullDate.getSeconds();
	
	// here we are using a if statement and saying if 
	// hours,or mintues,seconds variable is less 10 we will then we reset 
	// its value from just a number too now a string + number

	if (hours < 10){
		hours = "0" + hours;
	}
	if (minutes < 10){
		minutes = "0" + minutes;
	}
	if (seconds < 10){
		seconds = "0" + seconds;
	}
	// here we are targeting a element in the DOM, 
	// and we are changing the innerHTML and also
	// anding a colun(:) via catucation
	document.getElementById('hours').innerHTML = hours;
	document.getElementById('mintues').innerHTML =':' +  minutes;
	document.getElementById('seconds').innerHTML =':' + seconds;

}
// here we are calling the function clock() every 10% of a second
// using the method of setInterval
setInterval(clock,100);  // 1000 = 1000 mil seconds = 1 second

