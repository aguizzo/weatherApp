import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            listStyle: "none",
            position: "fixed",
            top: 0,
            left: 0,
            width: "500px",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
