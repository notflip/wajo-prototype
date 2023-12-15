import Search from "./Search";
import SearchResults from "./SearchResults";
import Filter from "./Filter";

export interface Doctor {
    name: string
    tags: Array<string>,
    slots: Array<{
        name: string
    }>
}

const doctors: Array<Doctor> = [
    {
        name: "Dr. A. Dobbelaere",
        tags: ['knie'],
        slots: [
            { name: 'Morgen, 19u' },
            { name: 'Overmorgen, 12u' },
        ]
    },
    {
        name: "Dr. P. Beekman",
        tags: ['heup', 'knie'],
        slots: [
            { name: 'Vrijdag 12/01, 12u30' },
            { name: 'Zaterdag 13/01, 14u' },
        ]
    }
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
