import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = {
    email: "nischal@admin.com",
    password: "nischal123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, seterror] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    )
      console.log("Logged In");
    else {
      console.log("Details didnot match!");
      seterror("Details didnot match!");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}
export default App;
