# Boxlänk
<p style="font-size: 20px">Som redaktör på Skolverket kan du använda Boxlänken för kärninnehåll på skolverket.se:s olika startsidor.</p>

## För redaktörer

### Textlängd
Försök att hålla nere antalet rader text för denna komponent. Layouten stödjer till viss mån varierande textlängder, men långa meningar kommer påverka den negativt. Här kommer några rekomenderade textlängder:

* Rubrik: ~70 tecken
* Undertext: ~140 tecken

### Bildformat
På grund av hur boxen behöver skala om sig i olika format så behöver bilden vara optimerad för just denna komponent. Det här kan vara bra att tänka på:

* Format: 16:9
* Upplösning: Ladda gärna upp bilderna med upplösning av **1200**x**676**px. Detta gör att vi kommer kunna visa bilder med hög upplösning för de enheter som stödjer det.
* Utnitt: Försök att placera det viktigaste i mitten av bilden. Om det finns viktig information på sidorna så kommer dessa beskäras i mobil-läget. Dra i fönstret ovan för att se hur det här fungerar. 

## För utvecklare

### Kontext
| Egenskap                   | Beskrivning |
|----------------------------|-------------|
| <strong>url</strong>       | Adressen där länken skall leda användaren. Denna kan vara extern, intern eller en ankarlänk. |
| <strong>linkType</strong>  | Beroende på vilket värde denna egenskapen har så bifogas en ikon efter rubriken som visualiserar länktypen. Giltiga värden: `internal`, `external`, `anchor` |
| <strong>layout</strong>    | Denna egenskap sätter utséendet för Boxlänken. Om värdet är `imageLink` så kan man rendera ut en bakgrundsbild samt en rubrik med ett boxat utséende. Om värdet är `textLink` så kan man istället visa en mönstrad bakgrund samt möjligheten att rendera ut en **teaser** under rubriken. |
| <strong>pattern</strong>   | Om värdet på **layout** är `textLink` så kan man välja en av dessa olika bakgrundsmönster: [greenSquares](/styleguide/components/detail/box-link--text-link-green-squares), [greenWaves](/styleguide/components/detail/box-link--text-link-green-waves), [purpleSquares](/styleguide/components/detail/box-link--text-link-purple-squares), [purpleWaves](/styleguide/components/detail/box-link--text-link-purple-waves) |
| <strong>image</strong>     | Om värdet på **layout** är `imageLink` så kan man visa en bild |
| <strong>image.src</strong> | Url till en bild med format 16:9. |
| <strong>image.alt</strong> | En beskrivande text om bildens innehåll. |
| <strong>headline</strong>  | En sträng som visas som rubrik |
| <strong>teaser</strong>    | En html-sträng som kan innehålla lätt formaterad text (bold, italic etc) men inte länkar. |

### Tillgänglighet
För att kunna göra det möjligt att göra hela ytan klickbar, samt att den skall vara tillgänglig så måste vi ta ta till några specialknep!

Komponenten lyssnar på att länken (som ligger i rubriken) får fokus. Då kommer skärmläsaren läsa upp det innehållet. Då sätter vi även en `active` style på boxen så det ser ut som vi har fokus på hela boxen. Vi lägger också till ett klick event på boxen som tittar på länkens url och lägger till det värdet på `window.location.href`. 

### No-js
I och med att det krävs javascript för att göra hela boxen klick- och fokusbar (och tillgänglig) så går detta betéendet inte att återskapa om javascript är inaktiverad. Vi ger den därför en annan css så att det inte skall se ut som hela boxen är klickbar när den inte är det.

Se till att inkludera `/css/no-js.min.css` i [headern](/styleguide/components/detail/head) i en noscript-tag för att detta skall se bra ut utan javascript.

### Print
Se [Boxlänksbehållare](/styleguide/components/detail/box-link-container) för hur vi har anpassat utséendet när man printar sidan.
