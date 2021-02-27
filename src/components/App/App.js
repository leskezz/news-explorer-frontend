import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MyProtectedComponent from '../MyProtectedComponent/MyProtectedComponent';
import Footer from '../Footer/Footer';
import PopupAuth from '../PopupAuth/PopupAuth';
import PopupRegister from '../PopupRegister/PopupRegister';
import PopupSuccessAuth from '../PopupSuccessAuth/PopupSuccessAuth';
import newsApi from '../../utils/NewsApi';
import {getTodayDate, getSevenEarlierDays} from '../../utils/DateConverter';
import mainApi from '../../utils/MainApi';

function App() {
  const [isPopupAuthOpen, setIsPopupAuthOpen] = React.useState(false);
  const [isPopupAuthRegisterOpen, setIsPopupAuthRegisterOpen] = React.useState(false);
  const [isPopupSuccessAuthOpen, setIsPopupSuccessAuthOpen] = React.useState(false);
  const [isPreloaderOpen, setIsPreloaderOpen] = React.useState(false);
  const [isNoResultsOpen, setNoResultsOpen] = React.useState(false);
  const [isSearchSuccess, setIsSearchSuccess] = React.useState(false);
  const [newsFound, setNewsFound] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [registerError, setRegisterError] = React.useState('');
  const [loginError, setLoginError] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const history = useHistory();

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

  function handleLogin({user, resetForm }) {
    return mainApi.login({
      loginUrl: 'signin',
      user: user,
    })
        .then(data => {
            if(data.token) {
                setLoggedIn(true);
                localStorage.setItem('token', data.token);
                history.push('/');
                closeAllPopups();
                resetForm();
                mainApi.getUserData('users/me').then(user => setUserName(user.data.name))
                return;
            } else {
                return Promise.reject();
            }
        })
        .catch(err => {
          setLoginError(err);
          console.log(err);
          return;
        })
}

function handleRegisterSubmit ({ user, resetForm }) {
    
  mainApi.register({
    signupUrl: 'signup',
    user: user
  })
        .then(res => {
          console.log(res);
            if(res) {
                closeAllPopups();
                openSuccessPopup();
                resetForm();
                return;
            } else {
                return Promise.reject();
            }
            
        })
        .catch(err => {
            console.log(err);
            setRegisterError(err);
            return;
        })

}

function handleLogout () {
    setLoggedIn(false);
    localStorage.removeItem('token');
    history.push('/');
}

function handleClickSuccessPopupButton() {
  closeAllPopups();
  openAuthPopup();
}

function handleArticleSave(article) {
  return mainApi.saveArticle({ artclesUrl: 'articles', article: article})
    .then(res => console.log(res))
    .catch(err => console.log(err));
}


  React.useEffect(() => {
    mainApi.getUserData('users/me')
      .then(user => {
        setUserName(user.data.name);
        history.push('/');
        setLoggedIn(true);
      })
      .catch(err => console.log(err));
  }, []
  );

  return (
    <div className="page">
      <Switch>
          <ProtectedRoute
            path="/saved-news"
            component={MyProtectedComponent}
            loggedIn={loggedIn}
            clickAuthHandler={openAuthPopup}
            openAuthPopup={openAuthPopup}
            blackTheme={false}
            isPopupOpen={isPopupAuthOpen || isPopupAuthRegisterOpen || isPopupSuccessAuthOpen}
            handleLogout={handleLogout}
            userName={userName}
          />
        <Route exact path="/">
          <Header clickAuthHandler={openAuthPopup} blackTheme={true} isPopupOpen={isPopupAuthOpen || isPopupAuthRegisterOpen || isPopupSuccessAuthOpen} onSubmit={handleSearchSubmit} handleLogout={handleLogout} loggedIn={loggedIn} userName={userName} />
          <Main isPreloaderOpen={isPreloaderOpen} isNoResultsOpen={isNoResultsOpen} isSearchSuccess={isSearchSuccess} newsFound={newsFound} handleArticleSave={handleArticleSave} />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
      <PopupAuth isOpen={isPopupAuthOpen} onClose={closeAllPopups} changePopup={changePopupOpen} onSubmit={handleLogin} loginError={loginError} />
      <PopupRegister isOpen={isPopupAuthRegisterOpen} onClose={closeAllPopups} changePopup={changePopupOpen} onSubmit={handleRegisterSubmit} registerError={registerError} />
      <PopupSuccessAuth isOpen={isPopupSuccessAuthOpen} onClose={closeAllPopups} onClick={handleClickSuccessPopupButton} />
    </div>
  );
}

export default App;
