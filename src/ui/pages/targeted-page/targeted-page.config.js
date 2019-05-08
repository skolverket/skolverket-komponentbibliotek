module.exports = {
  name: 'Målgruppssida',
  label: 'Målgruppssida',
  handle: 'targeted-page',
  preview: '@layout--page',
  context: {
    title: 'Skolbibliotekarie',
    ingress:
      'Som skolbibliotekarie kan du vara en resurs i undervisning och skolutveckling. Här finns stöd för ditt arbete.',
    linkList: {
      title: 'Ta mig till...',
      isOutlined: true,
      links: [
        {
          text: 'Lorem Ipsum',
          url: '#'
        },
        {
          text: 'Beställ nya böcker',
          url: '#'
        },
        {
          text: 'Dolor Sit Amet',
          url: '#'
        }
      ]
    },
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
    }
  }
};
