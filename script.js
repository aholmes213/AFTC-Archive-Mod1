// JavaScript Document
document.addEventListener('DOMContentLoaded', function() {
	
	const btnBegin = document.getElementById('btnBegin');
	const slideOne = document.getElementById('slideOne');
	const slideTwo = document.getElementById('slideTwo');
	const slideThree = document.getElementById('slideThree');
	const slideFour = document.getElementById('slideFour');	
	const slideFive = document.getElementById('slideFive');	
	const slideSix = document.getElementById('slideSix');	
	const slideSeven = document.getElementById('slideSeven');	
	const btnNext = document.getElementById('next');
	const btnBack = document.getElementById('previous');
	
	btnBegin.addEventListener('click', () => {
		btnBegin.classList.add('active');
		currentSlide = 1
		activateSlide(currentSlide);
		
	});
	
	const slides = [
		slideOne, slideTwo, slideThree, slideSix, slideSeven, slideFive];
	
	let currentSlide = 0;
	
	function activateSlide(index) {
		slides.forEach((slide, i) => {
			slide.classList.remove("active");
			if (i === index) {
				slide.classList.add("active");

				const slideId = slide.id;
				const audioSrc = audioMap[slideId];
				if(audioSrc) {
					source.src = audioSrc;
					audio.pause();
					audio.currentTime=0;
					audio.load();
					audio.play();
				}
			}
		});
	}
	
	btnNext.addEventListener('click', () => {
		if (currentSlide < slides.length - 1) {
			currentSlide++;
			activateSlide(currentSlide);
		}
	});
	
	btnBack.addEventListener("click", () => {
    	if (currentSlide > 0) {
      		currentSlide--;
			activateSlide(currentSlide);
    	}
  	});
	
	const audio = document.getElementById('myAudio');
	const source = audio.querySelector('source');
	
	const audioMap = {
		slideOne: './assets/slide1Audio.wav',
		slideTwo: './assets/slide2_Audio.m4a',
		slideThree: './assets/slide3_Audio.m4a',
		slideFour: './assets/slide4_Audio.wav',
		slideFive: './assets/slide5_Audio.wav',
		slideSix: './assets/slide6_Audio.wav'
		
	}
	
	function playSlideAudio(filePath) {
		source.src = filePath;
		audio.load();
		audio.play();
	}
	function playAudio(filepath) {
		source.src = filepath;
		audio.pause();
		audio.currentTime = 0;
		audio.load();
		audio.play();
	}
	
	const btnUGT = document.getElementById('btnUGT');
	const btnQual = document.getElementById('btnQual');
	const txtUGT = document.getElementById('txtUGT');
	const txtQual = document.getElementById('txtQual');
	const link = document.getElementById('link');
	const guiBlocked = document.getElementById('guiBlocked');
	
	btnUGT.addEventListener('click', () => {
		btnUGT.style.pointerEvents = 'none';
		btnUGT.style.transition = 'transform 0.4s ease';
		btnUGT.style.transform = 'rotate(90deg)';
		setTimeout(() => {
			txtUGT.style.clipPath = 'inset(0 0 0 0)';
			txtUGT.style.transition = 'clip-path 1s cubic-bezier(0.4, 0, 1, 1)';
			btnUGT.style.transition = 'transform 1s cubic-bezier(0.4, 0, 1, 1)';
			btnUGT.style.transform = 'translateX(-580px) rotate(90deg)';
			link.style.pointerEvents = 'all';
			playAudio('./assets/slide3_AudioUGT.wav')
		}, 400);
		setTimeout (() => {
			btnUGT.style.transition = 'transform 0.4s ease';
			btnUGT.style.transform = 'translateX(-580px)';
		},1400);	
	});
	btnQual.addEventListener('click', () => {
		btnQual.style.pointerEvents = 'none';
		btnQual.style.transition = 'transform 0.4s ease';
		btnQual.style.transform = 'rotate(-90deg)';
		setTimeout(() => {
			txtQual.style.clipPath = 'inset(0 0 0 0)';
			txtQual.style.transition = 'clip-path 1s cubic-bezier(0.4, 0, 1, 1)';
			btnQual.style.transition = 'transform 1s cubic-bezier(0.4, 0, 1, 1)';
			btnQual.style.transform = 'translateX(580px) rotate(-90deg)';
			playAudio('./assets/slide3_AudioQual.wav');
		}, 400);
		setTimeout (() => {
			btnQual.style.transition = 'transform 0.4s ease';
			btnQual.style.transform = 'translateX(580px)';
		},1400);	
	});
	link.addEventListener('click', () => {
		slideFour.classList.add('active');
		playAudio('./assets/slide4_Audio.wav');
		guiBlocked.classList.add('active');
	});
	
	const btn7lvl = document.getElementById('btn7lvl');
	const btn5lvl = document.getElementById('btn5lvl');
	const btn3lvl = document.getElementById('btn3lvl');
	const Back7lvl = document.getElementById('7lvlBack');
	const Back5lvl = document.getElementById('5lvlBack');
	const Back3lvl = document.getElementById('3lvlBack');
	const Quals7 = document.getElementById('Quals7');
	const Quals5 = document.getElementById('Quals5');
	const Quals3 = document.getElementById('Quals3');
	const linkSlide4 = document.getElementById('linkSlide4');
	const linkSlide5 = document.getElementById('linkSlide5');
	
	
	btn7lvl.addEventListener('click', () => {
		Back7lvl.style.opacity = '1';
		Back5lvl.style.opacity = '0';
		Back3lvl.style.opacity = '0';
		Quals7.classList.add('active');
		Quals5.classList.remove('active');
		Quals3.classList.remove('active');
		playAudio('./assets/slide4_7lvl.wav');
		linkSlide4.classList.add('active');
		linkSlide5.classList.add('active');
		
	});
	btn5lvl.addEventListener('click', () => {
		Back7lvl.style.opacity = '0';
		Back5lvl.style.opacity = '1';
		Back3lvl.style.opacity = '0';
		Quals7.classList.remove('active');
		Quals5.classList.add('active');
		Quals3.classList.remove('active');
		playAudio('./assets/slide4_5lvl.wav');
		linkSlide4.classList.add('active');
		linkSlide5.classList.add('active');
	});
	btn3lvl.addEventListener('click', () => {
		Back7lvl.style.opacity = '0';
		Back5lvl.style.opacity = '0';
		Back3lvl.style.opacity = '1';
		Quals7.classList.remove('active');
		Quals5.classList.remove('active');
		Quals3.classList.add('active');
		playAudio('./assets/slide4_3lvl.wav');
		linkSlide4.classList.add('active');
		linkSlide5.classList.add('active');
	});
	linkSlide4.addEventListener('click', () => {
		slideFour.classList.remove('active');
		guiBlocked.classList.remove('active');
		currentSlide = 2
		activateSlide(currentSlide);
	});
	linkSlide5.addEventListener('click', () => {
		slideFour.classList.remove('active');
		guiBlocked.classList.remove('active');
		currentSlide = 3
		activateSlide(currentSlide);
	});
	
	const linkJK = document.getElementById('linkKnowledge');
	const linkJP = document.getElementById('linkProficiency');
	const linkJE = document.getElementById('linkExp');
	const txtJK = document.getElementById('jk');
	const txtJP = document.getElementById('jp');
	const txtJE = document.getElementById('je');
	const defJK = document.getElementById('defJK');
	
	linkJK.addEventListener('click', () => {
		slideSeven.classList.add('jk');
		txtJK.classList.add('active');
		defJK.classList.add('active');
	});

});

