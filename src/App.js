import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import ProductsList from "./views/Products";
import Product from "./views/Product";

function App() {
  return (
    <div className="main-app">
      <BrowserRouter>
        <Route exact path="/" component={ProductsList}></Route>
        <Route path="/product/:id" component={Product}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
