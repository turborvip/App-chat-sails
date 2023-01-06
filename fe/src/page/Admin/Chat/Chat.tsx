import { useEffect, useState } from "react";
import { connect } from "../../../services/socketIO";
import { Responsive, WidthProvider } from "react-grid-layout";
import AntdIcon from "../../../components/icons/AntdIcons";

// import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import "./styles.less";
import { AutoComplete, Button, Input } from "antd";

import Option from "./Option";

const ResponsiveGridLayout = WidthProvider(Responsive);

function Chat() {
  useEffect(() => {
    // Connect to the Socket.io server
    const socket = connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  const layout1 = [
    { i: "option", x: 0, y: 0, w: 24, h: 5, static: true },
    { i: "content", x: 24, y: 0, w: 24, h: 5, static: true },
  ];

  const layout2 = [
    { i: "option", x: 0, y: 0, w: 10, h: 5, static: true },
    { i: "content", x: 10, y: 0, w: 14, h: 5, static: true },
  ];

  const layout3 = [
    { i: "option", x: 0, y: 0, w: 5, h: 5, static: true },
    { i: "content", x: 5, y: 0, w: 14, h: 5, static: true },
    { i: "friend", x: 19, y: 0, w: 5, h: 5, static: true },
  ];

  const layouts = {
    xs: layout1,
    sm: layout2,
    md: layout3,
    lg: layout3,
    xl: layout3,
    xxl: layout3,
  };

  const dataFriends = [
    { value: "Burns Bay Road" },
    { value: "Downing Street" },
    { value: "Wall Street" },
  ];

  

  return (
    <div className="chat_wrapper">
      <ResponsiveGridLayout
        className="chat_layout"
        layouts={layouts}
        cols={{ lg: 24, md: 24, sm: 24, xs: 24, xxs: 24 }}
        margin={[0,0]}
        // onResize={onResize}
        // measureBeforeMount={true}
        resizeHandles={[]}
      >
        <div key="option" className="option_pannel">
          <Option dataFriends={dataFriends}/>
        </div>
        <div key="content" className="content_pannel">
          Hinh 2
        </div>
        <div key="friend" className="friend_pannel">
          Hinh 3
        </div>
      </ResponsiveGridLayout>
    </div>
  );
}

export default Chat;
