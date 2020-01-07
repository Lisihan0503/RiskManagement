# 锐合新创风控
#### 搭建时间 2019-12-17
#### 介绍
锐合新创风控

#### 环境说明
      node 环境安装 8+ 即可（个别情况需要配置node 环境变量）
      win+R 启动命令窗口 
      输入 node -v 有版本号输出即可
      输入 npm -v 有版本号输出即可
      如果后续步骤执行cnpm 安装的话 需要优先安装一下淘宝镜像  
      安装命令 npm install -g cnpm --registry=https://registry.npm.taobao.org
      （如果node 环境变量不会配置的话 自行度娘）
      
#### 软件架构
src 文件夹下 api文件夹  config.js 文件 基础配置  
                       https.js 文件  请求方法 get post 等其他方法封装
             assets 文件夹  用于存放图片
             
             common 文件夹 公共样式 重置样式 以及公共JS 方法封装
             
             components 文件夹 存放公共组件
             
             js 文件夹 rem转换（应该没有用到）
             
             router 文件夹 路由配置页面
             
             views 文件夹 存放各个页面


#### 安装教程 #### 使用说明

1.  下载项目后先执行 npm install 或者 cnpm install 安装依赖库
2.  再执行 npm run dev 运行项目 （在config文件夹下中的prod.env.js配置对应的测试环境 正式环境 开发环境访问路径）

#### 项目打包

     执行 命令 npm run build 生成dist文件夹    


#### views文件夹下文件说明（对应页面以及功能）

