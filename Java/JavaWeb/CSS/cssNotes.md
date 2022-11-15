# 1、什么是CSS                   

1. CSS是什么
2. CSS怎么用
3. **CSS选择器（重难点）**
4. 美化网页（文字，阴影，超链接，渐变·····）
5. 盒子模型
6. 浮动
7. 定位
8. 网页动画（特效）

## 1.1什么是CSS

Cascading Style Sheet 层叠样式表

CSS：表现：美化网页



## 1.2发展史

CSS1.0

CSS2.0   DIV(块)+CSS，HTML与CSS结构分离的思想，网页变得简单，SEO

CSS2.1    浮动，定位

CSS3.0   圆角，阴影，动画...    浏览器兼容

## 1.3快速入门

> 选择器{属性:值;属性···}

css的优势：

1. 内容和表现分离
2. 网页结构表现同一，可以实现复用
3. 样式十分丰富
4. 建议使用独立的html和css文件
5. 利用SEO，容易被搜索引擎收录

## 1.4CSS的3种导入方式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
<!-- 内部样式-->
    <style>
        h1{
            color:green;
        }
    </style>
    
<!--外部样式    -->
    <link rel="stylesheet" href="./style1.css">
</head>
<body>
<!--优先级：覆盖（先运行的被后运行的覆盖）-->

<!--行内样式：在标签元素中编写一个style属性，编写样式即可-->
<h1 style="color:blue">我是标题！！</h1>
</body>
</html>
```

# 2、选择器

> 作用：选择页面上的某一个或某一类元素

## 2.1 基本选择器

1.标签选择器：选择一类标签

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
      /* 标签选择器，会选择到页面上所以的这个标签的元素*/
        h1{
            color: #434e1a;
            background: #cf1313;
            border-radius: 10px;
        }
        p{
           font-size:50px;
        }
    </style>
</head>
<body>
<h1>我是标签</h1>
<h1>我是标签!</h1>
<p>Parallel</p>
</body>
</html>
```

2.类选择器（class）：选择所有class属性的标签，跨标签 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
/*类选择器的格式，.class的名称{}
    好处，可以多个标签归类，是同一个class，可以复用*/
        .qing{
           color: #589e2d;
}
        .ku{
color: #990c44
;
}
    </style>
</head>
<body>

<h1 class="qing">标题1</h1>
<h1 class="ku">标题2</h1>
<h1>标题3</h1>
<p class="ku">标签</p>

</body>
</html>
```



3.Id选择器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
/*id选择器：id必须保证全局唯一
      格式：#id名称{}
         优先级：id选择器>class选择器>标签选择器
          */
        #stl{
            color:blue;
        }
        .cha{
            color:#589e2d;
        }
        h1{
            color: #bb3131;
        }
    </style>
</head>
<body>
<h1 class="cha" id="stl">标签1</h1>
<h1 class="cha">标签1</h1>
<h1>标签1</h1>
<h1>标签1</h1>

</body>
</html>
```

优先级：id>class>标签

## 2.2层次选择器

1. 后代选择器

``` css
/*后代选择器*/
body p{
    background: #cf1313;
}
```

2. 子代选择器

```css
/*子选择器*/
body >p{
    background: aqua;
}
```

3. 弟弟选择器

```css
/*弟弟选择器：*/
.active +p{
    background: #cf1313;
}
```

4. 兄弟选择器

```css
/*兄弟选择器*/
.active~p{
    background: #434e1a;
}
```

## 2.3结构伪类选择器

伪类：

```css
/*ul的第一个子元素*/
ul li:first-child {
    background: #990c44;
}
/*ul的最后一个子元素*/
ul li:last-child {
    background: #434e1a;
}
/*选中p1:定位到父元素,选择当前的第一个元素
选择当前p元素的父级的第一个,并且是当前元素才生效*/
body p:nth-child(1) {
    background: aqua;
}
/*选中父元素,下的p元素的第二个*/
body p:nth-of-type(2) {
    background: antiquewhite;
}
```



![image-20211015212625641](C:\Users\21593\AppData\Roaming\Typora\typora-user-images\image-20211015212625641.png)

## 2.4属性选择器**

id+class结合

