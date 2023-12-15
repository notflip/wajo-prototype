import Search from "./Search";
import SearchResults from "./SearchResults";
import Filter from "./Filter";
import * as React from "react";

export interface Options {
    label: string
    value: string
}

export interface Doctor {
    name: string
    description: string
    image: string
    tags: Array<Options>,
    slots: Array<{
        name: string
        location: string
    }>
}

const doctors: Array<Doctor> = [
    {
        name: "Dr. P. Beekman",
        description: "Heup & Knie",
        image: 'dr-beekman.jpg',
        tags: [
            { label: 'Pijn aan de heup', value: 'heup' },
            { label: 'Pijn aan de knie', value: 'knie' },
        ],
        slots: [
            { name: 'Morgen, 19u', location: 'lochristi' },
            { name: 'Overmorgen, 12u', location: 'gent' },
            { name: '21/01, 13u30', location: 'zelzate' },
        ]
    },
    {
        name: "Dr. R. De Kesel",
        description: "Hand-, pols- en elleboogchirurgie, Microchirurgie",
        image: "dr-de-kesel.jpg",
        tags: [
            { label: 'Pijn aan een hand', value: 'hand' },
            { label: 'Pijn aan de pols', value: 'pols' },
            { label: 'Pijn aan de elleboog', value: 'elleboog' },
        ],
        slots: [
            { name: 'Morgen, 13u', location: 'gent' },
            { name: 'Overmorgen, 16u30', location: 'zelzate' },
            { name: '22/01, 09u30', location: 'zelzate' },
        ]
    },
    {
        name: "Dr. A. Dobbelaere",
        description: "Knie",
        image: 'dr-dobbelaere.jpg',
        tags: [
            { label: 'Kniepijn', value: 'knie' }
        ],
        slots: [
            { name: '15/01, 08u45', location: 'gent' },
            { name: '16/01, 10u45', location: 'lochristi' },
        ]
    },
    {
        name: "Dr. K. Liekens",
        description: "Heupchirurgie",
        image: 'dr-liekens.jpg',
        tags: [
            { label: 'Pijn aan de heup', value: 'heup' },
        ],
        slots: [
            { name: 'Morgen, 19u', location: 'lochristi' },
            { name: 'Overmorgen, 12u', location: 'gent' },
        ]
    },
    {
        name: "Dr. N. Ramrattan",
        description: "Wervelkolom",
        image: 'dr-ramrattan.jpg',
        tags: [
            { label: 'Pijn aan de rug', value: 'rug' },
        ],
        slots: [
            { name: 'Morgen, 19u', location: 'lochristi' },
            { name: 'Overmorgen, 12u', location: 'gent' },
        ]
    },
    {
        name: "Dr. A. Schepens",
        description: "Wervelkolom",
        image: 'dr-schepens.jpg',
        tags: [
            { label: 'Kniepijn', value: 'knie' }
        ],
        slots: [
            { name: 'Morgen, 19u', location: 'lochristi' },
            { name: 'Overmorgen, 12u', location: 'gent' },
        ]
    },
    {
        name: "Dr. S. Uyttebroek",
        description: "Hand, Pols & Elleboog",
        image: 'dr-uyttebroek.jpg',
        tags: [
            { label: 'Pijn aan een hand', value: 'hand' },
            { label: 'Pijn aan de pols', value: 'pols' },
            { label: 'Pijn aan de elleboog', value: 'elleboog' },
        ],
        slots: [
            { name: 'Morgen, 19u', location: 'lochristi' },
            { name: 'Overmorgen, 12u', location: 'gent' },
        ]
    },
    {
        name: "Dr. H. Van Der Bracht",
        description: "Schouder",
        image: 'dr-van-der-bracht.jpg',
        tags: [
            { label: 'Pijn aan de schouder', value: 'schouder' },
        ],
        slots: [
            { name: 'Morgen, 19u', location: 'lochristi' },
            { name: 'Overmorgen, 12u', location: 'gent' },
        ]
    },
    {
        name: "Dr. J. Van Lerbeirghe",
        description: "Wervelkolom & Heup",
        image: 'dr-van-lerbeirghe.jpg',
        tags: [
            { label: 'Pijn aan de rug', value: 'rug' },
            { label: 'Pijn aan de heup', value: 'heup' },
        ],
        slots: [
            { name: 'Morgen, 19u', location: 'lochristi' },
            { name: 'Overmorgen, 12u', location: 'gent' },
        ]
    },
    {
        name: "Dr. E. Van Ovost",
        description: "Voet & Enkel",
        image: 'dr-van-ovost.jpg',
        tags: [
            { label: 'Pijn aan een voet', value: 'voet' },
            { label: 'Pijn aan een enkel', value: 'enkel' },
            { label: 'Pijn aan een teen', value: 'teen' },
        ],
        slots: [
            { name: 'Morgen, 19u', location: 'lochristi' },
            { name: 'Overmorgen, 12u', location: 'gent' },
        ]
    },
    {
        name: "DR. A. Verdonckt",
        description: "Hand & Pols",
        image: 'dr-verdonckt.jpg',
        tags: [
            { label: 'Pijn aan een hand', value: 'hand' },
            { label: 'Pijn aan de pols', value: 'pols' },
        ],
        slots: [
            { name: 'Morgen, 19u', location: 'lochristi' },
            { name: 'Overmorgen, 12u', location: 'gent' },
        ]
    },
    {
        name: "Dr. L. Verhelst",
        description: "Heup",
        image: 'dr-verhelst.jpg',
        tags: [
            { label: 'Pijn aan de heup', value: 'heup' },
        ],
        slots: [
            { name: 'Morgen, 19u', location: 'lochristi' },
            { name: 'Overmorgen, 12u', location: 'gent' },
        ]
    },
    {
        name: "Dr. L. Verstuyft",
        description: "Schouder & Elleboog",
        image: 'dr-verstuyft.jpg',
        tags: [
            { label: 'Pijn aan de schouder', value: 'schouder' },
            { label: 'Pijn aan de elleboog', value: 'elleboog' },
        ],
        slots: [
            { name: 'Morgen, 19u', location: 'lochristi' },
            { name: 'Overmorgen, 12u', location: 'gent' },
        ]
    },
];

