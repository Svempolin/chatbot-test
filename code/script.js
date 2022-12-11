// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");
const form = document.getElementById("name-form");
const input = document.getElementById("name-input");
const sendBtn = document.getElementById("send");

let name = "";

// If you need any global variables that you can use across different functions, declare them here:

let questionNr = 0;

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }

  chat.scrollTop = chat.scrollHeight;
};

const nextQuestion = (event) => {
  event.preventDefault();
  questionNr++;
  // console.log("our currentQuestion variable is:", questionNr);
  if (questionNr === 1) {
    name = handelNameQuestion();
    setTimeout(coffeeQuestion, 1500);
  } else if (questionNr === 2) {
    handelNameQuestion();
    setTimeout(question2, 1000);
  } else if (questionNr === 3) {
    handelNameQuestion();
    setTimeout(coffeeQuestion, 1000);
    console.log("lattebutton3");
  } 
};

// Starts here
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", "bot");
};

const coffeeQuestion = () => {
  showMessage(`Welcome ${name} do you like to order a coffee?`, "bot");
  input.value = "";
};

const question2 = () => {
  showMessage(`Nice. what kid of coffee do you like yo have? `, "bot");

  inputWrapper.innerHTML = `
 
 <button id="lBtn">LATTE</button>
 <button id="fBtn"> FRAPPE</button>
 <button id="eBtn">ESPRESSO</button>
 `;
  document
    .getElementById("lBtn")
    .addEventListener("click", () => ShowCoffee("Latte"));
  console.log("lattebutton");
  document
    .getElementById("fBtn")
    .addEventListener("click", () => ShowCoffee("Frappe"));
  console.log("frappebutton");
  document
    .getElementById("eBtn")
    .addEventListener("click", () => ShowCoffee("Espresso"));
  console.log("espresobutton");
};

const ShowCoffee = (type) => {
  // questionNr++;
  if (type === "Latte") {
    showMessage(`Thank you ${name},One Latte is coming up! `, "bot");
    inputWrapper.innerHTML = ``
    
    console.log("lattebutton2");
  } else if (type === "Frappe") {
    showMessage(`Thank you ${name},one Frappe is coming up!`, "bot");
    inputWrapper.innerHTML = ``

    console.log("frappebutton2");
  } else if (type === "Espresso") {
    showMessage(`Thank you ${name}, one Frappe is coming up! `, "bot");
    inputWrapper.innerHTML = ``
  }
};

// const endQuestion = () => {
//   showMessage(`Thank you ${name} and good bye`)
// }
 

const handelNameQuestion = () => {
  const name = input.value;
  showMessage(name, "user");
  input.value = "";
  return name;
};

form.addEventListener("submit", nextQuestion);

setTimeout(greeting, 1000);
