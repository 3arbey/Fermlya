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
    navPathways: "Les Parcours",
    navHowItWorks: "Comment ça marche",
    navServices: "Services",
    navCities: "Villes",
    navTrust: "Confiance",
    navPro: "Je suis professionnel",
    navClient: "Je cherche de l'aide",
    heroBadge: "Aide à la personne de confiance au Maroc",
    heroTitle: "La mise en relation entre familles et professionnels du soin",
    heroSubtitle: "Fermlya rassemble les demandes des familles qui cherchent un accompagnement à domicile (garde-malade, soins infirmiers) et celles des professionnels de l'aide à la personne et de la santé.",
    heroCtaClient: "Je cherche de l'aide",
    heroCtaPro: "Je suis professionnel",
    pathwaysTitle: "Deux parcours, une seule plateforme",
    pathwayClientTitle: "Vous cherchez de l'aide",
    pathwayClientDesc: "Pour vous ou un proche : aide aux personnes âgées, accompagnement du handicap, garde médicale ou soutien quotidien. Décrivez votre besoin, sa fréquence et son urgence.",
    pathwayClientBtn: "Déposer une demande",
    pathwayProTitle: "Vous êtes professionnel",
    pathwayProDesc: "Aide-soignant, infirmier diplômé, auxiliaire de vie : présentez vos compétences, vos disponibilités et votre profil pour rejoindre notre réseau de confiance au Maroc.",
    pathwayProBtn: "Proposer mes services",
    howTitle: "Comment ça marche",
    step1Title: "1. Déposez votre demande",
    step1Desc: "Familles et professionnels remplissent un court formulaire d'adhésion en ligne.",
    step2Title: "2. Nous étudions les demandes",
    step2Desc: "Chaque demande est enregistrée et centralisée pour être vérifiée par notre équipe.",
    step3Title: "3. La mise en relation",
    step3Desc: "Nous rapprochons les besoins des familles et les profils des professionnels adaptés.",
    ctaBannerTitle: "Prêt à rejoindre Fermlya ?",
    ctaBannerSub: "Déposez votre demande d'adhésion dès aujourd'hui, que vous cherchiez de l'aide ou que vous souhaitiez proposer vos services.",
    ctaBannerClient: "Je cherche de l'aide",
    ctaBannerPro: "Je suis professionnel"
  },
  ar: {
    navPathways: "المسارات",
    navHowItWorks: "كيف نعمل",
    navServices: "الخدمات",
    navCities: "المدن",
    navTrust: "الأمان",
    navPro: "أنا مهني صحي",
    navClient: "أبحث عن رعاية",
    heroBadge: "رعاية وأيدٍ أمينة في خدمتكم بالمغرب",
    heroTitle: "منصة ربط الصلة بين العائلات والمهنيين الصحيين",
    heroSubtitle: "تجمع فَرْمْلِيَة بين طلبات العائلات التي تبحث عن مرافقة منزلية (تمريض، مرافقة كبار السن) ومهنيي الرعاية الصحية المؤهلين.",
    heroCtaClient: "أبحث عن رعاية منزلية",
    heroCtaPro: "أنا مهني صحي",
    pathwaysTitle: "مساران، منصة موحدة",
    pathwayClientTitle: "أنت تبحث عن رعاية",
    pathwayClientDesc: "لك أو لأحد أقاربك: مرافقة كبار السن، الرعاية الطبية أو الدعم اليومي. حدد حاجتك وأوقات توفرك.",
    pathwayClientBtn: "تقديم طلب رعاية",
    pathwayProTitle: "أنت مهني صحي",
    pathwayProDesc: "ممرض معتمد، مساعد معالج، مرافق مرضى: قدم مهاراتك وسيرتك للانضمام إلى شبكتنا الموثوقة بالمغرب.",
    pathwayProBtn: "تقديم خدماتي",
    howTitle: "كيف نعمل",
    step1Title: "1. تقديم الطلب",
    step1Desc: "ملء استمارة انضمام قصيرة وسريعة عبر الإنترنت.",
    step2Title: "2. دراسة الطلبات",
    step2Desc: "تسجيل كل طلب والتحقق منه من طرف فريقنا المختص.",
    step3Title: "3. ربط الصلة",
    step3Desc: "التوفيق بين احتياجات العائلة والمهني الأكثر ملاءمة.",
    ctaBannerTitle: "هل أنت مستعد للانضمام إلى فَرْمْلِيَة؟",
    ctaBannerSub: "قدم طلب انضمامك اليوم، سواء كنت تبحث عن رعاية أو ترغب في تقديم خدماتك.",
    ctaBannerClient: "أبحث عن رعاية",
    ctaBannerPro: "أنا مهني صحي"
  },
  en: {
    navPathways: "Pathways",
    navHowItWorks: "How it Works",
    navServices: "Services",
    navCities: "Cities",
    navTrust: "Trust",
    navPro: "I am a Professional",
    navClient: "I Need Care",
    heroBadge: "Trusted In-Home Care Network in Morocco",
    heroTitle: "Connecting families with certified care professionals",
    heroSubtitle: "Fermlya brings together families seeking home care assistance (nursing, elderly care) with qualified healthcare professionals across Morocco.",
    heroCtaClient: "I Need Care",
    heroCtaPro: "I am a Professional",
    pathwaysTitle: "Two Pathways, One Platform",
    pathwayClientTitle: "You Are Looking for Care",
    pathwayClientDesc: "For yourself or a loved one: elderly care, post-op support, nursing, or daily assistance. Describe your needs and schedule.",
    pathwayClientBtn: "Submit a Request",
    pathwayProTitle: "You Are a Care Professional",
    pathwayProDesc: "Nurse, caregiver, or home aide: present your skills, credentials, and availability to join our trusted network in Morocco.",
    pathwayProBtn: "Offer My Services",
    howTitle: "How It Works",
    step1Title: "1. Submit your request",
    step1Desc: "Families and caregivers complete a short online form.",
    step2Title: "2. We review requests",
    step2Desc: "Each request is verified and centralized by our team.",
    step3Title: "3. Match & Connect",
    step3Desc: "We pair family needs with the most suitable matched profile.",
    ctaBannerTitle: "Ready to Join Fermlya?",
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
