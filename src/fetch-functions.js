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

export const getUserPosts = (userId, maxNumPosts = 3) => {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
  return fetch(url)
    .then(response => {
      return response.json()
    })
    .then(posts => posts.slice(0, maxNumPosts))
};

export const createNewUser = () => {
}
