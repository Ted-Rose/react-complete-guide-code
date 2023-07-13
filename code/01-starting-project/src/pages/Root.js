import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      {/* Marked where child routes should be rendered in */}
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
