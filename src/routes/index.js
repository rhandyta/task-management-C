import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddTask from '../pages/AddTask';
import DetailTask from '../pages/DetailTask';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyTask from '../pages/MyTask';
import Register from '../pages/Register';
import Users from '../pages/Users';

const SetupRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-task" element={<MyTask />} />
      <Route path="/add-task" element={<AddTask />} />
      <Route path="/detail/:id" element={<DetailTask />} />
      <Route path="/users" element={<Users />} />
      <Route path="/login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
};

export default SetupRouter;
