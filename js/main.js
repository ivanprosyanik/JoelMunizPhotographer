const tabsBtn = document.querySelectorAll('.workflow__btn');
const tabsContent = document.querySelectorAll('.workflow__content-item');

tabsBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    tabsBtn.forEach((link) => {
      link.classList.remove('workflow__btn--active')
    });
    btn.classList.add('workflow__btn--active');


    let navIndex = index;

    tabsContent.forEach((item, index) => {
      item.classList.remove('workflow__content-item--active');

      if (index === navIndex) {
        item.classList.add('workflow__content-item--active')
      }

    })
  });
});

const burger = document.querySelector('.burger');
const headerList = document.querySelector('.header__list');
const body = document.querySelector('.body')

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  headerList.classList.toggle('active');
  body.classList.toggle('lock');
});

document.addEventListener('click', function (e) {
  if (e.target !== burger && e.target !== headerList && e.target) {
    body.classList.remove('lock');
    headerList.classList.remove('active');
    burger.classList.remove('burger--active');
  };
});

