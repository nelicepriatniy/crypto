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

  labels.forEach((label) => {
    const input = label.querySelector('input')
    const list_items = label.querySelectorAll('.label-list__item')

    let old_value = input.value

    list_items.forEach((list_item) => {
      list_item.onclick = () => {
        const list_item_value = list_item.innerText
        input.value = list_item_value
        label.classList.remove('active')
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
