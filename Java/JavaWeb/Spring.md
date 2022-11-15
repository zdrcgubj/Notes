## SpringBoot



控制器

在SpringBoot中，@Controller表示一个控制器组件



```
@RequestMapping
```

- 确定网址和java方法之间的的关系，在一个SpringBoot项目中，一个网址必须匹配唯一一个方法

- 如果该注解出现再类上，则将作为类中所有请求的**有请求映射注解的方法**的网址的前提



```
@ResponseBody
```

将字符串直接响应到浏览器，类似servlet中的writer对象的作用



```
@RestController
```

当一个控制器中，所有的**有请求映射注解的方法**都需要直接响应内容（有@ResponseBody注解）的画，可以在类上增加@ResponseBody注解。@Controller和@ResponseBody可以被@RestController代替。



Spring配置文件

SpringBoot的项目的所有的配置都有默认值，即使没有配置文件，也可以运行

如果需要修改默认配置，可以在resources目录下创建名为application.yml的文件





![image-20220319160937171](C:\Users\21593\AppData\Roaming\Typora\typora-user-images\image-20220319160937171.png)

如果在控制器中读取配置项得到值，可以用**@Value**注解























