<?php
session_start();
if (!isset($_SESSION['islogin'])) {
    header('location:login.html');
}
?>

<html>

<head>
    <title><?php echo $_SESSION['username']; ?></title>
    <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' charset='utf-8' />
    <link rel='stylesheet' href='https://bootswatch.com/5/cerulean/bootstrap.min.css'>
    <script src='https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js'></script>
    <style>
        .input {
            height: 36;
            width: 240;
        }

        .button {
            height: 38;
            width: 300;
        }

        .inline {
            display: inline;
        }

        .paragraph {
            margin: auto;
            width: 320;
            text-align: left;
        }
    </style>
    <script>
        var username;
        var latng;
        var addres;

        Location();

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

        function Location() {
            latng = "<?php echo isset($_GET['latng']) ? $_GET['latng'] : ''; ?>";
            // https: //apis.map.qq.com/ws/geocoder/v1/?location=
            if (latng) {
                addres = {};
                // $.getJSON('https://apis.map.qq.com/ws/geocoder/v1/', {
                //     location: latng,
                //     key: '4TDBZ-R6EKR-NTYWJ-WTJOD-OZC2V-KNF5R'
                // }, (res) => {
                //     getLocation(res);
                //     confirm(`将更改地址为：\n
                //         ${addres.nation}${addres.province}${addres.city}${addres.district}${addres.locStreet}${addres.locStreetno}\n
                //         `);
                // });
                $.ajax({
                    type: 'GET',
                    url: 'https://apis.map.qq.com/ws/geocoder/v1/?',
                    data: {
                        location: latng,
                        output: 'jsonp',
                        key: '4TDBZ-R6EKR-NTYWJ-WTJOD-OZC2V-KNF5R'
                    },
                    dataType: 'jsonp',
                    jsonp: 'callback',
                    jsonpCallback: 'QQmap',
                    error: (r) => {
                        alert("定位失败！");
                    },
                    success: (res) => {
                        getLocation(res);
                        confirm(`！此功能还在开发中，现在是无效的！ \n将更改地址为：\n“${addres.nation}${addres.province}${addres.city}${addres.district}${addres.locStreet}${addres.locStreetno}”\n是否确认更改？`);
                    }
                });
            }
        }

        function getLocation(res) { //from tjxsfw.js:20113
            addres.latitude = res.result.location.lat;
            addres.longitude = res.result.location.lng;
            addres.nation = res.result.address_component.nation;
            addres.province = res.result.address_component.province;
            addres.city = res.result.address_component.city;
            addres.district = res.result.address_component.district;
            addres.position = res.result.address;
            "China" !== addres.nation && "china" !== addres.nation || (addres.nation = "中国");
            if ("中国" === addres.nation) {
                res.result.address_reference.town.hasOwnProperty("title") ? addres.locStreet = res.result.address_reference.town.title : addres.locStreet = res.result.address_component.street;
                addres.locStreetno = res.result.address_component.street_number;
            }
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
                $('#UpdateTips').html('已成功更新邮箱地址！');
                setTimeout(() => {
                    $('#UpdateTips').html('&nbsp;');
                }, 3000);
            });
        })

        $('#Level').on('submit', (e) => {
            e.preventDefault();
            submit('Level', $('#Level').serializeArray()[0].value, '', (msg) => {
                $('#UpdateTips').html('已成功更新通知等级！');
                setTimeout(() => {
                    $('#UpdateTips').html('&nbsp;');
                }, 3000);
            });
        })

        onload = () => {
            username = "<?php echo $_SESSION['username']; ?>";
            submit('GET', '', 'json', (msg) => {
                console.log(msg);
                $('#h1').html(msg['studentStudentno'])
                if (msg['Chisai'] == 1) {
                    $('#Chisai').attr("checked", true);
                }
                $('#Expire').html('有效期至：' + msg['Expire']);
                $('#Runtimes').html('本程序已为您打卡'+msg['Runtimes']+'天');
            });
        }
    </script>
</head>

<body>
    <div style='text-align: center;'>
        <br>
        <h1 id='h1'><?php echo $_SESSION['username'] ?></h1>
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
            <p id='UpdateTips'>&nbsp;</p>
            <input type='Email' class='input form-control inline' name='param' placeholder='更新接收邮箱地址：' multiple required />
            <input type='submit' class='btn btn-primary' value='保存'>
            <!-- <p id='EmailTip'>&nbsp;</p> -->
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
            <!-- <p id='LevelTip'>&nbsp;</p> -->
        </form>

        <a href="https://apis.map.qq.com/tools/locpicker?search=1&type=0&backurl=http://127.0.0.1:8080&key=4TDBZ-R6EKR-NTYWJ-WTJOD-OZC2V-KNF5R&referer=myapp">
            <button id='Location' class='btn btn-primary button' onclick=''>更新定位地址</button>
        </a>
        <hr>

        <b>
            <h5 id='Expire'></h5>
        </b>
        <b>
            <h5 id='Runtimes'></h5>
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

        <div class="paragraph">
            <p>
                <?php
                if ($_SESSION['username'] == 'Roll') {
                    echo str_replace("\r\n", "<br>", system("tail /root/Chisai_TJ.log"));
                }
                ?>
            </p>
        </div>
    </div>
</body>

</html>