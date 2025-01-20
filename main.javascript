const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const loginForm = document.getElementById("login-form");
const welcomeMessage = document.getElementById("welcome-message");
const userNameDisplay = document.getElementById("user-name");

loginBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value;
  if (username) {
    userNameDisplay.textContent = username;
    loginForm.style.display = "none";
    welcomeMessage.style.display = "block";
  } else {
    alert("Please enter a valid username.");
  }
});

logoutBtn.addEventListener("click", () => {
  loginForm.style.display = "block";
  welcomeMessage.style.display = "none";
  document.getElementById("username").value = "";
});

