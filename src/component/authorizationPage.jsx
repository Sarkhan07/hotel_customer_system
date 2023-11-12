import React, { useState } from "react";
import {Input, Button, Checkbox}  from "antd";

const AuthorizationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

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
    console.log({username, password, rememberMe})
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