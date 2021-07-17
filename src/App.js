import Nav from "./components/Nav";
import Store from "./pages/Store";
import Home from "./pages/Home";
import { HashRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <div className="">
      <HashRouter>
        <Nav />
        <Switch>
          <Route path="/" exact = "/">
            <Home />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
