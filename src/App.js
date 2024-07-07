import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './styles/main.scss';
import { fetchUsers, fetchRooms } from './actions/index.js';
import AuthorizationPage from './component/authorizationPage.jsx';
import MainPage from './component/mainPage.jsx';
import SingleRoomPage from './component/SingleRoomPage.jsx';

const App = ({ fetchUsers, fetchRooms , users, rooms}) => {
  useEffect(() => {
    if (users.length === 0) fetchUsers();
    if (rooms.length === 0) fetchRooms();
  }, [fetchUsers, fetchRooms, users, rooms]);
  
  return (
    <Router>
      <Routes>
      <Route path="/" element={<AuthorizationPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/room/:RoomId" element={<SingleRoomPage />} />
    
      </Routes>
    </Router>
  );

};

App.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  fetchRooms: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  rooms: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
  rooms: state.rooms,
});

const mapDispatchToProps = {
  fetchUsers,
  fetchRooms,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
