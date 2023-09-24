import Swiper, {Scrollbar, Autoplay, Navigation, EffectFade} from 'swiper';
import * as flsFunctions from "./modules/webp.js";
flsFunctions.isWebp();
const menu = document.querySelector(".menu__btn-open");
menu.addEventListener("click", function() {
	document.body.classList.toggle("hidden");
}, false);


Swiper.use([Scrollbar, Autoplay, Navigation, EffectFade]);
const reviews = new Swiper('.reviews__slider', {
	slidesPerView: 1,
	spaceBetween: 20,
	speed: 1000,
	scrollbar: {
	  	el: '.swiper-scrollbar'
	},
	autoplay: {
		delay: 5000,
	},

	breakpoints: {
		768: {
			slidesPerView: 1.2,
		},
		1000: {
			slidesPerView: 1.5,
		},
		1290: {
			slidesPerView: 2,
		},

	}
});

const swiper_slide = document.querySelectorAll('.swiper-slide');

swiper_slide.forEach(element => {
	const count_block = element.querySelectorAll('.swiper-count-block-before');
	var padding = 5;
	count_block.forEach(block => {
		block.style.padding = `${padding}px 0`;
		padding += 15;
	});
});


const statistic = new Swiper('.statistic__slider', {
	slidesPerView: 1,
	spaceBetween: 50,
	effect: 'fade',
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	fadeEffect: {
		crossFade: true
	},
});


const accordeon_content = document.querySelectorAll('.accordeone__content');
accordeon_content.forEach(element => {
	element.style.display = 'none';
})


const accordeon_title = document.querySelectorAll('.accordeone__title');
accordeon_title.forEach(element => {
	element.addEventListener('click', function() {
		this.classList.toggle('active');
		let content = this.nextElementSibling;
		if(content.style.display === 'none'){
			content.style.display = 'block';
		}else{
			content.style.display = 'none';
		}
		
	})
});