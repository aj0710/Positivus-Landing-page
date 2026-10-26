/**
 * Positivus Landing Page - Interactive Script
 * Handles mobile navigation, accordion, testimonials carousel, and form feedback.
 */

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     1. Mobile Navigation Drawer
     ========================================================================== */
  const menuBtn = document.getElementById("menu-btn");
  const drawer = document.getElementById("mobile-drawer");
  const drawerCloseBtn = document.getElementById("drawer-close-btn");
  const backdrop = document.getElementById("mobile-drawer-backdrop");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add("active");
    backdrop.classList.add("active");
    menuBtn.setAttribute("aria-expanded", "true");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove("active");
    backdrop.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      const isOpen = drawer.classList.contains("active");
      isOpen ? closeDrawer() : openDrawer();
    });
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener("click", closeDrawer);
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeDrawer);
  }

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  // Close on Escape key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer && drawer.classList.contains("active")) {
      closeDrawer();
    }
  });

  /* ==========================================================================
     2. Working Process Accordion
     ========================================================================== */
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const icon = item.querySelector(".accordion-icon");

    if (!header) return;

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      // Close all accordion items
      accordionItems.forEach((otherItem) => {
        otherItem.classList.remove("is-open");
        const otherHeader = otherItem.querySelector(".accordion-header");
        const otherIcon = otherItem.querySelector(".accordion-icon");
        if (otherHeader) otherHeader.setAttribute("aria-expanded", "false");
        if (otherIcon) {
          otherIcon.src = "./image/Plus icon.png";
          otherIcon.alt = "Expand";
        }
      });

      // If clicked item was not open, open it
      if (!isOpen) {
        item.classList.add("is-open");
        header.setAttribute("aria-expanded", "true");
        if (icon) {
          icon.src = "./image/Minus.png";
          icon.alt = "Collapse";
        }
      }
    });
  });

  /* ==========================================================================
     3. Testimonials Carousel
     ========================================================================== */
  const track = document.getElementById("testimonials-track");
  const prevBtn = document.getElementById("prev-testimonial");
  const nextBtn = document.getElementById("next-testimonial");
  const dotsContainer = document.getElementById("carousel-dots");
  const cards = document.querySelectorAll(".testimonial-card");

  if (track && cards.length > 0) {
    let currentIndex = 0;
    const totalCards = cards.length;
    let autoPlayTimer = null;

    // Create dot indicators
    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalCards; i++) {
      const dot = document.createElement("button");
      dot.className = `carousel-dot ${i === 0 ? "active" : ""}`;
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
      dot.setAttribute("aria-selected", i === 0 ? "true" : "false");
      dot.addEventListener("click", () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll(".carousel-dot");

    function updateCarousel() {
      // Calculate translate percentage
      const offset = currentIndex * 100;
      track.style.transform = `translateX(-${offset}%)`;

      // Update dots
      dots.forEach((dot, idx) => {
        const isActive = idx === currentIndex;
        dot.classList.toggle("active", isActive);
        dot.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      // Update buttons disabled state or loop
      if (prevBtn) prevBtn.disabled = false;
      if (nextBtn) nextBtn.disabled = false;
    }

    function goToSlide(index) {
      if (index < 0) {
        currentIndex = totalCards - 1;
      } else if (index >= totalCards) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
      updateCarousel();
    }

    function nextSlide() {
      goToSlide(currentIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentIndex - 1);
    }

    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    // Auto Play
    function startAutoPlay() {
      stopAutoPlay();
      autoPlayTimer = setInterval(nextSlide, 5500);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    const testimonialsBlock = document.querySelector(".testimonials-block");
    if (testimonialsBlock) {
      testimonialsBlock.addEventListener("mouseenter", stopAutoPlay);
      testimonialsBlock.addEventListener("mouseleave", startAutoPlay);
      testimonialsBlock.addEventListener("focusin", stopAutoPlay);
      testimonialsBlock.addEventListener("focusout", startAutoPlay);
    }

    // Touch Swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay();
      },
      { passive: true }
    );

    track.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoPlay();
      },
      { passive: true }
    );

    function handleSwipe() {
      const threshold = 45;
      if (touchStartX - touchEndX > threshold) {
        nextSlide();
      } else if (touchEndX - touchStartX > threshold) {
        prevSlide();
      }
    }

    // Start auto-play initially
    startAutoPlay();
    updateCarousel();
  }

  /* ==========================================================================
     4. Contact Form Handling
     ========================================================================== */
  const contactForm = document.getElementById("contact-form");
  const formFeedback = document.getElementById("form-feedback");

  if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("name");
      const name = nameInput ? nameInput.value.trim() : "there";

      formFeedback.textContent = `Thank you, ${name}! Your message has been sent successfully. We'll be in touch shortly.`;
      formFeedback.className = "form-feedback success";

      contactForm.reset();

      setTimeout(() => {
        formFeedback.textContent = "";
        formFeedback.className = "form-feedback";
      }, 6000);
    });
  }

  /* ==========================================================================
     5. Newsletter Form Handling
     ========================================================================== */
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      const submitBtn = newsletterForm.querySelector('button[type="submit"]');

      if (submitBtn) {
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "Subscribed!";
        submitBtn.style.backgroundColor = "var(--primary-color)";
        submitBtn.style.color = "var(--dark-color)";

        setTimeout(() => {
          submitBtn.textContent = originalText;
          newsletterForm.reset();
        }, 3000);
      }
    });
  }
});
