const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });
server.on('connection', (socket) => {
    console.log('New client connected');
  
    socket.on('message', (message) => {
      try {
        // Parse incoming message as JSON
        const parsedMessage = JSON.parse(message);
  
        // Log the parsed message
        console.log(`Received message: ${JSON.stringify(parsedMessage)}`);
  
        // Broadcast the message to all connected clients
        server.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(parsedMessage));
          }
        });
      } catch (error) {
        console.error('Error parsing message:', error);
      }
    });
  
    socket.on('close', () => {
      console.log('Client disconnected');
    });
  
    socket.on('error', (error) => {
      console.error('WebSocket error:', error);
    });
  
    // Send a welcome message to the new client
    socket.send(JSON.stringify({
      type: "announcement",
      username: "server",
      message: "Welcome to the chat!",
    }));
  });