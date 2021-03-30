import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { ProductsList } from "./views/Products";

function App() {
  return (
    <div className="main-app">
      <BrowserRouter>
        <Route exact path="/" component={ProductsList}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
