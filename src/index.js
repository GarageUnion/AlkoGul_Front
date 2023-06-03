import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductsPage from "./Pages/Navigation/ProductsPage"
import'./css/main.css'
import'./css/Header.css'
import'./css/Login.css'
import'./css/BreadPanel.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ErrorPage from "./Pages/ErrorPage"
import PiesPage from './Pages/Navigation/PiesPage';
import CraftBreadPage from './Pages/Navigation/CraftBreadPage';
import EnterPage from './Pages/EnterPage';
import RegistrationPage from './Pages/RegistrationPage'
import MyRecipePage from './Pages/MyRecipePage';
import MyCraftBreadRecipePage from './Pages/MyRecipePage';
import PieRecipePage from './Pages/BreadDiscription/PieRecipePage';
import ProductDiscriptionPage from './Pages/BreadDiscription/ProductDiscriptionPage';
import CraftBreadRecipePage from './Pages/BreadDiscription/CraftBreadRecipePage';


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
        path: "/pieRecipe",
        element: <PieRecipePage/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/product",
        element: <ProductDiscriptionPage/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/craftBreadRecipe",
        element: <CraftBreadRecipePage/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/newRecipe",
        element: <MyRecipePage/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/newCraftBreadRecipe",
        element: <MyCraftBreadRecipePage/>,
        errorElement: <ErrorPage />,
    },

]);
const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

