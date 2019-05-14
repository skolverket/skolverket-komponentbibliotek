# Largekort

<p style="font-size: 20px">Som redaktör på Skolverket kan du använda largekort för att skapa en känsla på skolverket.se:s olika startsidor.</p>

## För redaktörer

### Textlängd

Försök att hålla nere antalet rader text för denna komponent. Layouten stödjer till viss mån varierande textlängder, men långa meningar kommer påverka den negativt. Här kommer några rekomenderade textlängder:

- Rubrik: ~70 tecken

### Bildformat

På grund av hur boxen behöver skala om sig i olika format så behöver bilden vara optimerad för just denna komponent. Det här kan vara bra att tänka på:

- Format: 16:9
- Upplösning: Ladda gärna upp bilderna med upplösning av **1200**x**676**px. Detta gör att vi kommer kunna visa bilder med hög upplösning för de enheter som stödjer det.
- Utsnitt: Försök att placera det viktigaste i mitten av bilden. Om det finns viktig information på sidorna så kommer dessa beskäras i mobil-läget. Dra i fönstret ovan för att se hur det här fungerar.

## För utvecklare

### Kontext

| Egenskap                       | Beskrivning                                                                                  |
| ------------------------------ | -------------------------------------------------------------------------------------------- |
| <strong>url</strong>           | Adressen där länken skall leda användaren. Denna kan vara extern, intern eller en ankarlänk. |
| <strong>background</strong>    | Url till en bild med format 16:9.                                                            |
| <strong>title</strong>         | En sträng som visas som rubrik .                                                             |
| <strong>shouldOverlap</strong> | Om värdet är true så kommer kortet att överlappa ovanstående element                         |
