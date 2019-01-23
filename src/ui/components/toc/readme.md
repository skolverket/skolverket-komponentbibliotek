# Innehållsförteckning

<p style="font-size: 20px;">Ger användaren överblick och möjlighet att hoppa direkt till innehållet.</p>

## Användning

Innehållsförteckning är endast tänkt att användas på en innehållssida/artikelsida

## Tillgänglighet (Mindre skärm)

Följande interaktionsprinciper förväntas av den här komponenten:

### Knapptryck eller fokus på knapp + enter/mellanslag när innehållsförteckningen är stängd

Ska fälla ut innehållsförteckningen och fokus sätts på innehållsförteckningen.

### Knapptryck eller fokus på knapp + enter/mellanslag när innehållsförteckningen är öppen

Ska fälla in innehållsförteckningen och fokus sätts på knappen som öppnar innehållsförteckningen.

### Klick på länk

Ska fälla ihop innehållsförteckningen och fokus sätts på rubriken som länken refererar till. Värdet i adressfältet har också uppdaterats med korrekt ankarlänk.

### Fokus på innehåll + Escape

Ska fälla ihop innehållet och sätta fokus på knappen

### Fokus utanför innehåll

Innehållet lyssnar inte längre på knapptryck

## Tillgänglighet (Större skärm)

### Klick på länk

Ska sätta fokus på rubriken som länken refererar till. Värdet i adressfältet har också uppdaterats med korrekt ankarlänk.

## För utvecklare

### Kontext

| Egenskap                  | Beskrivning                                       |
| ------------------------- | ------------------------------------------------- |
| <strong>title</strong>    | Rubriken för innehållsförteckningen               |
| <strong>headings</strong> | En array med länkobjekt                           |
| <strong>-- title</strong> | Denna text visas inom länken                      |
| <strong>-- url</strong>   | En ankarlänk som tar användaren till rätt sektion |

### No-js

Om man har stängt av javascript så skall man fortfarande kunna ta till sig innehållet. Detta görs genom att inkludera `/css/no-js.min.css` i [headern](/styleguide/components/detail/head) i en noscript-tag.

### Print

När man skriver ut sidan så visar vi innehållsförteckningen ovanför innehållet. Vi tar även bort knappen.
