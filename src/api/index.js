import queryString from 'query-string';
/**
 *
 * @param {*} options
 * @param {number} options.page
 * @param {number} options.results
 * @param {string} options.format
 * @param {string} options.seed
 * @param {string} options.nat
 * @param {string} options.inc
 * @returns {Promise}
 */
export const getUsers = (options = {}) => {
  const defaultOptions = {
    page: 1,
    results: 10,
    format: 'json',
    seed: 'users',
    inc: 'gender,name,login,nat',
  };
  const finalOptions = {
    ...defaultOptions,
    ...options,
  };
  const query = queryString.stringify(finalOptions);
  return fetch(`https://randomuser.me/api/?${query}`).then(
    (response) => response.json()
  );
};

export default getUsers;
