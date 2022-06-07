const buttonSwitch = document.querySelector('#theme-switch');
const body = document.querySelector('.body');
const highwayButton = document.querySelectorAll('.highway__button');
const nightIcon = document.querySelector('.footer__theme-switch');
const dayIcon = document.querySelector('.footer__theme');
const footerEmail = document.querySelector('.footer__email');
const bikesImageBorder = document.querySelectorAll('.bikes__border')
// footer switch the theme
buttonSwitch.addEventListener('click', () => {
  body.classList.toggle('body_night')

  highwayButton.forEach((el) => {
    el.classList.toggle('highway__button_night')
  })
  bikesImageBorder.forEach((el) => {
    el.classList.toggle('bikes__border_night')
  })
  nightIcon.classList.toggle('footer__theme-switch_nigth')
  dayIcon.classList.toggle('footer__theme_night')
  footerEmail.classList.toggle('footer__email_night')
})
// menu popup switch the theme
const popupButtonSwitch = document.querySelector('#popup-theme-switch')

popupButtonSwitch.addEventListener('click', () => {
  body.classList.toggle('body_night')

  highwayButton.forEach((el) => {
    el.classList.toggle('highway__button_night')
  })
  bikesImageBorder.forEach((el) => {
    el.classList.toggle('bikes__border_night')
  })
  nightIcon.classList.toggle('footer__theme-switch_nigth')
  dayIcon.classList.toggle('footer__theme_night')
  footerEmail.classList.toggle('footer__email_night')
})
