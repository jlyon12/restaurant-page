import emailImg from '../assets/images/email.svg';
import locationImg from '../assets/images/location.svg';
import phoneImg from '../assets/images/phone.svg';

import {
	main,
	createBox,
	appendBox,
	createListItem,
	createArrow,
} from './createElements';

import '../styles/contact.scss';
import enableAnimations from './animations';

const loadContact = () => {
	main.textContent = '';
	createBox('top-box', 5);
	appendBox(5, 'h2', 'Talk to us');
	appendBox(5, 'p', "it's easy...");
	appendBox(5, 'ul', null);
	createListItem(5, '', 'call us');
	createListItem(5, '', 'email us');
	createListItem(5, '', 'visit us');
	createListItem(5, '', 'Sure.. even snail mail us');
	createArrow('nav-arrow', 1, 'Hit our line!');
	createBox('sub-box', 6);
	appendBox(6, 'ul', null);
	createListItem(6, emailImg, 'dripDrops@drip.com');
	createListItem(6, locationImg, '1071 Valencia St, San Francisco CA, 94110');
	createListItem(6, phoneImg, '(415) 826-0607');
	createArrow('hidden', 2);
	enableAnimations();
};

export default loadContact;
