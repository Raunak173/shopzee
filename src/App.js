import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/products/:productId" component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
