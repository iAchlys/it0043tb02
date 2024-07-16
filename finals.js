  let menuIcon = document.querySelector('.menu-icon');
  let navBar = document.querySelector('.navbar');
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('nav a');

  window.onscroll = () => {
    sections.forEach(section => {
      let top = window.scrollY;
      let offset = section.offsetTop;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');

      if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('nav a[href*=' + id + ']').classList.add('active')
        })
      }
    });
  }

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


