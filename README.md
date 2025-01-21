# LoginForm

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Domain Name Login</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
            max-width: 400px;
            text-align: center;
        }

        h1 {
            color: #333;
        }

        input {
            width: 90%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            background-color: #918e91;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }

        button:hover {
            background-color: #7a757a;
        }

        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Login</h1>
        <div id="login-form">
            <input type="text" id="username" placeholder="Enter Username" required>
            <input type="password" id="password" placeholder="Enter Password" required>
            <button id="login-btn">Login</button>
        </div>

        <div id="welcome-message" class="hidden">
            <h2>Welcome, <span id="user-display"></span>!</h2>
            <button id="logout-btn">Logout</button>
        </div>
    </div>

    <script>
        const loginForm = document.getElementById('login-form');
        const welcomeMessage = document.getElementById('welcome-message');
        const loginBtn = document.getElementById('login-btn');
        const logoutBtn = document.getElementById('logout-btn');
        const userDisplay = document.getElementById('user-display');

        loginBtn.addEventListener('click', () => {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username && password) {
                userDisplay.textContent = username;
                loginForm.classList.add('hidden');
                welcomeMessage.classList.remove('hidden');
            } else {
                alert('Please enter both username and password!');
            }
        });

        logoutBtn.addEventListener('click', () => {
            loginForm.classList.remove('hidden');
            welcomeMessage.classList.add('hidden');
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        });
    </script>
</body>
</html>
