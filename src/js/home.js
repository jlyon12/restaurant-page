import clockImg from '../assets/images/clock.svg';
import locationImg from '../assets/images/location.svg';
import phoneImg from '../assets/images/phone.svg';

const main = document.querySelector('.main');

const createMainBox = () => {
	const mainBox = document.createElement('div');
	mainBox.classList.add('main-box');
	const divOne = document.createElement('div');
	mainBox.appendChild(divOne);
	const divTwo = document.createElement('div');
	const mainBoxTitle = document.createElement('h2');
	mainBoxTitle.textContent = 'Coffee kept simple,';
	const mainBoxText = document.createElement('p');
	mainBoxText.textContent = 'and brewed with intention.';
	divTwo.appendChild(mainBoxTitle);
	divTwo.appendChild(mainBoxText);
	const divThree = document.createElement('div');
	mainBox.appendChild(divThree);
	mainBox.appendChild(divOne);
	mainBox.appendChild(divTwo);
	mainBox.appendChild(divThree);
	main.appendChild(mainBox);
};

const createInfoBox = () => {
	const infoBox = document.createElement('div');
	infoBox.classList.add('info-box');
	const divOne = document.createElement('div');
	infoBox.appendChild(divOne);
	const divTwo = document.createElement('div');
	const divTwoList = document.createElement('ul');
	const listItemOne = document.createElement('li');
	const listItemOneIcon = new Image();
	listItemOneIcon.src = clockImg;
	const listItemOneText = document.createElement('p');
	listItemOneText.textContent = '7am - 5pm daily';
	listItemOne.appendChild(listItemOneIcon);
	listItemOne.appendChild(listItemOneText);
	const listItemTwo = document.createElement('li');
	const listItemTwoIcon = new Image();
	listItemTwoIcon.src = locationImg;
	const listItemTwoText = document.createElement('p');
	listItemTwoText.textContent = '1071 Valencia St, San Francisco CA, 94110';
	listItemTwo.appendChild(listItemTwoIcon);
	listItemTwo.appendChild(listItemTwoText);
	const listItemThree = document.createElement('li');
	const listItemThreeIcon = new Image();
	listItemThreeIcon.src = phoneImg;
	const listItemThreeText = document.createElement('p');
	listItemThreeText.textContent = '(415) 826-0607';
	listItemThree.appendChild(listItemThreeIcon);
	listItemThree.appendChild(listItemThreeText);
	divTwoList.appendChild(listItemOne);
	divTwoList.appendChild(listItemTwo);
	divTwoList.appendChild(listItemThree);
	divTwo.appendChild(divTwoList);
	const divThree = document.createElement('div');
	infoBox.appendChild(divThree);
	infoBox.appendChild(divOne);
	infoBox.appendChild(divTwo);
	infoBox.appendChild(divThree);
	main.appendChild(infoBox);
};

const createNavOne = () => {
	const div = document.createElement('div');
	div.classList.add('nav-arrow');
	const text = document.createElement('p');
	text.classList.add('arrowText');
	text.textContent = 'learn more';
	const arrow = document.createElement('div');
	arrow.setAttribute('id', 'arrowBtn1');

	div.appendChild(text);
	div.appendChild(arrow);
	main.appendChild(div);
};

const createNavTwo = () => {
	const div = document.createElement('div');
	div.classList.add('nav-arrow');
	const arrow = document.createElement('div');
	arrow.classList.add('hidden');
	arrow.setAttribute('id', 'arrowBtn2');
	div.appendChild(arrow);
	main.appendChild(div);
};

const loadHome = () => {
	main.textContent = '';
	createMainBox();
	createNavOne();
	createInfoBox();
	createNavTwo();
};

export default loadHome;
