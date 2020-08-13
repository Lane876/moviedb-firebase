import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import app from "./firebase";
import { getUser } from "./redux/userActions";

function App() {
  const auth = app.auth();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(user.user?.displayName);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(getUser(authUser));
      } else {
        dispatch(getUser(null));
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth, dispatch]);

  return (
    <BrowserRouter>
      <Header user={user} />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </BrowserRouter>
  );
}

export default App;
