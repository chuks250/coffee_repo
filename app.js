document.addEventListener("DOMContentLoaded", () => {
  const toggleMenu = document.getElementById("toggleMenu");
  const navContainer = document.getElementById("navContainer");
  const close = document.getElementById("close");

  toggleMenu.addEventListener("click", () => {
    console.log("I am the hamburger clicked");
    navContainer.classList.add("show_nav");
    toggleMenu.style.display = "none";
    close.style.display = "block";
  });
  close.addEventListener("click", () => {
    console.log("I am the close clicked");
    navContainer.classList.remove("show_nav");
    toggleMenu.style.display = "block";
    close.style.display = "none";
  });
});
