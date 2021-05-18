document.addEventListener('DOMContentLoaded', () => {
  const featureLinksElems = document.querySelectorAll('.feature__link');
  const featureSubElems = document.querySelectorAll('.feature-sub');

  featureLinksElems.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      featureSubElems.forEach((elem) => {
        elem.classList.add('hidden')
      });
      featureLinksElems.forEach((elem) => {
        elem.classList.remove('feature__link_active')
      })
      featureSubElems[index].classList.remove('hidden');
      btn.classList.add('feature__link_active');
    })
  })
});