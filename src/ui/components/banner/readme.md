# Banner

Använd den här komponenten för att kommunicera olika typer av upplysningar, varningar och fel. Den kan antingen används globalt över hela sajten, eller mer lokalt i ett mindre kontext. Se [Understartsida](http://localhost:3000/styleguide/components/preview/understartsida) för demo.

## Global

Den globala varianten av bannern är tänkt att ligga ovanför hela sajten och "trycka ner" allt innehåll. För att det ska vara möjligt måste banner ligga väldigt långt upp i roten. Antagligen precis efter det att `body`-taggen öppnas.

## Lokal

Den lokala bannern är tänkt att höra till ett mindre kontext, t ex ett formulär.

## Stäng

För att göra en banner borttagbar måste ett event bindas till den knapp som finns i bannern. Det kan se ut ungefär såhär för att stänga en specifik banner:

```javascript
var banner = document.querySelector('#banner-1');
var closeButton = banner.querySelector('button');

button.addEventListener('click', this.handleBannerClose);
```

I fallet ovanför är det viktigt att själva hålla reda på om bannern i fråga har `dismissable = true` i sin modell vid rendering. Annars kommer in knappen existera däri. Alternativt, för att hantera alla borttagbara banners på samma sätt:

```javascript
var banner = document.querySelector('[data-js-banner][data-js-dismissable=true]');
var closeButton = banner.querySelector('button');

button.addEventListener('click', this.handleBannerClose);
```

## Kontext

| Attribut    | Beskrivning                                               |
|-------------|-----------------------------------------------------------|
| id          | Det unika id som identifierar en banner                   |
| message     | Meddelandet                                               |
| type        | `info`, `warning`, `error`, `confirm`                     |
| local       | Sätt bannerns beteende som global eller inte              |
| dismissable | Ska bannern gå att ta bort via en knapp i högerkanten?    |
