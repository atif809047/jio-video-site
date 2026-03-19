<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kaam Chal Raha Hai</title>
    <style>
        body {
            background-color: #121212;
            color: white;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            text-align: center;
        }
        .container {
            border: 2px solid #333;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        h1 { color: #00d2ff; }
        p { font-size: 1.2rem; color: #888; }
        .loader {
            border: 4px solid #333;
            border-top: 4px solid #00d2ff;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 20px auto;
        }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    </style>
</head>
<body>
    <div class="container">
        <h1>Website Under Maintenance</h1>
        <div class="loader"></div>
        <p>Atifkhan ki nayi site jald hi live hogi!</p>
        <p style="font-size: 0.8rem;">Abhi kaam chal raha hai, thoda intezar karein.</p>
    </div>
</body>
</html>
