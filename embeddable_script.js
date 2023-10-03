```js
// Import modules
const AIBot = require('./ai_bot.js');

// Create a new instance of our AI bot
const aiBot = new AIBot({/* user_data goes here */});

// Embed bot to the website
document.addEventListener("DOMContentLoaded", () => {
    let botContainer = document.getElementById("openai-chatbot");

    // bot UI customization can be done here
    let botUI = document.createElement("div");
    botUI.innerHTML = `
        <h3>Welcome!</h3>
        <div id="chat-window"></div>
        <input id="user-input" type="text" />
        <button id="submit-button">Submit</button>
    `;

    botContainer.appendChild(botUI);

    let submitButton = document.getElementById("submit-button");
    let userInput = document.getElementById("user-input");
    let chatWindow = document.getElementById("chat-window");
    
    submitButton.onclick = () => {
        let userText = userInput.value;
        aiBot.process_text(userText)
            .then(response => {
                let botResponse = document.createElement("p");
                botResponse.innerText = "Bot: " + response;
                chatWindow.appendChild(botResponse);

                // Clear the user input field
                userInput.value = "";
            })
            .catch(err => console.error(err));
    };
});
```
