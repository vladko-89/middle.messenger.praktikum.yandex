import { registerPage, authPage, changePassword, profilePage, changeProfilePage, chatPage, page404, page500 } from '../pages'

export function renderPage (block) {
  const root = document.querySelector('#root')

  root.innerHTML = ''
  root.appendChild(block.getContent())

  block.dispatchComponentDidMount()

  return root
}

const router = () => {
  console.log(window.location.pathname)
  const render = (path) => {
    switch (path) {
      case '/':
        renderPage(registerPage)
        break
      case '/edit-profile':
        renderPage(changeProfilePage)
        break
      case '/edit-password':
        renderPage(changePassword)
        break
      case '/sign-in':
        renderPage(authPage)
        break
      case '/profile':
        renderPage(profilePage)
        break
      case '/chat':
        renderPage(chatPage)
        break
      case '/error404':
        renderPage(page404)
        break
      case '/error500':
        renderPage(page500)
        break
      // default:
      //   root.innerHTML = errorContainer("404");
    }
  }

  const routes = [
    {
      path: '/'
    },
    {
      path: '/sign-in'
    },
    {
      path: '/profile'
    },
    {
      path: '/edit-profile'
    },
    {
      path: '/edit-password'
    },
    {
      path: '/chat'
    },
    {
      path: '/error404'
    },
    {
      path: '/error500'
    }
  ]

  const navLinks = document.querySelectorAll('.nav-link')

  navLinks.forEach((item) => {
    item.addEventListener('click', (e) => routerHandler(e))
  })

  function routerHandler (event) {
    event.preventDefault()
    history.pushState({}, 'newUrl', event.target.href)
    const route = routes.find((route) => route.path === window.location.pathname)
    if (route && route.path) {
      render(route.path)
    } else {
      render('')
    }
  }

  window.addEventListener('popstate', function () {
    const route = routes.find((route) => route.path === window.location.pathname)
    route ? render(route.path) : render('')
  })

  window.addEventListener('DOMContentLoaded', function () {
    const route = routes.find((route) => route.path === window.location.pathname)
    route ? render(route.path) : render('')
  })
}

export default router
