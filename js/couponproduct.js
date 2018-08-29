$(function(){
// 根据优惠券标题ID获取商品
var couponid=GetUrlParms().couponid;
var src;
$.ajax({
  url:"http://mmb.ittun.com/api/getcouponproduct",
  data:{couponid:couponid},
  success:function(data){
    console.log(data);
    var str=template("couproList",data);
    $(".lf-couponProduct .couproBox").html(str);
  }
});
// 点击图片，显示模态框

// 点击删除按钮，关闭模态框



});