import Home from "./../components/screens/Home/Home";
import Profile from "./../components/screens/profile/Profile";
import Auth from "./../components/screens/auth/Auth";
import NewWorkout from "./../components/screens/new-workout/NewWorkout";
export const routes = [
  {
    path: "/",
    component: Home,
    isAuth: false
  },
  {
    path: "/auth",
    component: Auth,
    isAuth: false
  },
  {
    path: "/profile",
    component: Profile,
    isAuth: true
  },
  {
    path: "/new-workout",
    component: NewWorkout,
    isAuth: true
  }
];
