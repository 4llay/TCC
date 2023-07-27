<?php
    include 'config.php';
    session_start();

    if(isset($_POST["submit"])){

        $email = mysqli_real_escape_string($conn, $_POST['email']);
    }
?>

<html>

<head>
    <title>TCC</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/arquivos/css/style.css">
    <link rel="stylesheet" href="/arquivos/css/header.css">
    <link rel="stylesheet" href="/arquivos/css/login.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="/TCC/arquivos/css/login.css">
    <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet">
    <script src="/TCC/arquivos/js/menu.js" defer></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>


<body>
    <div class="tudo">

    <header class="header container">
        <h1 id="titulo">Cones trufadassos</h1>
    </header>

    <div class="page">
        <form method="POST" class="formLogin">
            <h1>Login</h1>
            <p>Digite os seus dados de acesso no campo abaixo.</p>
            <label for="email">E-mail</label>
            <input type="email" name="email" placeholder="Digite seu e-mail" autofocus="true" />
            <label for="password">Senha</label>
            <input type="password" name="senha" placeholder="Digite sua senha" />
            <a href="/">Esqueci minha senha</a>
            <input type="submit" value="Acessar" name="submit" class="btn" />
        </form>
    </div>

        <footer class="footer" data-visible="false">
            <p id="nomes">Autores:  JP, GAGA, CACA, LELEH.</p>
            <p id="Copyright">Copyright © 2023</p>
        </footer>

    </div>
</body>

</html>