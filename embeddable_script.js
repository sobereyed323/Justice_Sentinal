```js
// Import modules
const AIBot = require('./ai_bot.js');

// Create a new instance of our AI bot
const aiBot = new AIBot({/* user_data goes here */});

// Embed bot to the website as a 3D Robocop
document.addEventListener("DOMContentLoaded", () => {
    let botContainer = document.getElementById("openai-chatbot");

    // bot UI customization with 3D Robocop appearance can be done here
    let botUI = document.createElement("div");
    botUI.innerHTML = `
        <h3>Welcome! I am Justice Sentinel, your personal law-enforcing AI assistant, here to answer your questions!</h3>
        <div id="chat-window"></div>
        <input id="user-input" type="text" />
        <button id="submit-button">Submit</button>
        <button id="check-report">Check Report Status</button>
        <button id="legal-info">Legal Information</button>
    `;

    botContainer.appendChild(botUI);

    // Create reference for new elements in the UI
    let checkReportButton = document.getElementById("check-report");
    let legalInfoButton = document.getElementById("legal-info");
    
    let submitButton = document.getElementById("submit-button");
    let userInput = document.getElementById("user-input");
    let chatWindow = document.getElementById("chat-window");
    
    // Function for dealing with bot response
    const handleResponse = (response) => {
        let botResponse = document.createElement("p");
        botResponse.innerText = "Justice Sentinel: " + response;
        chatWindow.appendChild(botResponse);

        // Clear the user input field
        userInput.value = "";        
    }
    
    // Submit user query to bot
    submitButton.onclick = () => {
        let userText = userInput.value;
        aiBot.converse(userText)
            .then(response => handleResponse(response))
            .catch(err => console.error(err));
    };
    
    // Submit report status check request to bot
    checkReportButton.onclick = () => {
        let userText = userInput.value;
        aiBot.checkReportStatus(userText)
            .then(response => handleResponse(response))
            .catch(err => console.error(err));
    };
    
    // Submit legal info request to bot
    legalInfoButton.onclick = () => {
        let userText = userInput.value;
        aiBot.provideLegalInfo(userText)
            .then(response => handleResponse(response))
            .catch(err => console.error(err));
    };
});
```