import React, { useState } from "react";
import { Paper, Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import google from "../images/google.png";
import FacebookIcon from "@material-ui/icons/Facebook";




const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialState);

  function handleChange(e) {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }


  return (
    <div style={{ marginTop: "2rem" }}>
      <Paper
        style={{
          maxWidth: "500px",
          margin: "1rem auto",
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <Typography
          style={{
            marginBottom: "2rem",
            fontWeight: "600",
            textAlign: "center",
            color: "gray",
          }}
        >
          Sing Up
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            label="name"
            variant="outlined"
            type="name"
            value={user.name}
            name="name"
            onChange={handleChange}
            required
            style={{ marginTop: "1rem" }}
          />
          {/* {errors.name && <Typography color="secondary">Name must be at least 3 characters long</Typography>} */}

          <TextField
            label="email"
            variant="outlined"
            type="email"
            value={user.email}
            name="email"
            required
            style={{ marginTop: "1rem" }}
            onChange={handleChange}
          />
          {/* {errors.email && <Typography color="secondary">Invalid email</Typography>} */}

          <TextField
            label="password"
            variant="outlined"
            type="password"
            value={user.password}
            name="password"
            required
            style={{ marginTop: "1rem" }}
            onChange={handleChange}
          />
          {/* {errors.password && <Typography color="secondary">Password must be at least 6 characters long</Typography>} */}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginBottom: "1rem", marginTop: "2rem" }}
            // onClick={register}
          >
            Sign Up
          </Button>
        </form>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#3f51b5",
                fontWeight: "600",
              }}
            >
              Log In
            </Link>
          </Typography>
        </div>
      </Paper>
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          justifyContent: "space-between",
          maxWidth: "500px",
          alignItems: "center",
        }}
      >
        <div style={{ width: "220px", border: "1px solid lightgray" }} />
        <Typography style={{ margin: "0.5rem" }}>Or</Typography>
        <div style={{ width: "220px", border: "1px solid lightgray" }} />
      </div>
      <div
        style={{
          display: "flex",
          maxWidth: "450px",
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button variant="outlined" style={{ width: "250px", margin: ".5rem" }}>
          <img src={google} alt="google account icon" width="23px" />
        </Button>
        <Button variant="outlined" style={{ width: "250px", margin: ".5rem" }}>
          <FacebookIcon style={{ color: "#4267b2" }} />
        </Button>
      </div>
    </div>
  );
};

export default Register;
