import EditProfilePage from "../pages/EditProfilePage";
import DashboardPage from "../pages/DashboardPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
const routes = [
  {
    path: "/",
    page: <DashboardPage />,
  },
  {
    path: "/profile",
    page: <ProfilePage />,
  },
  {
    path: "/profile/edit",
    page: <EditProfilePage />,
  },
  {
    path: "/register",
    page: <RegisterPage />,
  },
  {
    path: "/login",
    page: <LoginPage />,
  },
];
export default routes;
