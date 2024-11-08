import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Notfound from "../pages/Notfound";
import Shop from "../pages/Shop";
import Courses from "../pages/Courses";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/shop",
                element: <Shop/>
            },
            {
                path: "/courses",
                element: <Courses/>
            }
        ]
    },
    {
        path: "*",
        element: <Notfound/>
    }
])
export default router;