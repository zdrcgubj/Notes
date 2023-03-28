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

> - CSS :全称：Cascading Style Sheets  层叠样式表,定义如何显示HTML元素
> - 多个样式可以层层覆盖叠加，如果不同的css样式对同一html标签进行修饰，样式有冲突的
>   应用优先级高的，不冲突的共同作用 

css的作用:

> - 修饰美化html网页。
> - 外部样式表可以提高代码复用性从而提高工作效率。
> - html内容与样式表现分离，便于后期维护。

css的书写规范:

> CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明
>
> - 选择器通常是您需要改变样式的 HTML 元素。
> - 每条声明由一个属性和一个值组成。

## 1.2发展史

CSS1.0

CSS2.0   DIV(块)+CSS，HTML与CSS结构分离的思想，网页变得简单，SEO

CSS2.1    浮动，定位

CSS3.0   圆角，阴影，动画...    浏览器兼容

## 1.3快速入门

> 选择器{属性:值;属性···}

![css_selector](cssNotes.assets/css_selector-16725785285772.gif)

css的优势：

1. 内容和表现分离
2. 网页结构表现同一，可以实现复用
3. 样式十分丰富
4. 建议使用独立的html和css文件
5. 利用SEO，容易被搜索引擎收录

> 注意事项：
>
> - 请使用花括号来包围声明
> - 如果值为若干单词，则要给值加引号
> - 多个声明之间使用分号;分开
> - css对大小不敏感，如果涉及到与html文档一起使用时，class与id名称对大小写敏感

## 1.4CSS的导入方式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
<!--2.内部样式-->
    <style>
        h1{
            color:green;
        }
    </style>
    
<!--4.@import方式-->    
    <style>
    @import url("css/my.css");
    </style>
<!--3.外部样式    -->
    <link rel="stylesheet" href="css/my.css">
</head>
<body>
<!--优先级：覆盖（先运行的被后运行的覆盖）-->

<!--1.行内样式：在标签元素中编写一个style属性，编写样式即可-->
<h1 style="color:blue">我是标题！！</h1>
</body>
</html>
```

>link和@import方式的区别：
>
>- link所有浏览器都支持，@import某些版本低的IE不支持
>- @import是等待html加载完成才加载
>- @import不支持js动态修改

# 2、选择器

> 作用：选择页面上的某一个或某一类元素

## 2.1 基本选择器

### 1.标签选择器

选择一类标签

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

### 2.类选择器（class）

选择所有class属性的标签，跨标签

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

### 3.Id选择器

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

### 1.后代选择器

> 后代选择器指的是被选择元素的所有后代
>
> 语法：选择器1   选择器2{属性名：属性值;....}

``` css
/*后代选择器*/
body p{
    background: #cf1313;
}
```

### 2.子代选择器

> 子代选择器指的是被选择元素的所有子代（不包含孙子）
>
> 语法：选择器1>选择器2{属性名：属性值;....}

```css
/*子选择器*/
body >p{
    background: aqua;
}
```

### 3.弟弟选择器

> 相邻兄弟选择器指的是被选择元素的相邻兄弟（必须是相邻）
>
> 语法：选择器1+选择器2{属性名：属性值;....}

```css
/*弟弟选择器：*/
.active +p{
    background: #cf1313;
}
```

### 4.兄弟选择器

> 相邻兄弟选择器指的是被选择元素的相邻兄弟（不是必须相邻）
>
> 语法：选择器1~选择器2{属性名：属性值;....}

```css
/*兄弟选择器*/
.active~p{
    background: #434e1a;
}
```

## 2.3.组合选择器

> 组合选择器直接是多个选择器同时设置样式
>
> 语法：选择器1,选择器2,....{属性名：属性值;....}

```css
h1,h2,h3{
    background: #434e1a;
}
```

## 2.4.属性选择器

> 通过标签属性，选择对应的元素
>
> 语法：标签[属性名=属性值]{属性名：属性值;....}

```css
input[type=checkbox]{
    background: #434e1a;
}
```

```html
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

## 2.5结构伪类选择器

> 语法： 选择器 :伪类名称{属性名：属性值;....}

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

# **3.css部分标签属性**

