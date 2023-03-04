import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../Login";
import { Register } from "../Register";

export const LoginRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};
