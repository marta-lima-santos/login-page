import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Layout";
import "../Login/login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout>
      <form className="form">
        <span className="title">Login</span>

        <div className="inputOne">
          <input
            type="email"
            required="required"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Username</span>
        </div>

        <div className="inputOne">
          <input
            type="password"
            required="required"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </div>

        <div className="login-button">
          <button className="loginBtn">Login</button>
        </div>

        <div className="account">
          <span className="text1">Don't have a account?</span>
          <Link className="text2" to="/register">
            Register
          </Link>
        </div>
      </form>
    </Layout>
  );
};
