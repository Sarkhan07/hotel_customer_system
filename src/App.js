import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './styles/main.scss';
import { fetchUsers, fetchRooms } from './actions/index.js';
import AuthorizationPage from './component/authorizationPage.jsx';
import MainPage from './component/mainPage.jsx';
import SingleRoomPage from './component/SingleRoomPage.jsx';

const App = ({ fetchUsers, fetchRooms }) => {
  useEffect(() => {
    fetchUsers();
    fetchRooms();
  }, [fetchUsers, fetchRooms]);
  
  return (
    <Router>
      <Routes>
      <Route path="/" element={<AuthorizationPage />} />
        <Route exact
          path="/"
          element={
              <MainPage />
          }
        />
        <Route
          path="/room/:RoomId"
          element={
              <SingleRoomPage />
          }
        />
      </Routes>
    </Router>
  );

};

App.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  fetchRooms: PropTypes.func.isRequired,
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
