---
name: Favicon
---

# Favicon

<p style="font-size: 20px;">Här visas våra favicons i alla olika varianter för olika operativsystem och webbläsare.</p>

## Utvecklare

Hur man implementerar dessa ikoner beskrivs under <a href="/styleguide/components/detail/favicon">Ramverk/favicon</a>

<hr />

<div class="favicons-container">
	{{#each icons}}
    <figure>
      <img class="{{class}}" src="/styleguide/assets/favicons/{{icon}}" />
      <figcaption>{{icon}}</figcaption>
    </figure>
    <hr />
{{/each}}
</div>

<style>
  .favicons-container {
    margin-top: 50px;
  }
  .mstile {
    background-color: #692859
  }
  .Prose .safari {
    max-width: 300px;
  }
  figure {
    text-align: center;
  }
  figcaption {
    margin: 20px 0;
    display: block;
    font-family: monospace;
  }


.Document .Prose {
  max-width: 600px;
}
.Prose img {
  max-width: none;
}
</style>
