import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <div className="">
          <Outlet></Outlet>
          <Navbar></Navbar>
        </div>
    );
};

export default MainLayout;