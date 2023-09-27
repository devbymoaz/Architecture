import { useRoutes } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import SignUp from "./View/SignUp";
import Login from "./View/Login";
import Project from "./Pages/Home/Project";
import HomePage from "./Pages/Home/HomePage";
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
    ]);
    return element;
}