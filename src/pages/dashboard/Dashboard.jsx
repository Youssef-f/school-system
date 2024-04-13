import React from 'react';
import "./dashboard.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";

import { Table } from "antd";
function Dashboard() {
    const dataSource = [
        {
          key: '1',
          module: 'Introduction to Computer Science',
          teacher: 'Professor Smith',
          absence: 3,
        },
        {
            key: '1',
            module: 'Advanced Frontend Web Development',
            teacher: 'Professor Johnson',
            absence: 0,
        },
        {
            key: '1',
            module: 'User Experience (UX) Design',
            teacher: 'Professor Lee',
            absence: 0,
        }
      ];
      
      const columns = [
        {
          title: 'Module name',
          dataIndex: 'module',
          key: 'module',
        },
        {
          title: 'Teacher',
          dataIndex: 'teacher',
          key: 'teacher',
        },
        {
          title: 'Number of absences',
          dataIndex: 'absence',
          key: 'absence',
        },
      ];
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <h3>Dashboard</h3>
                <p>Welcome to your dashboard</p>
                <div className="widgets">
                    <Widget type="module" />
                    <Widget type="class" />
                    <Widget type="exam" />
                    <Widget type="result" />
                </div>
                <p>Your absence tallies</p>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        </div>
    );
}

export default Dashboard;
