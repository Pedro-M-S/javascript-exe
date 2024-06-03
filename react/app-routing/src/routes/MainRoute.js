import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import NoMatch from '../pages/NoMatch';
import Topics from '../pages/Topics';
import Topic from '../pages/Topic';
import Dashboard from '../pages/Dashboard';
import DashboardMessages from '../components/DashboardMessages';
import DashboardTasks from '../components/DashboardTasks';

function MainRoute() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <ul>
            <li><Link to="/dashboard/tasks">Tasks</Link></li>
            <li><Link to="/dashboard/messages">Messages</Link></li>
            </ul>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="topics" element={<Topics />} />
          <Route path="topics/:id" element={<Topic />} />

          <Route path="dashboard" element={<Dashboard />}>

            
            
            <Route path="messages" element={<DashboardMessages />} />
            <Route path="tasks" element={<DashboardTasks />} />
            

          </Route>

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>

  );
}

export default MainRoute;
