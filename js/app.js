document.addEventListener('DOMContentLoaded', () => {

  const preloader = document.querySelector('.preloader')
  const percentEl = document.querySelector('.num');
  const liveLine = document.querySelector('.line');

  let percent = 0;

  let startWidth = 25;

  const endWidth = 100;
  const duration = 2000; // общая длительность анимации (мс)
  const stepTime = 20;   // шаг обновления (мс)

  const steps = duration / stepTime;
  const percentStep = 100 / steps;
  const widthStep = (endWidth - startWidth) / steps;

  liveLine.style.width = startWidth + '%';

  const interval = setInterval(() => {
    percent += percentStep;

    if (percent >= 100) {
      percent = 100;
      percentEl.textContent = 100;
      liveLine.style.width = '100%';
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add('disable')
      }, 500);

      // если нужно скрывать прелоадер
      // document.querySelector('.preloader').classList.add('hide');
      return;
    }

    percentEl.textContent = Math.floor(percent);
    liveLine.style.width = startWidth + percent * (endWidth - startWidth) / 100 + '%';
  }, stepTime);


  new WOW().init();
  const faq_items = document.querySelectorAll('.faq .item');

  if (faq_items.length > 0) {
    faq_items.forEach((el) => {
      el.onclick = () => {
        el.classList.toggle('active')
      }
    })
  }


  const hero_form = document.querySelector('.hero form')

  if (hero_form) {
    const labels = hero_form.querySelectorAll('.form-label.list')

    const label_from = hero_form.querySelector('.from')
    const label_to = hero_form.querySelector('.to')

    function changeTo(is_rub) {
      const label_to_list_items = label_to.querySelectorAll('.label-list__item')
      if (is_rub) {
        label_to_list_items.forEach((el) => {
          if (el.getAttribute('data-v').toLowerCase() == 'rub') {
            el.style.display = 'none'
          } else {
            el.style.display = 'block'
          }
        })
        label_to.querySelector('input').value = 'USDT'

      } else {

        label_to_list_items.forEach((el) => {
          if (el.getAttribute('data-v').toLowerCase() == 'rub') {
            el.style.display = 'block'
          } else {
            el.style.display = 'none'
          }
        })
        label_to.querySelector('input').value = 'RUB'
      }

    }

    labels.forEach((label) => {
      const input = label.querySelector('input')
      const list_items = label.querySelectorAll('.label-list__item')

      let old_value = input.value

      list_items.forEach((list_item) => {
        list_item.onclick = () => {
          const list_item_value = list_item.innerText
          input.value = list_item_value
          label.classList.remove('active')

          if (label.classList.contains('from')) {
            if (list_item.innerText.toLowerCase() == 'rub') {
              changeTo(true)
            } else {
              changeTo(false)

            }
          }
        }
      })

      input.addEventListener('input', () => {
        let current_value = input.value.toLowerCase()
        list_items.forEach((list_item) => {
          const list_item_value = list_item.innerText.toLowerCase()
          if (!list_item_value.includes(current_value)) {
            list_item.classList.add('disable')
          } else {
            list_item.classList.remove('disable')
          }

        })
      })

      input.addEventListener('focus', () => {
        list_items.forEach((el) => {
          el.classList.remove('disable')
        })
        labels.forEach((el) => {
          el.classList.remove('active')
        })
        label.classList.add('active')
        old_value = input.value
      })
      document.addEventListener('click', function (e) {
        if (!e.target.classList.contains('label-input')) {
          if (input.value == '') {
            input.value = old_value
          }
          label.classList.remove('active')

        }
      })

    })
  }

  const header_menu = document.querySelector('.mobile-head-menu')
  const header_menu_close = document.querySelectorAll('.mobile-menu-close')
  const header_menu_open = document.querySelectorAll('.header-mob-menu-open')

  if (header_menu) {
    header_menu_close.forEach((el) => {
      el.onclick = () => {
        header_menu.classList.remove('active')
      }
    })
    header_menu_open.forEach((el) => {
      el.onclick = () => {
        header_menu.classList.add('active')
      }
    })
  }



})
