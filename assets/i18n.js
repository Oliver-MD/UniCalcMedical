/* UniCalcMedical i18n
   Language detection order: ?lang= URL parameter (highest priority — this
   lets any linking site force a specific starting language) →
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

var UCM_SUPPORTED_LANGS = ['en', 'fr', 'de', 'cs', 'pl'];
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
    verify_against: 'Verify against:',
    opt_select: 'Select…',
    err_unanswered: 'Please answer every question — {n} still unanswered (highlighted).',
    err_range: '“{label}” must be between {min} and {max}.',
    err_badnum: '“{label}” is not a valid number.'
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
    verify_against: 'Ověřit oproti:',
    opt_select: 'Vyberte…',
    err_unanswered: 'Odpovězte prosím na všechny otázky — nezodpovězených zůstává: {n} (zvýrazněno).',
    err_range: 'Hodnota „{label}“ musí být v rozmezí {min}–{max}.',
    err_badnum: 'Hodnota „{label}“ není platné číslo.'
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
    verify_against: 'Vérifier avec :',
    opt_select: 'Choisir…',
    err_unanswered: 'Veuillez répondre à toutes les questions — {n} sans réponse (en surbrillance).',
    err_range: '« {label} » doit être compris entre {min} et {max}.',
    err_badnum: '« {label} » n\u2019est pas un nombre valide.'
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
    verify_against: 'Abgleichen mit:',
    opt_select: 'Bitte wählen…',
    err_unanswered: 'Bitte alle Fragen beantworten — noch unbeantwortet: {n} (markiert).',
    err_range: '„{label}“ muss zwischen {min} und {max} liegen.',
    err_badnum: '„{label}“ ist keine gültige Zahl.'
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
    verify_against: 'Zweryfikuj z:',
    opt_select: 'Wybierz…',
    err_unanswered: 'Proszę odpowiedzieć na wszystkie pytania — bez odpowiedzi: {n} (wyróżnione).',
    err_range: 'Wartość „{label}” musi mieścić się w zakresie {min}–{max}.',
    err_badnum: 'Wartość „{label}” nie jest prawidłową liczbą.'
  }
};

function ucmDetectLang() {
  try {
    var params = new URLSearchParams(window.location.search);
    var fromUrl = params.get('lang');
    if (fromUrl && UCM_SUPPORTED_LANGS.indexOf(fromUrl) !== -1) {
      // URL param also updates the saved preference, so it "sticks" as the person browses further pages. Saving may be
      // impossible (a sandboxed frame, private mode, blocked storage): that must never cancel the language the URL asked for.
      try { localStorage.setItem('ucm_lang', fromUrl); } catch (e) {}
      return fromUrl;
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
  if (typeof ucmClearErrors === 'function') ucmClearErrors(); // error texts are in the old language
  // Let a tool page re-run its own calculation display (if a result is
  // already showing) so switching language mid-use updates result text too,
  // not just the static form labels around it.
  // A result box that is hidden (no result yet, or hidden because the inputs changed or an error was shown) must stay
  // hidden: the page's re-render would otherwise bring back an old result that no longer matches the inputs.
  var hiddenResults = Array.prototype.slice.call(document.querySelectorAll('.result:not(.show)'));
  if (typeof window.ucmOnLangChange === 'function') window.ucmOnLangChange(lang);
  hiddenResults.forEach(function (r) { r.classList.remove('show'); });
}

// Lookup helper for tool pages' JS to use when building dynamically
// generated text (e.g. result interpretations), so that content isn't
// stuck in English even though it's generated by script rather than
// sitting in the HTML as a data-i18n element.
function ucmT(key) {
  var dict = window._ucmCurrentDict || (UCM_I18N_SHARED.en || {});
  return dict[key] !== undefined ? dict[key] : key;
}

/* ---------- Shared helpers for tool pages: localised numbers, plural forms, inline errors,
   and the checks that run before every calculation ---------- */

var UCM_LOCALES = { en: 'en-GB', cs: 'cs-CZ', fr: 'fr-FR', de: 'de-DE', pl: 'pl-PL' };

// Formats a number for display in the current language (decimal comma in cs/fr/de/pl).
// decimals: fixed number of decimal places; leave it out to show the number as it is (up to 3 places).
function ucmFmt(x, decimals) {
  var n = Number(x);
  if (!isFinite(n)) return String(x);
  var lang = window._ucmCurrentLang || 'en';
  var opts = (decimals === undefined) ? { maximumFractionDigits: 3 } : { minimumFractionDigits: decimals, maximumFractionDigits: decimals };
  var s;
  try { s = n.toLocaleString(UCM_LOCALES[lang] || 'en-GB', opts); }
  catch (e) { s = (decimals === undefined) ? String(n) : n.toFixed(decimals); }
  if (/^[-−]0([.,]0+)?$/.test(s)) return s.replace(/^[-−]/, ''); // never show "-0"
  return s.replace(/^-/, '−');                                    // typographic minus sign
}

