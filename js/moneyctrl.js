$(function(){
  var pageid=0;
  var totalPage;
  var $next=$(".paging .next");
  var $prev=$(".paging .prev");
  var $curr=$(".paging .currPage");
  render();

  // 根据pageid获取数据渲染到页面上
  function render(pageid){
    pageid=pageid || 0;
    $.ajax({
      url:"http://mmb.ittun.com/api/getmoneyctrl",
      data:{
        pageid:pageid
      },
      success:function(data){
        console.log(data);
        var str=template("moneyctrl",data);
        $(".lf-moneyctrl .proItemBox").html(str);
        // 总页数
        totalPage=Math.ceil(data.totalCount / data.pagesize);
        console.log(totalPage);
        $(".paging .currPaging span").text((pageid+1) + "/" + totalPage);

        var page=template("pageCount",{
          pageCount:totalPage
        });
        $(".paging.current .morePage").html(page);   
      }
    }) 
  }

  $next.on("click",function(){
    pageid++;
    if(pageid>=totalPage){
      pageid=totalPage;
    }
    render(pageid);
  })
  $prev.on("click",function(){
    pageid--;
    if(pageid<=0){
      pageid=0;
    }
    render(pageid);
  })
  $curr.on("click",function(){
    $(this).find(".morePage").toggle();
  })
  $curr.on("click",".morePage li",function(){
    pageid=$(this).index();
    render(pageid);
  })



});