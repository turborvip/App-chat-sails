import { useEffect, useState } from "react";
import { connect } from "../../services/socketIO";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import "./styles.less";
import Option from "./Option";
import Content from "./Content";
import Detail from "./Detail";

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
    { i: "option", x: 0, y: 0, w: 5, h: 5, static: true },
    { i: "content", x: 5, y: 0, w: 19, h: 5, static: true },
  ];

  const layout2 = [
    { i: "option", x: 0, y: 0, w: 10, h: 5, static: true },
    { i: "content", x: 10, y: 0, w: 14, h: 5, static: true },
  ];

  const layout3 = [
    { i: "option", x: 0, y: 0, w: 5, h: 5, static: true },
    { i: "content", x: 5, y: 0, w: 14, h: 5, static: true },
    { i: "detail", x: 19, y: 0, w: 5, h: 5, static: true },
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
        cols={{xxl:24,xl:24, lg: 24, md: 24, sm: 24, xs: 24, xxs:24 }}
        breakpoints={{ xl:1600, lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        margin={[0, 0]}
        // onResize={onResize}
        // measureBeforeMount={true}
        resizeHandles={[]}
      >
        <div key="option" className="option_panel">
          <Option dataFriends={dataFriends}/>
        </div>
        <div key="content" className="content_panel">
          <Content/>
        </div>
        <div key="detail" className={`detail_panel && 'd-none'}`}>
          <Detail />
        </div>
      </ResponsiveGridLayout>
    </div>
  );
}

export default Chat;