```css
float: left; /*文字/图像向左浮动*/
border-radius: 10px; /*圆角*/
text-align: center; /*设置居中*/
text-decoration: none; /*去下划线*/
margin-right: 50px; /*元素的右边距*/
line-height: 50px;/*设置以百分比计的行高*/
font-weight: bold;/*设置字体粗体*/
```

## 3.1 文字属性

|   属性名    |           取值           |     描述     |
| :---------: | :----------------------: | :----------: |
|  font-size  |           数值           | 设置字体大小 |
| font-family |    默体、宋体、楷体等    | 设置字体样式 |
| font-style  | normal正常; italic斜体;  | 设置斜体样式 |
| font-weight | 100~900数值;bold;bolder; |   粗体样式   |

##  3.2 文本属性

|     属性名      |                          取值                           |         描述         |
| :-------------: | :-----------------------------------------------------: | :------------------: |
|      color      |              十六进制;表示颜色的英文单词;               |     设置文本颜色     |
|   text-indent   |       5px缩进5像素;20%缩进父容器宽度的百分之二十;       | 缩进元素中文本的首行 |
| text-decoration |             none;underline;overline;blink;              |     文本的装饰线     |
|   text-align    |                    left;right;center                    |   文本水平对齐方式   |
|  word-spacing   |                     normal;固定值;                      |    单词之间的间隔    |
|   line-height   |                     normal;固定值;                      |    设置文本的行高    |
|   text-shadow   | 四个取值依次是： 水平偏移；垂直偏移；模糊值；阴影颜色； |  设置阴影及模糊效果  |

## 3.3 背景属性

|       属性名        |                取值                 |          描述          |
| :-----------------: | :---------------------------------: | :--------------------: |
|  background-color   |   16进制;用于表示颜色的英语单词;    |       设置背景色       |
|  background-image   |           url('图片路径')           |      设置背景图片      |
|  background-repeat  | repeat-y;repeat-x;repeat;no-repeat; |  设置背景图的平铺方向  |
| background-position |   top;bottom;left;right ; center;   | 改变图像在背景中的位置 |

## 3.4 列表属性

|       属性名        |      取值       |               描述               |
| :-----------------: | :-------------: | :------------------------------: |
|   list-style-type   |     disc等      |        改变列表的标识类型        |
|  list-style-image   | url("图片地址") |          用图像表示标识          |
| list-style-position | inside;outside  | 标识出现在列表项内容之外还是内部 |

## 3.5尺寸属性

> - width:设置元素的宽度
> - height:设置元素的高度

## 3.6 显示属性

> 显示属性display ，以下是常用取值：
>
> - none:不显示
> - block:块级显示
> - inline:行级显示
> - inline-block:行级块显示

## 3.7 轮廓属性

> 绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。常用属性：

|    属性名     |                  取值                   |      描述      |
| :-----------: | :-------------------------------------: | :------------: |
| outline-style | solid(实线)/dotted(虚线)/dashed(虚线)等 | 设置轮廓的样式 |
| outline-color |        16进制;用于表示颜色的英文        | 设置轮廓的颜色 |
| outline-width |                  数值                   | 设置轮廓的宽度 |

## 3.8 浮动属性float

> - 浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。由于浮动框不在文档的普通流中，所以文档的普通流中的块框表现得就像浮动框不存在一样。
>
> - 请看下图，当把框 1 向右浮动时，它脱离文档流并且向右移动，直到它的右边缘碰到包含框的右边缘：

|                          浮动示例图                          |
| :----------------------------------------------------------: |
| ![positioning](cssNotes.assets/positioning-16725817832223.gif) |

> - 再请看下图，当框 1 向左浮动时，它脱离文档流并且向左移动，直到它的左边缘碰到包含框的左边缘。因为它不再处于文档流中，所以它不占据空间，实际上覆盖住了框 2，使框 2 从视图中消失。
>
> - 如果把所有三个框都向左移动，那么框 1 向左浮动直到碰到包含框，另外两个框向左浮动直到碰到前一个浮动框。

|                          浮动示例图                          |
| :----------------------------------------------------------: |
| ![positioning2](cssNotes.assets/positioning2-16725818301896.gif) |