```css
    <style>
        .demo a {
            float: left; /*文字/图像向左浮动*/
            /*display: block;!*此元素将显示为块级元素，此元素前后会带有换行符*!*/
            height: 50px;
            width: 50px;
            background: #09d8de;
            border-radius: 10px; /*圆角*/
            text-align: center; /*设置居中*/
            color: #eeeae0;
            text-decoration: none; /*去下划线*/
            margin-right: 50px; /*元素的右边距*/
            line-height: 50px;/*设置以百分比计的行高*/
            font-weight: bold;/*设置字体粗体*/
        }
        /*属性名，属性名=属性值（正则）
        = 绝对等于
        *= 包含后面的元素
        ^=以该这个开头的元素
        $=以这个结尾的元素
        */

        /*选择存在id属性的元素        a[id]{}*/
      /*  a[id]{
            background: #589e2d;
        }*/

        /*选择id=first的元素*/
       /* a[id="first"]{
            background: #990c44;
        }*/

        /*选择class中有links的元素*/
        /*a[class~="links"]{
            background: red;
        }*/
        /*选中href中以http开头的的元素*/
        /*a[href^=http]{
            background: yellow;
        }*/

        /*选中href中以pdf结尾的元素*/
        a[href$=pdf]{
            background: #bb3131;
        }


    </style>
</head>
<body>
<p class="demo">
    <a href="http://www.baidu.com" class="links item first" id="first">1</a>
    <a href="" class="links item active" target="_blank" title="test">2</a>
    <a href="images/123.html" class="links item">3</a>
    <a href="images/123.png" class="links item">4</a>
    <a href="images/123.jpg" class="links">5</a>
    <a href="abc">6</a>
    <a href="/a.pdf">7</a>
    <a href="/abc.pdf">8</a>
    <a href="abc.doc">9</a>
    <a href="abcd.doc" class="links item">10</a>
</p>
</body>
```

## **2.5css部分标签属性**

```css
float: left; /*文字/图像向左浮动*/
border-radius: 10px; /*圆角*/
text-align: center; /*设置居中*/
text-decoration: none; /*去下划线*/
margin-right: 50px; /*元素的右边距*/
line-height: 50px;/*设置以百分比计的行高*/
font-weight: bold;/*设置字体粗体*/
```



![image-20211015231534039](C:\Users\21593\AppData\Roaming\Typora\typora-user-images\image-20211015231534039.png)

# 3、美化网页元素

## 3.1美化网页 span

> span：重点要突出的字,使用span标签

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        span[class]{
            font-size: 50px;
        }
    </style>
</head>
<body>
欢迎学习<span class="title1">Java</span>
</body>
</html>
```

## 3.2字体样式

> font

```css
    <style>
        /* font-family 字体
         font-size:50px 字体大小
         font-weight 字体粗细
         font=color  字体颜色*/
        body {
            font-family: 楷体,"Arial Black";
        }

        h1 {
            font-size: 50px;
        }

        p[class=p1] {
            font-weight: bold;
        }
        p{
            color: #bb3131;
        }


    </style>
</head>
<body>
<h1>作品介绍</h1>
<p class="p1">冰冷与黑暗并存的宇宙深处，九具庞大的龙尸拉着一口青铜古棺，亘古长存。</p>
<p class="p2">这是太空探测器在枯寂的宇宙中捕捉到的一幅极其震撼的画面。</p>
<p>九龙拉棺，究竟是回到了上古，还是来到了星空的彼岸？</p>
<p>一个浩大的仙侠世界，光怪陆离，神秘无尽。热血似火山沸腾，激情若瀚海汹涌，欲望如深渊无止境……</p>
<p>There's a whole lot of things that I will forgive</p>
<p> But I just can't take a liar</p>
<p> I was by your side till the very end</p>
<p> Till you pushed me in the fire..</p>

</body>
```

## 3.3文本样式

1. 颜色 color（rgb，rgba)
2. 文本对齐方式  text-align:center 水平居中   
3. 首行缩进 text-indent:2em 
4. 行高    line-height: (行高=height实现上下居中)
5. 装饰
6. 图片文字对齐  vertical-align: middle

``` css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!--颜色:
      单词、rgb 0~F、rgba
      text-align:center 居中
      text-indent: 2em 首行缩进
      -->
    <style>
        h1 {color: rgba(0, 255, 255, 0.9);
            text-align: center;}

        .p1 {text-indent: 2em;}

        .p3{
            background: aquamarine;
            height:1000px;/*块高*/
            line-height:50px;}

        p[class=l1]{text-decoration: line-through;}
        p[class=l2]{text-decoration:underline}
        p[class=l3]{text-decoration:overline}
    </style>
</head>
<body>

<p class="l1">Inevitable</p>
<p class="l2">Particular</p>
<p class="l3">Parallels</p>

