import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductsPage from "./Pages/ProductsPage"
import'./css/main.css'
import'./css/Header.css'
import'./css/Login.css'
import'./css/BreadPanel.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ErrorPage from "./Pages/ErrorPage"
import PiesPage from './Pages/PiesPage';
import CraftBreadPage from './Pages/CraftBreadPage';
import EnterPage from './Pages/EnterPage';
import RegistrationPage from './Pages/RegistrationPage';
import MyRecipePage from './Pages/MyRecipePage';


const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductsPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/pies",
        element: <PiesPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/craftbread",
        element: <CraftBreadPage/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/enter",
        element: <EnterPage/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/registration",
        element: <RegistrationPage/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/newRecipe",
        element: <MyRecipePage/>,
        errorElement: <ErrorPage />,
    },
]);
const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

