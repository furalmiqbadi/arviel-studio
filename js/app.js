// ===== GLOBAL STATE =====
let servicesData = [];
let portfolioData = [];
let creatorsData = [];

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  loadData();
  initScrollAnimations();
  initContactForm();
  initPortfolioFilters();
});

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close menu on link click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Active link on scroll
  window.addEventListener("scroll", () => {
    let current = "";
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active");
      }
    });
  });

  // Smooth scroll
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// ===== DATA LOADING =====
async function loadData() {
  try {
    // Load services
    const servicesResponse = await fetch("database/services.json");
    servicesData = await servicesResponse.json();
    renderServices(servicesData.services);

    // Load portfolio
    const portfolioResponse = await fetch("database/portfolio.json");
    portfolioData = await portfolioResponse.json();
    renderPortfolio(portfolioData.portfolio);

    // Load creators
    const creatorsResponse = await fetch("database/creators.json");
    creatorsData = await creatorsResponse.json();
    renderCreators(creatorsData.creators);

    // Start counter animation after data loads
    animateCounters();
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

// ===== RENDER SERVICES =====
function renderServices(services) {
  const servicesGrid = document.getElementById("servicesGrid");

  servicesGrid.innerHTML = services
    .map(
      (service) => `
    <div class="service-card fade-in-up">
      <span class="service-icon">${service.icon}</span>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <ul class="service-features">
        ${service.features.map((feature) => `<li>${feature}</li>`).join("")}
      </ul>
    </div>
  `
    )
    .join("");
}

// ===== RENDER PORTFOLIO =====
function renderPortfolio(portfolio, filter = "all") {
  const portfolioGrid = document.getElementById("portfolioGrid");

  const filteredPortfolio =
    filter === "all"
      ? portfolio
      : portfolio.filter((item) => item.category === filter);

  portfolioGrid.innerHTML = filteredPortfolio
    .map(
      (item) => `
    <div class="portfolio-item fade-in-up" data-category="${item.category}">
      <div class="portfolio-image">
        ${getPortfolioIcon(item.category)}
      </div>
      <div class="portfolio-content">
        <span class="portfolio-category">${item.category}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="portfolio-tech">
          ${item.technologies
            .map((tech) => `<span class="tech-tag">${tech}</span>`)
            .join("")}
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

function getPortfolioIcon(category) {
  const icons = {
    games: "🎮",
    apps: "📱",
  };
  return icons[category] || "💻";
}

// ===== PORTFOLIO FILTERS =====
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      btn.classList.add("active");

      // Get filter value
      const filter = btn.getAttribute("data-filter");

      // Re-render portfolio with filter
      if (portfolioData.portfolio) {
        renderPortfolio(portfolioData.portfolio, filter);
      }
    });
  });
}

// ===== RENDER CREATORS =====
function renderCreators(creators) {
  const creatorsGrid = document.getElementById("creatorsGrid");

  creatorsGrid.innerHTML = creators
    .map(
      (creator) => `
    <div class="creator-card fade-in-up">
      <div class="creator-avatar">
        ${getCreatorIcon(creator.category)}
        ${creator.verified ? '<span class="creator-verified">✓</span>' : ""}
      </div>
      <h3>${creator.name}</h3>
      <span class="creator-platform">${creator.platform}</span>
      <div class="creator-followers">${formatNumber(creator.followers)}</div>
      <div class="creator-followers-label">Followers</div>
      <p>${creator.description}</p>
      <div class="creator-social">
        ${renderSocialLinks(creator.socialLinks)}
      </div>
    </div>
  `
    )
    .join("");
}

function getCreatorIcon(category) {
  const icons = {
    gaming: "🎮",
    tech: "💻",
    lifestyle: "✨",
    creative: "🎨",
  };
  return icons[category] || "👤";
}

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(0) + "K";
  }
  return num.toString();
}

function renderSocialLinks(links) {
  const icons = {
    youtube: "📺",
    instagram: "📷",
    twitter: "🐦",
    tiktok: "🎵",
    twitch: "🎮",
    behance: "🎨",
    github: "💻",
  };

  return Object.entries(links)
    .map(
      ([platform, url]) => `
      <a href="${url}" target="_blank" rel="noopener" title="${platform}">
        ${icons[platform] || "🔗"}
      </a>
    `
    )
    .join("");
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  const speed = 200;

  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute("data-target");
        const increment = target / speed;

        const updateCount = () => {
          const count = +counter.innerText;
          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
          } else {
            counter.innerText = target + "+";
          }
        };

        updateCount();
        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach((counter) => observer.observe(counter));
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe all fade-in-up elements
  const animatedElements = document.querySelectorAll(".fade-in-up");
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
  });
}

// ===== CONTACT FORM =====
function initContactForm() {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      service: document.getElementById("service").value,
      message: document.getElementById("message").value,
      timestamp: new Date().toISOString(),
    };

    try {
      // In a real application, you would send this to a server
      // For now, we'll simulate a successful submission

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      formMessage.textContent =
        "Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.";
      formMessage.className = "form-message success";

      // Reset form
      form.reset();

      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.style.display = "none";
      }, 5000);

      // In a real app, you would save to database/contacts.json
      console.log("Form submitted:", formData);
    } catch (error) {
      formMessage.textContent = "Maaf, terjadi kesalahan. Silakan coba lagi.";
      formMessage.className = "form-message error";
      console.error("Form submission error:", error);
    }
  });
}

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// ===== PERFORMANCE OPTIMIZATION =====

// Optimize scroll events
window.addEventListener(
  "scroll",
  throttle(() => {
    // Scroll-based animations can be added here
  }, 100)
);

// Lazy load images (if we add real images later)
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// ===== EXPORT FOR DEBUGGING =====
if (typeof window !== "undefined") {
  window.arvielStudio = {
    servicesData,
    portfolioData,
    creatorsData,
    reloadData: loadData,
  };
}
