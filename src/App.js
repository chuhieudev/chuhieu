import React, { Component } from 'react';
import './App.css';
import Menus from './components/Menu/Menus';
// import ProductList from './components/ProductList/ProductList'
import routes from './routes';
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menus />
          <div >
            {this.ShowContent(routes)}
          </div>
        </div>
      </Router>
    );
  }
  ShowContent = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      })
    }
    return <Switch>{result}</Switch>;
  }
}

export default App;
