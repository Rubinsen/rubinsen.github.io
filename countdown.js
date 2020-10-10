var countDownDate = new Date("June 22, 2022 0:00:00").getTime();

setInterval(() => {
	var now = new Date().getTime();
	var distance = countDownDate - no
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000
	document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s
	var daysPast = 937 - days;
	var percentProgress = (daysPast / 973) * 100;
	document.getElementById("progress-bar").style.width = percentProgress + "%";
	document.getElementById("percent-progress").innerHTML = percentProgress.toFixed(2) + "%";
    
}, 1000);