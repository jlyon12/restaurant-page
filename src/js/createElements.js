const main = document.querySelector('.main');

const createBox = (className, boxNumber) => {
	const box = document.createElement('div');
	box.classList.add(className);
	const leftBorder = document.createElement('div');
	const contentBox = document.createElement('div');
	contentBox.setAttribute('id', `contentBox-${boxNumber}`);
	const rightBorder = document.createElement('div');
	box.appendChild(leftBorder);
	box.appendChild(contentBox);
	box.appendChild(rightBorder);
	main.appendChild(box);
};

const appendBox = (boxNumber, el, content) => {
	const currentBox = document.getElementById(`contentBox-${boxNumber}`);
	const element = currentBox.appendChild(document.createElement(el));
	element.textContent = content;
};

const createListItem = (boxNumber, imgName, text) => {
	const item = document.createElement('li');
	if (imgName !== undefined) {
		const img = new Image();
		img.src = imgName;
		item.appendChild(img);
	}

	const itemText = document.createElement('p');
	itemText.textContent = text;

	item.appendChild(itemText);
	const currentBox = document.getElementById(`contentBox-${boxNumber}`);
	const currentList = currentBox.querySelector('ul');
	currentList.appendChild(item);
};

const createArrow = (className, arrowNumber, label) => {
	const container = document.createElement('div');
	container.classList.add('nav-arrow');
	const arrow = document.createElement('div');
	arrow.setAttribute('id', `arrowBtn${arrowNumber}`);
	arrow.classList.add(className);
	if (label !== undefined) {
		const text = document.createElement('p');
		text.classList.add('arrowText');
		text.textContent = label;
		container.appendChild(text);
	}
	container.appendChild(arrow);
	main.appendChild(container);
};

export { main, createBox, appendBox, createListItem, createArrow };
