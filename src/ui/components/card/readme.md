# Kort

<p style="font-size: 20px;">Denna komponent används för att skapa listor av länkar till relevant innehåll</p>

## För redaktörer


### Textlängd
Kortets höjd anpassar sig till hur lång text man skriver, men för att uppnå ett genomgående utséende så rekomenderar vi följande:

* Rubrik: ~50 tecken
* Undertext: ~200 tecken

### Bildformat
På grund av hur boxen behöver skala om sig i olika format så behöver bilden vara optimerad för just denna komponent. Det här kan vara bra att tänka på:

* Format: 16:9
* Upplösning: Ladda gärna upp bilderna med upplösning av **355**x**200**px. Detta gör att vi kommer kunna visa bilder med hög upplösning för de enheter som stödjer det.

## För utvecklare

### Kontext
| Egenskap                     | Beskrivning |
|------------------------------|-------------|
| <strong>url</strong>         | Adressen där länken skall leda användaren. Denna kan vara extern, intern eller en ankarlänk. |
| <strong>linkType</strong>    | Beroende på vilket värde denna egenskapen har så bifogas en ikon efter rubriken som visualiserar länktypen. Giltiga värden: `internal`, `external`, `anchor` |
| <strong>image</strong>       | Ett objekt som innehåller bilddata. |
| <strong>image.src</strong>   | Url till en bild med format 16:9. |
| <strong>image.alt</strong>   | En beskrivande text om bildens innehåll. |
| <strong>preHeadline</strong> | En valbar sträng som visas innan rubriken |
| <strong>headline</strong>    | En sträng som visas som rubrik |
| <strong>teaser</strong>      | En html-sträng som kan innehålla lätt formaterad text (bold, italic etc) men inte länkar. |

### Tillgänglighet
Se [Tillgänglighetsanpassade länkar](/styleguide/docs/kod/core/tillganglighetsanpassade-lankar)

### No-js
I och med att det krävs javascript för att göra hela boxen klick- och fokusbar (och tillgänglig) så går detta betéendet inte att återskapa om javascript är inaktiverad. Vi ger den därför en annan css så att det inte skall se ut som hela boxen är klickbar när den inte är det.

Se till att inkludera `/css/no-js.min.css` i [headern](/styleguide/components/detail/head) i en noscript-tag för att detta skall se bra ut utan javascript.

### Print
Vi tar bort gradienten under korten när vi printar sidan för att spara på färg och lägger istället dit en ifylld linje för att markera boxen.
