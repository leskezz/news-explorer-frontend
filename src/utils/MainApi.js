class MainApi {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
        this._defaultHeaders = {
            'Content-Type': 'application/json'
        };
    }

    _getHeaders () {
        const token = localStorage.getItem('token');

        return {
            ...this._defaultHeaders,
            'Authorization': `Bearer ${token}`,
        }
    }

    _getRequest (url) {
        return fetch(`${this._baseUrl}/${url}`, {
            headers: this._getHeaders(),
            method: 'GET'
        })
                    .then((res) => {
                        if (res.ok) {
                            return res.json();
                        }
                        return Promise.reject(new Error(`Ошибка: ${res.status}`));
                    })
    }

    _postRequest ({url, headers, body}) {
        return fetch(`${this._baseUrl}/${url}`, {
            headers: headers || this._getHeaders,
            method: 'POST',
            body: body
        })
                    .then((res) => {
                        if (res.ok) {
                            return res.json();
                        }
                        return Promise.reject(`Ошибка: ${res.status}`);
                    })
    }

    _deleteRequest ({ url, id}) {
        return fetch(`${this._baseUrl}/${url}/${id}`, {
            headers: this._getHeaders,
            method: 'DELETE',
        })
                    .then((res) => {
                        if (res.ok) {
                            return res.json();
                        }
                        return Promise.reject(new Error(`Ошибка: ${res.status}`));
                    })
    }

    getUserData (userUrl) {
        return this._getRequest(userUrl)
    }


    getInitialArticles (articlesUrl) {
        return this._getRequest(articlesUrl)
    }

    saveArticle ({ articlesUrl, article }) {
        return this._postRequest({ url: articlesUrl, body: JSON.stringify(article) })
    }

    deleteArticle ({ articlesUrl, article }) {
        return this._deleteRequest({ url: articlesUrl, id: article._id })
    }

    register ({ signupUrl, user }) {
        return this._postRequest({ url: signupUrl, headers: this._defaultHeaders, body: JSON.stringify(user)})
    }

    login ({ loginUrl, user }) {
        return this._postRequest({ url: loginUrl, headers: this._defaultHeaders, body: JSON.stringify(user)})
    }

}

const mainApi = new MainApi('http://api.news.aikozlovsky.students.nomoredomains.icu');

export default mainApi;