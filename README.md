#LOGIN FORM

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multi-Step Process</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }

    .container {
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      width: 300px;
      text-align: center;
      display: none;
    }

    .signin-container {
      background: #9b4dca; /* Purple */
    }

    .create-account-container {
      background: #87cefa; /* Sky Blue */
    }

    .login-container {
      background: #9e9e4f; /* Yellow-Green */
    }

    .folder-container {
      background: #ffcc80; /* Light Orange */
    }

    .logout-container {
      background: #b0b0b0; /* Ash Gray */
    }

    h1 {
      margin-bottom: 20px;
      font-size: 24px;
    }

    input, button {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: none;
      border-radius: 8px;
      outline: none;
    }

    button {
      background: #5e35b1;
      color: white;
      cursor: pointer;
      transition: background 0.3s;
    }

    button:hover {
      background: #4527a0;
    }

    .hidden {
      display: none;
    }
  </style>
  <script>
    // Helper function to show the correct container
    function showContainer(containerId) {
      const containers = document.querySelectorAll('.container');
      containers.forEach(container => container.classList.add('hidden'));
      document.getElementById(containerId).classList.remove('hidden');
    }

    // Step 1: Show Create Account after Sign In
    function handleSignIn(event) {
      event.preventDefault(); // Prevent form submission
      console.log("Sign In Submitted");
      showContainer('create-account-container');
    }

    // Step 2: Show Login after Account Creation
    function handleCreateAccount(event) {
      event.preventDefault();
      console.log("Create Account Submitted");
      showContainer('login-container');
    }

    // Step 3: Show Folder Management after Login
    function handleLogin(event) {
      event.preventDefault();
      console.log("Login Submitted");
      showContainer('folder-container');
    }

    // Step 4: Show Logout after Folder Management
    function handleFileUpload(event) {
      event.preventDefault();
      console.log("File Upload Clicked");
      showContainer('logout-container');
    }

    // Step 5: Log out and show Sign In again
    function handleLogout(event) {
      event.preventDefault();
      console.log("Logged out");
      showContainer('signin-container');
    }

    // Set the initial container (Sign In)
    document.addEventListener('DOMContentLoaded', () => {
      console.log("Page Loaded");
      showContainer('signin-container');
    });
  </script>
</head>
<body>

  <!-- Sign-In Page -->
  <div id="signin-container" class="container signin-container">
    <h1>Sign In</h1>
    <form onsubmit="handleSignIn(event)">
      <input type="email" placeholder="Email" required>
      <input type="password" placeholder="Password" required>
      <button type="submit">Sign In</button>
    </form>
  </div>

  <!-- Create Account Page -->
  <div id="create-account-container" class="container create-account-container">
    <h1>Create Account</h1>
    <form onsubmit="handleCreateAccount(event)">
      <input type="text" placeholder="Username" required>
      <input type="password" placeholder="Password" required>
      <input type="password" placeholder="Confirm Password" required>
      <button type="submit">Create Account</button>
    </form>
  </div>

  <!-- Login Page -->
  <div id="login-container" class="container login-container">
    <h1>Log In</h1>
    <form onsubmit="handleLogin(event)">
      <input type="text" placeholder="Username" required>
      <input type="password" placeholder="Password" required>
      <button type="submit">Log In</button>
    </form>
  </div>

  <!-- Folder Management Page -->
  <div id="folder-container" class="container folder-container">
    <h1>Manage Files</h1>
    <p>Create, upload, and delete files.</p>
    <button onclick="handleFileUpload(event)">Upload File</button>
    <button>Delete File</button>
    <button onclick="handleLogout(event)">Log Out</button>
  </div>

  <!-- Logout Page -->
  <div id="logout-container" class="container logout-container">
    <h1>Logged Out</h1>
    <p>You have been logged out.</p>
    <button onclick="handleLogout(event)">Log In Again</button>
  </div>

</body>
</html>
