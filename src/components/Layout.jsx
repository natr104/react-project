import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <div>
            <h1>Raider.io App</h1>
            <Navbar />
            <Outlet />
        </div>
    )
}