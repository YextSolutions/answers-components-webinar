import {
  SearchBar,
  StandardCard,
  VerticalResults,
} from "@yext/answers-react-components";
import { useAnswersState } from "@yext/answers-headless-react";
import "./App.css";
import { BeverageCard } from "./components/BeverageCard";
import { BeverageFilters } from "./components/BeverageFilters";
import { Header } from "./components/Header";
import { ShakerLoader } from "./components/ShakerLoader";

function App() {
  const isLoading = useAnswersState((state) => state.searchStatus.isLoading);

  return (
    <div className="text-primary p-4 flex flex-col items-center">
      <Header />
      <div className="max-w-7xl w-full justify-center absolute top-16 bottom-0 overflow-auto pt-2">
        <div className="flex justify-center">
          <div className="w-1/3 hidden md:flex">
            <BeverageFilters />
          </div>
          <div className="w-full">
            {isLoading ? (
              <ShakerLoader />
            ) : (
              <div>
                <VerticalResults
                  customCssClasses={{
                    results: "grid grid-cols-2 sm:grid-cols-3 gap-4",
                  }}
                  CardComponent={BeverageCard}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
