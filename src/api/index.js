/**
 * 
 * @param {*} options 
 * @param {number} options.page
 * @param {number} options.res
 * @param {string} options.ft
 * @returns 
 */
export const getUsers = (options = {}) => {
  const { page = 1, res = 10, format = 'json' } = options;
  return fetch(
    `https://randomuser.me/api/?results=${res}&page=${page}&seed=users`
  ).then((response) => response.json());
};

export default getUsers;
