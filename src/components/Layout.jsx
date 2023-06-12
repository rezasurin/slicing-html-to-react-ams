import React from "react";
import { TopNavBar } from "./NavBar";
import { SideDrawer } from "./SideDrawer";
import { useViewContext } from "../hooks/useViewContext";
import useMediaQuery from "../hooks/useMediaQuery";

export const Layout = ({ children }) => {
  const { state } = useViewContext()
  const isMobile = useMediaQuery("(max-width: 767px)")
  
  return (
    <body>
      <header>
        <TopNavBar />
      </header>

      <main>
        <SideDrawer />

        <div className="main-area float-right" id="main"
        style={{
          paddingLeft: state.openSideNav && !isMobile ? "175px" : ""
        }}
        >{children}</div>
      </main>
    </body>
  );
};

