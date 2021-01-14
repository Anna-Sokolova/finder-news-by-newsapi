import markup from '../templates/markup.hbs';
import refs from './refs.js';
const { outputQuery } = refs;

function updateArticlesMarkup(articles) {
  const markupRef = markup(articles);
  outputQuery.insertAdjacentHTML('beforeend', markupRef);
}

export default updateArticlesMarkup;
