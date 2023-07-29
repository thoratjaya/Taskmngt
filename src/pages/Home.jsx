import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/nav/Navbar.jsx';
import TaskList from '../components/task/TaskList.jsx';


function Home() {
  return (
    <Layout>
    <Navbar />
    <TaskList />
  </Layout>
  );
}
export default Home;