import React, { useEffect } from 'react'
import './App.css';
import { Button } from 'react-bootstrap'
import { Routes, Route, Link } from 'react-router-dom';
import AddUser from './components/AddUser';
import UserCard from './components/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './JS/actions/actionUser';
import EditUser from './components/EditUser';

function App() {

  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  const getAllUsers = () => {
    dispatch(getUsers())
  }

  useEffect(() => {
    getAllUsers()
  }, [])


  return (
    <div className="App">
      <Link to='/users_list'>
        <Button variant="outline-primary button">Users List</Button>
      </Link>
      <Link to='/add_user' >
        <Button variant="primary button">Add User</Button>
      </Link>

      <Routes>
        <Route path='/users_list' element={<div className="contact-list" >
          {users.map((el, index) => <UserCard user={el} key={el._id} />)}
        </div>} />
        <Route path='/add_user' element={<AddUser />} />
        <Route path='/edit_user' element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
