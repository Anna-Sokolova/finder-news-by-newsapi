import notificationError from './notifications.js';

const apiKey = 'b4b78a41e47e4e4ba5f9b78afc1649ad';

function fetchArticles(searchQuery) {
  const url = `http://newsapi.org/v2/everything?q=${searchQuery}`;

  const options = {
    headers: {
      Authorization: apiKey,
    },
  };

  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        return notificationError(
          'Опаньки! Сделайте более корректный запрос! Мы ждем...',
        );
      }
      return response.json();
    })
    .then(data => data.articles)
    .catch(error => console.log(error));
}

export default fetchArticles;
