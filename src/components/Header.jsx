import React from "react";
import { AppBar, Button, Typography, Hidden } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import app from "firebase";
import logo from "../images/favicon.png";
import Search from "./Search";

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
        <div
          style={{
            display: "flex",
            alignItems:"center"
          }}
        >
          <a href='/'>
            <img src={logo} width="35px" alt="logo" />
            </a>
          {user.user === null ? null : (
            <Button style={{ fontWeight: "600", marginLeft: "2rem" }}>
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
          )}
          <Search />
        </div>
        
        <div  style={{ display: "flex", alignItems: "center" }}>
          {user.user === null ? null : (
            <Hidden xsDown>
            <Typography style={{ color: "black" }}>
              Hello, {user?.user?.displayName}
            </Typography>
            </Hidden>
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
