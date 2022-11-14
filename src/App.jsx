import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "./header/Header";
import Films from './pages/Films'
import Musiques from "./pages/musiques";
import NewItem from "./pages/NewItem";
import UpdateItem from "./pages/UpdateItem";

function App() {
  return (
    <div className="App">
      <h1>Bienvenue au Greta</h1>
      <Router>
      <Header />
        <Route path="/" exact>
          <Musiques />
        </Route>
        <Route path="/musiques" exact>
          <Musiques />
        </Route>
        <Route path="/films" exact>
          <Films />
        </Route>
        <Route path="/musique/new" exact>
          <NewItem />
        </Route>
        <Route path="/updateitem" exact>
          <UpdateItem />
        </Route>
      </Router>
    </div>
  );
}

export default App;
