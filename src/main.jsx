import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products from "./pages/Products";
import App from "./App";
import Orders from "./pages/Orders";
import Dashboard from "./pages/Dashboard";
import Eror404 from "./pages/404";
import EditProduct from "./pages/editProduct";
import AddProduct from "./pages/addProduct";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Dashboard />,
			},
			
			{
				path: "orders",
				element: <Orders />,
			},

			{
				path:"products",
				children:[
					{
						path: "",
						element: <Products />,
					},
					{
                        path:"editProduct/:id",
                        element:<EditProduct/>
                    },
                    {
                        path:"addProduct",
                        element:<AddProduct/>
                    }
				]
			}
			
		],
	},
	{
        path: "*",
        element: <Eror404 />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
