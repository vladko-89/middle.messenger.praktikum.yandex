import { RegisterPage, ProfilePage, ChartPage, ErrorPage } from "../pages";

const router = () => {
  console.log(window.location.pathname)
  const render = (path) => {
    switch (path) {
      case "/":
        root.innerHTML = RegisterPage("/");
        break;
      case "/edit-profile":
        root.innerHTML = ProfilePage("/edit-profile");
        break;
      case "/edit-password":
        root.innerHTML = ProfilePage("/edit-password");
        break;
      case "/sign-in":
        root.innerHTML = RegisterPage("/sign-in");
        break;
      case "/profile":
        root.innerHTML = ProfilePage("/profile");
        break;
      case "/chat":
        root.innerHTML = ChartPage();
        break;
      case "/error404":
        root.innerHTML = ErrorPage("404");
        break;
      case "/error500":
        root.innerHTML = ErrorPage("500");
        break;
      // default:
      //   root.innerHTML = errorContainer("404");
    }
  };

  const routes = [
    {
      path: "/",
    },
    {
      path: "/sign-in",
    },
    {
      path: "/profile",
    },
    {
      path: "/edit-profile",
    },
    {
      path: "/edit-password",
    },
    {
      path: "/chat",
    },
    {
      path: "/error404",
    },
    {
      path: "/error500",
    },
  ];

  const navLinks = document.querySelectorAll(".nav-link");
  const root = document.getElementById("root");

  navLinks.forEach((item) => {
    item.addEventListener("click", (e) => routerHandler(e));
  });

  function routerHandler(event) {
    event.preventDefault();
    history.pushState({}, "newUrl", event.target.href);
    let route = routes.find((route) => route.path == window.location.pathname);
    if (route && route.path) {
      render(route.path);
    } else {
      render("");
    }
  }

  window.addEventListener("popstate", function () {
    let route = routes.find((route) => route.path == window.location.pathname);
    route ? render(route.path) : render("");
  });

  window.addEventListener("DOMContentLoaded", function () {
    let route = routes.find((route) => route.path == window.location.pathname);
    route ? render(route.path) : render("");
  });
};

export default router;