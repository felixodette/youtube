let menuIcon = document.querySelector(".menu-icon");
let sideBar = document.querySelector(".side-bar");
let videos = document.querySelector(".videos");

menuIcon.onClick = function () {
  sideBar.classList.toggle("no-side-bar");
  videos.classList.toggle("large-videos");
}


