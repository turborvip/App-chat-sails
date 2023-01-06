import io from "socket.io-client";

export const connect = () => {
    // Connect to the Socket.io server
    const socket = io(`http://${window.location.hostname}:1337`, {
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

    return socket;
}
