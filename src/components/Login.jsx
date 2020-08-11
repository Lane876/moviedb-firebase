import React from "react";
import { Paper, Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import google from "../images/google.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useForm } from "react-hook-form";

const Login = () => {
    const {register, errors, handleSubmit} = useForm()




    function onSubmit(data){
        console.log(data);
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
          Sing In
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            autoComplete="off"
            label="email"
            variant="outlined"
            type="email"
            name="email"
            required
            style={{ marginTop: "1rem" }}
            inputRef={register({required:true})}
          />
          {errors.email && <Typography color="secondary">Invalid email</Typography>}
          <TextField
            autoComplete="off"
            label="password"
            variant="outlined"
            type="password"
            name="password"
            required
            style={{ marginTop: "1rem" }}
            inputRef={register({required:true})}
          />
          {errors.password && <Typography color="secondary">Invalid password</Typography>}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "1rem", marginBottom:"1rem" }}
          >
            Sign in
          </Button>
        </form>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>
            <Link
              to="#"
              style={{
                textDecoration: "none",
                color: "#3f51b5",
                fontWeight: "600",
              }}
            >
              Forgot password?
            </Link>
          </Typography>
          <Typography>
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "#3f51b5",
                fontWeight: "600",
              }}
            >
              Sign Up
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
          <img src={google} alt='google account icon' width="23px" />
        </Button>
        <Button variant="outlined" style={{ width: "250px", margin: ".5rem" }}>
          <FacebookIcon style={{ color: "#4267b2" }} />
        </Button>
      </div>
    </div>
  );
};

export default Login;