const locations = [
    { label: 'Alle Locaties', value: '' },
    { label: 'Medisch Centrum Lochristi', value: 'lochristi' },
    { label: 'Medisch Centrum Zelzate', value: 'zelzate' },
    { label: 'AZ Sint-Lucas Gent - Straat 24', value: 'gent' },
]

const App = (): JSX.Element => {
    const [searchQuery, setSearchQuery] = React.useState("")
    const [locationQuery, setLocationQuery] = React.useState("")

    function onSelectSearchItem(query: string) {
        setSearchQuery(searchQuery === query ? "" : query)
    }

    function onSelectLocation(location: string) {
        setLocationQuery(locationQuery === location ? "" : location)
    }

    function filteredDoctors() {
        return doctors.filter(d => d.tags.map(t => t.value).includes(searchQuery))
    }

  return (
      <div className="h-full flex flex-col justify-between">
          <div>
              <div className="px-16 pt-16 pb-8">
                  <h1 className="text-4xl font-bold tracking-tight">Ortho Gent</h1>
                  <h2 className="text-xl">Boek direct een afspraak, met de juiste arts.</h2>
                  <div className="my-6">
                      <Search searchQuery={ searchQuery } onSelectSearchItem={ onSelectSearchItem } options={ doctors.map(d => d.tags) }/>
                  </div>
                  { filteredDoctors().length === 0 &&
                      <p className="text-slate-400">Selecteer je klacht hierboven om de beschikbare specialisten<br/> en hun eerstvolgende afspraken weer te geven.
                      </p> }
              </div>
              { filteredDoctors().length > 0
                  ? (
                      <div className="px-16 py-8 bg-slate-100 ">
                          <Filter doctors={ doctors } locations={ locations } locationQuery={ locationQuery } onSelectLocation={ onSelectLocation }/>
                          <SearchResults locationQuery={ locationQuery } searchResults={ filteredDoctors() }/>
                      </div>
                  )
                  : null
              }
          </div>
          <div className="px-16 py-8">
              <p className="text-slate-400">Prototype voor Ortho Gent, opgemaakt door Wajo</p>
          </div>
      </div>
  );
};

export default App;
