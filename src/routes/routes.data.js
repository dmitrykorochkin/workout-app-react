import Home from "./../components/screens/Home/Home";
import Profile from "./../components/screens/profile/Profile";
import Auth from "./../components/screens/auth/Auth";
import Home from "./../components/screens/new-workout/NewWorkout";
export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    auth: false
  },
  {
    path: "/auth",
    exact: true,
    component: Auth,
    auth: false
  },
  {
    path: "/profile",
    exact: true,
    component: Profile,
    auth: true
  },
  {
    path: "/new-workout",
    exact: true,
    component: NewWorkout,
    auth: true
  }
];
