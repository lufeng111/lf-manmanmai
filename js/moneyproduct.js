$(function(){
  var productid=GetUrlParms().productid || 20;
  // 根据商品id获取商品详情
  $.ajax({
    url:"http://mmb.ittun.com/api/getmoneyctrlproduct",
    data:{
      productid:productid
    },
    success:function(data){
      console.log(data);
      var str=template("moneyproduct",data);
      $(".lf-moneyproduct").html(str);

      var extra=template("extra",data);
      $(".lf-extra").html(extra);
    }

  })


});