console.log("加载成功");
//引入所有的模块
//配置路径
require.config({
  paths: {
    jquery: "jquery.min",
    cookie:"cookie",
    subpage:"subpage",
    fdj:"fangdajing",
    nav:"nav"

  },
  shim: {
    //设置依赖关系
    "cookie": ["jquery"]
  }
});

//调用模块
require(["subpage","fdj","nav"], function (subpage,fdj,nav) {
  subpage.subpage();
  fdj.fdj();
  nav.navdata(),
  nav.showhide()
});
