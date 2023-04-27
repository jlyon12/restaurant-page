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
import enableContactAnimations from './contactPageAnimations';

const loadContact = () => {
	main.textContent = '';
	createBox('contact-box', 1);
	appendBox(1, 'h2', 'Talk to us');
	appendBox(1, 'p', "it's easy...");
	appendBox(1, 'ul', null);
	createListItem(1, '', 'call us');
	createListItem(1, '', 'email us');
	createListItem(1, '', 'visit us');
	createListItem(1, '', 'Sure.. even snail mail us');
	createArrow('nav-arrow', 1, 'Hit our line!');
	createBox('info-box', 2);
	appendBox(2, 'ul', null);
	createListItem(2, emailImg, 'dripDrops@drip.com');
	createListItem(2, locationImg, '1071 Valencia St, San Francisco CA, 94110');
	createListItem(2, phoneImg, '(415) 826-0607');
	createArrow('hidden', 2);
	enableContactAnimations();
};

export default loadContact;
