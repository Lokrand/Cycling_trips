const buttonSwitch = document.querySelector('#theme-switch');
const body = document.querySelector('.body');;
const headerLinks = document.querySelectorAll('.header__link');
const header = document.querySelectorAll('.content__header');
const text = document.querySelectorAll('.content__text');
const line = document.querySelector('.content__line');
const name = document.querySelector('.content__bike-name');
const highwayButton = document.querySelectorAll('.highway__button');
const merxTitle = document.querySelector('.merx__title');
const merxAuthor = document.querySelector('.merx__author');
const merxHobbies = document.querySelector('.merx__hobbies');
const workoutPlace = document.querySelectorAll('.workout__place');
const bikesMy = document.querySelectorAll('.bikes__name');
const bikeLink = document.querySelectorAll('.bikes__link');
const bikeLinkBold = document.querySelector('.bikes__link_bold');

const footerTitle = document.querySelector('.footer__title');
const footerClubName = document.querySelector('.footer__club-name');
const nightIcon = document.querySelector('.footer__theme-switch');
const dayIcon = document.querySelector('.footer__theme');
const footerEmail = document.querySelector('.footer__email');
buttonSwitch.addEventListener('click', () => {
  // isDarkMode = !isDarkMode;
  body.classList.toggle('body_night')

  header.forEach((el) => {
    el.classList.toggle('content__header_night')
  })
  text.forEach((el) => {
    el.classList.toggle('content__text_night')
  })
  line.classList.toggle('content__line_night')
  name.classList.toggle('content__bike-name_night')
  highwayButton.forEach((el) => {
    el.classList.toggle('highway__button_night')
  })
  headerLinks.forEach((el) => {
    el.classList.toggle('header__link_night')
  })
  merxTitle.classList.toggle('merx__title_night')
  merxAuthor.classList.toggle('merx__author_night')
  merxHobbies.classList.toggle('merx__hobbies_night')
  footerTitle.classList.toggle('footer__title_night')
  footerClubName.classList.toggle('footer__club-name_night')
  workoutPlace.forEach((el) => {
    el.classList.toggle('workout__place_night')
  })
  bikesMy.forEach((el) => {
    el.classList.toggle('bikes__name_night')
  })
  bikeLink.forEach((el) => {
    el.classList.toggle('bikes__link_night')
  })
  bikeLinkBold.classList.toggle('bikes__link_bold_night')
  nightIcon.classList.toggle('footer__theme-switch_nigth')
  dayIcon.classList.toggle('footer__theme_night')
  footerEmail.classList.toggle('footer__email_night')
})
