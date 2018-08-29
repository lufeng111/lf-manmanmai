// 根据categoryid获取分类名
$(function () {
  var categoryid = GetUrlParms().categoryid || 1;
  // 实现三级菜单导航，根据分类ID 获取分类标题
  $.ajax({
    url: "http://mmb.ittun.com/api/getcategorybyid",
    data: {
      categoryid: categoryid
    },
    success: function (data) {
      // console.log(data);
      var str = template("getcategorybyid", data);
      $(".lf-productlist .three").html(str);
    }
  })

  // 封装函数，根据当前页数和分类id获取对应的商品列表数
  // 根据商品列表总数，渲染分页标签的页数(备注：封装的函数要调用在封装的函数外面调用)
  function render(currentPage) {
    currentPage = currentPage || 1;
    $.ajax({
      url:"http://mmb.ittun.com/api/getproductlist",
      data:{
        categoryid:categoryid,
        pageid:currentPage
      },
      success:function(data){
        // console.log(data);
        var str=template("productlist",data);
        $(".lf-productlist .proItemBox ").html(str);
        //  计算总页数
        pageCount=Math.ceil(data.totalCount / data.pagesize);
        console.log(pageCount);
        
        $(".currPage span").text(currentPage + "/" + pageCount);
        // 将获取到的总页数包装成对象，结合模板引擎，动态渲染ul中li的个数
        var page=template("pageCount",{
          pageCount:pageCount
        });
        $(".paging.current .morePage").html(page);
      }
    })
  }
  var currentPage=1;
  var $next=$(".paging .next");
  var $prev=$(".paging .prev");
  var $curr=$(".paging .currPage");
  // 初始时即可渲染
  render();
  // 点击下一页按钮，将当前页数+1，重新渲染页面
  $next.on("click",function(){
    currentPage++;
    if(currentPage>=pageCount){
      currentPage=pageCount;
    }
    render(currentPage);
  })
  // 点击上一页按钮，将当前页-1，重新渲染页面
  $prev.on("click",function(){
    currentPage--;
    if(currentPage<=0){
      currentPage=1;
    }
    render(currentPage);
  })
  // 点击当前页，切换分页标签
  $curr.on("click",function(){
    $(this).find(".morePage").toggle();
  })
  // 点击分页标签，改变当前页数，重新渲染页面
  $curr.on("click",".morePage li",function(){
    // 记录当前页数
    currentPage=$(this).index()+1;
    render(currentPage);
  })

});