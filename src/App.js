import Nav from "./components/Nav";
import Store from "./pages/Store";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <div className="">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
