class NewsApi {
    constructor({ baseUrl, apiKey }) {
        this._baseUrl = baseUrl;
        this._apiKey = apiKey;
        this._headers = {
            'Content-Type': 'application/json;'
        };
    }

    getArticles ({searchInputValue, fromDate, toDate}) {
        const url = `${this._baseUrl}/everything?` +
            `q=${searchInputValue}&` +
            `from=${fromDate}&` +
            `to=${toDate}&`+
            'sortBy=popularity&' +
            'pageSize=100&' +
            `apiKey=${this._apiKey}`;

        return fetch(url, {
            Headers: this._headers
        })
            .then((response) => response.json())
    }
}

const newsApi = new NewsApi({
    baseUrl: 'https://newsapi.org/v2', apiKey: 'baafcf18410846c2a922ff42b1752c26'
})

export default newsApi;