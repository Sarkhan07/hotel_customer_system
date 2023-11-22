import React from "react";
import { Layout, Button} from "antd";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 

const {Header, Content} = Layout;
// const accounts = useSelector((state) => state.accaunts);


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
// <img src="state.accaunts.image"/>