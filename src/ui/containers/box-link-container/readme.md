# Boxlänksbehållare

Denna modulen sätter ramarna för [Boxlänkar](/styleguide/components/detail/box-link--default).

## För utvecklare
Boxlänksbehållaren ansvarar själv för den vertikala marginalen, hur kolumner är uppbyggda med tillhörande brytpunkter samt renderingen av [Boxlänkar](/styleguide/components/detail/box-link--default). Den behöver dock vara på en plats i DOM-trädet som säger till den hur bred den får vara, t.ex. i en `.container`.

Boxlänksbehållaren skall alltid innehålla exakt 2 stycken [Boxlänkar](/styleguide/components/detail/box-link--default). 

### Print
När man printar sidan så har vi lagt boxarna bedvid varandra för att inte slösa papper samt effektivisera läsningen.
