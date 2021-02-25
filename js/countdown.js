const countdown = document.getElementById('countdown');
const progressBar = document.getElementById('progress-bar');
const percentProgress = document.getElementById('percent-progress');

const startDate = new Date("October 23, 2019 0:00:00").getTime();
const endDate = new Date("June 22, 2022 0:00:00").getTime();


particlesJS('particles-js',
	{
		"particles": {
			"number": {
				"value": 160,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#ffffff"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.5,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 50,
				"color": "#ffffff",
				"opacity": 0.1,
				"width": 0.3
			},
			"move": {
				"enable": true,
				"speed": 0.5,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
	}
);


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