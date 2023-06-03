import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import FullscreenLoader from "../fullscreenloader/fullscreenloader";

function Address() {
  const [address, setAddress] = useState("");
  const [auth, setAuth] = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.put(`http://localhost:8000/api/v1/profile`, {
        address,
      });
      console.log(data);
      if (data?.error) {
        setLoading(false);
        toast.error(data.error);
      } else {
        const prevData = JSON.parse(localStorage.getItem("auth"));
        const updatedData = { ...prevData, user: { ...data } };
        localStorage.setItem("auth", JSON.stringify(updatedData));
        setAuth({ ...auth, user: { ...data } });
        setAddress("");
        setLoading(false);
        toast.success("Update successful");
        navigate("/");
      }
    } catch (error) {
      setAddress("");
      setLoading(false);
      console.log(error);
      toast.error("Failed. Try again.");
    }
  };
  return (
    <div>
      <FullscreenLoader settings={loading ? "" : "d-none"} />
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control mb-4 p-2"
                placeholder="enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <button className="btn btn-outline-success w-100" type="submit">
                Add Address
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
