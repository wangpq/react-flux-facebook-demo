# react-flux-facebook-demo
使用create-react-app搭建的一个简单的demo，状态管理参照facebook的flux方案


# 一、安装create-react-app并创建项目
window+R 打开控制台，输入cmd

确认全局安装了create-react-app，若没有安装
```bash
npm install -g create-react-app  
```
创建一个应用程序 
create-react-app 项目名

进入项目
cd 项目名

运行
```bash
npm start | yarn start  
```
会自动打开http://localhost:3000/看下你的页面


# 二、配置Less

默认create-react-app创建的项目支持css，不支持less，sass，stylus等。

先把配置文件暴露出来 因为create-react-app创建的配置文件是没有暴露的
```bash
npm run eject 
```
安装less-loader 和 less 
```bash
npm install less-loader less --save-dev
```

安装后修改 webpack.config.dev.js 和 webpack.config-prod.js 配置文件
test: /\.css$/ 改为 /\.(css|less)$/
test: /\.css$/ 的 use 数组配置增加 less-loader
并新增一个loader，与 postcss-loader并列。

```bash
{
  test: /\.(css|less)$/,
  use: [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1,
      },
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
       // 此处代码已省略
      }
    },
    {
      loader: require.resolve('less-loader'),
    }
  ],
},
```

然后把src 里面的App.css 文件改成App.less文件 里面使用less写测试下效果
```bash
header{                                                                                       
  display: flex;
  flex-direction: row;
  background-color: rgba(155,155,155,0.1);
  .item:not(:first-of-type){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
  }
  .item:first-of-type{
    flex:1;
    img{
      height:48px;
      animation: App-logo-spin infinite 20s linear; 
    }
  }
  .item:nth-of-type(2){
    flex:3;
  }
  .item:last-of-type{
    flex:1;
  }
}

@keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```


# 三、打包CSS分离

注意：这个功能在目前的create-react-app创建的项目的配置文件webpack.config.dev.js中没有设置，但是webpack.config.prod.js中是已经配置好了的，所以这一步没必要在设置啦。


# 四、配置饿了么组件 

element-react官网
https://elemefe.github.io/element-react/#/zh-CN/

配置过程可参照 element 的官网提示。

npm install element-react element-theme-default --save

使用element 

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'element-react';

import 'element-theme-default';

ReactDOM.render(<Button type="primary">Hello</Button>, document.getElementById('app'));


# 五、配置router

安装react-router-dom 
```bash
npm install react-router-dom --save
```