<h1>作品介绍</h1>
<p class="p1">冰冷与黑暗并存的宇宙深处，九具庞大的龙尸拉着一口青铜古棺，亘古长存。</p>
<p class="p2">这是太空探测器在枯寂的宇宙中捕捉到的一幅极其震撼的画面。</p>
<p>九龙拉棺，究竟是回到了上古，还是来到了星空的彼岸？</p>
<p>一个浩大的仙侠世界，光怪陆离，神秘无尽。热血似火山沸腾，激情若瀚海汹涌，欲望如深渊无止境……</p>
<p class="p3">There's a whole lot of things that I will forgive <br>
    But I just can't take a liar <br>
    I was by your side till the very end <br>
    Till you pushed me in the fire..</p>

</body>
</html>
```

![image-20211016184142097](C:\Users\21593\AppData\Roaming\Typora\typora-user-images\image-20211016184142097.png)

## 3.4超链接伪类

> a:hover

```css
<style>
/*默认的颜色*/
a{
    text-decoration:none;
    color:black;
}
/*鼠标悬浮的颜色*/
a:hover{
    color:blue;
    font-size:20px;
}
/*鼠标按住未释放的颜色*/
a:active{
    color:green;
}
/*阴影：阴影颜色，水平偏移，垂直偏移，模糊半径*/
p[id=price]{
    text-shadow:skyblue 15px 0px 1px;
}
</style>

</head>
<body>
<a href="#">
<img src="./images/a.png" alt="">
</a>
<p>
<a href="#">自在独行</a>
</p>
<p>
<a href="#">作者：贾平凹</a>
</p>
<p id="price">
￥39
</p>
</body>
```

## 3.6列表

```html
<div id="nav">
    <h2 class="title">全部商品分类</h2>
    <ul>
        <li><a href="#">图书</a>&nbsp;&nbsp;&nbsp;<a href="#">影像</a>&nbsp;&nbsp;<a href="#">数字产品</a></li>
        <li><a href="#">家用电器</a>&nbsp;&nbsp;<a href="#">手机</a>&nbsp;&nbsp;<a href="#">数码</a></li>
        <li><a href="#">电脑</a>&nbsp;&nbsp;<a href="#">办公</a>&nbsp;&nbsp;<a href="#">户外</a></li>
        <li><a href="#">家居</a>&nbsp;&nbsp;<a href="#">家装</a>&nbsp;&nbsp;<a href="#">厨具</a></li>
        <li><a href="#">服饰鞋包</a>&nbsp;&nbsp;<a href="#">个人化妆</a></li>
        <li><a href="#">礼品箱包</a>&nbsp;&nbsp;<a href="#">钟表</a>&nbsp;&nbsp;<a href="#">珠宝</a></li>
        <li><a href="#">食品饮料</a>&nbsp;&nbsp;<a href="#">保健食品</a>&nbsp;&nbsp;<a href="#"></a></li>
        <li><a href="#">彩票</a>&nbsp;&nbsp;<a href="#">旅行</a>&nbsp;&nbsp;<a href="#">充值</a>&nbsp;&nbsp;<a
                href="#">充值票务</a></li>


    </ul>
</div>
```

```css
#nav{
    width:236px;
    background: antiquewhite;
}

.title{
    font-size:18px;
    font-weight:bold;
    text-indent: 2em;
    line-height:30px;
}
/*list-style:none  去掉原点
            :circle  空心圆
            :decimal 数字
            :square 正方形*/
ul li{
    line-height:30px;
    list-style:none;
}
ul li a{
    text-decoration: none;
    color:black;

}
a:hover{
    color:#589e2d;
    text-decoration: underline;
}


```

![image-20211016200417028](C:\Users\21593\AppData\Roaming\Typora\typora-user-images\image-20211016200417028.png)

## 3.7背景

背景颜色

背景图片

```css
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        div{
            width:1000px;
            height:700px;
            border:1px solid red;/*边框粗细，样式，颜色*/
            background-image:url("./images/a.jpg") ;
            /*默认全部平铺*/
        }
        .div1{
            background-repeat: repeat-x;
        }
        .div2{
            background-repeat: repeat-y;
        }
        .div3{
            background-repeat: no-repeat;
        }
    </style>
</head>
<body>
<div class="div1"></div>
<div class="div2"></div>
<div class="div3"></div>
</body>
```

## 3.8渐变

```css
background-color: #85FFBD;
background-image: linear-gradient(90deg, #85FFBD 0%, #FFFB7D 100%);
```

# 4、盒子模型

## 4.1什么是盒子模型

![image-20211017173420380](C:\Users\21593\AppData\Roaming\Typora\typora-user-images\image-20211017173420380.png)

margin：外边距

padding：内边距

border：边框

## 4.2、边框

1. 边框的粗细
2. 边框的样式
3. 边框的颜色

![image-20211017183448978](C:\Users\21593\AppData\Roaming\Typora\typora-user-images\image-20211017183448978.png)



## 4.3、外边距















































