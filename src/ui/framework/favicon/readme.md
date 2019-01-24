# Favicon (Enbart för utvecklare)

<p style="font-size: 20px;">Här finns det information om hur man implementerar skolverkets favicons till alla olika sorters operativsystem och webbläsare</p>

1. Alla ikoner finns att <a href="/styleguide/assets/favicons.zip">ladda hem här</a>.
2. Packa upp innehållet i favicons.zip och lägg alla filer i rooten på er webbplats.
3. Lägg till följande kod inom `<head>`

```
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
<meta name="msapplication-TileColor" content="#da532c" />
<meta name="theme-color" content="#ffffff" />
```