// A number of points with the correct plural form: "1 bod", "2 body", "5 bodů", "1,5 bodu"; "1 point", "2 points"; …
function ucmPoints(n) {
  var lang = window._ucmCurrentLang || 'en';
  var a = Math.abs(Number(n)), whole = Math.floor(a) === a, word;
  if (lang === 'cs') word = !whole ? 'bodu' : (a === 1 ? 'bod' : (a >= 2 && a <= 4 ? 'body' : 'bodů'));
  else if (lang === 'pl') {
    if (!whole) word = 'punktu';
    else if (a === 1) word = 'punkt';
    else { var m10 = a % 10, m100 = a % 100; word = (m10 >= 2 && m10 <= 4 && !(m100 >= 12 && m100 <= 14)) ? 'punkty' : 'punktów'; }
  }
  else if (lang === 'de') word = a === 1 ? 'Punkt' : 'Punkte';
  else if (lang === 'fr') word = a < 2 ? 'point' : 'points';
  else word = a === 1 ? 'point' : 'points';
  return ucmFmt(n) + ' ' + word;
}

// ucmT() with {placeholders} filled in, e.g. ucmTf('err_range', { label: 'Height', min: 50, max: 250 }).
function ucmTf(key, vars) {
  var s = ucmT(key);
  for (var k in vars) s = s.split('{' + k + '}').join(vars[k]);
  return s;
}

// Calculate buttons: every .btn whose onclick starts a calculation (calcXYZ() / showXYZ()).
function ucmCalcButtons() {
  return Array.prototype.slice.call(document.querySelectorAll('button.btn[onclick]')).filter(function (b) {
    return /^\s*(calc|show)/.test(b.getAttribute('onclick'));
  });
}

// The result box that belongs to a calculate button is the first .result after it.
function ucmResultFor(btn) {
  var all = document.querySelectorAll('.result');
  for (var i = 0; i < all.length; i++) {
    if (btn.compareDocumentPosition(all[i]) & Node.DOCUMENT_POSITION_FOLLOWING) return all[i];
  }
  return null;
}

var _ucmActiveBtn = null; // the calculate button clicked last, so tool code can call ucmShowError(msg) without passing it

// Shows an error message under the calculate button (instead of alert(), which a framed page may not be allowed to open)
// and hides that button's previous result, so an old result is never shown next to inputs it no longer matches.
function ucmShowError(msg, btn) {
  var b = btn || _ucmActiveBtn || ucmCalcButtons()[0];
  if (!b) { try { alert(msg); } catch (e) {} return; }
  var box = b.nextElementSibling;
  if (!box || !box.classList.contains('ucm-error')) {
    box = document.createElement('div');
    box.className = 'ucm-error';
    box.setAttribute('role', 'alert');
    b.parentNode.insertBefore(box, b.nextSibling);
  }
  box.textContent = msg;
  box.classList.add('show');
  var res = ucmResultFor(b);
  if (res) res.classList.remove('show');
}

function ucmClearErrors() {
  document.querySelectorAll('.ucm-error').forEach(function (box) { box.textContent = ''; box.classList.remove('show'); });
  document.querySelectorAll('.ucm-invalid').forEach(function (el) { el.classList.remove('ucm-invalid'); });
}

function ucmFieldLabel(el) {
  var lab = el.id ? document.querySelector('label[for="' + el.id + '"]') : null;
  if (!lab && el.closest('.field')) lab = el.closest('.field').querySelector('label');
  if (!lab && el.closest('.card')) lab = el.closest('.card').querySelector('h2');
  return lab ? lab.textContent.replace(/\s+/g, ' ').trim() : (el.id || '');
}

// The inputs a calculate button works with: the visible selects and number fields after the previous calculate
// button (or the top of the page) and before this one.
function ucmFieldsFor(btn) {
  var btns = ucmCalcButtons(), prev = null;
  for (var i = 0; i < btns.length && btns[i] !== btn; i++) prev = btns[i];
  var root = btn.closest('.container') || document.body;
  return Array.prototype.slice.call(root.querySelectorAll('select, input[type="number"], input[data-ucm-num]')).filter(function (el) {
    if (el.id === 'lang-select' || el.disabled) return false;
    if (!(el.offsetWidth || el.offsetHeight || el.getClientRects().length)) return false; // hidden, e.g. a follow-up question that does not apply
    var beforeBtn = el.compareDocumentPosition(btn) & Node.DOCUMENT_POSITION_FOLLOWING;
    var afterPrev = !prev || (prev.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING);
    return beforeBtn && afterPrev;
  });
}

