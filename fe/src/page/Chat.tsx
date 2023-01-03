import { Button } from 'antd'
import { useEffect, useState } from 'react';
import io from 'socket.io-client';


function Chat() {
    const [socket, setSocket] = useState<any>(null);

    useEffect(() => {
        const newSocket = io(`http://${window.location.hostname}:3000`);
        // return () => {newSocket.close()}
      }, [])
  
    return (
     <Button></Button>
    );
}

export default Chat