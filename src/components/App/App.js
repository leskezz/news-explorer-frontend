import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import PopupAuth from '../PopupAuth/PopupAuth';
import PopupRegister from '../PopupRegister/PopupRegister';
import PopupSuccessAuth from '../PopupSuccessAuth/PopupSuccessAuth';
import newsApi from '../../utils/NewsApi';
import {getTodayDate, getSevenEarlierDays} from '../../utils/DateConverter';

function App() {
  const [isPopupAuthOpen, setIsPopupAuthOpen] = React.useState(false);
  const [isPopupAuthRegisterOpen, setIsPopupAuthRegisterOpen] = React.useState(false);
  const [isPopupSuccessAuthOpen, setIsPopupSuccessAuthOpen] = React.useState(false);
  const [isPreloaderOpen, setIsPreloaderOpen] = React.useState(false);
  const [isNoResultsOpen, setNoResultsOpen] = React.useState(false);
  const [isSearchSuccess, setIsSearchSuccess] = React.useState(false);
  const [newsFound, setNewsFound] = React.useState([]);

  function openAuthPopup() {
    setIsPopupAuthOpen(true);
  }

  function openRegisterPopup() {
    setIsPopupAuthRegisterOpen(true);
  }

  function openSuccessPopup() {
    setIsPopupSuccessAuthOpen(true);
  }

  function closeAllPopups() {
    setIsPopupAuthOpen(false);
    setIsPopupAuthRegisterOpen(false);
    setIsPopupSuccessAuthOpen(false);
  }

  function changePopupOpen() {
    setIsPopupAuthOpen(!isPopupAuthOpen);
    setIsPopupAuthRegisterOpen(!isPopupAuthRegisterOpen);
  }

  function closeAllSearchBlocks() {
    setNoResultsOpen(false);
    setIsPreloaderOpen(true);
    setIsSearchSuccess(false);
  }

  function handleSearchSubmit(searchInputValue) {
    closeAllSearchBlocks();
    return newsApi.getArticles({
      searchInputValue: searchInputValue,
      fromDate: getSevenEarlierDays(),
      toDate: getTodayDate()
    })
      .then((data) => {
        setIsPreloaderOpen(false);
        if (data.status === 'ok') {
          setIsSearchSuccess(true);
          return data.articles;
        }
        setNoResultsOpen(true);
      })
      .then ((news) => {
        setNewsFound(news);
      })
  }

  React.useEffect(() => {
    console.log('initialization')
  }, []
  );

  return (
    <div className="page">
      <Switch>
        <Route path="/saved-news">
          <Header
            clickAuthHandler={openAuthPopup}
            blackTheme={false}
            isPopupOpen={isPopupAuthOpen || isPopupAuthRegisterOpen || isPopupSuccessAuthOpen}
          />
          <SavedNews />
        </Route>
        <Route exact path="/">
          <Header clickAuthHandler={openAuthPopup} blackTheme={true} isPopupOpen={isPopupAuthOpen || isPopupAuthRegisterOpen || isPopupSuccessAuthOpen} onSubmit={handleSearchSubmit} />
          <Main isPreloaderOpen={isPreloaderOpen} isNoResultsOpen={isNoResultsOpen} isSearchSuccess={isSearchSuccess} newsFound={newsFound}/>
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
      <PopupAuth isOpen={isPopupAuthOpen} onClose={closeAllPopups} changePopup={changePopupOpen} />
      <PopupRegister isOpen={isPopupAuthRegisterOpen} onClose={closeAllPopups} changePopup={changePopupOpen} />
      <PopupSuccessAuth isOpen={isPopupSuccessAuthOpen} onClose={closeAllPopups} onClick={openAuthPopup} />
    </div>
  );
}

export default App;
