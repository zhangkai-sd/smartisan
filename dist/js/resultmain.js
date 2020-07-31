console.log("加载成功");
//引入所有的模块
//配置路径
require.config({
  paths: {
    jquery: "jquery.min",
    result:"result"
  },
});

//调用模块
require(["result"], function (re) {

  re.reg();
  re.pre();
});
