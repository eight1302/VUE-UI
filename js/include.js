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

  //导航收起
    if( $(window).width() < 768 ) {
      /* 这里是要执行的代码 */
      $(".navbar-nav").hide();
      $(".navbar-toggle").on('click',function(){
        $(".navbar-nav").show();
      });
      $(".user_img").css("margin-left","25%")
    }else{
      $(".navbar-nav").show();
    }

    if($(".navbar-header").width()>130){
      $(".navbar-nav").find(".menu_ul").show();
    }else{
      $(".navbar-nav").find(".menu_ul").hide();
      $(".navbar-nav").css("text-align","center");
    }
    //隐藏菜单
   if($(window).width() <= 1024 && $(window).width() > 800){
      $(".tast_edit").css("width","800px");
    }else if($(window).width() <= 800){
      $(".tast_edit").css("width","100%");
    }

    //首页评论ipad pro
    if($(window).width() == 1024){
      $(".user_img").css({"width": "60px","height": "60px","margin-top": "40px"});
    }else if($(window).width() < 1024){
      $(".user_img").css({"width": "60px","height": "60px","margin-left": "35%"});
    }

    //相册手机适配
    if($(window).width() <= 414){
      $(".li_info").css({"margin-left": "22%"});
    }
    

	 //启用滚动条
	$(document.body).css({"overflow-x":"auto","overflow-y":"auto"});

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
      $(".form_pho_info").animate({width:'100%',height:'auto'},50);  
    });
    $(".from_affiche").on("click",function(){
      $(".from_photo").css({"border":"none"});
      $(".from_affiche").css({"border":"1px solid #a390c1","border-bottom" : "1px solid #fff"});
      $(".form_pho_info").hide();
      $(".form_aff_info").show();
      $(".form_aff_info").css("width",'0px');  
      $(".form_aff_info").animate({width:'100%',height:'auto'},50);  
    });

})

//退出页面全屏
	function fullscreen() {
	    var docElm = document.documentElement;
	    if (docElm.requestFullscreen) {
		docElm.requestFullscreen();
	    } else if (docElm.mozRequestFullScreen) {
		docElm.mozRequestFullScreen();
	    } else if (docElm.webkitRequestFullScreen) {
		docElm.webkitRequestFullScreen();
	    } else if (docElm.msRequestFullscreen) {
		docElm.msRequestFullscreen();
	    }
	}

	// 退出全屏
	function exitFullscreen() {
	    if (document.exitFullscreen) {
		document.exitFullscreen();
	    } else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	    } else if (document.webkitCancelFullScreen) {
		document.webkitCancelFullScreen();
	    } else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	    }
	}
