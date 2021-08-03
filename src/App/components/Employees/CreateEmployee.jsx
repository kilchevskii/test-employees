import { Form, Input, Button } from "antd";
import React, { useState } from "react";
import { createEmployee } from "../../redux/actions/actionEmpoyees";
import { useDispatch } from "react-redux";

const CreateEmployee = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisiblePopup = () => {
    setVisible(!visible);
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const validateMessages = {
    required: "${label} is required!",
  };

  const dispatch = useDispatch();
  const onFinish = ({ user }) => {
    const data = {
      id: Date.now(),
      email: "example@gmail.com",
      first_name: user.first_name,
      last_name: user.last_name,
      avatar: "https://pornhub.com",
    };
    setVisible(!visible);
    dispatch(createEmployee(data));
  };

  return (
    <>
      {visible ? (
        ""
      ) : (
        <Button className="create-employee" onClick={toggleVisiblePopup}>
          Добавить сотрудника
        </Button>
      )}
      {visible ? (
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "first_name"]}
            label="First name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "last_name"]}
            label="Last name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button
              onClick={toggleVisiblePopup}
              type="default"
              htmlType="submit"
            >
              Close
            </Button>
          </Form.Item>
        </Form>
      ) : (
        ""
      )}
    </>
  );
};

export default CreateEmployee;
