import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Search } from "./components/Search/Search";
import { CategoryList } from "./components/CategoryList/CategoryList";
import { CandidatesList } from "./components/CandidatesList/CandidatesList";
import { FilterBox } from "./components/FilterBox/FilterBox";
import "./App.css";

const apiKeyFirebase = import.meta.env.VITE_FIREBASE_API_KEY;
console.log(apiKeyFirebase);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <div className="container">
          <Search />
          <CategoryList />
          <div className="box">
            <CandidatesList />
            <FilterBox />
          </div>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
