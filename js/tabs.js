const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');

for (const tab of tabsHandlerElems) {
  let headers = document.querySelectorAll('.design__title');
  tab.addEventListener('click', () => {
    headers.forEach(header => {
      header.classList.toggle('hidden')
    })
    tabsHandlerElems.forEach(item => {

      if (tab === item) {
        item.classList.add('design-list__item_active');
      } else {
        item.classList.remove('design-list__item_active')
      }
    })
    tabsFieldElems.forEach(item => {
      if (item.dataset.tabsField === tab.dataset.tabsHandler) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    })
  })
}