$(function(){
// 获取白菜价标题列表
  $.ajax({
    url:"http://mmb.ittun.com/api/getbaicaijiatitle",
    success:function(data){
      console.log(data);
      var str=template("navList",data);
      $(".lf-bcjNav .navBox").html(str);
      // 实现白菜价标题列表区域滚动
      new IScroll(".lf-bcjNav",{
        scrollX:true,
        scrollY:false
      })
        // 给白菜价标题注册列表点击事件
        $(".lf-bcjNav").on("click",".navList",function(){
          $(this).addClass("active").siblings().removeClass("active");
          // 获取当前被点击标题的id
          var titleId=$(this).find("a").data("titleid");
          // 点击白菜价标题获取对应商品列表
          $.ajax({
            url:"http://mmb.ittun.com/api/getbaicaijiaproduct",
            data:{
              titleid:titleId
            },
            success:function(info){
              console.log(info);
              var bcj=template("bcjList",info);
              $(".lf-bcjContent .bcjBox").html(bcj);
            }
          })
        })
        // 页面第一次加载时触发第一个标题的点击事件
        $(".navList").eq(0).trigger("click");
    }
  })
});