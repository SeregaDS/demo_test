const btn = document.querySelector('.hero__arrow');
const description = document.querySelector('.hero__text--description');
const block = document.querySelector('.hero__text-block');

btn.addEventListener('click', descriptionOnClick);

function descriptionOnClick() {
    description.classList.toggle('visible');
    block.style.width? block.style.width = '': block.style.width = '300px';
};