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
        name: "Dr. A. Dobbelaere",
        description: "Knie",
        image: 'dr-dobbelaere.jpg',
        tags: [
            { label: 'Kniepijn', value: 'knie' }
        ],
        slots: [
            { name: 'Morgen, 19u', location: 'lochristi' },
            { name: 'Overmorgen, 12u', location: 'gent' },
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
            { name: 'Morgen, 19u', location: 'lochristi' },
            { name: 'Overmorgen, 12u', location: 'gent' },
        ]
    },
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

const locations = ['alle', 'gent', 'lochristi']

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
        if (searchQuery === '') {
            return doctors
        }
        return doctors.filter(d => d.tags.map(t => t.value).includes(searchQuery))
    }

  return (
      <div className="h-full flex flex-col justify-between">
          <div>
              <div className="p-8">
                  <h1 className="text-4xl font-bold tracking-tight">Ortho Gent</h1>
                  <h2 className="text-xl">Boek direct een afspraak, met de juiste arts.</h2>
                  <div className="my-4">
                      <Search searchQuery={searchQuery} onSelectSearchItem={ onSelectSearchItem } options={ doctors.map(d => d.tags) }/>
                  </div>
              </div>
              <div className="p-8 bg-slate-100 ">
                  <Filter doctors={ doctors } locations={ locations } locationQuery={ locationQuery } onSelectLocation={ onSelectLocation }/>
                  <SearchResults locationQuery={locationQuery} searchResults={ filteredDoctors() }/>
              </div>
          </div>
          <div className="p-8">
              <p className="text-slate-400">Prototype door Wajo, voor Ortho Gent</p>
          </div>
      </div>
  );
};

export default App;
