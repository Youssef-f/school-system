import React from 'react'
import "./profile.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions,
    Select,
    TreeSelect,
  } from 'antd';
const { RangePicker } = DatePicker;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};

const Profile = () => {
// Retrieve user information from localStorage
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer">
            <Navbar />
            <div className="profileHeader">
                <div className="profile_img_container">
                    <img src="images/profile_image.jpg" alt="" />
                </div>
                <div className="profile_info_container">
                    <h4>{user.name}</h4>
                    <h5>{user.role}</h5>
                </div>
            </div>
            <div className="profile_form">
            <Form
            {...formItemLayout}
            variant="filled"
            style={{ maxWidth: 600 }}
            initialValues={{
                Name: 'John Doe',
                Email: 'johndoe@example.com'
            }}
            >
                <Form.Item
                    label="Name"
                    name="Name"
                    rules={[{ required: true, message: 'Please input!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="Email"
                    rules={[{ required: true, message: 'Please input!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                    Save
                    </Button>
                </Form.Item>
            </Form>
            </div>
        </div>
    </div>
  )
}

export default Profile