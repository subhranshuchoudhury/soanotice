import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
const Layout = (props) => {
    return (
        <>

            <NavBar info={props.info} />
            <div className="spacerOutlet"></div>
            <Outlet />
        </>
    )
};

export default Layout;