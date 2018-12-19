module.exports = {
  context: {
    colorGroups: [
      {
        title: "Profilfärger",
        description: 'Skolverkets primära färger är lile och mörkturkos. Dessa ska användas genomgående i all kommunikation.',
        colors: [
          {
            name: "Profilfärg 1",
            hex: "#692859",
          },
          {
            name: "Profilfärg 2",
            hex: "#00424C",
          }
        ]
      },
      {
        title: "Accentfärger",
        description: 'Accentfärgerna används sparsamt. Används främst till dekorelement och ikoner.',
        colors: [
          {
            name: "Accentfärg 1",
            hex: "#99CED4",
          },
          {
            name: "Accentfärg 2",
            hex: "#EF7748",

          },
          {
            name: "Accentfärg 3",
            hex: "#F59C00",
          }
        ]
      },
      {
        title: "Bakgrundsfärger",
        description: 'Bakgrundsfärgerna får även användas i 50% och 25% opacitet. Hovra färgrutorna för att se hur de fungerar på en större yta.',
        previewProperty: 'backgroundColor',
        colors: [
          {
            name: "Bakgrundsfärg 1",
            hex: "#DCEAEA",
            variants: [
              {
                label: '50%',
                hex: "#EDF4F4",
              },
              {
                label: '25%',
                hex: "#F6FAFA",
              }
            ]
          },
          {
            name: 'Bakgrundsfärg 2',
            hex: "#FCDBCB",
            variants: [
              {
                label: '50%',
                hex: "#FDEDE5",
              },
              {
                label: '25%',
                hex: "#FEF6F2",
              }
            ]
          },
          {
            name: 'Bakgrundsfärg 3',
            hex: '#FFE56F',
            variants: [
              {
                label: '50%',
                hex: '#FFF2B7',
              },
              {
                label: '25%',
                hex: '#FFF8DB',
              }
            ]
          }
        ]
      },
      {
        title: "Komplementfärger",
        description: 'Komplementfärgerna används vid behov av ytterligare färger, exempelvis i diagram och grafik.',
        colors: [
          {
            name: "Komplementfärg 1",
            hex: "#497E89",
          },
          {
            name: 'Komplementfärg 2',
            hex: "#B1451C",
          },
        ]
      },
      {
        title: "Ramverk",
        colors: [
          {
            name: "Textfärg",
            hex: "#292929",
          },
          {
            name: 'Sekundär',
            hex: '#666666'
          },
          {
            name: "Länkfärg",
            hex: "#0079C2",
          },
          {
            name: 'Felmeddelande',
            hex: "#CD2126"
          }
        ]
      }
    ]
  }
};
