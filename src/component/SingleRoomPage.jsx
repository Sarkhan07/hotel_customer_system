import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Button, Layout, List, Typography, Col, Row, Modal, Input, DatePicker} from 'antd';
import { Link, useParams } from 'react-router-dom';
import { checkInRoom, checkOutRoom } from '../actions/index';
import MainLayoutPage from './mainLayoutPage';
import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { Text } = Typography;

const SingleRoomPage = () => {
  const { RoomId } = useParams();
  const rooms = useSelector((state) => state.rooms);
  const [checkInVisible, setCheckInVisible] = useState(false);
  const [checkOutVisible, setCheckOutVisible] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [checkOutDate, setCheckoutDate] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filterRooms = rooms.find((r) => r.id === RoomId);

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

  const handleCheckIn = () => {
    setCheckInVisible(true);
  }

  
  const handleCheckOut = () => {
    setCheckOutVisible(true);
  }


  const handleConfirmCheckIn = () => {
    dispatch(checkInRoom(RoomId, guestName));
    setCheckInVisible(false);
  };
    const handleConfirmCheckOut = () => {
    dispatch(checkOutRoom(RoomId));
    setCheckOutVisible(false);
  };


  const backToHome = () => {
    navigate("/main");
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
        <Button type="primary" onClick={backToHome}>Back Home</Button>
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
            <Button type="primary" onClick={handleCheckIn}>Check In</Button>
            <Button type="danger" onClick={handleCheckOut}>Check Out</Button>
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
        <Modal
            title="Check In"
            visible={checkInVisible}
            onOk={handleConfirmCheckIn}
            onCancel={() => setCheckInVisible(false)}
            >
            <p>Please, enter the guest&apos;s name:</p>
             <Input value={guestName} onChange={(e) => setGuestName(e.target.value)} />
             <p>Please, enter the approximate date of guest checkout</p>
             <DatePicker onChange={(date) => setCheckoutDate(date)} />
            </Modal>
            <Modal
            title="Check Out"
            visible={checkOutVisible}
            onOk={handleConfirmCheckOut}
            onCancel={() => setCheckOutVisible(false)}
          >
            <p>Do you confirm the check-out Room1?</p>
           
          
              
        
          </Modal>

      </Content>
    </MainLayoutPage>
  );
};



export default SingleRoomPage;
