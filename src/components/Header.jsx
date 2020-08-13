import React from "react";
import { AppBar, Button, Typography } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import app from "firebase";
import logo from "../images/logo.png";

const Header = ({ user }) => {
  console.log(user);
  const history = useHistory();
  const auth = app.auth();
  const logout = async () => {
    await auth.signOut();
    history.push("/login");
  };

  return (
    <AppBar
      style={{
        position: "sticky",
        // backgroundColor: "#f4f4f4",
        padding: ".5rem",
      }}
      color="primary"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "2rem",
          marginRight: "2rem",
        }}
      >
        <Link to="/">
          <img src={logo} width="30px" alt="logo" />
        </Link>
        <div style={{ display: "flex", alignItems: "center" }}>
          {user.user === null ? null : (
            <Typography>Hello, {user?.user?.displayName}</Typography>
          )}

          <Button
            onClick={logout}
            style={{ color: "#ffff", fontWeight: "600", marginLeft: "1rem" }}
          >
            {user.user === null ? "Sign In" : "Sign Out"}
          </Button>
        </div>
      </div>
    </AppBar>
  );
};

export default Header;
