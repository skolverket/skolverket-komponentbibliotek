module.exports = {
  name: 'Målgruppssida',
  handle: 'targeted-page',
  preview: '@layout--page',
  context: {
    pageTitle: 'Skolbibliotekare',
    pageSubtitle: 'Som skolbibliotekarie kan du vara en resurs i undervisning och skolutveckling. Här finns stöd för ditt arbete.',
    contentNav: {
      title: 'Stöd för skolbibliotek',
      columnOne: [
        { label: 'Planer, utvärdera och genomföra' },
        { label: 'Stärk elevers språkliga förmåga' }
      ],
      columnTwo: [
        { label: 'Skapa skolbibliotek för alla' },
        { label: 'Stärk elevers digitala kompetens' }
      ]
    },
    news: {
      title: 'Aktuellt'
    }
  }
}
