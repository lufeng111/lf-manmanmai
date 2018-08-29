$(function(){
  // 根据商品id获取商品数据
  $.ajax({
    url:"http://mmb.ittun.com/api/getinlanddiscount",
    success:function(data){
      console.log(data);
      var str=template("inlanddiscount",data);
      $(".lf-inlanddiscount .discountBox").html(str);
    }
  })
  
});