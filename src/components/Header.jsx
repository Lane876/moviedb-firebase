import React from "react";
import { AppBar, Button, Typography } from "@material-ui/core";
import { Link, useHistory, Route } from "react-router-dom";
import app from "firebase";
import logo from "../images/logo.png";
import Favorite from "./Favorite";

const Header = ({ user }) => {
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
        backgroundColor: "#f4f4f4",
        padding: ".5rem",
      }}
      color="primary"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "center",
          marginLeft: "2rem",
          marginRight: "2rem",
        }}
      >
        <Link to="/">
          <img src={logo} width="35px" alt="logo" />
        </Link>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button style={{ fontWeight: "600" }}>
            <Link
              to="/favorite"
              style={{
                textDecoration: "none",
                color: "black",
                marginRight: "1rem",
              }}
            >
              Favorite
            </Link>
          </Button>
          {user.user === null ? null : (
            <Typography style={{ color: "black" }}>
              Hello, {user?.user?.displayName}
            </Typography>
          )}

          <Button
            onClick={logout}
            style={{ fontWeight: "600", marginLeft: "1rem" }}
          >
            {user.user === null ? "Sign In" : "Sign Out"}
          </Button>
        </div>
      </div>
    </AppBar>
  );
};

export default Header;
