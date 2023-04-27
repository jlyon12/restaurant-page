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
import enableMenuAnimations from './menuPageAnimations';
import '../styles/menu.scss';

const loadMenu = () => {
	main.textContent = '';
	createBox('menu-box', 1);
	appendBox(1, 'ul', null);
	createListItem(1, dripImg, 'Drip');
	createListItem(1, espressoImg, 'Espresso');
	createListItem(1, americanoImg, 'Americano');
	createListItem(1, cortadoImg, 'Cortado');
	createListItem(1, cappuccinoImg, 'Cappuccino');
	createListItem(1, latteImg, 'Latte');
	createArrow('nav-arrow', 1, 'Is there more?');
	createBox('info-box', 2);
	appendBox(2, 'h2', 'No... ');
	appendBox(
		2,
		'p',
		"At Drip, we are focused on highlighting the unique quality of the coffee's origin. All of our beverages are coffee-forward and meant to showcase the hard work of our partners around the world."
	);
	createArrow('hidden', 2);
	enableMenuAnimations();
};

export default loadMenu;
