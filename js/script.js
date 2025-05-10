function togglinHamburger() {
  const hamburger = document.querySelector(".js-bars");

  hamburger.addEventListener("click", () => {
    const mobileList = document.querySelector(".mobile-menu-items");
    if (!mobileList.classList.contains("active")) {
      mobileList.classList.add("active");
    } else {
      mobileList.classList.remove("active");
    }
  }); //for adding listener for hamburger button
}

togglinHamburger();

function mobileMenuScrolling() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY !== 0) {
      navbar.classList.add("scrolling");
    } else {
      navbar.classList.remove("scrolling");
    }
  });
}
mobileMenuScrolling();
