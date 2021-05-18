document.addEventListener('DOMContentLoaded', () => {
  const featureLinkslems = document.querySelectorAll('.feature__link');
  const featureSubElems = document.querySelectorAll('.feature-sub');


  // featureLinkslems.forEach((elem, i) => {
  //   elem.classList.remove('feature__link_active');
  //   closeAllDrops();
  //   elem.addEventListener('click', () => {
  //     closeAllDrops();
  //     if (elem.classList.contains('feature__link_active')) {
  //       elem.classList.remove('feature__link_active');
  //     } else {
  //       elem.classList.add('feature__link_active');
  //       featureSubElems.forEach((item, index) => {
  //         if (elem.classList.contains('feature__link_active') && (index === i)) {
  //           item.classList.remove('hidden')
  //         } else {
  //           item.classList.add('hidden')
  //         }
  //       })
  //     }
  //   })
  // });

  // function closeAllDrops() {
  //   featureSubElems.forEach((elem) => {
  //     elem.classList.add('hidden')
  //   });
  // }
});