import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles/main.scss';
import { fetchUsers, fetchRooms } from './actions/index.js';
import AuthorizationPage from './component/authorizationPage.jsx';

const App = ({ fetchUsers, fetchRooms }) => {
  useEffect(() => {
    fetchUsers();
    fetchRooms();
  }, [fetchUsers, fetchRooms]);

  return (
    <div className="App">
        <AuthorizationPage/>   
    </div>
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