> 如下图所示，如果包含框太窄，无法容纳水平排列的三个浮动元素，那么其它浮动块向下移动，直到有足够的空间。如果浮动元素的高度不同，那么当它们向下移动时可能被其它浮动元素“卡住”：

|                          浮动示例图                          |
| :----------------------------------------------------------: |
| ![positioning3](cssNotes.assets/positioning3-167258189303710.gif) |

> clear 属性：规定元素的哪一侧不允许其他浮动元素。它的取值如下：

|  取值   |                 描述                  |
| :-----: | :-----------------------------------: |
|  left   |        在左侧不允许浮动元素。         |
|  right  |        在右侧不允许浮动元素。         |
|  both   |     在左右两侧均不允许浮动元素。      |
|  none   |   默认值。允许浮动元素出现在两侧。    |
| inherit | 规定应该从父元素继承 clear 属性的值。 |

## 3.9 定位属性

>相对定位(relative)：元素框偏移某个距离，元素仍保持其未定位前的形状，它原本所占的空间仍保留。

>  绝对定位(absolute)：元素框从文档流完全删除，并相对于其包含块进行定位。包含块可能是文档中的另一个元素或者是初始包含块。元素原先在正常文档流中所占的空间会关闭，就好像元素原来不存在一样。元素定位后生成一个块级框。

>  固定定位(fixed)：元素框的表现类似于将 position 设置为 absolute，不过其包含块是视窗本身。

# 4、美化网页元素

## 4.1美化网页 span

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

## 4.2字体样式

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

## 4.3文本样式

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

## 4.4超链接伪类

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

## 4.6列表

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

## 4.7背景

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

## 4.8渐变

```css
background-color: #85FFBD;
background-image: linear-gradient(90deg, #85FFBD 0%, #FFFB7D 100%);
```

# 5、盒子模型

<img src="cssNotes.assets/box.png" alt="box" style="zoom:67%;" />

## 5.1边框相关属性

|    属性名     |             取值             |      描述      |
| :-----------: | :--------------------------: | :------------: |
| border-style  | solid;double;dashed;dotted等 | 设置边框的样式 |
| border-color  |  16进制;用于表示颜色的英文;  | 设置边框的颜色 |
| border-width  |             数值             |  设置边框的粗  |
| border-radius |             数值             |  设置圆角边框  |

## 5.2、外边距相关属性

> margin：外间距,边框和边框外层的元素的距离

|    属性名     |         取值          |      描述      |
| :-----------: | :-------------------: | :------------: |
|    margin     | top;right;bottom;left | 四个方向的距离 |
|  margin-top   |         数值          |     上间距     |
| margin-bottom |         数值          |     下间距     |
|  margin-left  |         数值          |     左间距     |
| margin-right  |         数值          |     右间距     |

## 5.3、内边距相关属性

> padding：内间距,元素内容和边框之间的距离((top right bottom left)) 

|     属性值     |   描述   |
| :------------: | :------: |
|  padding-left  | 左内边距 |
| padding-right  | 右内边距 |
|  padding-top   | 上内边距 |
| padding-bottom | 下内边距 |

# 6、弹性布局

> 容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）

> 常用属性
>
> - flex-direction
>   - 决定主轴的方向
>     - row（默认值）：主轴为水平方向，起点在左端。
>     - row-reverse：主轴为水平方向，起点在右端。
>     - column：主轴为垂直方向，起点在上沿。
>     - column-reverse：主轴为垂直方向，起点在下沿。
> - flex-wrap
>   - 定义如果一条轴线排不下，如何换行。
>     -  nowrap :不换行
>     -  wrap : 换行，第一行在上方。
>     -  wrap-reverse:换行，第一行在下方。 
> - flex-flow
>   - flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
> - justify-content
>   - 定义主轴上的对齐方式
>     - flex-start（默认值）：左对齐
>     - flex-end：右对齐
>     - center： 居中
>     - space-between：两端对齐，项目之间的间隔都相等。
>     - space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
> - align-items
>   - 定义交叉轴上如何对齐
>     - flex-start：交叉轴的起点对齐。
>     - flex-end：交叉轴的终点对齐。
>     - center：交叉轴的中点对齐。
>     - baseline: 项目的第一行文字的基线对齐。
>     - stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
> - align-content
>   - 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。





































