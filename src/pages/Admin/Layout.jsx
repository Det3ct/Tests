import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Admin } from "./Admin";

const Layout = () => {
    const [isDrawerOpen, SetIsDrawerOpen] = useState(false);
    return (
        <>
            <Header
                handleDrawer={() => SetIsDrawerOpen(true)}
            />
            <Admin
                isDrawerOpen={isDrawerOpen}
                CloseDrawer={() => SetIsDrawerOpen(false)}
            />
            <Outlet />
        </>
    )
}

export { Layout }