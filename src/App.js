import logo from "./logo.svg";
import "./App.css";
import UseEffect from "./Clase 14/UseEffect";
import PokeApi from "./Clase 14/UseEffectPokeApi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./clase 16/HomePage";
import GuauGuau from "./clase 16/GuauGuau";
import MiauMiau from "./clase 16/MiauMiau";

function App() {
  return (
    <div>
      {/* <UseEffect /> */}
      {/* <PokeApi /> */}

      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/GuauGuau" element={<GuauGuau />} />
          <Route path="/MiauMiau" element={<MiauMiau />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
