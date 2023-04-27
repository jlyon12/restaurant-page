import clockImg from '../assets/images/clock.svg';
import locationImg from '../assets/images/location.svg';
import phoneImg from '../assets/images/phone.svg';
import {
	main,
	createBox,
	appendBox,
	createListItem,
	createArrow,
} from './createElements';
import enableAnimations from './animations';
import '../styles/home.scss';

const loadHome = () => {
	main.textContent = '';
	createBox('top-box', 1);
	appendBox(1, 'h2', 'Coffee kept simple,');
	appendBox(1, 'p', 'and brewed with intention.');
	createArrow('nav-arrow', 1, 'learn more');
	createBox('sub-box', 2);
	appendBox(2, 'ul', null);
	createListItem(2, clockImg, '7am - 5pm daily');
	createListItem(2, locationImg, '1071 Valencia St, San Francisco CA, 94110');
	createListItem(2, phoneImg, '(415) 826-0607');
	createArrow('hidden', 2);
	enableAnimations();
};
export default loadHome;
