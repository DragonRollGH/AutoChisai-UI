<?php
session_start();
if (!isset($_SESSION['islogin'])) {
    header('location:login.html');
}
?>

<html>

<head>
    <title><?php echo $_SESSION['username'] ?></title>
    <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' charset='utf-8' />
    <link rel='stylesheet' href='https://bootswatch.com/5/cerulean/bootstrap.min.css'>
    <script src='https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js'></script>
    <style>
        .input {
            height: 36;
            width: 200;
        }

        .button {
            height: 38;
            width: 260;
        }

        .inline {
            display: inline;
        }

        .paragraph {
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            width: 260;
            text-align: left;
        }
    </style>
</head>

<body>
    <div style='text-align: center;'>
        <br>
        <h1><?php echo $_SESSION['username'] ?></h1>
        <hr>

        <div class='form-check form-switch'>
            <input type='checkbox' class='form-check-input' style='float: none;' id='Chisai' onchange='Chisai(this)'>
            <b><label class='form-check-lable' style='font-size:large; color:#2fa4e7;' for='Chisai'>启用自动打卡</label></b>
        </div>
        <p id='ChisaiTip'>&nbsp;</p>

        <button id='Once' class='btn btn-primary button' onclick='Once()'>立即打卡一次</button>
        <p id='OnceTip'>&nbsp;</p>
        <hr>

        <form id='Email'>
            <input type='Email' class='input form-control inline' name='param' placeholder='更新接收邮箱地址：' multiple required />
            <input type='submit' class='btn btn-primary' value='保存'>
            <p id='EmailTip'>&nbsp;</p>
        </form>

        <form id='Level'>
            <select name='param' class='input form-select inline'>
                <option value='0'>更新邮件通知等级：</option>
                <option value='1'>永远通知</option>
                <option value='2'>仅成功时通知</option>
                <option value='3'>仅失败时通知</option>
                <option value='4'>永不通知</option>
            </select>
            <input type='submit' class='btn btn-primary' value='保存'>
            <p id='LevelTip'>&nbsp;</p>
        </form>

        <b>
            <h5 id='Expire'></h5>
        </b>

        <div class="paragraph">
            <p>
                1. 自动打卡时间在8~9点之间随机，请提前启用自动打卡。
                <br>
                2. 当日补救可以使用“立即打卡一次”功能。
                <br>
                3. 多个邮箱用半角逗号“,”分隔。
            </p>
        </div>
    </div>
</body>

</html>

<script>
    var username;

    function submit(action, param, dataType, success) {
        $.ajax({
            type: 'POST',
            url: '/backend.php',
            data: {
                username: username,
                action: action,
                param: param
            },
            dataType: dataType,
            success: success
        });
    }

    function Chisai(checkbox) {
        let action;
        if (checkbox.checked) {
            action = 'Start';
        } else {
            action = 'Stop';
        }
        submit(action, '', '', (msg) => {
            if (action == 'Start') {
                $('#ChisaiTip').html('启用成功！');
            } else if (action == 'Stop') {
                $('#ChisaiTip').html('禁用成功！');
            }
            setTimeout(() => {
                $('#ChisaiTip').html('&nbsp;');
            }, 3000);
        });
    }

    function Once() {
        submit('Once', '', '', (msg) => {
            console.log(msg)
            $('#OnceTip').html('已开始运行，打卡结果请留意邮件！');
            setTimeout(() => {
                $('#OnceTip').html('&nbsp;');
            }, 3000);
        });
    }

    $('#Email').on('submit', (e) => {
        e.preventDefault();
        submit('Email', $('#Email').serializeArray()[0].value, '', (msg) => {
            $('#EmailTip').html('已成功更新！');
            setTimeout(() => {
                $('#EmailTip').html('&nbsp;');
            }, 3000);
        });
    })

    $('#Level').on('submit', (e) => {
        e.preventDefault();
        submit('Level', $('#Level').serializeArray()[0].value, '', (msg) => {
            $('#LevelTip').html('已成功更新！');
            setTimeout(() => {
                $('#LevelTip').html('&nbsp;');
            }, 3000);
        });
    })

    onload = () => {
        username = "<?php echo $_SESSION['username']; ?>";
        submit('GET', '', 'json', (msg) => {
            console.log(msg);
            if (msg['Chisai'] == 1) {
                $('#Chisai').attr("checked", true);
            }
            $('#Expire').html('有效期：' + msg['Expire']);
        });
    }
</script>