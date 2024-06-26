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
  .catch(error => {
    console.error("nuh uh uh... couldn't get users")
  })
};

export const getUserPosts = (userId, maxNumPosts = 3) => {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
  return fetch(url)
    .then(response => {
      return response.json()
    })
    .then(posts => posts.slice(0, maxNumPosts))
    .catch(error => console.error('too many posts?'))
};
 



export const createNewUser = (newUserData) => {
  const postOption = {
    method: "POST",
    body: JSON.stringify(newUserData),
    headers: {
      "Content-Type": "application/json"
    }
  }
  return fetch(userUrl, postOption)
  .then(data => {
    const newUser = {
      ...newUserData,
      id: 11
    }
    return newUser
  })
  .catch(error => console.error('ya done messed up'))
}
