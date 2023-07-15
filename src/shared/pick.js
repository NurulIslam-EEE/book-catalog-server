//['page','limit','sortBy','sortOrder']

const pick = (obj, keys) => {
  const finalObj = {};

  // obj sample { page: '1', limit: '2', year: '20', title: 'autumn' }
  // keys sample ['searchTerm','title','code','year']

  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalObj[key] = obj[key];
    }
  }
  return finalObj;
};

module.exports = pick;
