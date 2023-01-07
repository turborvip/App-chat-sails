import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { loginInClient, setSocket } from "../../redux/userSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { formatSearch } from "../../utils/formatSearch";
import { connect } from "../../services/socketIO";
import localStorage from "../../utils/localStorage";

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { isLogged } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onFinish = async (values: { username: string; password: string }) => {
    setLoading(true);
    const res = await dispatch(loginInClient(values));
    if (res?.payload) {
       // Connect to the Socket.io server
      const socket = connect();
      // Dispatch an action to store the socket's ID in the state
      // console.log(socket)
      // dispatch(setSocket(socket.io.engine?.id));
      // localStorage.add('socketId',socket.io.engine.id)
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isLogged) {
      const search = formatSearch(location.search);
      const from = search.from || { pathname: "/welcome" };
      navigate(from);
    }
  }, [isLogged, location, navigate]);

  const antIcon = <LoadingOutlined style={{ fontSize: 20 }} spin />;
  return (
    <Form
      name="normal_login"
      className="login-form form-login-custom"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Spin spinning={loading} indicator={antIcon}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button btn-form-login"
          >
            Log in
          </Button>
          <Button
            href="../sign-up"
            type="link"
            htmlType="submit"
            className="login-form-button btn-form-login"
          >
            Register
          </Button>
        </Spin>
      </Form.Item>
    </Form>
  );
};

export default Login;
