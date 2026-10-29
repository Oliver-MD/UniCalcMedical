MEDINTER — interaction results closed until opened  (29 Oct 2026)

WHAT CHANGED
  In "Kontrola interakcí" every result now starts closed and opens only when clicked (or with Enter / Space).
  Before, up to the first three results rated "Závažná" or "Kontraindikace" opened by themselves.
  A result the user opened stays open while the page redraws (a drug added or removed, one of the switches);
  "Vymazat vše" closes them all. The toggle also tells screen readers whether it is open.
  Nothing else changed: 2 files, 11 lines. index.html only loads the script as app.js?v=1.0.1 now (was 1.0.0), so
  browsers fetch the new version at once instead of a cached one.

UPLOAD (GitHub, repository oliver-md/MedInter)
  1. github.com/oliver-md/MedInter -> Add file -> Upload files.
  2. Drop in app.js and index.html from this zip (they replace the old ones) -> Commit changes.
  3. GitHub Pages publishes it within a minute or two.
  4. Check in the dashboard: Léky a interakce -> Kontrola interakcí with a few drugs: all results closed; a click
     opens one.

TESTED (in a real browser, MedInter embedded as in the dashboard, with a small made-up dataset of 4 drugs)
  - The original code opens the serious pair by itself (your screenshot, reproduced).
  - The new code, 10 checks: all closed at first and marked closed for screen readers; a click opens only that one;
    Enter / Space; still open after a switch is changed and after another drug is removed (the list order changes);
    all closed again after "Vymazat vše"; no errors. The page's security policy still matches (unchanged inline script).
