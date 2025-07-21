import React from "react";
import { Outlet } from "react-router-dom";

import "./Home.css";

export default function Home () {
  return (
    <>
    <main>
        <Outlet />
    </main>
    </>
  );
}