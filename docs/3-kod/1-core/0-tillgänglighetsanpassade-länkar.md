# Accessible links
<p style="font-size:20px;">Denna funktion använder vi när vi skapar länkar som innehåller mer än text.</p>

## Problem
När man skapar länkar som tex innehåller bilder eller annat innehåll som inte är text, så uppstår några problem. Dels blir det svårt för skärmläsare att förmedla sammanhanget för innehållet, men länkarna blir också dåligt indexerade för SEO.

## Lösning
För att komma runt det här så skapar vi en länk som bara innehåller text, och med hjälp av javascript och css så ökar vi klickytan.

## Vad behöver jag göra?
1. Lägg till attributet `[data-js-accessible-link]` på rotelementet som skall se ut som en länk.
2. Lägg till attributet `[data-js-accessible-link-focus-class]` på rotelementet. Detta är klassen som kommer att sättar på rotelemenetet när man fokuserar på länken.
3. Styla rotelementet med en relevant hovereffekt.
4. Lägg till attributet `[data-js-accessible-link-url]` på länken inne i rotelementet.

## Vad är det som händer?
Vi lyssnar på att länken med attributet `[data-js-accessible-link-url]` får fokus. Då kommer skärmläsaren läsa upp det innehållet. Då sätter vi även en active style (värdet som sätts i attributet `[data-js-accessible-link-focus-class]`) på rotelementet så det ser ut som vi har fokus på hela boxen. Vi lägger också till ett klick event på rotelementet som tittar på länkens url och lägger till det värdet på window.location.href.

## Exempel
Här kommer ett par exempel där vi har valt att använda oss av AccessibleLink-objektet
* [Boxlänkar](/styleguide/components/detail/box-link)
* [Kort](/styleguide/components/detail/card)
