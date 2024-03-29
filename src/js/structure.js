/* eslint-disable no-unused-vars */
import logo from '../assets/images/logo.svg';
import gitHubImg from '../assets/images/github-mark/github-mark-white.svg';

const container = document.querySelector('#content');
container.classList.add('page-wrapper');

const createHeader = (() => {
	const header = document.createElement('header');
	header.classList.add('header');

	const headerLogo = document.createElement('div');
	headerLogo.setAttribute('class', 'logoLink');
	const headerImg = new Image();
	headerImg.setAttribute('class', 'logoLink');
	headerImg.src = logo;
	const headerTitle = document.createElement('h1');
	headerTitle.textContent = 'Drip.';
	headerLogo.appendChild(headerImg);
	headerLogo.appendChild(headerTitle);
	header.appendChild(headerLogo);

	const headerNav = document.createElement('nav');
	const headerUL = document.createElement('ul');
	const headerLink1 = document.createElement('li');
	const headerLink2 = document.createElement('li');
	const headerLink3 = document.createElement('li');
	headerLink1.textContent = 'Home';
	headerLink1.setAttribute('id', 'homeLink');
	headerLink2.textContent = 'Menu';
	headerLink2.setAttribute('id', 'menuLink');
	headerLink3.textContent = 'Contact';
	headerLink3.setAttribute('id', 'contactLink');
	headerUL.appendChild(headerLink1);
	headerUL.appendChild(headerLink2);
	headerUL.appendChild(headerLink3);
	headerNav.appendChild(headerUL);
	header.appendChild(headerNav);

	container.appendChild(header);
})();

const createMain = (() => {
	const main = document.createElement('main');
	main.classList.add('main');

	container.appendChild(main);
})();

const createFooter = (() => {
	const footer = document.createElement('footer');
	footer.classList.add('footer');
	const footerText = document.createElement('p');
	footerText.textContent = 'created by ';

	const footerLink = document.createElement('a');
	footerLink.setAttribute('href', 'https://github.com/jlyon12');
	footerLink.textContent = 'jlyon12';
	const footerImg = new Image();
	footerImg.src = gitHubImg;
	footer.appendChild(footerText);
	footerText.appendChild(footerLink);
	footer.appendChild(footerImg);
	container.appendChild(footer);
})();
