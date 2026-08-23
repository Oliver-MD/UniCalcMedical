/* UniCalcMedical i18n
   Language detection order: ?lang= URL parameter (highest priority — this
   is what lets an outbound link, e.g. from LuceoLearn, force Czech) →
   previously saved choice (localStorage) → browser default 'en'.

   Each page defines its own UCM_I18N_PAGE dictionary (page-specific
   strings) before loading this script. This file also carries
   UCM_I18N_SHARED (site-wide chrome: header, disclaimer banner, footer)
   so every page gets consistent translations for the common parts even
   before its own page-specific strings are fully translated.

   Usage in HTML:
     <span data-i18n="brand"></span>              -- sets textContent
     <div data-i18n-html="disclaimer_body"></div> -- sets innerHTML (only
                                                      use for trusted,
                                                      hand-written dictionary
                                                      strings, never for
                                                      anything derived from
                                                      user input)
*/

var UCM_SUPPORTED_LANGS = ['en', 'cs', 'fr', 'de', 'pl'];
var UCM_LANG_NAMES = { en: 'English', cs: 'Čeština', fr: 'Français', de: 'Deutsch', pl: 'Polski' };

var UCM_I18N_SHARED = {
  en: {
    brand: 'UniCalcMedical',
    nav_github: 'GitHub',
    nav_all_tools: 'All tools',
    disclaimer_title: 'Not a medical device.',
    disclaimer_body: 'These calculators are reference implementations of published clinical scoring systems, intended for educational and informational use. They are not intended for clinical diagnosis, treatment decisions, or patient care, and do not replace independent clinical judgement.',
    footer_note: 'UniCalcMedical is an open-source, community-maintained project. Not a medical device. Every calculator lists its primary source — see individual tool pages for full citations.',
    footer_source: 'View source on GitHub',
    back_to_all: '← All UniCalcMedical tools',
    reference_label: 'Reference:',
    verify_against: 'Verify against:'
  },
  cs: {
    brand: 'UniCalcMedical',
    nav_github: 'GitHub',
    nav_all_tools: 'Všechny nástroje',
    disclaimer_title: 'Toto není zdravotnický prostředek.',
    disclaimer_body: 'Tyto kalkulátory jsou referenční implementace publikovaných klinických skórovacích systémů, určené ke vzdělávacím a informačním účelům. Nejsou určeny pro klinickou diagnostiku, rozhodování o léčbě ani péči o pacienty a nenahrazují nezávislý klinický úsudek.',
    footer_note: 'UniCalcMedical je open-source projekt spravovaný komunitou. Nejde o zdravotnický prostředek. U každého kalkulátoru je uveden primární zdroj — úplné citace naleznete na stránce daného nástroje.',
    footer_source: 'Zobrazit zdrojový kód na GitHubu',
    back_to_all: '← Všechny nástroje UniCalcMedical',
    reference_label: 'Zdroj:',
    verify_against: 'Ověřit oproti:'
  },
  fr: {
    brand: 'UniCalcMedical',
    nav_github: 'GitHub',
    nav_all_tools: 'Tous les outils',
    disclaimer_title: "Ceci n'est pas un dispositif médical.",
    disclaimer_body: "Ces calculateurs sont des implémentations de référence de systèmes de score clinique publiés, destinées à un usage éducatif et informatif. Ils ne sont pas destinés au diagnostic clinique, aux décisions thérapeutiques ou aux soins aux patients, et ne remplacent pas le jugement clinique indépendant.",
    footer_note: "UniCalcMedical est un projet open-source maintenu par la communauté. Ce n'est pas un dispositif médical. Chaque calculateur indique sa source principale — voir les pages individuelles pour les citations complètes.",
    footer_source: 'Voir le code source sur GitHub',
    back_to_all: '← Tous les outils UniCalcMedical',
    reference_label: 'Référence :',
    verify_against: 'Vérifier avec :'
  },
  de: {
    brand: 'UniCalcMedical',
    nav_github: 'GitHub',
    nav_all_tools: 'Alle Tools',
    disclaimer_title: 'Dies ist kein Medizinprodukt.',
    disclaimer_body: 'Diese Rechner sind Referenzimplementierungen veröffentlichter klinischer Scoring-Systeme und dienen zu Bildungs- und Informationszwecken. Sie sind nicht für die klinische Diagnose, Behandlungsentscheidungen oder die Patientenversorgung bestimmt und ersetzen keine unabhängige klinische Beurteilung.',
    footer_note: 'UniCalcMedical ist ein Open-Source-Projekt, das von der Community gepflegt wird. Kein Medizinprodukt. Zu jedem Rechner ist die Primärquelle angegeben — vollständige Zitate finden Sie auf den jeweiligen Tool-Seiten.',
    footer_source: 'Quellcode auf GitHub ansehen',
    back_to_all: '← Alle UniCalcMedical-Tools',
    reference_label: 'Quelle:',
    verify_against: 'Abgleichen mit:'
  },
  pl: {
    brand: 'UniCalcMedical',
    nav_github: 'GitHub',
    nav_all_tools: 'Wszystkie narzędzia',
    disclaimer_title: 'To nie jest wyrób medyczny.',
    disclaimer_body: 'Te kalkulatory są referencyjnymi implementacjami opublikowanych klinicznych systemów punktacji, przeznaczonymi do celów edukacyjnych i informacyjnych. Nie są przeznaczone do diagnostyki klinicznej, podejmowania decyzji terapeutycznych ani opieki nad pacjentem i nie zastępują niezależnej oceny klinicznej.',
    footer_note: 'UniCalcMedical to projekt open-source utrzymywany przez społeczność. To nie jest wyrób medyczny. Przy każdym kalkulatorze podano główne źródło — pełne cytowania znajdują się na stronach poszczególnych narzędzi.',
    footer_source: 'Zobacz kod źródłowy na GitHubie',
    back_to_all: '← Wszystkie narzędzia UniCalcMedical',
    reference_label: 'Źródło:',
    verify_against: 'Zweryfikuj z:'
  }
};

