import Home from "./../components/screens/Home/Home";
import Profile from "./../components/screens/profile/Profile";
import Auth from "./../components/screens/auth/Auth";
import NewWorkout from "./../components/screens/new-workout/NewWorkout";
export const routes = [
  {
    path: "/",
    component: Home,
    auth: false
  },
  {
    path: "/auth",
    component: Auth,
    auth: false
  },
  {
    path: "/profile",
    component: Profile,
    auth: true
  },
  {
    path: "/new-workout",
    component: NewWorkout,
    auth: true
  }
];
