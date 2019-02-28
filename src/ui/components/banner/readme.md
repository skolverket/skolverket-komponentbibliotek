# Banner

Använd den här komponenten för att kommunicera olika typer av upplysningar, varningar och fel. Den kan antingen används globalt över hela sajten, eller mer lokalt i ett mindre kontext. Se [Understartsida](http://localhost:3000/styleguide/components/preview/understartsida) för demo.

## Global

Den globala varianten av bannern är tänkt att ligga ovanför hela sajten och "trycka ner" allt innehåll. För att det ska vara möjligt måste banner ligga väldigt långt upp i roten. Antagligen precis efter det att `body`-taggen öppnas.

## Lokal

Den lokala bannern är tänkt att höra till ett mindre kontext, t ex ett formulär.

## Kontext

| Attribut    | Beskrivning                                               |
|-------------|-----------------------------------------------------------|
| message     | Meddelandet                                               |
| theme       | `info`, `warning`, `error`, `confirm`                     |
| icon        | Namnet på den ikon som visas till vänster om meddelandet  |
| local       | Sätt bannerns beteende som global eller inte              |
| dismissable | Ska bannern gå att ta bort via en knapp i högerkanten?    |
