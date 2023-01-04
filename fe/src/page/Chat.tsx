import { Button } from "antd";
import { useEffect, useState } from "react";
import io from "socket.io-client";

function Chat() {
  useEffect(() => {
    // Connect to the Socket.io server
    const socket = io("http://localhost:1337", {
      transports: ["websocket", "polling"],
      autoConnect: true,
      // 'pingInterval': 25000, // default - 25000
      // 'pingTimeout': 180000, // default - 60000
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
      secure: true,
    });
    // const socket = io(`http://${window.location.hostname}:1337`);

    // Send a message to the server
    socket.emit("message", { text: "Hello, server!" });

    // Listen for messages from the server
    socket.on("message", (data) => {
      console.log(`Message received: ${data.text}`);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return <Button>Hi</Button>;
}

export default Chat;
