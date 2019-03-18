# Notiser

<p style="font-size: 20px;">Använd den här komponenten för att kommunicera olika typer av upplysningar, varningar och fel. Den kan antingen används globalt över hela sajten, eller mer lokalt i ett mindre kontext. Se [Understartsida](/styleguide/components/preview/understartsida) för demo.</p>

## Global variant

Den globala varianten av notisen är tänkt att ligga ovanför hela sajten och "trycka ner" allt innehåll. För att det ska vara möjligt måste notisen ligga så tidigt i DOMen som möjligt. Antagligen precis efter det att body-taggen öppnas.

## Lokal variant

Den lokala notisen är tänkt att höra till ett mindre kontext, t ex ett formulär. Den tar i sig själv inte hänsyn till positionering. Se till att den omslutande föräldern inte har någon padding, vi vill att notisen ska ligga tryckte emot kanterna och toppen.

## Agera på knapptryck

För att göra en notis borttagbar måste ett event bindas till den knapp som finns i notisen. Det kan se ut ungefär såhär för att stänga en specifik notis:

```javascript
var banner = document.querySelector('#banner-1');
var closeButton = banner.querySelector('button');

button.addEventListener('click', function(event) { ... });
```

I fallet ovanför är det viktigt att själva hålla reda på om notisen i fråga har `dismissable = true` i sin modell vid rendering. Annars existerar inte knappen. Alternativt, för att hantera alla borttagbara notiser på samma sätt i ett svep:

```javascript
var banner = document.querySelector('[data-js-banner][data-js-dismissable=true]');
var closeButton = banner.querySelector('button');

button.addEventListener('click', function(event) { ... });
```

## Anvisningar

Generellt sett så rekommenderas brödtext och länk enbart i kombination med typen `info`. Det finns dock ingen teknisk begränsning som stoppar en egen komposition av t ex `error` och en länk till ytterligare information om det skulle vara nödvändigt.

## Kontext

| Attribut    | Beskrivning                                            |
| ----------- | ------------------------------------------------------ |
| id          | Det unika id som identifierar en notis                 |
| title       | Meddelandet, eller titeln, som visas i notisen         |
| body        | En utförligare text som presenteras under titeln       |
| link        | En navigationslänk. Ett objekt med `label` och `url`   |
| type        | `info`, `warning`, `error`, `confirm`                  |
| local       | Sätt notisens beteende som global eller inte           |
| dismissable | Ska notisen gå att ta bort via en knapp i högerkanten? |
