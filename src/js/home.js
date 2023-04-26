import clockImg from '../assets/images/clock.svg';
import locationImg from '../assets/images/location.svg';
import phoneImg from '../assets/images/phone.svg';

const main = document.querySelector('.main');

const createBox = (className, boxNumber) => {
	const box = document.createElement('div');
	box.classList.add(className);
	const leftBorder = document.createElement('div');
	const contentBox = document.createElement('div');
	contentBox.setAttribute('id', `box-${boxNumber}`);
	const rightBorder = document.createElement('div');
	box.appendChild(leftBorder);
	box.appendChild(contentBox);
	box.appendChild(rightBorder);
	main.appendChild(box);
};

const appendBox = (boxNumber, el, content) => {
	const currentBox = document.getElementById(`box-${boxNumber}`);
	const element = currentBox.appendChild(document.createElement(el));
	element.textContent = content;
};

const createListItem = (boxNumber, imgName, text) => {
	const item = document.createElement('li');
	const img = new Image();
	img.src = imgName;
	const itemText = document.createElement('p');
	itemText.textContent = text;
	item.appendChild(img);
	item.appendChild(itemText);
	const currentBox = document.getElementById(`box-${boxNumber}`);
	const currentList = currentBox.querySelector('ul');
	currentList.appendChild(item);
};

const createArrow = (className, arrowNumber, label) => {
	const container = document.createElement('div');
	container.classList.add('nav-arrow');
	const arrow = document.createElement('div');
	arrow.setAttribute('id', `arrowBtn${arrowNumber}`);
	if (label !== undefined) {
		const text = document.createElement('p');
		text.classList.add('arrowText');
		text.textContent = label;
		container.appendChild(text);
	}
	container.appendChild(arrow);
	main.appendChild(container);
};

const loadHome = () => {
	main.textContent = '';
	createBox('main-box', 1);
	appendBox(1, 'h2', 'Coffee kept simple,');
	appendBox(1, 'p', 'and brewed with intention.');
	createArrow('nav-arrow', 1, 'learn more');
	createBox('info-box', 2);
	appendBox(2, 'ul', null);
	createListItem(2, clockImg, '7am - 5pm daily');
	createListItem(2, locationImg, '1071 Valencia St, San Francisco CA, 94110');
	createListItem(2, phoneImg, '(415) 826-0607');
	createArrow('hidden', 2);
};
export default loadHome;
