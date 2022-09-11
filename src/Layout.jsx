import { Outlet, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
const Layout = () => {
    return (
        <>

            <NavBar />
            <div className="spacerOutlet"></div>
            <Outlet />
        </>
    )
};

export default Layout;