let clientHeight = document.documentElement.clientHeight;
let logoMenuButton = document.querySelector('.logo-link'); 
let serviceLink = document.querySelector('.services');
let serviceScreen = document.querySelector('.second-screen');
let aboutLink = document.querySelector('.about');
let aboutScreen = document.querySelector('.third-screen');
let contactsLink = document.querySelector('.contacts'); 
let contactsScreen = document.querySelector('.fourth-screen');

// при вертикальном скроле более 890 px становится видна ссылка на главную,
// и не видна если скрол менее 890px

window.onscroll = function () {
  if (window.pageYOffset > clientHeight) {
    logoMenuButton.classList.add('shown');
  } else {
    logoMenuButton.classList.remove('shown');
    };
};

function scrollToServices () {
  serviceScreen.scrollIntoView({block: "center", behavior: "smooth"});
};

// // скролл при клике на кнопку
logoMenuButton.onclick = function () {
  window.scrollTo(0, 0);
};



