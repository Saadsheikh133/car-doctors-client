import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home/Home";
import Main from "../layouts/main/Main";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import CheckOut from "../pages/checkOut/CheckOut";
import Bookings from "../pages/bookings/Bookings";
import PrivateRoute from "./privateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <Register></Register>
            },
            {
                path: '/checkOut/:id',
                element: <PrivateRoute>
                    <CheckOut></CheckOut>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoute>
                    <Bookings></Bookings>
                </PrivateRoute>
            }
        ]
    },
]);
export default router;