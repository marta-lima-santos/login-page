import "../Layout/layout.css";

export const Layout = (props) => {
  return (
    <div className="container">
      <div className="login">
        <div className="fold-login">{props.children}</div>
      </div>
    </div>
  );
};
