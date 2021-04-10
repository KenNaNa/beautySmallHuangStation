我这里选择的版本是3.2.4的windows64位，据说偶数位的(比如3.x，x是偶数)是稳定版本。

下载地址：https://www.mongodb.com/download-center/community

# 安装
直接右键-安装，一路Next。

![](https://img-blog.csdnimg.cn/20190803222920440.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NoZW5ncWlhbmZlbmc=,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20190803222929243.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NoZW5ncWlhbmZlbmc=,size_16,color_FFFFFF,t_70)

选择一下安装路径，这里我安装到 D:\Program Files\MongoDB\Server\3.2\

![](https://img-blog.csdnimg.cn/20190803222959883.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NoZW5ncWlhbmZlbmc=,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20190803223041816.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NoZW5ncWlhbmZlbmc=,size_16,color_FFFFFF,t_70)

finish，安装完成。

 

# 配置环境变量
将mongoDB安装目录bin目录配置到环境变量的Path后。

![](https://img-blog.csdnimg.cn/20190803223322788.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NoZW5ncWlhbmZlbmc=,size_16,color_FFFFFF,t_70)

# 配置data和log目录
在c盘的创建文件夹data，然后在data中创建数据存放目录db和日志存放目录log

![](https://img-blog.csdnimg.cn/20190803223612724.png)

# 启动服务测试
然后打开cmd，输入mongod命令启动服务！可以看到在端口27017上服务启动了！而且默认的dbpath就是C盘的data下的db目录。

--->当然也可以自定义指定dbpath和port来启动:

```js
mongod    --dbpath   数据库路径    --port   端口号
```

![](https://img-blog.csdnimg.cn/20190803223754848.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NoZW5ncWlhbmZlbmc=,size_16,color_FFFFFF,t_70)


同时在data的db下看到了一堆文件。

![](https://img-blog.csdnimg.cn/20190803223838523.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NoZW5ncWlhbmZlbmc=,size_16,color_FFFFFF,t_70)

# 客户端连接测试
打开一个cmd窗口，输入 mongo ，cmd客户端则连接到了mongodb。

![](https://img-blog.csdnimg.cn/20190803224256162.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NoZW5ncWlhbmZlbmc=,size_16,color_FFFFFF,t_70)


在服务端cmd窗口也可以看到收到了一个客户端连接进来。

![](https://img-blog.csdnimg.cn/20190803224351460.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NoZW5ncWlhbmZlbmc=,size_16,color_FFFFFF,t_70)

nice！接下来就可以在cmd上进行操作了！

 

# 设置开机启动
其实在https://docs.mongodb.com官方文档都有详细说明的。

将MongoDB设置为系统服务，可以自动在后台启动，不需要每次都手动启动

1.在c盘根目录创建data
            - 在data下创建db和log文件夹
2.创建配置文件
            在目录 D:\Program Files\MongoDB\Server\3.2 下添加一个配置文件mongod.cfg


![](https://img-blog.csdnimg.cn/20190803232315591.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NoZW5ncWlhbmZlbmc=,size_16,color_FFFFFF,t_70)

```js
logpath=c:\data\log\mongod.log
dbpath=c:\data\db
```

3.以管理员的身份打开命令行窗口    

4.执行如下的命令

```js
mongod --config "D:\Program Files\MongoDB\Server\3.2\mongod.config" --install --serviceName "MongoDB"
```
![](https://img-blog.csdnimg.cn/2019080323243099.png)

5.启动mongodb服务

![](https://img-blog.csdnimg.cn/2019080323044611.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NoZW5ncWlhbmZlbmc=,size_16,color_FFFFFF,t_70)










