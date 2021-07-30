import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import './style.css';

import Search from './components/Search/Search';
import MyList from './components/MyList/MyList';
import MovieDetails from './components/Movies/MovieDetails/MovieDetails';

function App() {
  return (
    <BrowserRouter>
          <Header/>   

          <Switch>
             <Route path="/" exact component={Search}/>
             <Route path="/mylist" component={MyList}/>
             <Route path="/:id" component={MovieDetails}/>
          </Switch>   
    </BrowserRouter>
  );
}

export default App;
