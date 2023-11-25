import React from "react";
import { Layout, Button} from "antd";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 

const {Header, Content} = Layout;



const MainLayoutPage = ({children}) => {

  return (
    <Layout>
      <Header>
        <img src="../favicon.png" alt="favicon"/>
        <Button>
          <Link to="/logout">Log out</Link>
        </Button>
   
      </Header>
      <Content>{children}</Content>
    </Layout>
  )
}

MainLayoutPage.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default MainLayoutPage;