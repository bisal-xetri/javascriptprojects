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