function ucmDetectLang() {
  try {
    var params = new URLSearchParams(window.location.search);
    var fromUrl = params.get('lang');
    if (fromUrl && UCM_SUPPORTED_LANGS.indexOf(fromUrl) !== -1) {
      localStorage.setItem('ucm_lang', fromUrl); // URL param also updates the saved preference,
      return fromUrl;                            // so it "sticks" as the person browses further pages
    }
  } catch (e) {}
  try {
    var saved = localStorage.getItem('ucm_lang');
    if (saved && UCM_SUPPORTED_LANGS.indexOf(saved) !== -1) return saved;
  } catch (e) {}
  return 'en';
}

function ucmApplyI18n(lang) {
  var page = (typeof UCM_I18N_PAGE !== 'undefined') ? (UCM_I18N_PAGE[lang] || UCM_I18N_PAGE.en || {}) : {};
  var shared = UCM_I18N_SHARED[lang] || UCM_I18N_SHARED.en;
  var dict = {};
  for (var k in shared) dict[k] = shared[k];
  for (var k2 in page) dict[k2] = page[k2]; // page-specific strings win if a key exists in both
  window._ucmCurrentDict = dict;
  window._ucmCurrentLang = lang;

  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key]; // trusted dictionary content only — never user input
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });
  document.documentElement.setAttribute('lang', lang);
  // Let a tool page re-run its own calculation display (if a result is
  // already showing) so switching language mid-use updates result text too,
  // not just the static form labels around it.
  if (typeof window.ucmOnLangChange === 'function') window.ucmOnLangChange(lang);
}

// Lookup helper for tool pages' JS to use when building dynamically
// generated text (e.g. result interpretations), so that content isn't
// stuck in English even though it's generated by script rather than
// sitting in the HTML as a data-i18n element.
function ucmT(key) {
  var dict = window._ucmCurrentDict || (UCM_I18N_SHARED.en || {});
  return dict[key] !== undefined ? dict[key] : key;
}

function ucmInitLangSwitcher() {
  var lang = ucmDetectLang();
  var select = document.getElementById('lang-select');
  if (select) {
    if (!select.options.length) {
      UCM_SUPPORTED_LANGS.forEach(function(code) {
        var opt = document.createElement('option');
        opt.value = code;
        opt.textContent = UCM_LANG_NAMES[code];
        select.appendChild(opt);
      });
    }
    select.value = lang;
    select.addEventListener('change', function() {
      try { localStorage.setItem('ucm_lang', select.value); } catch (e) {}
      ucmApplyI18n(select.value);
    });
  }
  ucmApplyI18n(lang);
}

document.addEventListener('DOMContentLoaded', ucmInitLangSwitcher);
