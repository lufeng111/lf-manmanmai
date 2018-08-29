$(function(){
  $.ajax({
    url:"http://mmb.ittun.com/api/getsitenav",
    success:function(data){
      console.log(data);
      var str=template("navlist",data);
      $(".lf-sitenav .navBox").html(str);
      
    }
  })



});