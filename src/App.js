import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={['/','/dashboard','/devices']} component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
