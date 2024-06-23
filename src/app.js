import {
  renderStatus,
  setupPageBasics,
  renderUsers,
  renderPosts,
  renderNewUser,
} from './render-functions.js';
import {
  checkResponseStatus,
  getUserPosts,
  createNewUser,
  getUsers
} from './fetch-functions.js';
/** FEEDBACK: Great job getting all test cases to pass! */
export default function app(appDiv) {
  //dont forget setUpPageBasics from render file........
  const { statusDiv, usersUl, postsUl, newUserForm, newUserDiv } = setupPageBasics(appDiv);

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const statusInfo = {
        url: 'https://jsonplaceholder.typicode.com/users',
        status: response.status,
        ok: response.ok
      }
      renderStatus(statusDiv, statusInfo)
    })

  
  getUsers()
    .then(users => {
      renderUsers(usersUl, users)
    })

  
  usersUl.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
      const userId = event.target.getAttribute('data-user-id')
      getUserPosts(userId)
        .then(posts => {
          renderPosts(postsUl, posts)
        })
    }
  });

 
  newUserForm.addEventListener('submit', event => {
    event.preventDefault()
    const formData = new FormData(newUserForm)
    const newUserData = {
      username: formData.get('username'),
      email: formData.get('email')
    };

    createNewUser(newUserData)
      .then(newUser => {
        renderNewUser(newUserDiv, newUser)
        newUserForm.reset()
      })
  });
}
