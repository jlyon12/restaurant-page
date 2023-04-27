import loadHome from './homePage';
import loadMenu from './menuPage';
import loadContact from './contactPage';

const homeLink = document.querySelector('#homeLink');
const menuLink = document.querySelector('#menuLink');
const contactLink = document.querySelector('#contactLink');

window.onload = () => {
	loadHome();
};
homeLink.addEventListener('click', () => {
	loadHome();
});

menuLink.addEventListener('click', () => {
	loadMenu();
});
contactLink.addEventListener('click', () => {
	loadContact();
});
