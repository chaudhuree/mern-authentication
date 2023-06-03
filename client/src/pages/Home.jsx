import { Descriptions } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Address from "../components/address/Address";
import { useAuth } from "../context/auth";
export default function Home() {
  const [auth, setAuth] = useAuth();
  console.log(auth);
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Descriptions title="User Info">
              <Descriptions.Item label="UserName">
                {auth?.user?.name}
              </Descriptions.Item>
              <Descriptions.Item label="Email" span={2}>
                {auth?.user?.email}
              </Descriptions.Item>
              <Descriptions.Item label="Role" span={3}>
                {auth?.user?.role === 0
                  ? "User"
                  : auth?.user?.role === 1
                  ? "Admin"
                  : ""}
              </Descriptions.Item>
              {auth?.user?.address ? (
                <Descriptions.Item label="Address">
                  {auth?.user?.address}
                </Descriptions.Item>
              ) : (
                ""
              )}
            </Descriptions>
          </div>
        </div>
      </div>
      {auth?.user?.address ? "" : <Address />}
      <h5 className="text-center">
        <Link to="/dashboard">go to dashboard</Link>
      </h5>
    </div>
  );
}
