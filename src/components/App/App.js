import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function App() {
  return (
    <div className="page">
      <Header />
      <Switch>
        <Route path="/saved-news">
          <SavedNews />
        </Route>
        <Route path="/">
          <Main />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
      <PopupWithForm />
    </div>
  );
}

export default App;
