import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Layout, List, Typography, Col, Row} from 'antd';
import { Link, useParams } from 'react-router-dom';
import MainLayoutPage from './mainLayoutPage';

const { Content } = Layout;
const { Text } = Typography;

const SingleRoomPage = () => {
  const { RoomId } = useParams();
  console.log(RoomId);
  const rooms = useSelector((state) => state.rooms);
  console.log(rooms)
  
  const filterRooms = rooms.find((r) => r.id === RoomId);
  console.log(filterRooms);
  if (!filterRooms) {
    return (
      <MainLayoutPage>
        <Content>
          <Button>
            <Link to="/">Back Home</Link>
          </Button>
          <div>Room not found</div>
        </Content>
      </MainLayoutPage>
    );
  }

  const roomDetails = [
    { label: 'Number', value: filterRooms.number },
    { label: 'Type', value: filterRooms.type },
    { label: 'Occupancy', value: filterRooms.occupancy },
    { label: 'Price', value: filterRooms.price },
    { label: 'Guest', value: filterRooms.guest },
  ];

  return (
    <MainLayoutPage>
      <Content>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={8}>
          <Button>
            <Link to="/">Back Home</Link>
          </Button>
          <div>
          <img src={filterRooms.gallery[0]} alt={`Room ${filterRooms.number}`} style={{ maxWidth: '100%' }} />
          </div>
        </Col>
      <Col xs={24} sm={24} md={8}>
        <List 
          header={<Text strong>Room Detail</Text>}
          dataSource={roomDetails}
          renderItem={(item) => (
          <List.Item>
            <Text style={{fontWeight: 'bold'}}>{item.label}:</Text> {item.value}
          </List.Item>
          )}
        />
      </Col>

      <Col xs={24} sm={24} md={8}>
        <div>
            <h3>Actions</h3>
            <Button type="primary">Check In</Button>
            <Button type="danger">Check Out</Button>
          </div>
     <div>
        <h3 style={{color: 'black'}}>Features</h3>
        <ul>
          {filterRooms.features.map((feature, index) => (
            <li key={index} style={{color: 'black'}}>{feature}</li>
          ))}
        </ul>
      </div>

      </Col>
      </Row>
       
        <div>
          <h3 style={{color: 'black'}}>Description</h3>
          <p style={{color: 'black'}}>{filterRooms.description}</p>
        </div>
        
      </Content>
    </MainLayoutPage>
  );
};



export default SingleRoomPage;
