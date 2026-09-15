/**
 * FERMLYA (فَرْمْلِيَة) - MAIN INTERACTIVE LOGIC & NETLIFY FORM HANDLING
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initModalAndTabs();
  initNetlifyFormHandler();
  initFaqAccordion();
  initMobileNav();
});

/* ==========================================================================
   1. MULTILINGUAL TRANSLATION DICTIONARY
   ========================================================================== */
const translations = {
  fr: {
    navServices: "Services",
    navPricing: "Tarifs & Offres",
    navHowItWorks: "Comment ça marche",
    navCities: "Villes",
    navTrust: "Confiance",
    navPro: "Je suis professionnel",
    navClient: "Je cherche de l'aide",
    heroBadge: "messoins.com — Aide & Soins à domicile au Maroc",
    heroTitle: "Rapprocher les familles et les professionnels du soin",
    heroSubtitle: "messoins.com rassemble les demandes des familles qui cherchent un accompagnement de confiance à domicile (garde-malade, soins infirmiers) et les professionnels qualifiés de la santé au Maroc.",
    heroCtaClient: "Je cherche de l'aide",
    heroCtaPro: "Je suis professionnel",
    pricingTitle: "Tarifs & Offres Transparents",
    pricingSubtitle: "Des tarifs clairs, sans surprise et adaptés à chaque besoin familial au Maroc (exemples indicatifs en DH).",
    howTitle: "Comment ça marche",
    step1Title: "1. Déposez votre demande",
    step1Desc: "Familles et professionnels remplissent un court formulaire d'adhésion en ligne.",
    step2Title: "2. Nous étudions les demandes",
    step2Desc: "Chaque demande est enregistrée et centralisée pour être vérifiée par notre équipe.",
    step3Title: "3. La mise en relation",
    step3Desc: "Nous rapprochons les besoins des familles et les profils des professionnels adaptés.",
    ctaBannerTitle: "Prêt à rejoindre messoins.com ?",
    ctaBannerSub: "Déposez votre demande dès aujourd'hui, que vous cherchiez de l'aide ou que vous souhaitiez proposer vos services.",
    ctaBannerClient: "Je cherche de l'aide",
    ctaBannerPro: "Je suis professionnel"
  },
  ar: {
    navServices: "الخدمات",
    navPricing: "الأسعار والعروض",
    navHowItWorks: "كيف نعمل",
    navCities: "المدن",
    navTrust: "الأمان",
    navPro: "أنا مهني صحي",
    navClient: "أبحث عن رعاية",
    heroBadge: "messoins.com — رعاية صحية وتمريض بالمنزل في المغرب",
    heroTitle: "منصة التقارب بين العائلات والمهنيين الصحيين",
    heroSubtitle: "تجمع منصة messoins.com بين طلبات العائلات التي تبحث عن مرافقة منزلية موثوقة ومهنيي الرعاية الصحية المؤهلين بالمغرب.",
    heroCtaClient: "أبحث عن رعاية منزلية",
    heroCtaPro: "أنا مهني صحي",
    pricingTitle: "أسعار وعروض شفافة",
    pricingSubtitle: "أسعار واضحة ومناسبة لكل عائلة في المغرب (أمثلة إرشادية بالدرهم المغربي).",
    howTitle: "كيف نعمل",
    step1Title: "1. تقديم الطلب",
    step1Desc: "ملء استمارة انضمام قصيرة وسريعة عبر الإنترنت.",
    step2Title: "2. دراسة الطلبات",
    step2Desc: "تسجيل كل طلب والتحقق منه من طرف فريقنا المختص.",
    step3Title: "3. ربط الصلة",
    step3Desc: "التوفيق بين احتياجات العائلة والمهني الأكثر ملاءمة.",
    ctaBannerTitle: "هل أنت مستعد للانضمام إلى messoins.com؟",
    ctaBannerSub: "قدم طلب انضمامك اليوم، سواء كنت تبحث عن رعاية أو ترغب في تقديم خدماتك.",
    ctaBannerClient: "أبحث عن رعاية",
    ctaBannerPro: "أنا مهني صحي"
  },
  en: {
    navServices: "Services",
    navPricing: "Pricing & Packages",
    navHowItWorks: "How it Works",
    navCities: "Cities",
    navTrust: "Trust",
    navPro: "I am a Professional",
    navClient: "I Need Care",
    heroBadge: "messoins.com — Trusted Home Healthcare in Morocco",
    heroTitle: "Connecting families with certified care professionals",
    heroSubtitle: "messoins.com brings together families seeking home care assistance (nursing, elderly care) with qualified healthcare professionals across Morocco.",
    heroCtaClient: "I Need Care",
    heroCtaPro: "I am a Professional",
    pricingTitle: "Transparent Rates & Packages",
    pricingSubtitle: "Clear, upfront pricing tailored for every family need in Morocco (examples in MAD).",
    howTitle: "How It Works",
    step1Title: "1. Submit your request",
    step1Desc: "Families and caregivers complete a short online form.",
    step2Title: "2. We review requests",
    step2Desc: "Each request is verified and centralized by our team.",
    step3Title: "3. Match & Connect",
    step3Desc: "We pair family needs with the most suitable matched profile.",
    ctaBannerTitle: "Ready to Join messoins.com?",
    ctaBannerSub: "Submit your request today, whether you need care or want to offer your professional services.",
    ctaBannerClient: "I Need Care",
    ctaBannerPro: "I am a Professional"
  }
};

