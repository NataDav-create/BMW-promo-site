document.addEventListener('DOMContentLoaded', () => {
  const featureLinksElems = document.querySelectorAll('.feature__link');
  const featureSubElems = document.querySelectorAll('.feature-sub');

  featureLinksElems.forEach((btn, index) => {
    changeClass();
    btn.addEventListener('click', (e) => {

      // featureSubElems.forEach((elem) => {
      //   elem.classList.add('hidden')
      // });
      // featureLinksElems.forEach((elem) => {
      //   elem.classList.remove('feature__link_active')
      // });
      if (btn.classList.contains('feature__link_active')) {
        changeClass();
        btn.classList.remove('feature__link_active');
        featureSubElems[index].classList.add('hidden');

      } else {
        changeClass();
        btn.classList.add('feature__link_active');
        featureSubElems[index].classList.remove('hidden');

      }
    })
  })

  function changeClass() {
    featureSubElems.forEach((elem) => {
      elem.classList.add('hidden')
    });
    featureLinksElems.forEach((elem) => {
      elem.classList.remove('feature__link_active')
    });
  }
});