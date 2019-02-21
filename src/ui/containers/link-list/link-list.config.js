module.exports = {
  name: 'Länklista',
  handle: 'link-list',
  status: 'wip',
  context: {
    title: 'Många frågar om...',
    isOutlined: false,
    links: [
      {
        url: '#',
        text: 'Bedömningsportalen med längre text'
      },
      {
        url: '#',
        text: 'För det vidare'
      },
      {
        url: '#',
        text: 'Jämförelseportalen'
      },
      {
        url: '#',
        text: 'Lärportalen'
      }
    ]
  },
  variants: [
    {
      name: 'outlined',
      context: {
        title: 'Ta mig till...',
        isOutlined: true,
        links: [
          {
            url: '#',
            text: 'Lärarlegitimation'
          },
          {
            url: '#',
            text: 'Särskilt stöd'
          },
          {
            url: '#',
            text: 'Trygghet i skolan'
          },
          {
            url: '#',
            text: 'Nationella prov'
          }
        ]
      }
    }
  ]
}