/* Language & Modal Functions */
function initLanguageSwitcher() {
  const currentLang = document.documentElement.lang || 'fr';
  applyTranslations(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang) setLanguage(targetLang);
    });
  });
}

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  applyTranslations(lang);
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations.fr;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
}

function initModalAndTabs() {
  const modalOverlay = document.getElementById('lead-modal-overlay');
  const closeBtn = document.getElementById('modal-close-btn');
  const clientTabBtn = document.getElementById('tab-client-btn');
  const caregiverTabBtn = document.getElementById('tab-caregiver-btn');
  const clientForm = document.getElementById('client-lead-form');
  const caregiverForm = document.getElementById('caregiver-lead-form');
  const successScreen = document.getElementById('modal-success-screen');

  function openModal(tab = 'client') {
    modalOverlay.classList.add('open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    switchTab(tab);
    if (successScreen) successScreen.hidden = true;
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    modalOverlay.setAttribute('aria-hidden', 'true');
  }

  function switchTab(tab) {
    if (tab === 'client') {
      clientTabBtn.classList.add('active');
      caregiverTabBtn.classList.remove('active');
      clientForm.classList.add('active');
      caregiverForm.classList.remove('active');
    } else {
      caregiverTabBtn.classList.add('active');
      clientTabBtn.classList.remove('active');
      caregiverForm.classList.add('active');
      clientForm.classList.remove('active');
    }
  }

  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = btn.getAttribute('data-tab') || 'client';
      openModal(targetTab);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  if (clientTabBtn) clientTabBtn.addEventListener('click', () => switchTab('client'));
  if (caregiverTabBtn) caregiverTabBtn.addEventListener('click', () => switchTab('caregiver'));
}

function initNetlifyFormHandler() {
  const forms = [
    document.getElementById('client-lead-form'),
    document.getElementById('caregiver-lead-form')
  ];

  forms.forEach(form => {
    if (!form) return;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      try {
        await fetch('/', {
          method: 'POST',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString()
        });
      } catch (err) {
        console.log('Submission handled');
      }

      form.reset();
      form.style.display = 'none';

      const successScreen = document.getElementById('modal-success-screen');
      if (successScreen) successScreen.hidden = false;
    });
  });
}

function initFaqAccordion() {
  document.querySelectorAll('.faq-accordion-item').forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const panel = item.querySelector('.faq-answer-panel');
    if (btn && panel) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        document.querySelectorAll('.faq-accordion-item').forEach(i => i.classList.remove('active'));
        if (!isOpen) item.classList.add('active');
      });
    }
  });
}

function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('main-nav');
  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', () => {
      const isVisible = mainNav.style.display === 'flex';
      mainNav.style.display = isVisible ? 'none' : 'flex';
    });
  }
}
