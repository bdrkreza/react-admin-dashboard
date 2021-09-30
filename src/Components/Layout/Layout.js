import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "../Routes";
import Sidebar from "../Sidebar/Sidebar";
import TopNavbar from "../TopNavbar/TopNavbar";
import "./Layout.css";
export default function Layout() {
  return (
    <>
      <BrowserRouter>
        <Route
          render={(props) => (
            <div className="layout">
              <Sidebar {...props} />
              <div className="layout__content">
                <TopNavbar />
                <div className="layout__content-main">
                  <Routes />
                </div>
              </div>
            </div>
          )}
        />
      </BrowserRouter>
    </>
  );
}
