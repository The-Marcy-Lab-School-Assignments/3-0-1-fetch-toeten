const userUrl = 'https://jsonplaceholder.typicode.com/users'

export const checkResponseStatus = () => {
  return fetch(userUrl)
  .then(response => {
    return {
      status: response.status,
      ok: response.ok,
      url: response.url
    }
  })
  .catch(error => {
    console.error('yo this aint right')
  })
};

export const getUsers = () => {
  return fetch(userUrl)
  .then(response => {
    return response.json()
  })
  .then(users => users)
};

export const getUserPosts = () => {
};

export const createNewUser = () => {
}
