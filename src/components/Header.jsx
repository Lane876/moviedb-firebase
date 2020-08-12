import React from "react";
import { AppBar, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import app from "firebase";

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
        position: "static",
        backgroundColor: "#f4f4f4",
      }}
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
        <Link to="/">Logo</Link>
        <div>
          <Button onClick={logout}>
            {user.user === null ? "Sign In" : "Sign Out"}
          </Button>
        </div>
      </div>
    </AppBar>
  );
};

export default Header;
