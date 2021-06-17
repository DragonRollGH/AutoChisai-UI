<?php
if (isset($_POST['username'])) {
    $json = file_get_contents('conf.json');
    $conf = json_decode($json, true);
    if (isset($conf[$_POST['username']])) {
        $user = $conf[$_POST['username']];

        if ($_POST['action'] == 'GET') {
            echo json_encode($user);
        } elseif ($_POST['action'] == 'Start') {
            $user['Chisai'] = 1;
            echo 1;
        } elseif ($_POST['action'] == 'Stop') {
            $user['Chisai'] = 0;
            echo 1;
        } elseif ($_POST['action'] == 'Once') {
            exec("python Chisai_TJ.py " . $_POST['username']);
            echo 1;
        } elseif ($_POST['action'] == 'Email') {
            $user['Email'] = explode(",", $_POST['param']);
            echo 1;
        } elseif ($_POST['action'] == 'Level') {
            $user['Level'] = $_POST['param'] == '0' ? 1 : (int)$_POST['param'];
            echo 1;
        } else {
            echo 0;
        }

        $conf[$_POST['username']] = $user;
        $json = json_encode($conf);
        file_put_contents('conf.json', utf8_encode($json));
    }
}
