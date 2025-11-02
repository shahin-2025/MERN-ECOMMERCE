import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import Home from "./pages/home/Home";

const route = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout/>,
        children: [
            {
                path: "/",
                element:<Home/>
            }
        ]
    }
]);





export default route;