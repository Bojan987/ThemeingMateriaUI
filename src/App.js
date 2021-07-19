


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Login from "./components/Login";
import withCustomTheme from "./WithTheme";
function App({setDark,dark}) {
  return (
    <Router>
      <Header setDark={setDark} dark={dark}/>
      <Switch>
        <Route path="/" exact>
          <Cards />
        </Route>
        <Route path='/card/:kartica' component={Login}/>
      </Switch>
    </Router>
  );
}

export default withCustomTheme(App);
