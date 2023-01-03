import React, { useState } from "react";
import { Form, Input, Button, Spin } from "antd";
import AntdIcons from "../icons/AntdIcons";
import { useNavigate } from "react-router-dom";
import { FormSignUp } from "../../interface/user/signup";
import * as apiConfig from "../../services/apiConfig";

const SignUpForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinished = async (values: FormSignUp) => {
    await setLoading(true);
    console.log(values);
    const { name, username, email, password } = values;
    const res = await apiConfig.register({ name, username, email, password });
    if(res) navigate('../login')
    await setLoading(false);
  };

  return (
    <Form<FormSignUp>
      layout={"vertical"}
      style={{ maxWidth: "40%", margin: "auto" }}
      onFinish={onFinished}
    >
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input placeholder="full name" />
      </Form.Item>
      <Form.Item name="username" label="Username" rules={[{ required: true }]}>
        <Input placeholder="enter username" />
      </Form.Item>
      <Form.Item name={"email"} label="Email" rules={[{ required: true }]}>
        <Input placeholder="example abc@gmail.com" />
      </Form.Item>
      <Form.Item
        name={"password"}
        label="Password"
        rules={[{ required: true }]}
      >
        <Input type="password" placeholder="more than 6 characters" />
      </Form.Item>
      <Form.Item
        name={"confirmPass"}
        label="Confirm password"
        rules={[
          { required: true },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
        hasFeedback
      >
        <Input placeholder="fill password again" type="password" />
      </Form.Item>
      <Spin spinning={loading} indicator={AntdIcons.LoadingOutlined}>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button btn-form-login"
        >
          Submit
        </Button>
      </Spin>
    </Form>
  );
};

export default SignUpForm;
