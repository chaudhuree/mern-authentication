import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
// - pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Secret from "./pages/Secret";
import LoginRegister from "./pages/auth/LoginRegister";
import Dashboard from "./pages/user/Dashboard";

// - components
import Menu from "./components/nav/Menu";
import PrivateRoutes from "./components/routes/PrivateRoutes";

// testing purpose route element
const Testing = () => {
  return <div>Testing</div>;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-register" element={<LoginRegister />} />
          {/*
            protected routes 
           */}
          <Route path="/dashboard" element={<PrivateRoutes />}>
            {/*
          now the route is just /dashboard as we left the path is empty 
        */}
            <Route path="" element={<Dashboard />} />
            {/*
             now the route will be /dashboard/secret
            */}
            <Route path="secret" element={<Secret />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
