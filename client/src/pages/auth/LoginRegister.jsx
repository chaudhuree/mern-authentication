import { Tabs } from "antd";
import React from "react";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";
const onChange = (key) => {
  console.log(key);
};
const LoginRegister = () => (
  <>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Tabs
            defaultActiveKey="1"
            onChange={onChange}
            items={[
              {
                label: `Login`,
                key: "1",
                children: <Login />,
              },
              {
                label: `Register`,
                key: "2",
                children: <Register />,
              },
            ]}
          />
        </div>
      </div>
    </div>
  </>
);
export default LoginRegister;
