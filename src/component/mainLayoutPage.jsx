import React from "react";
import { Layout, Button} from "antd";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';  
import { auth, signOut } from "../firebase";

const {Header, Content} = Layout;



const MainLayoutPage = ({children}) => {
  const users = useSelector((state) => state.users);
  const currentUser = users.user == 'user2' ? users[1] : users[0];
  const navigate = useNavigate();

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <Layout>
      <Header>
      <Link to="/main" >
        <img src="../favicon.png" alt="favicon" />
      </Link>
       
        <div>
          {currentUser && (
            <div>
              <img
                src={currentUser.image}
                alt="User"
                className="userPhoto"
              />
         
              <Button onClick={signOutUser}>Log Out</Button>
            </div>
          )}
      
        
        </div>
       
   
      </Header>
      <Content>{children}</Content>
    </Layout>
  )
}

MainLayoutPage.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default MainLayoutPage;