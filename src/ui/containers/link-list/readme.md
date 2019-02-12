# Länklista
<p style="font-size: 20px;">Detta är en navigationskomponent som kan användas på startsidan och understartsidor för att hjälpa målgrupperna att hitta det mest relevanta innehållet vid en given tidpunkt på skolåret, eller för att samla vanliga webbplatser som målgrupperna kan ha användning för.</p>

Komponenten har en kort rubrik, som t ex "Många frågar om..." och "Ta mig till...".

Den kan ha max fyra länkar/komponent. Länkarna ska vara till sidor på samma webbplats. Länkarna kan behöva ta upp två rader om de är långa, men rekommendationen är att skriva en kortfattad länktitel.

Visuellt finns det två utseenden att välja mellan för denna.

## För utvecklare

### Kontext
| Egenskap                    | Beskrivning |
|-----------------------------|-------------|
| <strong>title</strong>      | En rubrik som skrivs ut bredvid navigationen. Denna rubrik är obligatorisk. |
| <strong>isOutlined</strong> | Ett true/false värde som sätter en linje runt boxen om den är true. Boxed blir fylld om detta värdet är false. |
| <strong>links</strong>      | En array med länkar. |
| <strong>links.url</strong>  | Url som en länk går till (enbart interna länkar). |
| <strong>links.text</strong> | Texten på länken |