// Every question with a "Select…" option must be answered, and every number entered must lie within the field's
// min–max (a height of 1.75 typed into a centimetre field is caught here rather than giving a BMI of 5714).
function ucmCheckFields(btn) {
  var unanswered = 0, msgs = [];
  ucmFieldsFor(btn).forEach(function (el) {
    var bad = false;
    if (el.tagName === 'SELECT') {
      if (el.value === '' && el.querySelector('option[value=""]')) { unanswered++; bad = true; }
    } else if ((el.validity && el.validity.badInput) || (el.value.trim() !== '' && !/^[-−]?\d*[.,]?\d+$|^[-−]?\d+[.,]?$/.test(el.value.trim()))) {
      msgs.push(ucmTf('err_badnum', { label: ucmFieldLabel(el) })); bad = true;
    } else if (el.value.trim() !== '') {
      var v = parseFloat(el.value), lo = parseFloat(el.getAttribute('min')), hi = parseFloat(el.getAttribute('max'));
      if (isNaN(v) || (!isNaN(lo) && v < lo) || (!isNaN(hi) && v > hi)) {
        msgs.push(ucmTf('err_range', { label: ucmFieldLabel(el), min: ucmFmt(lo), max: ucmFmt(hi) })); bad = true;
      }
    }
    el.classList.toggle('ucm-invalid', bad);
  });
  if (unanswered) msgs.unshift(ucmTf('err_unanswered', { n: unanswered }));
  return msgs;
}

// Runs before the button's own onclick (capture phase on window); if anything is missing or out of range, the
// calculation does not run at all.
window.addEventListener('click', function (e) {
  var btn = e.target && e.target.closest ? e.target.closest('button.btn[onclick]') : null;
  if (!btn || ucmCalcButtons().indexOf(btn) === -1) return;
  _ucmActiveBtn = btn;
  var box = btn.nextElementSibling;
  if (box && box.classList.contains('ucm-error')) { box.textContent = ''; box.classList.remove('show'); }
  var msgs = ucmCheckFields(btn);
  if (msgs.length) {
    e.preventDefault(); e.stopImmediatePropagation();
    ucmShowError(msgs.join('\n'), btn);
    var first = document.querySelector('.ucm-invalid');
    if (first) { try { first.focus(); } catch (err) {} }
  }
}, true);

// A highlighted field loses its highlight as soon as it is changed.
['input', 'change'].forEach(function (type) {
  document.addEventListener(type, function (e) {
    if (e.target && e.target.classList && e.target.classList.contains('ucm-invalid')) e.target.classList.remove('ucm-invalid');
  }, true);
});

// Number fields: <input type="number"> silently misreads a decimal comma in some browsers ("2,5" became 25 in Chromium
// with an English browser language), and 10× the value can still be inside the allowed range. So every number field
// becomes a text field with a decimal keypad that accepts both "2,5" and "2.5": the field keeps showing what was
// typed, while code reading .value always gets a dot-decimal string ("2.5"). Values written by code are shown with
// the decimal separator of the current language. min/max stay as attributes and are checked by ucmCheckFields().
function ucmPrepareNumberInputs() {
  var desc = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
  document.querySelectorAll('input[type="number"]').forEach(function (el) {
    el.setAttribute('type', 'text');
    el.setAttribute('inputmode', 'decimal');
    el.setAttribute('autocomplete', 'off');
    el.setAttribute('data-ucm-num', '');
    Object.defineProperty(el, 'value', {
      configurable: true,
      get: function () { return desc.get.call(this).trim().replace(',', '.').replace('−', '-'); },
      set: function (v) {
        var s = (v === null || v === undefined) ? '' : String(v);
        var comma = ['cs', 'fr', 'de', 'pl'].indexOf(window._ucmCurrentLang) !== -1;
        desc.set.call(this, comma ? s.replace('.', ',') : s);
      }
    });
  });
}
ucmPrepareNumberInputs(); // this script is loaded at the end of <body>, so the fields already exist

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

/* When a calculator is shown inside another site's frame, a link that would replace the calculator (for example the logo, which leads
   to the project home page) opens in a new tab instead, so the frame keeps showing the calculator. This only makes the experience
   nicer: the site that shows the frame enforces the real limit with its own policy. */
(function () {
  try {
    if (window.top === window.self) return;                       // not framed: links behave normally
    document.addEventListener('click', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (!a || a.getAttribute('target') || /^(#|javascript:)/i.test(a.getAttribute('href'))) return;
      a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener noreferrer');
    }, true);
  } catch (e) {}
})();
