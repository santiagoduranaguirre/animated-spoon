import React from "react";
import { Link, Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/GuauGuau">GuauGuau</Link>
        </li>
        <li>
          <Link to="/MiauMiau">MiauMiau</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default HomePage;
