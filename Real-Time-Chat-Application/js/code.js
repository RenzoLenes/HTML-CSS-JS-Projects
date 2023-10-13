function scrollToBottom() {
    const chatMessages = document.querySelector('.chat-messages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
    console.log('salto')
  }
  

//Function to send a view messages
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    if (message !== '') {
      const chatMessages = document.querySelector('.chat-messages');
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);
      messageInput.value = '';
      
      // Llama a la función para desplazarse al último mensaje
      scrollToBottom();
    }
  }
  
//Event Listener
document.getElementById('send-button').addEventListener('click',sendMessage);
document.getElementById('message-input').addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
        event.preventDefault();
        sendMessage();
    }
});
