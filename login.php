<?php
session_start();
if (isset($_POST['login'])) {
    // Accounts
    $accounts = array(
        //"username" => "password",
    );
    // Accounts
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);
    foreach ($accounts as $un => $pw) {
        if ($username == $un && $password == $pw) {
            $_SESSION['username'] = $username;
            $_SESSION['islogin'] = 1;
            header('location:index.php');
            exit(0);
        }
    }
    header('refresh:2; url=login.html');
    echo "<h1>用户名或密码错误！2秒后返回登录页面</h1>";
}
