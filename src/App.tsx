import Search from "./Search";
import SearchResults from "./SearchResults";
import Filter from "./Filter";

const doctors = [{ name: "Andreas" }, { name: "Miguel" }];

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
                  <Filter doctors={ doctors }/>
                  <SearchResults seachResults={ [] }/>
              </div>
          </div>
          <div>
              <p className="text-slate-400">Prototype door Wajo, voor Ortho Gent</p>
          </div>
      </div>
  );
};

export default App;
