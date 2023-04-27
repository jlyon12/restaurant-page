import dripImg from '../assets/images/menu-icons/drip.svg';
import espressoImg from '../assets/images/menu-icons/espresso.svg';
import cortadoImg from '../assets/images/menu-icons/cortado.svg';
import cappuccinoImg from '../assets/images/menu-icons/cappuccino.svg';
import americanoImg from '../assets/images/menu-icons/americano.svg';
import latteImg from '../assets/images/menu-icons/latte.svg';

import {
	main,
	createBox,
	appendBox,
	createListItem,
	createArrow,
} from './createElements';

import '../styles/menu.scss';
import enableAnimations from './animations';

const loadMenu = () => {
	main.textContent = '';
	createBox('top-box', 3);
	appendBox(3, 'ul', null);
	createListItem(3, dripImg, 'Drip');
	createListItem(3, espressoImg, 'Espresso');
	createListItem(3, americanoImg, 'Americano');
	createListItem(3, cortadoImg, 'Cortado');
	createListItem(3, cappuccinoImg, 'Cappuccino');
	createListItem(3, latteImg, 'Latte');
	createArrow('nav-arrow', 1, 'Is there more?');
	createBox('sub-box', 4);
	appendBox(4, 'h2', 'No... ');
	appendBox(
		4,
		'p',
		"At Drip, we are focused on highlighting the unique quality of the coffee's origin. All of our beverages are coffee-forward and meant to showcase the hard work of our partners around the world."
	);
	createArrow('hidden', 2);
	enableAnimations();
};

export default loadMenu;
