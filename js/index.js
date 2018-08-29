$(function(){  // ajax 外面加 $符发送请求时就开始渲染页面
  // 获取首页菜单栏数据
  $.ajax({
    type:"get",
    url:"http://mmb.ittun.com/api/getindexmenu",
    success:function(data){
      console.log(data);
      // 结合模板引擎将菜单栏的数据渲染到页面上
      var str=template("getindexmenu",data);
      $(".lf-nav ul").html(str);
      // 点击更多按钮，切换第三行导航栏数据的显示与隐藏
      var $more=$(".lf-nav .nav.more");
      // console.log($more);
      $hide=$(".lf-nav .nav.more ~ .nav");
      // console.log($hide); 
      $more.on("click",function(){
        $hide.toggleClass("hide")
      })  
    },
  })

  // 获取首页列表的数据
  $.ajax({
    url: "http://mmb.ittun.com/api/getmoneyctrl",
    success:function(data){
      console.log(data);
      var str=template("getmoneyctrl",data);
      $(".reco-content ul").html(str);
    }
  })
});