import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import CarDealer from './components/CarDealer/CarDealer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/car-dealer/:id" component={CarDealer} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
