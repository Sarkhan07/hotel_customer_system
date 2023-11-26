import {React, useState} from 'react';
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
  const onlyFreeRooms = useSelector((state) => state.rooms.filter((room) => !room.guest));
  const [filterFreeRooms, setFilterFreeRooms] = useState(false);
  
  const toggleFilterFreeRooms = () => {
    setFilterFreeRooms(!filterFreeRooms);
  };

  const toggleToTrue = () => {
    setFilterFreeRooms(false);
  };
  
  console.log("All Rooms:", rooms);
  console.log("Free Rooms:", onlyFreeRooms);


  const dataSource = filterFreeRooms ? onlyFreeRooms : rooms;
  
  return (
    <MainLayoutPage>
      <Content>
        <Button onClick={toggleToTrue}>Clear all filters</Button>
        <Checkbox onChange={toggleFilterFreeRooms} checked={filterFreeRooms}>
            Free rooms only
         </Checkbox>
        <Table dataSource={dataSource} columns={column}/>      
      </Content>  
    </MainLayoutPage>
  );
};

export default MainPage;