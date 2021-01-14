import refs from './refs.js';
import fetchArticles from './fetchArticles.js';
import updateArticlesMarkup from './updateArticlesMarkup.js';

const { outputQuery, searchForm } = refs;
// console.dir(searchForm);
const debounce = require('lodash.debounce');
// console.log(debounce);

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  const inputValue = form.elements.query.value;
  // console.log(inputValue);
  outputQuery.innerHTML = '';
  form.reset();

  fetchArticles(inputValue).then(updateArticlesMarkup);
});
