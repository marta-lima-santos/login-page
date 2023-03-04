import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Layout";
import "../Login/login.css";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <Layout>
      <form className="form">
        <span className="title">Creating Account</span>

        <div className="inputOne">
          <input
            type="email"
            required="required"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email</span>
        </div>

        <div className="inputOne">
          <input
            type="name"
            required="required"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span>Your Name</span>
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
          <span className="text1">Access Account</span>
          <Link className="text2" to="/">
            Login
          </Link>
        </div>
      </form>
    </Layout>
  );
};
