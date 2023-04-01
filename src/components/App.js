import React, { useState } from "react";
import "../styles/App.css";
import User from "../models/user";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);

  const handleSignup = (event) => {
    event.preventDefault();
    const name = event.target.signupName.value;
    const email = event.target.signupEmail.value;
    const password = event.target.signupPassword.value;
    const confirmPassword = event.target.signupConfirmPassword.value;
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    const user = new User(email, password, name);
    setAllUsers([...allUsers, user]);
    event.target.reset();
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.loginEmail.value;
    const password = event.target.loginPassword.value;
    const user = allUsers.find((user) => user.email === email && user.password === password);
    if (user) {
      setCurrentUser(user);
      event.target.reset();
    } else {
      alert("Invalid email or password.");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <div id="main">
      <table id="all-users">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          {allUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {currentUser ? (
        <div>
          <h1 id="username">{currentUser.name}</h1>
          <h1 id="email">{currentUser.email}</h1>
          <button id="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <form className="signup-form" onSubmit={handleSignup}>
            <label htmlFor="name">Name</label>
            <input type="text" name="signupName" id="signupName" />
            <label htmlFor="email">Email</label>
            <input type="email" name="signupEmail" id="signupEmail" />
            <label htmlFor="password">Password</label>
            <input type="password" name="signupPassword" id="signupPassword" />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="signupConfirmPassword" id="signupConfirmPassword" />
            <button id="signup-button" type="submit">
              Signup
            </button>
          </form>
          <form className="login-form" onSubmit={handleLogin}>
            <label htmlFor="loginEmail">Email</label>
            <input id="loginEmail" name="loginEmail" type="email" />
            <label htmlFor="loginPassword">Password</label>
            <input id="loginPassword" name="loginPassword" type="password" />
            <button id="login-button" type="submit">
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;



// import React from "react";
// import "../styles/App.css";
// import User from "../models/user";

// const App = () => {
//   return (
//     <div id="main">
//       <table id="all-users">
//       <tbody>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Password</th>
//           </tr>
//           <tr>
//             <td>{/** user's name */}</td>
//             <td>{/** user's email */}</td>
//             <td>{/** user's password */}</td>
//           </tr>
//         </tbody>
//       </table>

//       <div>
//         <form className="signup-form">
//           <label htmlFor="name">Name</label>
//           <input type="text" name="signupName" id="signupName" />
//           <label htmlFor="email">Email</label>
//           <input type="email" name="signupEmail" id="signupEmail" />
//           <label htmlFor="password">Password</label>
//           <input type="password" name="signupPassword" id="signupPassword" />
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             type="password"
//             name="signupConfirmPassword"
//             id="signupConfirmPassword"
//           />
//         </form>
//         <button id="signup-button">Signup</button>
//         <form className="login-styles">
//           <label htmlFor="loginEmail">Email</label>
//           <input id="loginEmail" name="loginEmail" type="email" />
//           <label htmlFor="loginPassword">Password</label>
//           <input id="loginPassword" name="loginPassword" type="password" />
//         </form>
//         <button id="login-button">Login</button>
//       </div>

//       <div>
//         <h3 id="username">{/** Logged in user's name */}</h3>
//         <h3 id="email">{/** Logged in user's email */}</h3>
//         <button id="logout-button">Logout</button>
//       </div>
//     </div>
//   );
// };

// export default App;
