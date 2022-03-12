(function () {
   window.addEventListener('scroll', () => {
      const header = document.querySelector('.header');
      let y = window.scrollY;
      if (y > 0) {
         header.classList.add('_scrolled')
      } else {
         header.classList.remove('_scrolled')
      }
   })
}())
