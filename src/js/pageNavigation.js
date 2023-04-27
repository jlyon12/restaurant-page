import loadHome from './homePage';
import loadMenu from './menuPage';
import loadContact from './contactPage';

const logoHomeLinks = document.querySelectorAll('.logoLink');
const homeLink = document.querySelector('#homeLink');
const menuLink = document.querySelector('#menuLink');
const contactLink = document.querySelector('#contactLink');

window.onload = () => {
	loadHome();
};

logoHomeLinks.forEach((el) =>
	el.addEventListener('click', () => {
		loadHome();
	})
);

homeLink.addEventListener('click', () => {
	loadHome();
});

menuLink.addEventListener('click', () => {
	loadMenu();
});

contactLink.addEventListener('click', () => {
	loadContact();
});
