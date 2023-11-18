import React from "react";
import { Layout, Button} from "antd";
import { Link } from "react-router-dom";

const {Header, Content} = Layout;

const MainLayout = ({children}) => {
  return (
    <Layout>
      <Header>
        <img src="./favicon.png" alt="favicon" />
        <Button>
          <Link to="/logout">Log out</Link>
        </Button>
      </Header>
      <Content>
        {children}
      </Content>
    </Layout>
  )
}

export default MainLayout;
