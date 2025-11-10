const nav = document.querySelector("nav");

const scrollBtn = document.querySelector(".scroll-button");
const scrollBtnIcon2 = scrollBtn.querySelector("a");
const scrollBtnIcon = scrollBtn.querySelector("i");

const navLinks = document.querySelectorAll(".navbar .menu li a");
const sections = document.querySelectorAll("section");

window.onscroll = () => {

  // Sticky Nav
  if (window.scrollY > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }

  // Scroll Button
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const scrollTop = window.scrollY;

  
  if (scrollTop > 100) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }

  if (scrollTop + clientHeight >= scrollHeight - 300) {

    scrollBtnIcon.classList.remove("fa-arrow-down");
    scrollBtnIcon.classList.add("fa-arrow-up");
    
    scrollBtnIcon2.onclick = (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    
  } else {
    scrollBtnIcon.classList.remove("fa-arrow-up");
    scrollBtnIcon.classList.add("fa-arrow-down");
    
    scrollBtnIcon2.onclick = (e) => {
      e.preventDefault();
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    };
  }
  
  // Active Nav Link
  let currentSectionId = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollTop >= sectionTop - 100) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
};

// Mobile Menu (Hamburger)
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menu = document.querySelector(".navbar .menu");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
};

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
};

// Close mobile menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {

    // Check if the menu is active (mobile view)
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      menuBtn.classList.remove("hide");
    }
  });
});

// Typing Animations (Home & About)
if (typeof Typed !== "undefined") {

  // Animation for Home Page
  var typedHome = new Typed(".typing-text-home", {
    strings: [
      "Software Developer",
      "Competitive Programmer",
      "Web Developer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // Animation for About Page
  var typedAbout = new Typed(".typing-text-about", {
    strings: [
      "Software Developer",
      "Web Developer",
      "Competitive Programmer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
} 
 else {
  console.error("Typed.js library not loaded. Typing animations will not work.");
  
  // Fallback: Set static text if Typed.js fails
  const typingHome = document.querySelector(".typing-text-home");
  if (typingHome) {
    typingHome.textContent = "Software Developer";
  }
  const typingAbout = document.querySelector(".typing-text-about");
  if (typingAbout) {
    typingAbout.textContent = "Software Developer";
  }
}

