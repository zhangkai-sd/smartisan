console.log("加载成功");
//引入所有的模块
//配置路径
require.config({
  paths: {
    jquery: "jquery.min",
    login:"login"
  },
});

//调用模块
require(["login"], function (lo) {
  lo.login();
  lo.reg();
});
