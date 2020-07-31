console.log("加载成功");
//引入所有的模块
//配置路径
require.config({
  paths: {
    jquery: "jquery.min",
    data: "data",
    lunbotu:"lunbotu",
    nav:"nav",
    cookie:"cookie"
  },
  shim: {
    //设置依赖关系
    "cookie": ["jquery"]
  }
});

//调用模块
require(["data","lunbotu","nav"], function (data,lunbotu,nav) {
  data.download();
 lunbotu.annimatebtn();
 lunbotu.autoPlay();
 nav.nav();
 nav.navdata();
 nav.showhide();
});
