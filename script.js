// function toggleMenu() {
//     const menu = document.querySelector(".best-seller");
//     const navitem = document.querySelector("#hamburger-nav .navitem");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
//     navitem.classList.toggle("open");
//   }
function toggleMenu() {
  var nav = document.querySelector("#hamburger-nav .best-seller");
  nav.classList.toggle('show');

  var nav2 = document.querySelector("#hamburger-nav .navitem");
  nav2.classList.toggle('show');

  var hamburgerIcon = document.querySelector(".hamburger-icon");
  hamburgerIcon.classList.toggle('open');

  // Change the icon
  if (hamburgerIcon.classList.contains('open')) {
      hamburgerIcon.innerHTML = '<i class="fa-solid fa-x" style="font-size: 20px;"></i>';
  } else {
      hamburgerIcon.innerHTML = '<span></span><span></span><span></span>';
  }
}


const slides = document.querySelectorAll('.slide-div');
const accordions = document.querySelectorAll('.accordion-item');
const accordionTitles = document.querySelectorAll('.accordion h3');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    const video = slide.querySelector('video, iframe');
    if (video && slide.classList.contains('active')) {
      video.play();
    } else if (video) {
      video.pause();
    }
  });
  accordions.forEach((accordion, i) => {
    accordion.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

let autoPlay = setInterval(nextSlide, 8000);

accordionTitles.forEach((title, index) => {
  title.addEventListener('click', () => {
    currentIndex = index;
    showSlide(index);
    clearInterval(autoPlay);
    autoPlay = setInterval(nextSlide, 8000);
  });
});

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    autoPlay = setInterval(nextSlide, 8000);
  } else {
    clearInterval(autoPlay);
  }
});

// window.addEventListener('resize', () => {
//   if (window.innerWidth <= 768) {
//     clearInterval(autoPlay);
//     // slides.forEach(slide => slide.classList.remove('active'));
//     accordions.forEach(accordion => accordion.classList.remove('active'));
//   } else {
//     autoPlay = setInterval(nextSlide, 8000);
//   }
// });

nextSlide();


//submenu on mobile
function toggleSubMenu(clickedIcon) {
  var navItems = document.querySelectorAll("#hamburger-nav .submenu-ham");

  // Check if the clicked submenu is already open
  var submenu = clickedIcon.parentNode.nextElementSibling;
  var isOpen = submenu.classList.contains('show');

  // Remove 'show' class from all submenus
  navItems.forEach(function(navItem) {
    navItem.classList.remove('show');
  });

  // Toggle 'show' class based on the current state
  if (!isOpen) {
    submenu.classList.add('show');
  }
}

