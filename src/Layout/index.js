import React from "react";
import "./index.css";
import TopBar from "./TopBar";

function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <TopBar />
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
