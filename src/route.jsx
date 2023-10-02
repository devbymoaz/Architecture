import { useRoutes } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import SignUp from "./View/SignUp";
import Login from "./View/Login";
import Project from "./Pages/Home/Project";
import HomePage from "./Pages/Home/HomePage";
import PostSection from "./Components/PostSection/PostSection";
import AdminDashboard from "./Layouts/AdminDashboard/AdminDashboard";
import UserDashboard from "./Layouts/UserDashboard";
// import { Login } from "@mui/icons-material";
// import Navbar from "./src/Componsnts/header/Navbar";
// import NavbarLinks from "./src/Componsnts/Header/NavbarLinks";
// import Navbar from "./src/Componsnts/Header/Navbar";

export default function Router() {
    let element = useRoutes([
        {
            path: '/',
            element: (
                <>
                    <Navbar />
                </>
            )
        },
        {
            path:'/posts',
            element: <PostSection />
        },
        {
            path: '/signup',
            element: <SignUp />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/project',
            element: <Project />
        },
        {
            path: '/homepage',
            element: <HomePage />
        },
        {
            path:'admin-dashboard',
            element: <AdminDashboard />,
            children: [
                // {path:"/",element:<h1>Hello</h1>}
            ]
        },
        {
            path:'user-dashboard',
            element: <UserDashboard />,
            children: [
                // {path:"/",element:<h1>Hello</h1>}
            ]
        }
    ]);
    return element;
}