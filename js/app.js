const faq_items = document.querySelectorAll('.faq .item');

if (faq_items.length > 0) {
  faq_items.forEach((el) => {
    el.onclick = () => {
      el.classList.toggle('active')
    }
  })
}
