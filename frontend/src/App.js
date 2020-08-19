import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/generalStyles.css"
import Home from "./pages/Home"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Cities from "./pages/Cities";







class App extends React.Component {

  render() {
    return (
      <BrowserRouter>


        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Cities" component={Cities} />
          <Redirect to="/Home" />
        </Switch>


      </BrowserRouter>



    )
  }


}



export default App