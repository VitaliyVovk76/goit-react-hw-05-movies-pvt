import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "components/Loader";
import AppBar from "../AppBar";

const Layout = () => {
  return (
    <>
      <AppBar />

      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
