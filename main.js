document.addEventListener('DOMContentLoaded', () => {
  // Intro Loading Scene Logic
  const introScreen = document.getElementById('intro-screen');

  if (introScreen) {
    // Session storage check (shows once per browser session)
    const hasSeenIntro = sessionStorage.getItem('introSeen');
    
    if (hasSeenIntro) {
      // Skip animation if already seen
      introScreen.style.display = 'none';
    } else {
      // Act as a loading screen: Auto-hide after 3.5 seconds
      setTimeout(() => {
        introScreen.classList.add('hidden-intro');
        sessionStorage.setItem('introSeen', 'true');
        
        // Remove from DOM after fade out transition finishes
        setTimeout(() => {
          introScreen.style.display = 'none';
        }, 1000); 
      }, 3500);
    }document.addEventListener('DOMContentLoaded', () => {
  // ===== Intro Loading Scene Logic =====
  const introScreen = document.getElementById('intro-screen');

  if (introScreen) {
    // Check if the intro has already been shown in this browser session
    const hasSeenIntro = sessionStorage.getItem('introSeen');
    
    if (hasSeenIntro) {
      // Skip loading if already seen
      introScreen.style.display = 'none';
    } else {
      // Auto-hide after 3.5 seconds
      setTimeout(() => {
        introScreen.classList.add('hidden-intro');
        sessionStorage.setItem('introSeen', 'true');
        
        // Wait for the fade-out CSS transition (1s) to finish, then remove from DOM
        setTimeout(() => {
          introScreen.style.display = 'none';
        }, 1000); 
      }, 3500);
    }
  }

  // ===== Mobile Hamburger Menu =====
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      // Animate hamburger lines
      const spans = hamburger.querySelectorAll('span');
      if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }

  // ===== Sticky Navbar =====
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ===== Dynamic Year in Footer =====
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ===== Back to Top Button =====
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
  }

  // Mobile Hamburger Menu
  const hamburger = document.getElementById('hamburger');
  // ... [Keep the rest of your main.js code exactly the same] ...
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      // Animate hamburger lines
      const spans = hamburger.querySelectorAll('span');
      if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }

  // Sticky Navbar
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Dynamic Year
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Back to Top
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
});