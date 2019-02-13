# Navigation

<p style="font-size: 20px;">Huvudnavigationen på skolverket.se</p>

## Tillgänglighet

Följande interaktionsprinciper förväntas:

### Knapptryck eller fokus på knapp + enter/mellanslag

Ska fälla ut/ihop underliggande navigationslista

### Fokus på innehåll + Escape

Ska fälla ihop innehållet och sätta fokus på knappen

### Fokus utanför innehåll

Innehållet lyssnar inte längre på knapptryck

### Fokus trap

I den mobila version så öppnas navigationen modalt och då ska fokus inte lämna det modala fönstret.

## För utvecklare

### No-js

Om man har stängt av javascript så skall man fortfarande kunna ta till sig innehållet. Detta görs genom att inkludera `/css/no-js.min.css` i [headern](/styleguide/components/detail/head) i en noscript-tag.

### Print

När man skriver ut sidan så visar vi allt innehåll som om komponenten är utfälld. Vi tar även bort knapptexten.
