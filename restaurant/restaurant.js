document.getElementById("menu_icon").addEventListener("click", function () {
  const menu = document.getElementById("nav_menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
  this.classList.toggle("active");
});
