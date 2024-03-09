import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Search from "../Pages/Search/Search";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
          path: "/searchBar",
          element:<Search></Search>
        }
      ]
    },
  ]);
export default router;