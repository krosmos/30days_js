const ws = new WebSocket(`ws://localhost:8080`);

const messageInput = document.querySelector(".msg");
const sendButton = document.querySelector(".send-btn");
const chatBox = document.querySelector(".chatWindow");
const usernameInput = document.getElementById("user");

const loginContainer = document.querySelector('.login-container');
const mainContainer = document.querySelector('.container');
const loginBtn = document.getElementById('login-btn');
const info = document.querySelector('.connectedas');

loginBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();

  if (username) {
      // Store the username in localStorage
      localStorage.setItem('username', username);

      // Hide the login form and show the chat interface
      loginContainer.style.display = 'none';
      mainContainer.style.display = 'block';

      // Display username in chat header or other places if needed
      info.innerHTML = `<p>You're now connected as ${username}</p>`;
  } else {
      alert('Please enter a username.');
  }
});



ws.onopen = () => {
  console.log("Connected to the WebSocket server");
};

ws.onmessage = (event) => {
  try {
      const { type, message, username } = JSON.parse(event.data);
      if(type === 'announcement')
        chatBox.innerHTML += `<div class="announce"><h6>${username === usernameInput.value ? 'You' : username}</h6><p>${message}</p></div>`;
      if (type === "message") {
          let messageClass = username === usernameInput.value ? 'my-message' : 'friend-message';
          
          chatBox.innerHTML += `<div class="${messageClass}"><h6>${username === usernameInput.value ? 'You' : username}</h6><p>${message}</p></div>`;
          chatBox.scrollTop = chatBox.scrollHeight;
      }
  } catch (error) {
      console.error("Error parsing message:", error);
  }
};

sendButton.addEventListener("click", () => {
  const username = usernameInput.value;
  const message = messageInput.value;

  if (message && username) {
      const data = JSON.stringify({ type: "message", message, username });
      ws.send(data);

      messageInput.value = "";
      chatBox.scrollTop = chatBox.scrollHeight;
  }
});

messageInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendButton.click();
  }
});
