const PREFIX = '/api';

const API ={
  staff : `${PREFIX}/manager`,
  staffItem: id => `${PREFIX}/manager/${id}`,
  sort: `${PREFIX}/sort`,
  sortItem: id => `${PREFIX}/sort/${id}`,
  article: `${PREFIX}/article`,
  articleItem: id => `${PREFIX}/article/${id}`,
  indexItem: id => `${PREFIX}/index/${id}`
}

export default API;