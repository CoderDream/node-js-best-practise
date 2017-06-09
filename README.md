# node-js-best-practise


----------



----------

访问MySQL

[http://www.runoob.com/nodejs/nodejs-mysql.html](http://www.runoob.com/nodejs/nodejs-mysql.html)





----------

访问MSSQL

[https://github.com/patriksimek/node-mssql](https://github.com/patriksimek/node-mssql)




----------


WebStorm基本使用
[http://blog.csdn.net/juvary/article/details/51176168](http://blog.csdn.net/juvary/article/details/51176168)



----------




----------
单元测试

安装mocha

cnpm install --global mocha

安装

cnpm install --global chai




----------




----------



----------


## 代码覆盖率

项目安装mocha


    npm install mocha
    

```npm install mocha
```


全局安装istanbul

```npm install istanbul -g
```

将测试文件放到项目根目录的test文件夹下，然后在项目根目录执行下面的脚本：

```istanbul cover -hook-run-in-content node_modules/mocha/bin/_mocha
```

然后，测试结果报告就在coverage\lcov-report子目录生成。

## 测试报告
项目安装mochawesome

```npm install --save-dev mochawesome
```

运行代码

```mocha --reporter mochawesome
```

然后，测试结果报告就在mochaawesome-reports子目录生成。