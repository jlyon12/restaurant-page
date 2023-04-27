const enableHomeAnimations = () => {
	const $mainBox = document.querySelector('.main-box');
	const $navArrow = document.querySelector('.nav-arrow');
	const $arrowBtn1 = document.querySelector('#arrowBtn1');
	const $arrowBtn2 = document.querySelector('#arrowBtn2');
	$arrowBtn1.addEventListener('click', () => {
		$mainBox.classList.add('move-down');
		$navArrow.classList.add('move-down');
		$arrowBtn2.classList.remove('hidden');
	});
	$arrowBtn2.addEventListener('click', () => {
		$mainBox.classList.remove('move-down');
		$navArrow.classList.remove('move-down');
		$mainBox.classList.add('move-up');
		$navArrow.classList.add('move-up');
		$arrowBtn2.classList.add('hidden');
	});
};

export default enableHomeAnimations;
