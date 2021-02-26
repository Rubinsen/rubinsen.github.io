const countdown = document.getElementById('countdown');
const progressBar = document.getElementById('progress-bar');
const percentProgress = document.getElementById('percent-progress');

const startDate = new Date("October 23, 2019 0:00:00").getTime();
const endDate = new Date("June 22, 2022 0:00:00").getTime();


particlesJS('particles-js');
window.addEventListener('resize', () => {
	particlesJS('particles-js');
});

setInterval(() => {
	var currentDate = new Date().getTime();
	
	var distance = endDate - currentDate;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor(distance % (1000 * 60) / 1000);
	countdown.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
		
	var percentDone = (currentDate - startDate) / (endDate - startDate) * 100;
	progressBar.style.strokeDasharray = percentDone.toFixed(1) + '100';
	percentProgress.innerHTML = percentDone.toFixed(1) + '%';
	percentProgress.setAttribute('transform', 'translate(16, 16) rotate(90)');
}, 1000);