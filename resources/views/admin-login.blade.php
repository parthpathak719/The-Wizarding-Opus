<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login</title>
    <style>
        body {
            background: black;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: 'Cinzel', Georgia, serif;
        }
        .login-box {
            background: rgba(20, 15, 5, 0.95);
            border: 2px solid rgba(255, 215, 100, 0.85);
            border-radius: 16px;
            padding: 40px 50px;
            text-align: center;
            box-shadow: 0 0 25px rgba(255, 215, 130, 0.4);
        }
        h1 {
            color: #fff6d5;
            margin-bottom: 24px;
            font-size: 1.8rem;
        }
        input[type="password"] {
            padding: 10px 16px;
            border-radius: 8px;
            border: 1px solid rgba(255, 215, 100, 0.5);
            background: rgba(255,255,255,0.05);
            color: white;
            font-size: 1rem;
            width: 100%;
            margin-bottom: 16px;
        }
        button {
            padding: 10px 30px;
            background: rgba(255, 215, 100, 0.2);
            border: 1px solid rgba(255, 215, 100, 0.7);
            color: #ffe184;
            border-radius: 8px;
            font-family: 'Cinzel', Georgia, serif;
            font-size: 1rem;
            cursor: pointer;
        }
        button:hover { background: rgba(255, 215, 100, 0.3); }
        .error { color: #ff6b6b; margin-top: 12px; display: block; }
    </style>
</head>
<body>
    <div class="login-box">
        <h1>Admin Access</h1>
        <form method="post" action="/admin/login">
            @csrf
            <input type="password" name="password" placeholder="Enter admin password" required autofocus>
            <br>
            <button type="submit">Enter</button>
            @if(session('error'))
                <span class="error">{{ session('error') }}</span>
            @endif
        </form>
    </div>
</body>
</html>