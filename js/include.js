$(function(){
	//获取页面的高度
	var height = window.innerHeight;
	$(".cover").css("height",height);
	height_main = this.height-65;
	$(".main").css("height",height_main);

	//加载公共文件
	$("header").load("../include/header.html");
	$("footer").load("../include/footer.html");

	//添加导航点击变化
	$(".ten").on('click',function(){
		$(this).addClass("active").siblings().removeClass("active");	
	})


	 //启用滚动条
	$(document.body).css({"overflow-x":"auto","overflow-y":"auto"});
     //退出页面全屏
    function fullScreen(el) {  
      	var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen,wscript;  
      	if(typeof rfs != "undefined" && rfs) {  
          	return rfs.call(el);  
      	}
  	}  
  	function exitFullScreen(el) {  
      	var el= document,  
          	cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen,wscript;  
      	if (typeof cfs != "undefined" && cfs) {  
        	return  cfs.call(el);;  
      	}  
     
      	if (typeof window.ActiveXObject != "undefined") {  
          	wscript = new ActiveXObject("WScript.Shell");  
          	if (wscript != null) {  
              	wscript.SendKeys("{F11}");  
          	}  
    	}  
  	}  
  	var content = document.documentElement;
  	$(".fullscreen").click(function(event){
  		fullScreen(content)
  	})

    //隐藏首页的任务弹出页
    $(".tast_edit").hide();
    //展示首页的任务弹出页
    $(".edit").on('click',function(){
      $(".tast_edit").show(500);
      var id = $(this).parent().parent().find(".id").text(),
          name = $(this).parent().parent().find(".name").text(),
          last = $(this).parent().parent().find(".last").text(),
          seccess = $(this).parent().parent().find(".seccess").text();
      $("#id").val(id);
      $("#name").val(name);
      $("#last_tast").val(last);
      $("#order").val(seccess);
    })

    $(".out").on('click',function(){
      $(".tast_edit").hide(500);
    })

    //删除信息
    $(".delete").on('click',function(){
      $(this).parent().parent().remove();
    })

    //收起，下拉
    $(".browser").on('click',function(){
      $(".browser_info").toggle(100);
    })
    $(".message").on('click',function(){
      $(".message_info").toggle(100);
    })

    //删除公告信息
    $(".delete_affiche").on('click',function(){
      $(this).parent().parent().remove();
    })

    //相册被选中
    $(".from_affiche").css({"border":"1px solid #a390c1","border-bottom" : "1px solid #fff"});
    $(".form_aff_info").show();
    $(".form_pho_info").hide();
    $(".from_photo").on("click",function(){
      $(".from_affiche").css({"border":"none"});
      $(".from_photo").css({"border":"1px solid #a390c1","border-bottom" : "1px solid #fff"});
      $(".form_aff_info").hide();
      $(".form_pho_info").show();
      $(".form_pho_info").css("width",'0px');  
      $(".form_pho_info").animate({width:'100%',height:'auto'},200);  
    });
    $(".from_affiche").on("click",function(){
      $(".from_photo").css({"border":"none"});
      $(".from_affiche").css({"border":"1px solid #a390c1","border-bottom" : "1px solid #fff"});
      $(".form_pho_info").hide();
      $(".form_aff_info").show();
      $(".form_aff_info").css("width",'0px');  
      $(".form_aff_info").animate({width:'100%',height:'auto'},200);  
    });

})