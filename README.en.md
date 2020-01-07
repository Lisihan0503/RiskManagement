# 锐合新创风控

#### Description
Ruihe Xinchuang risk control

#### Environmental description
      Just install 8 + in the node environment (you need to configure the node environment variables in some cases)
      Win + R start command window
      Input node -v and output with version number
      Input npm -v and output with version number
      If you want to install cnpm in the following steps, you need to install Taobao image first
      Implement Installation command npm install -g cnpm --registry=https://registry.npm.taobao.org
      (if the node environment variable is not configured, you can use www.baidu.com)



#### Software Architecture
      Basic configuration of API folder config.js under SRC folder
      Https.js file request method get post and other methods encapsulation
      Assets folder for pictures
      Common folder Public style reset style and public JS method encapsulation
      Components folder for public components
      JS folder REM conversion (should not be used)
      Router folder routing configuration page
      The views folder holds pages

#### Installation

1. After downloading the project, execute NPM install or cnpm install to install the dependency library
2. Execute the NPM run dev running project (configure the corresponding test environment official environment development environment access path in prod.env.js under the config folder)


#### Pack Project

1. Execute the command NPM run build to generate the dist folder


