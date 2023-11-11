import { Button } from 'antd';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import moment from 'moment';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, fetchRooms } from './actions';
import './styles/main.scss'; 


const App = ({ users, rooms, fetchUsers, fetchRooms }) => {
  useEffect(() => {
    fetchUsers();
    fetchRooms();
  }, [fetchUsers, fetchRooms]);

  return (
    <div className="App">
      <Button type="primary">Button</Button>
  </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  rooms: state.rooms,
});

const mapDispatchToProps = {
  fetchUsers,
  fetchRooms,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);