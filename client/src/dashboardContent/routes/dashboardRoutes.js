import DashboardView from "../views/Dashboard/DashboardView";
import ProfileView from "../views/Profile/ProfileView";
import AccountView from "../views/Account/AccountView";
import LogoutView from '../views/Logout/LogoutView';

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-layout-11",
    component: DashboardView
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "nc-icon nc-single-02",
    component: ProfileView
  },
  {
    path: "/account",
    name: "Account",
    icon: "nc-icon nc-settings-gear-65",
    component: AccountView
  },
  {
    path: "/logout",
    name: "Logout",
    icon: "nc-icon nc-tap-01",
    component: LogoutView
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" },
];
export default dashRoutes;
