import { Form, Input, InputNumber, Button } from "antd";
import React from "react";
import {
  getEmployees,
  createEmployee,
  removeEmployee,
} from "..//src/App/redux/actions/actionEmpoyees";
import { useDispatch, useSelector } from "react-redux";
import Item from "antd/lib/list/Item";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const CreateEmployee = () => {
 
  const onFinish = (user) => {
    const data = {
        first_name: user.first_name,
        last_name: user.last_name,
        id: Date.now(),
        email: "george.bluth@reqres.in",
        avatar:"https://reqres.in/img/faces/1-image.jpg"
    };
    dispatch(createEmployee(data));
    console.log(data);
  };

  const dispatch = useDispatch();

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "first_name"]}
        label="Имя cотрудника"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "last_name"]}
        label="Фамилия cотрудника"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};


export default CreateEmployee;
