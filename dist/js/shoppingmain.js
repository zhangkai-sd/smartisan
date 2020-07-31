console.log("加载成功");
//引入所有的模块
//配置路径
require.config({
  paths: {
    jquery: "jquery.min",
    cookie:"cookie",
  shopping:"shopping",
 
  },
  shim: {
    //设置依赖关系
    "cookie": ["jquery"]
  }
});

//调用模块
require(["shopping"], function (shopping) {
    shopping.shopping();

});
