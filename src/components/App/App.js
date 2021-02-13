import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function App() {
  return (
    <div className="page">
      <Switch>
        <Route path="/saved-news">
          <Header blackTheme={false} />
          <SavedNews />
        </Route>
        <Route exact path="/">
          <Header blackTheme={true}  />
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
