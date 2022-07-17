define(["jquery", "easy-admin"], function ($, ea) {
   var a = 1
    var Controller = {
        info: function () {
            ea.listen(function (data, filter) {   
                
                if (filter == 'getSecret') {
                    $.get("getSecret", function (data,status){
                        $("#secret").val(data.secret)
                    })
                    return true;
                }

                if (filter == 'google_key') {
                    alert('设置google密钥后, 登陆时需要输入 google 动态验证码');
                    if (confirm('请提前安装好google验证器app，并配置好登陆密钥，否则将无法登陆') == 0) {
                        return true
                    }
                    $.get("getGoogleSecret", function (data,status){
                        $("#google_key").val(data.secret)
                    })
                    return true;
                }
                return data;
            });
        },
        password: function () {
            ea.listen();
        },      
    };
    return Controller;
});