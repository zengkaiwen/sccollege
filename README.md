# SC-College

## 前言：

SC-College是我的一个毕设项目，基于微信小程序的应用模式。小程序端用到的框架是Taro，主要是考虑到方便部署到其他端，另外也是自己希望在实习结束的时间里保持对React的使用，毕竟Taro是基于React语法规范的。

## 截图预览

![首页](https://blog-1257256187.cos.ap-chengdu.myqcloud.com/img/20200525102153.png)

![帖子详情](https://blog-1257256187.cos.ap-chengdu.myqcloud.com/img/20200525102348.png)

![选择话题](https://blog-1257256187.cos.ap-chengdu.myqcloud.com/img/20200525102556.png)

![发表帖子](https://blog-1257256187.cos.ap-chengdu.myqcloud.com/img/20200525102619.png)

![我的页面](https://blog-1257256187.cos.ap-chengdu.myqcloud.com/img/20200525102639.png)

## 使用

本地需要全局安装好Taro的脚手架工具

```bash
# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli
# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli
# OR 安装了 cnpm，使用 cnpm 安装 CLI
$ cnpm install -g @tarojs/cli
```

拷贝项目：

```bash
$ git clone https://github.com/kevin-zeus/sccollege.git
```

随机进入项目目录：

```bash
$ cd sccollege
```

关于编译预览与打包如下：

```bash
# yarn
$ yarn dev:weapp
$ yarn build:weapp
```

具体参考[Taro官方文档](https://taro-docs.jd.com/taro/docs/GETTING-STARTED)

