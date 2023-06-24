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