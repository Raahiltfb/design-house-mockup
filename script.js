const intro = document.getElementById("intro");
const app = document.getElementById("app");
const langToggle = document.getElementById("langToggle");
const timelineLine = document.querySelector(".timeline-line");

const dictionary = {
  en: {
    navHome: "Home",
    navProjects: "Projects",
    navServices: "Services",
    navInstagram: "Instagram",
    navContact: "Contact",
    heroTitle: "Designing Modern Homes That Stand Out",
    heroSub:
      "Creative Architecture Group designs modern house elevations, luxury residences, and custom homes across Punjab.",
    ctaExplore: "Explore House Designs",
    ctaStart: "Start Your Home Design",
    showcaseTitle: "Architecture Showcase",
    project1: "Modern Duplex Residence",
    cat1: "Duplex House",
    project2: "Luxury Punjabi Villa",
    cat2: "Bungalow Elevation",
    project3: "Minimal Elevation Concept",
    cat3: "Modern Punjabi Home",
    project4: "Skyline Façade House",
    cat4: "Luxury Villa",
    featuredTag: "Featured Project",
    featuredTitle: "The Courtyard Residence",
    featuredMeta: "Location: Punjab | Type: Modern Residence",
    featuredBody:
      "A layered façade with deep overhangs, warm stone planes, and floating balcony lines creates climate-aware elegance while preserving privacy from the street.",
    highlight1: "Double-height entry with screened daylight.",
    highlight2: "Split-level planning for multigenerational living.",
    highlight3: "3D visualization aligned with final build drawings.",
    instaTitle: "@pb31_house_designer Inspirations",
    instaCta: "View More Designs on Instagram",
    processTitle: "Design Process",
    step1: "Consultation",
    step1Body: "Understanding plot size and requirements.",
    step2: "Concept Development",
    step2Body: "Creating elevation concepts.",
    step3: "3D Visualization",
    step3Body: "Photorealistic previews.",
    step4: "Final Design Package",
    step4Body: "Construction-ready drawings.",
    quote: '"Design House transformed our plot into a stunning modern home design."',
    contactTitle: "Get Your House Designed",
    name: "Name",
    phone: "Phone number",
    plot: "Plot size",
    location: "Location",
    message: "Message",
    contactBtn: "Get Your House Designed",
    waBtn: "WhatsApp Quick Contact",
  },
  pa: {
    navHome: "ਮੁੱਖ",
    navProjects: "ਪ੍ਰੋਜੈਕਟ",
    navServices: "ਸੇਵਾਵਾਂ",
    navInstagram: "ਇੰਸਟਾਗ੍ਰਾਮ",
    navContact: "ਸੰਪਰਕ",
    heroTitle: "ਆਧੁਨਿਕ ਘਰਾਂ ਨੂੰ ਵਿਲੱਖਣ ਬਣਾਉਂਦੇ ਡਿਜ਼ਾਈਨ",
    heroSub:
      "ਕ੍ਰੀਏਟਿਵ ਆਰਕੀਟੈਕਚਰ ਗਰੁੱਪ ਪੰਜਾਬ ਭਰ ਵਿੱਚ ਆਧੁਨਿਕ ਘਰ ਐਲੀਵੇਸ਼ਨ, ਲਗਜ਼ਰੀ ਰਿਹਾਇਸ਼ ਅਤੇ ਕਸਟਮ ਘਰ ਡਿਜ਼ਾਈਨ ਕਰਦਾ ਹੈ।",
    ctaExplore: "ਘਰਾਂ ਦੇ ਡਿਜ਼ਾਈਨ ਵੇਖੋ",
    ctaStart: "ਆਪਣਾ ਘਰ ਡਿਜ਼ਾਈਨ ਸ਼ੁਰੂ ਕਰੋ",
    showcaseTitle: "ਆਰਕੀਟੈਕਚਰ ਸ਼ੋਕੇਸ",
    project1: "ਆਧੁਨਿਕ ਡੁਪਲੇਕਸ ਰਿਹਾਇਸ਼",
    cat1: "ਡੁਪਲੇਕਸ ਘਰ",
    project2: "ਲਗਜ਼ਰੀ ਪੰਜਾਬੀ ਵਿਲਾ",
    cat2: "ਬੰਗਲੇ ਦੀ ਐਲੀਵੇਸ਼ਨ",
    project3: "ਮਿਨੀਮਲ ਐਲੀਵੇਸ਼ਨ ਕਾਂਸੈਪਟ",
    cat3: "ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਘਰ",
    project4: "ਸਕਾਈਲਾਈਨ ਫਸਾਡ ਘਰ",
    cat4: "ਲਗਜ਼ਰੀ ਵਿਲਾ",
    featuredTag: "ਖਾਸ ਪ੍ਰੋਜੈਕਟ",
    featuredTitle: "ਦ ਕੋਰਟਯਾਰਡ ਰਿਹਾਇਸ਼",
    featuredMeta: "ਸਥਾਨ: ਪੰਜਾਬ | ਕਿਸਮ: ਆਧੁਨਿਕ ਰਿਹਾਇਸ਼",
    featuredBody:
      "ਗਹਿਰੇ ਓਵਰਹੈਂਗ, ਗਰਮ ਸਟੋਨ ਪਲੇਨ ਅਤੇ ਫਲੋਟਿੰਗ ਬਾਲਕਨੀ ਲਾਈਨਾਂ ਵਾਲਾ ਫਸਾਡ ਕਲਾਈਮਟ ਦੇ ਅਨੁਕੂਲ ਸੁੰਦਰਤਾ ਅਤੇ ਗੋਪਨੀਯਤਾ ਦਿੰਦਾ ਹੈ।",
    highlight1: "ਡਬਲ-ਹਾਈਟ ਐਂਟਰੀ ਨਾਲ ਨਿਯੰਤਰਿਤ ਡੇਲਾਈਟ।",
    highlight2: "ਮਲਟੀ-ਜਨੇਰੇਸ਼ਨਲ ਲਿਵਿੰਗ ਲਈ ਸਪਲਿਟ-ਲੇਵਲ ਪਲਾਨਿੰਗ।",
    highlight3: "ਫਾਈਨਲ ਡਰਾਇੰਗਜ਼ ਨਾਲ ਅਲਾਇਨ 3D ਵਿਜੁਅਲਾਈਜ਼ੇਸ਼ਨ।",
    instaTitle: "@pb31_house_designer ਪ੍ਰੇਰਣਾ ਬੋਰਡ",
    instaCta: "ਇੰਸਟਾਗ੍ਰਾਮ 'ਤੇ ਹੋਰ ਡਿਜ਼ਾਈਨ ਵੇਖੋ",
    processTitle: "ਡਿਜ਼ਾਈਨ ਪ੍ਰਕਿਰਿਆ",
    step1: "ਕੰਸਲਟੇਸ਼ਨ",
    step1Body: "ਪਲਾਟ ਸਾਈਜ਼ ਅਤੇ ਲੋੜਾਂ ਦੀ ਸਮਝ।",
    step2: "ਕਾਂਸੈਪਟ ਡਿਵੈਲਪਮੈਂਟ",
    step2Body: "ਐਲੀਵੇਸ਼ਨ ਕਾਂਸੈਪਟ ਤਿਆਰ ਕਰਨਾ।",
    step3: "3D ਵਿਜੁਅਲਾਈਜ਼ੇਸ਼ਨ",
    step3Body: "ਫੋਟੋਰੀਅਲਿਸਟਿਕ ਝਲਕਾਂ।",
    step4: "ਫਾਈਨਲ ਡਿਜ਼ਾਈਨ ਪੈਕੇਜ",
    step4Body: "ਨਿਰਮਾਣ ਲਈ ਤਿਆਰ ਡਰਾਇੰਗਜ਼।",
    quote: '"ਡਿਜ਼ਾਈਨ ਹਾਊਸ ਨੇ ਸਾਡੇ ਪਲਾਟ ਨੂੰ ਸ਼ਾਨਦਾਰ ਆਧੁਨਿਕ ਘਰ ਡਿਜ਼ਾਈਨ ਵਿੱਚ ਬਦਲ ਦਿੱਤਾ।"',
    contactTitle: "ਆਪਣਾ ਘਰ ਡਿਜ਼ਾਈਨ ਕਰਵਾਓ",
    name: "ਨਾਮ",
    phone: "ਫੋਨ ਨੰਬਰ",
    plot: "ਪਲਾਟ ਸਾਈਜ਼",
    location: "ਸਥਾਨ",
    message: "ਸੁਨੇਹਾ",
    contactBtn: "ਆਪਣਾ ਘਰ ਡਿਜ਼ਾਈਨ ਕਰਵਾਓ",
    waBtn: "ਵਟਸਐਪ ਤੁਰੰਤ ਸੰਪਰਕ",
  },
};

