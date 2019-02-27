module.exports = {
  context: {
    colorGroups: [
      {
        title: 'Profilfärger',
        description:
          'Skolverkets primära färger är lila och mörkturkos. Dessa ska användas genomgående i all kommunikation.',
        colors: [
          {
            name: 'Profilfärg 1',
            hex: '#692859',
            variable: '$color-primary-purple'
          },
          {
            name: 'Profilfärg 2',
            hex: '#00424C',
            variable: '$color-primary-green'
          }
        ]
      },
      {
        title: 'Accentfärger',
        description:
          'Accentfärgerna används sparsamt. Används främst till dekorelement och ikoner.',
        colors: [
          {
            name: 'Accentfärg 1',
            hex: '#99CED4',
            variable: '$color-accent-blue'
          },
          {
            name: 'Accentfärg 2',
            hex: '#EF7748',
            variable: '$color-accent-red'
          },
          {
            name: 'Accentfärg 3',
            hex: '#F59C00',
            variable: '$color-accent-orange'
          }
        ]
      },
      {
        title: 'Bakgrundsfärger',
        description:
          'Bakgrundsfärgerna får även användas i 50% och 25% opacitet. Hovra färgrutorna för att se hur de fungerar på en större yta.',
        previewProperty: 'backgroundColor',
        colors: [
          {
            name: 'Bakgrundsfärg 1',
            hex: '#DCEAEA',
            variable: '$color-background-blue',
            variants: [
              {
                label: '50%',
                hex: '#EDF4F4',
                variable: '$color-background-blue-lighter'
              },
              {
                label: '25%',
                hex: '#F6FAFA',
                variable: '$color-background-blue-light'
              }
            ]
          },
          {
            name: 'Bakgrundsfärg 2',
            hex: '#FCDBCB',
            variable: '$color-background-red',
            variants: [
              {
                label: '50%',
                hex: '#FDEDE5',
                variable: '$color-background-red-lighter'
              },
              {
                label: '25%',
                hex: '#FEF6F2',
                variable: '$color-background-red-light'
              }
            ]
          },
          {
            name: 'Bakgrundsfärg 3',
            hex: '#FFE56F',
            variable: '$color-background-yellow',
            variants: [
              {
                label: '50%',
                hex: '#FFF2B7',
                variable: '$color-background-yellow-lighter'
              },
              {
                label: '25%',
                hex: '#FFF8DB',
                variable: '$color-background-yellow-light'
              }
            ]
          }
        ]
      },
      {
        title: 'Komplementfärger',
        description:
          'Komplementfärgerna används vid behov av ytterligare färger, exempelvis i diagram och grafik.',
        colors: [
          {
            name: 'Komplementfärg 1',
            hex: '#497E89',
            variable: '$color-complement-green'
          },
          {
            name: 'Komplementfärg 2',
            hex: '#B1451C',
            variable: '$color-complement-brown'
          },
          {
            name: 'Komplementfärg 3',
            hex: '#5a235a',
            variable: '$color-complement-purple'
          },
          {
            name: 'Komplementfärg 4',
            hex: '#f8f4f8',
            variable: '$color-complement-purple-light'
          }
        ]
      },
      {
        title: 'Ramverk',
        colors: [
          {
            name: 'Länkfärg',
            hex: '#0079C2',
            variable: '$color-framework-blue'
          },
          {
            name: 'Felmeddelande',
            hex: '#CD2126',
            variable: '$color-framework-red'
          },
          {
            name: 'Konfirmeringsmeddelande',
            hex: '#1D9A18',
            variable: '$color-framework-green'
          }
        ]
      },
      {
        title: 'Gråskala',
        colors: [
          {
            name: 'Bakgrund',
            hex: '#F2F2F2',
            variable: '$color-gray-background'
          },
          {
            name: 'Ram',
            hex: '#D9D9D9',
            variable: '$color-gray-border'
          },
          {
            name: 'Text',
            hex: '#262626',
            variable: '$color-gray-text'
          },
          {
            name: 'Inaktiv text',
            hex: '#666666',
            variable: '$color-gray-inactive'
          }
        ]
      },
      {
        title: 'Tabeller',
        colors: [
          {
            name: 'Radbakgrund',
            hex: '#F7F7F7',
            variable: '$color-table-background'
          },
          {
            name: 'Ram',
            hex: '#E5E5E5',
            variable: '$color-table-border'
          }
        ]
      }
    ]
  }
};
