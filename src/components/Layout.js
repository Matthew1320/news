import { NavBar } from "./NavBar/NavBar"
import { Outlet } from "react-router"

export function Layout() {
    return (
        <>
        <NavBar />
        <main>
            <Outlet />
        </main>
        </>
    )
}