function setLanguage(language) {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[language][key]) {
      node.textContent = dictionary[language][key];
    }
  });

  document.querySelectorAll("[data-lang]").forEach((node) => {
    node.classList.toggle("active", node.dataset.lang === language);
  });
}

function setupReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.18 }
  );
  revealElements.forEach((el) => observer.observe(el));
}

function setupParallax() {
  const parallaxSections = document.querySelectorAll(".parallax img");
  const updateParallax = () => {
    const offsetY = window.scrollY;
    parallaxSections.forEach((img, index) => {
      const speed = 0.03 + index * 0.012;
      img.style.transform = `translateY(${offsetY * speed}px) scale(1.06)`;
    });
  };

  window.addEventListener("scroll", updateParallax, { passive: true });
}

function setupTimelineLine() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          timelineLine.classList.add("active");
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(document.querySelector(".timeline"));
}

function initIntro() {
  setTimeout(() => {
    intro.classList.add("fade-out");
    app.classList.remove("is-hidden");
    app.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      {
        duration: 950,
        easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
        fill: "forwards",
      }
    );
  }, 5200);
}

langToggle.addEventListener("click", () => {
  const current = document.querySelector("[data-lang].active").dataset.lang;
  const next = current === "en" ? "pa" : "en";
  setLanguage(next);
});

initIntro();
setLanguage("en");
setupReveal();
setupParallax();
setupTimelineLine();
