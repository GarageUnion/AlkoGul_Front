import React from 'react';
import ReactDOM from 'react-dom/client';

import App from "./App"
import ProductsPage from "./Pages/ProductsPage"
import'./css/main.css'
import'./css/Header.css'
import'./css/Login.css'
import'./css/BreadPanel.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ErrorPage from "./Pages/ErrorPage"
import CocktailsPage from './Pages/CocktailsPage';
import MoonshinePage from './Pages/MoonshinePage';
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
        path: "/cocktails",
        element: <CocktailsPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/moonshine",
        element: <MoonshinePage/>,
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

