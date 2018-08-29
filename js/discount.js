$(function(){
  // 根据商品id获取商品数据
  var productid=GetUrlParms().productid || 1;
  $.ajax({
    url:"http://mmb.ittun.com/api/getdiscountproduct",
    data:{
      productid:productid
    },
    success:function(data){
      console.log(data);
      var str=template("discount",data);
      $(".lf-discount").html(str);

      var extra=template("extra",data);
      $(".lf-extra").html(extra);
    }
  })

});