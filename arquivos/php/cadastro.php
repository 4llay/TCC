<html>

<head>
    <title>TCC</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/arquivos/css/style.css">
    <link rel="stylesheet" href="/arquivos/css/header.css">
    <link rel="stylesheet" href="/arquivos/css/login.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet">
    <script src="/TCC/arquivos/js/menu.js" defer></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <div class="tudo">

    <header class="header container">
        <h1 id="titulo">Cones trufadassos</h1>
    </header>

        <form method="POST" class="formReg">
            <h1>Registrar-se</h1>
            <p>Digite os seus dados de acesso no campo abaixo.</p>
            <label for="email">Nome</label>
            <input type="text" name="name" placeholder="Digite seu nome" class="box" required>
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="Digite seu email" class="box" required>
            <label for="email">Senha</label>
            <input type="password" name="password" placeholder="Digite sua senha" class="box" required>
            <label for="email">Confirmar senha</label>
            <input type="password" name="cpassword" placeholder="confirme sua senha" class="box" required>
            <input type="file" name="image" class="box" accept="image/jpg, image/jpeg, image/png">
            <input type="submit" name="submit" value="Registre-se agora" class="btn">
            <p>Ja possui uma conta? <a href="login.php">Faça seu login aqui.</a></p>
        </form>

        <footer class="footer" data-visible="false">
            <p id="nomes">Autores:  JP, GAGA, CACA, LELEH.</p>
            <p id="Copyright">Copyright © 2023</p>
        </footer>

    </div>
</body>

</html>