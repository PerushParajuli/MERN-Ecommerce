import NavBar from "../components/header/navbar.jsx";
import { useState } from "react";
import { SidebarWithContentSeparator } from "../components/header/SidebarWithContentSeparator.jsx";

const homePage = () => {
    const [sidebar, setSidebar] = useState(false);

    const toggleSideBar = (data) => {
        setSidebar(data);
    };

    return (
        <div className="">
            {sidebar ? (
                <SidebarWithContentSeparator onSendData={toggleSideBar} sidebar={sidebar}/>
            ) : (
                <NavBar onSendData={toggleSideBar} sidebar={sidebar}/>
            )}
        </div>
    );
};

export default homePage;
