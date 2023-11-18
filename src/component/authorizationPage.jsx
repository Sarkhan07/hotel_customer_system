import React, { useState, useEffect } from "react";
import {Input, Button, Checkbox}  from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfigForAuth";


const AuthorizationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  useEffect(() => {
    console.log('useEffect - Remember Me:', rememberMe);
    const storedUsername = localStorage.getItem("rememberedUsername");
    const storedRememberMe = localStorage.getItem("rememberMe") === "true";

    console.log('Stored Username:', storedUsername);
    console.log('Stored Remember Me:', storedRememberMe);

    if (storedRememberMe && storedUsername) {
      setUsername(storedUsername);
      setRememberMe(storedRememberMe);
    }
  }, []);

  const userNameChange = (e) => {
    setUsername(e.target.value);
  }

  const passwordChange = (e) => {
    setPassword(e.target.value)
  }

  const RememberMeCHange = (e) => {
    setRememberMe(e.target.checked);
  };

  const authentication = () => {

    if (rememberMe) {
      localStorage.setItem("rememberedUsername", username);
      localStorage.setItem("rememberMe", true);
    } else {
      localStorage.removeItem("rememberedUsername");
      localStorage.removeItem("rememberMe");
    }

    signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)  
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, ',', errorMessage)
    })
  }

  return (
    <div style={{width: "500px", margin: "15% auto"}}>
     <div className="authorizationPage">
        <h2>Authentication</h2>
        
        <div className="inputGroup">

          <label htmlFor="usernameInput">Username</label>
          <Input
            id="usernameInput"
            placeholder="Enter your username"
            value={username}
            onChange={userNameChange}
            style={{marginBottom: "10px"}}
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="passwordInput">Password</label>
          <Input.Password
          id="passwordInput"
            placeholder="Enter your password"
            value={password}
            onChange={passwordChange}
            style={{marginBottom: "10px"}}
          />
        </div>

        <div className="inputGroup">
          <Checkbox checked={rememberMe} onChange={RememberMeCHange}>
            Remember me
          </Checkbox>
        </div>


        <Button type="primary" onClick={authentication}>
          Log in
        </Button>  
     
     
     </div>
    
    </div>
  )
}

export default AuthorizationPage;