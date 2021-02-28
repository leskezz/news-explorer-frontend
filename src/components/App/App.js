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
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
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
  const [currentUser, setCurrentUser] = React.useState({});
  const [searchKeyword, setSearchKeyword] = React.useState('');
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [responseLoading, isResponseLoading] = React.useState(false);
  const history = useHistory();

  function openAuthPopup() {
    setIsPopupAuthOpen(true);
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
    isResponseLoading(true);
    closeAllSearchBlocks();
    setSearchKeyword(searchInputValue);
    return newsApi.getArticles({
      searchInputValue: searchInputValue,
      fromDate: getSevenEarlierDays(),
      toDate: getTodayDate()
    })
      .then((data) => {
        isResponseLoading(false);
        setIsPreloaderOpen(false);
        if (data.totalResults > 0) {
          setIsSearchSuccess(true);
          return data.articles;
        }
        setNoResultsOpen(true);
      })
      .then ((news) => {
        setNewsFound(news);
        localStorage.setItem('lastNews', JSON.stringify(news));
        localStorage.setItem('lastKeyword', searchInputValue);
      })
      .catch((error) => {
        isResponseLoading(false);
        setNoResultsOpen(true);
        console.error(error);
      })
  }

  function handleLogin({user, resetForm }) {
    isResponseLoading(true);
    return mainApi.login({
      loginUrl: 'signin',
      user: user,
    })
        .then(data => {
            if(data.token) {
              isResponseLoading(false);
                setLoggedIn(true);
                localStorage.setItem('token', data.token);
                history.push('/');
                closeAllPopups();
                resetForm();
                mainApi.getUserData('users/me')
                  .then(user => setCurrentUser(user.data))
                  .catch(err => console.log(err));
                mainApi.getInitialArticles('articles')
                  .then(articles => setSavedArticles(articles.data))
                  .catch(err => console.log(err));
                return;
            } else {
                return Promise.reject();
            }
        })
        .catch(err => {
          isResponseLoading(false);
          setLoginError(err);
          console.log(err);
          return;
        })
}

function handleRegisterSubmit ({ user, resetForm }) {
  isResponseLoading(true);
  mainApi.register({
    signupUrl: 'signup',
    user: user
  })
        .then(res => {
          isResponseLoading(false);
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
            isResponseLoading(false);
            return;
        })

}

function handleLogout () {
    setLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('lastNews');
    localStorage.removeItem('lastKeyword');
    history.push('/');
}

function handleClickSuccessPopupButton() {
  closeAllPopups();
  openAuthPopup();
}

function handleArticleSave(article) {
  isResponseLoading(true);
  return mainApi.saveArticle({ articlesUrl: 'articles', article: article})
    .then(savedArticle => {
      isResponseLoading(false);
      setSavedArticles([savedArticle.data, ...savedArticles]);
    })
    .catch(err => {
      isResponseLoading(false);
      console.log(err)
    });
}

function handleArticleDelete(article) {
  isResponseLoading(true);
  return mainApi.deleteArticle({ articlesUrl: 'articles', article: article })
    .then(res => {
      isResponseLoading(false);
      const newSavedArticles = savedArticles.filter(c => c._id !== article._id);
      setSavedArticles(newSavedArticles);
    })
    .catch(err => {
      isResponseLoading(false);
      console.log(err);
    });
}

  React.useEffect(() => {
    const lastArticles = JSON.parse(localStorage.getItem('lastNews'))
    if(lastArticles) {
      setIsSearchSuccess(true);
      setNewsFound(lastArticles);
      setSearchKeyword(localStorage.getItem('lastKeyword'));
    }
    mainApi.getUserData('users/me')
      .then(user => {
        setCurrentUser(user.data);
        setLoggedIn(true);
        mainApi.getInitialArticles('articles')
        .then(articles => {
          setSavedArticles(articles.data);
        })
        .catch(err => console.log(err));
      })
      .catch(err => {
        setLoggedIn(false);
        console.log(err)
      });

  }, []
  );

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
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
              savedArticles={savedArticles}
              handleArticleDelete={handleArticleDelete}
            />
          <Route exact path="/">
            <Header clickAuthHandler={openAuthPopup} blackTheme={true} isPopupOpen={isPopupAuthOpen || isPopupAuthRegisterOpen || isPopupSuccessAuthOpen} onSubmit={handleSearchSubmit} handleLogout={handleLogout} loggedIn={loggedIn} responseLoading={responseLoading} />
            <Main isPreloaderOpen={isPreloaderOpen} isNoResultsOpen={isNoResultsOpen} isSearchSuccess={isSearchSuccess} newsFound={newsFound} handleArticleSave={handleArticleSave} searchKeyword={searchKeyword} loggedIn={loggedIn} openAuthPopup={openAuthPopup} />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
        <PopupAuth isOpen={isPopupAuthOpen} onClose={closeAllPopups} changePopup={changePopupOpen} onSubmit={handleLogin} loginError={loginError} responseLoading={responseLoading} />
        <PopupRegister isOpen={isPopupAuthRegisterOpen} onClose={closeAllPopups} changePopup={changePopupOpen} onSubmit={handleRegisterSubmit} registerError={registerError} responseLoading={responseLoading}/>
        <PopupSuccessAuth isOpen={isPopupSuccessAuthOpen} onClose={closeAllPopups} onClick={handleClickSuccessPopupButton} />
      </CurrentUserContext.Provider>
      
    </div>
  );
}

export default App;
