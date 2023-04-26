import './styles/reset.css';
import './styles/main.scss';
import './js/structure';
import loadHome from './js/home';
import enableHomeAnimations from './js/homeDomControl';

const homeLink = document.querySelector('#homeLink');
const menuLink = document.querySelector('#menuLink');
const contactLink = document.querySelector('#contactLink');

window.onload = () => {
	loadHome();
	enableHomeAnimations();
};
homeLink.addEventListener('click', () => {
	loadHome();
	enableHomeAnimations();
});
