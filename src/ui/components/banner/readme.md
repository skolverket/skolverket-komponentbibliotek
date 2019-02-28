# Banner

<p style="font-size: 20px;">Använd den här komponenten för att kommunicera olika typer av upplysningar, varningar och fel. Den kan antingen används globalt över hela sajten, eller mer lokalt i ett mindre kontext. Se [Understartsida](http://localhost:3000/styleguide/components/preview/understartsida) för demo.</p>

## Global

Den globala varianten av bannern är tänkt att ligga ovanför hela sajten och "trycka ner" allt innehåll. För att det ska vara möjligt måste bannern ligga så tidigt i DOMen som möjligt. Antagligen precis efter det att `body`-taggen öppnas.

## Lokal

Den lokala bannern är tänkt att höra till ett mindre kontext, t ex ett formulär. Den tar i sig själv inte hänsyn till positionering. Se till att den omslutande föräldern inte har någon padding, vi vill att bannern ska ligga tryckte emot kanterna och toppen.

## Agera på knapptryck

För att göra en banner borttagbar måste ett event bindas till den knapp som finns i bannern. Det kan se ut ungefär såhär för att stänga en specifik banner:

```javascript
var banner = document.querySelector('#banner-1');
var closeButton = banner.querySelector('button');

button.addEventListener('click', function(event) { ... });
```

I fallet ovanför är det viktigt att själva hålla reda på om bannern i fråga har `dismissable = true` i sin modell vid rendering. Annars existerar inte knappen. Alternativt, för att hantera alla borttagbara banners på samma sätt i ett svep:

```javascript
var banner = document.querySelector('[data-js-banner][data-js-dismissable=true]');
var closeButton = banner.querySelector('button');

button.addEventListener('click', function(event) { ... });
```

## Anvisningar

Generellt sett så rekommenderas brödtext och länk enbart i kombination med typen `info`. Det finns dock ingen teknisk begränsning som stoppar en egen komposition av t ex `error` och en länk till ytterligare information om det skulle vara nödvändigt.

## Kontext

| Attribut    | Beskrivning                                               |
|-------------|-----------------------------------------------------------|
| id          | Det unika id som identifierar en banner                   |
| title       | Meddelandet, eller titeln, som visas i bannern            |
| body        | En utförligare text som presenteras under titeln          |
| link        | En navigationslänk. Ett objekt med `label` och `url`      |
| type        | `info`, `warning`, `error`, `confirm`                     |
| local       | Sätt bannerns beteende som global eller inte              |
| dismissable | Ska bannern gå att ta bort via en knapp i högerkanten?    |
