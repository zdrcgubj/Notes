let actionForLogin=function () {
    if (!localStorage.getItem("username")) {
        layer.alert('请先登录？', {
                icon: 3,
                shift: 6,
                btn:['确定','退出'],
                cancel: function () {
                    window.location.href = "login.html";
                },
                btn2:function () {
                    window.location.href = "login.html";
                }
            },
            function () {
                window.location.href = "login.html";
            });
    }
}
