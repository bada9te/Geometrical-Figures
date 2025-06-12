import { Outlet } from "react-router";
import Header from "../components/header/Header";

export default function OutletWrapper() {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
}