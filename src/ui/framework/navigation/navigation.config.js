module.exports = {
  name: 'Navigation',
  handle: 'navigation',
  context: {
    links: [
      {
        text: 'Undervisning',
        url: '#',
        isActive: false,
        isPath: true,
        links: [
          {
            text: 'Förskolan',
            url: '#',
            isActive: false,
            isPath: false,
            links: [
              {
                text: 'Läroplan och kursplaner',
                url: '#',
                isActive: false,
                isPath: false
              },
              {
                text: 'Bedömning',
                url: '#',
                isActive: false,
                isPath: false
              },
              {
                text: 'Nationella prov',
                url: '#',
                isActive: false,
                isPath: false
              },
              {
                text: 'Betyg',
                url: '#',
                isActive: false,
                isPath: false
              },
              {
                text: 'IUP med omdömen',
                url: '#',
                isActive: false,
                isPath: false
              },
              {
                text: 'Lärarlegitimation',
                url: '#',
                isActive: false,
                isPath: false
              },
              {
                text: 'Kompetensutveckling',
                url: '#',
                isActive: false,
                isPath: false
              }
            ]
          },
          {
            text: 'Förskoleklassen',
            url: '#',
            isActive: false
          },
          {
            text: 'Fritidshemmet',
            url: '#',
            isActive: false
          },
          {
            text: 'Grundskolan',
            url: '#',
            isActive: false,
            isPath: true,
            links: [
              {
                text: 'Läroplan och kursplaner',
                url: '#',
                isActive: false,
                isPath: false
              },
              {
                text: 'Bedömning',
                url: '#',
                isActive: false,
                isPath: false
              },
              {
                text: 'Nationella prov',
                url: '#',
                isActive: true
              },
              {
                text: 'Betyg',
                url: '#',
                isActive: false,
                isPath: false
              },
              {
                text: 'IUP med omdömen',
                url: '#',
                isActive: false,
                isPath: false
              }
            ]
          },
          {
            text: 'Grundsärskolan',
            url: '#',
            isActive: false
          },
          {
            text: 'Specialskolan',
            url: '#',
            isActive: false
          },
          {
            text: 'Sameskolan',
            url: '#',
            isActive: false
          },
          {
            text: 'Gymnasieskolan',
            url: '#',
            isActive: false
          },
          {
            text: 'Vuxenutbildningen',
            url: '#',
            isActive: false
          },
          {
            text: 'Dansarutbildningen',
            url: '#',
            isActive: false
          }
        ]
      },
      {
        text: 'Skolutveckling',
        url: '#',
        isActive: false,
        isPath: false,
        links: [
          {
            text: 'Leda och organisera',
            url: '#',
            isActive: false
          },
          {
            text: 'Statsbidrag',
            url: '#',
            isActive: false
          },
          {
            text: 'Forskning och utvärderingar',
            url: '#',
            isActive: false
          },
          {
            text: 'Statistik',
            url: '#',
            isActive: false
          },
          {
            text: 'Kompetensutveckling',
            url: '#',
            isActive: false
          },
          {
            text: 'Anordna och administrera utbildning',
            url: '#',
            isActive: false
          },
          {
            text: 'Inspiration och stöd i arbetet',
            url: '#',
            isActive: false
          }
        ]
      },
      {
        text: 'Regler och ansvar',
        url: '#',
        isActive: false,
        isPath: false,
        links: [
          {
            text: 'Ansvar i skolfrågor',
            url: '#',
            isActive: false
          },
          {
            text: 'Skollagen och förordningar',
            url: '#',
            isActive: false
          },
          {
            text: 'Allmäna råd',
            url: '#',
            isActive: false
          },
          {
            text: 'Sök förordningar och föreskrifter (SKOLFS)',
            url: '#',
            isActive: false
          },
          {
            text: 'Aktuella regeländringar',
            url: '#',
            isActive: false
          },
          {
            text: 'Lärar- och förskolelegitimation',
            url: '#',
            isActive: false
          },
          {
            text: 'Barnkonventionen',
            url: '#',
            isActive: false
          }
        ]
      },
      {
        text: 'Om oss',
        url: '#',
        isActive: false,
        isPath: false,
        links: [
          {
            text: 'Organisation och verksamhet',
            url: '#',
            isActive: false
          },
          {
            text: 'Kontakta oss',
            url: '#',
            isActive: false
          },
          {
            text: 'Jobba hos oss',
            url: '#',
            isActive: false
          },
          {
            text: 'Publikationer och nyhetsbrev',
            url: '#',
            isActive: false
          },
          {
            text: 'Webbplatser och sociala kanaler',
            url: '#',
            isActive: false
          },
          {
            text: 'Skolverkets hantering av personuppgifter',
            url: '#',
            isActive: false
          },
          {
            text: 'Press',
            url: '#',
            isActive: false
          }
        ]
      }
    ],
    utilities: [
      {
        text: 'Innehåll A-Ö',
        url: '#',
        type: 'content-a-to-o'
      },
      {
        text: 'Lyssna',
        url: '#',
        type: 'listen'
      },
      {
        text: 'Languages',
        url: '#',
        type: 'translate'
      }
    ]
  }
};
