import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Info from "./pages/info/Info";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    },
    {
        path: "/info/:id",
        element: <Info />,  
    },
]);

export default router;