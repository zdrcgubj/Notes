```js
<script src="../js/微博发布案例.js"></script>
<script>
    /*需求1：
    1.注册 input 事件
    2.将文本的内容的长度赋值给对应的数值
    3.表单的 maxlength 属性可以直接限制在 200 个数之间*/
    //获取文本域和计数
    let area = document.querySelector('#area');
    let useCount = document.querySelector('#useCount');
    //获取发布案例
    let send = document.querySelector('#send');
    //ul
    let ul = document.querySelector('#list');

    //事件监听，获取输入字符长度
    area.addEventListener('input', function () {
        useCount.innerHTML = this.value.length;
    })

    /*需求2：
    克隆预定义好的模板将模板的 hidden 属性设置为 false, 并最终展示到页面上
    判断如果内容为空，则提示不能输入为空, 并且直接 return
    防止输入无意义空格, 使用字符串 . 去掉首尾空格 , 并将表单的 value 值设置为空字符串*/
    send.addEventListener('click', function () {
        //trim()方法去掉首尾空格
        if (area.value.trim() == '') {
            area.value = '';
            useCount.innerHTML = 0;
            return alert('内容不能为空')
        }
        sendContent();
    })

    /*需求3：
    获取文本域的内容, 赋值给由模板克隆出来的新标签里面的 content.innerText
    随机获取数据数组里面的内容, 替换 newNode 的图片和名称
    利用时间对象将时间 动态化 new Date(). toLocaleString*/
    function sendContent() {
        //创建li，并向里面追加内容
        let li = document.createElement('li');
        let random = getRadom(0, dataArr.length - 1)
        li.innerHTML = `
    <div class="info">
        <img class="userpic" src=${dataArr[random].imgSrc}/>
        <span class="username">${dataArr[random].uname}</span>
        <p class="send-time">${new Date().toLocaleString()}</p>
    </div>
    <div class="content">${area.value}</div>
    <span class="the_del">X</span>`;

        ul.insertBefore(li, ul.children[0]);
        //清空输入框
        area.value = '';
        useCount.innerHTML = 0;

        /*在事件处理函数里面获取点击按钮注册点击事件(
        易错点 : 必须在事件里面获取 外面获取不到
        删除对应的元素
        通过 this 获取对应的那条需要删除的元素*/
        //获取删除
        let theDel = document.querySelector('.the_del');

        //删除li
        theDel.addEventListener('click', function () {
            ul.removeChild(theDel.parentNode);
        })
    }

    //生成随机数
    function getRadom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
</script>
```