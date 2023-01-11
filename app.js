const navFeature = document.querySelector('.popup__item--features');
const navCompany = document.querySelector('.popup__item--company');
const dropFeature = document.querySelector('.dropdown--features-popup');
const dropCompany = document.querySelector('.dropdown--company-popup');
const featureList = document.querySelector('.dropdown__list--feature');
const companyList = document.querySelector('.dropdown__list--company');
const arrowDown = document.querySelector('.nav__arrow-down');
const arrowUp = document.querySelector('.nav__arrow-up');

navFeature.addEventListener('click', () => {
    arrowDown.classList.toggle = 'invisible';
    arrowUp.classList.toggle = 'visible';
    dropFeature.style.height = 'max-content';
    dropFeature.classList.toggle('show-dropdown');
    featureList.classList.toggle('show-droppdown');
})

navCompany.addEventListener('click', () => {
    arrowDown.classList.toggle = 'invisible';
    arrowUp.classList.toggle = 'visible';
    dropCompany.style.height = 'max-content';
    dropCompany.classList.toggle('show-dropdown');
    companyList.classList.toggle('show-dropdown');
})

const menuIcon = document.querySelector('.nav__menu');
const closeIcon = document.querySelector('.popup__close');
const popupBg = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');

menuIcon.addEventListener('click', () => {
    popupBg.classList.add('display-popup');
    popupContent.style.width = '60%';
});

closeIcon.addEventListener('click', () => {
    popupBg.classList.remove('display-popup');
    popupContent.style.width = '0%';
})