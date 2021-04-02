import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import ProductsList from "./views/Products";
import Product from "./views/Product";
import { Provider } from "react-redux";
import { Store } from "./store";

function App() {
  return (
    <Provider store={Store}>
      <div className="main-app">
        <BrowserRouter>
          <Route exact path="/" component={ProductsList}></Route>
          <Route path="/product/:id" component={Product}></Route>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
