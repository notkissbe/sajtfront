import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function Layout(){
    return <>
    <Header></Header>
    <main>
        <Outlet/>
    </main>
    </>
}