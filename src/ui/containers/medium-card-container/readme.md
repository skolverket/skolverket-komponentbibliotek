# Mediumkort behållare

<p style="font-size: 20px">Denna modulen sätter ramarna för [Medium kort](/styleguide/components/detail/skv-card-medium--standard).</p>

## För utvecklare

Boxlänksbehållaren ansvarar själv för den vertikala marginalen, hur kolumner är uppbyggda med tillhörande brytpunkter samt renderingen av [Mediumkort](/styleguide/components/detail/skv-card-medium--standard). Den behöver dock vara på en plats i DOM-trädet som säger till den hur bred den får vara, t.ex. i en `.container`.

Boxlänksbehållaren skall alltid innehålla exakt 2 stycken [Mediumkort](/styleguide/components/detail/skv-card-medium--standard).

### Print

När man printar sidan så har vi lagt boxarna bedvid varandra för att inte slösa papper samt effektivisera läsningen.
