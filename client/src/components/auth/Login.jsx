import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import FullscreenLoader from "../fullscreenloader/fullscreenloader";

export default function Login() {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // context hooks
  const [auth, setAuth] = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post(`https://mernauth-79ad.onrender.com/api/v1/login`, {
        email,
        password,
      });
      console.log(data);
      if (data?.error) {
        setLoading(false);
        toast.error(data.error);
      } else {
        localStorage.setItem("auth", JSON.stringify(data));
        // note: see in auth.jsx in context folder. data is collected and save in cotext there in useEffect .
        // 🔽🔽this data is also set here manually though it is set in the auth context from the local storage.
        // if we do not white the below code then we can not see the current change in the home page. then we will have to reload the page manually to see the changes
        setAuth({ ...auth, user: data?.user, token: data.token });
        setLoading(false);
        toast.success("Login successful");
        navigate(location.state || "/dashboard");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Login failed. Try again.");
    }
  };
  return (
    <div>
      <FullscreenLoader settings={loading ? "" : "d-none"} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control mb-4 p-2"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="form-control mb-4 p-2"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="btn btn-outline-primary w-100" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
