document.addEventListener("DOMContentLoaded", () => {

  /* ================= MOBILE NAV ================= */
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  /* ================= SCROLL REVEAL ================= */
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(el => observer.observe(el));

  /* ================= SMOOTH PAGE TRANSITION ================= */
  const links = document.querySelectorAll("a[href]");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      // ignore external links
      if (!href || href.startsWith("#") || href.startsWith("http")) return;

      e.preventDefault();

      document.body.style.opacity = "0";

      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  });

  /* ================= CONTACT FORM ================= */
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const button = form.querySelector("button");
      if (button) {
        button.textContent = "Sending...";
      }

      setTimeout(() => {
        alert("Message sent successfully (frontend demo)");
        form.reset();
        if (button) button.textContent = "Send Message";
      }, 1000);
    });
  }

  /* ================= TYPING EFFECT ================= */
  function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  const typingElement = document.querySelector('h1[data-text]');
  if (typingElement) {
    const text = typingElement.getAttribute('data-text');
    typeWriter(typingElement, text);
  }

});