import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div
      className=" bg-light d-flex justify-content-center align-items-center flex-column "
      style={{ height: "80vh" }}
    >
      <h1>Successfully Logged In</h1>
      <br />
      <h5>
        <Link to="/">go to homepage</Link>
      </h5>
    </div>
  );
}
