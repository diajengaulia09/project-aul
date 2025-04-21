import EditProfilePage from "../pages/EditProfilePage"
import DashboardPage from "../pages/DashboardPage"
import ProfilePage from "../pages/ProfilePage"
const routes = [
    {
        'path': '/',
        'page': <DashboardPage/>,
    },
    {
        'path': '/profile',
        'page': <ProfilePage/>,
    },
    {
        'path': '/profile/edit',
        'page': <EditProfilePage/>,
    }
]
export default routes
