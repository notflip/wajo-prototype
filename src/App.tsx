import Search from "./Search";
import SearchResults from "./SearchResults";
import Filter from "./Filter";

export interface Doctor {
    name: string
    description: string
    image: string
    tags: Array<string>,
    slots: Array<{
        name: string
    }>
}

const doctors: Array<Doctor> = [
    {
        name: "Dr. A. Dobbelaere",
        description: "Knie",
        image: 'dr-dobbelaere.jpg',
        tags: ['knie', 'knieschijf'],
        slots: [
            { name: 'Morgen, 19u' },
            { name: 'Overmorgen, 12u' },
        ]
    },
    {
        name: "Dr. R. De Kesel",
        description: "Hand-, pols- en elleboogchirurgie, Microchirurgie",
        image: "dr-de-kesel.jpg",
        tags: ['hand', 'pols', 'elleboog'],
        slots: [
            { name: 'Morgen, 19u' },
            { name: 'Overmorgen, 12u' },
        ]
    },
    {
        name: "Dr. P. Beekman",
        description: "Heup & Knie",
        image: 'dr-beekman.jpg',
        tags: ['heup', 'knie'],
        slots: [
            { name: 'Vrijdag 12/01, 12u30' },
            { name: 'Zaterdag 13/01, 14u' },
        ]
    },
    {
        name: "Dr. K. Liekens",
        description: "Heupchirurgie",
        image: 'dr-liekens.jpg',
        tags: ['heup'],
        slots: [
            { name: 'Vrijdag 12/01, 12u30' },
            { name: 'Zaterdag 13/01, 14u' },
        ]
    },
    {
        name: "Dr. N. Ramrattan",
        description: "Wervelkolom",
        image: 'dr-ramrattan.jpg',
        tags: ['rug', 'wervelkolom'],
        slots: [
            { name: 'Vrijdag 12/01, 12u30' },
            { name: 'Zaterdag 13/01, 14u' },
        ]
    },
    {
        name: "Dr. A. Schepens",
        description: "Wervelkolom",
        image: 'dr-schepens.jpg',
        tags: ['knie', 'knieschijf'],
        slots: [
            { name: 'Vrijdag 12/01, 12u30' },
            { name: 'Zaterdag 13/01, 14u' },
        ]
    },
    {
        name: "Dr. S. Uyttebroek",
        description: "Hand, Pols & Elleboog",
        image: 'dr-uyttebroek.jpg',
        tags: ['hand', 'pols', 'elleboog'],
        slots: [
            { name: 'Vrijdag 12/01, 12u30' },
            { name: 'Zaterdag 13/01, 14u' },
        ]
    },
    {
        name: "Dr. H. Van Der Bracht",
        description: "Schouder",
        image: 'dr-van-der-bracht.jpg',
        tags: ['schouder'],
        slots: [
            { name: 'Vrijdag 12/01, 12u30' },
            { name: 'Zaterdag 13/01, 14u' },
        ]
    },
    {
        name: "Dr. J. Van Lerbeirghe",
        description: "Wervelkolom & Heup",
        image: 'dr-van-lerbeirghe.jpg',
        tags: ['rug', 'heup', 'wervelkollom'],
        slots: [
            { name: 'Vrijdag 12/01, 12u30' },
            { name: 'Zaterdag 13/01, 14u' },
        ]
    },
    {
        name: "Dr. E. Van Ovost",
        description: "Voet & Enkel",
        image: 'dr-van-ovost.jpg',
        tags: ['voet', 'enkel', 'teen'],
        slots: [
            { name: 'Vrijdag 12/01, 12u30' },
            { name: 'Zaterdag 13/01, 14u' },
        ]
    },
    {
        name: "DR. A. Verdonckt",
        description: "Hand & Pols",
        image: 'dr-verdonckt.jpg',
        tags: ['hand', 'pols'],
        slots: [
            { name: 'Vrijdag 12/01, 12u30' },
            { name: 'Zaterdag 13/01, 14u' },
        ]
    },
    {
        name: "Dr. L. Verhelst",
        description: "Heup",
        image: 'dr-verhelst.jpg',
        tags: ['heup'],
        slots: [
            { name: 'Vrijdag 12/01, 12u30' },
            { name: 'Zaterdag 13/01, 14u' },
        ]
    },
    {
        name: "Dr. L. Verstuyft",
        description: "Schouder & Elleboog",
        image: 'dr-verstuyft.jpg',
        tags: ['schouder', 'elleboog'],
        slots: [
            { name: 'Vrijdag 12/01, 12u30' },
            { name: 'Zaterdag 13/01, 14u' },
        ]
    },
];

const locations = [
    {
        label: 'Lochristi', value: 'lochristi'
    }
]

const options = [
    { label: "Opt 1", value: "opt 1" },
    { label: "Opt 2", value: "opt 2" },
];

const App = (): JSX.Element => {
  return (
      <div className="h-full flex flex-col justify-between">
          <div>
              <div className="p-8">
                  <h1 className="text-3xl">Ortho Gent</h1>
                  <h2 className="text-xl">Boek direct een afspraak, met de juiste arts.</h2>
                  <div className="my-4">
                      <Search options={ options }/>
                  </div>
              </div>
              <div className="p-8 bg-slate-100 ">
                  <Filter doctors={ doctors } locations={ locations }/>
                  <SearchResults searchResults={ doctors }/>
              </div>
          </div>
          <div className="p-8">
              <p className="text-slate-400">Prototype door Wajo, voor Ortho Gent</p>
          </div>
      </div>
  );
};

export default App;
