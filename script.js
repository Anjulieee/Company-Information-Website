/*MOBILE NAVIGATION*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/*HERO IMAGE SLIDER*/

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

if (slides.length > 0) {
  setInterval(() => {
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }, 4000);
}

/*DARK MODE*/

const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  if (themeBtn) themeBtn.innerHTML =  '<i class="fa-regular fa-sun theme-icon" style="color: #f6f9f5;"></i>';
}
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeBtn.innerHTML = '<i class="fa-regular fa-sun theme-icon" style="color: #f6f9f5;"></i>';
    } 
    else {
      localStorage.setItem("theme", "light");
      themeBtn.innerHTML = '<i class="fa-regular fa-moon theme-icon"></i>';
    }
  });
}

/*SMOOTH SCROLLING*/

// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     const target = document.querySelector(this.getAttribute("href"));

//     if (target) {
//       target.scrollIntoView({
//         behavior: "smooth",
//       });
//     }
//   });
// });

/*CONTACT FORM VALIDATION*/

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    if (name === "") {
      alert("Please enter your name.");
      return;
    }
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email.");
      return;
    }
    if (message.length < 10) {
      alert("Message must contain at least 10 characters.");
      return;
    }
    alert("Thank you! Your message has been sent.");
    form.reset();
  });
}

/* ACCORDION (About Page, achievements)*/

const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");

    const content = button.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

/*SERVICE FILTER (service options)*/

const filterButtons = document.querySelectorAll(".filter-btn");
const serviceCards = document.querySelectorAll(".service-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");

    const filter = button.dataset.filter;

    serviceCards.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block";
      } else if (card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const scrollToTopButton = document.getElementById("scrollToTopButton");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

function moveToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}