import React from 'react';
import { useSelector } from 'react-redux';
import {Layout, Button, Table, Checkbox} from 'antd';
import MainLayoutPage from './mainLayoutPage';
import { Link } from 'react-router-dom';


const {Content} = Layout;

const column = [
  {
    title: "Number",
    dataIndex: 'number',
    key: 'number'
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: 'Occupancy',
    dataIndex: 'occupancy',
    key: 'occupancy',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Guest',
    dataIndex: 'guest',
    key: 'guest',
  },
  {
    key: 'actions',
    render: (info) => (
      <Link to={`/room/${info.id}`}>
        <Button type="primary">More Information</Button>
      </Link>
    ),
  },
];

const MainPage = () => {
  const rooms = useSelector((state) => state.rooms);

  return (
    <MainLayoutPage>
      <Content>
        <Button>Clear all filters</Button>
        <Checkbox>Free rooms only</Checkbox>
        <Table dataSource={rooms} columns={column}/>      
      </Content>  
    </MainLayoutPage>
  );
};

export default MainPage;