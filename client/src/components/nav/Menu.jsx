import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

export default function Menu() {
  const [auth, setAuth] = useAuth();
  const Navigate = useNavigate();
  const logout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    // window.location.reload();
    Navigate("/login-register");
  };
  return (
    <div>
      <ul className="p-0 m-0 nav shadow-sm p-3 d-flex justify-content-between">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        {!auth?.user ? (
          <>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login-register">
                Log In
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard/secret">
                Protected
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link cursor_pointer" onClick={logout}>
                Logout
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
