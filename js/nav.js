new Vue({
  el: '#blog',
  data: {
    news : [
           	{
            name : '首页',
            new_tab : '../home/index.html',
            fa : 'fa fa-bank'
        },
        {
            name : '个人资料',
            new_tab : '../home/person.html',
            fa : 'fa fa-address-book'
        },
        {
            name : '相册页面',
            new_tab : '../home/photo.html',
            fa : 'fa fa-window-maximize'
        },
        {
            name : '404页面',
            new_tab : '../home/404.html',
            fa :'fa fa-bug'
        },
        {
            name : '表单',
            new_tab : '../home/from.html',
            fa : 'fa fa-file-text'
        },
        {
            name : '注销',
            new_tab : '../home/logo-out.html',
            fa : 'fa fa-unlink'
        },
        {
            name : '公告管理',
            new_tab : '../home/affiche.html',
            fa : 'fa fa-optin-monster'
        }
    ],
    my_details : [
    	{
    		name : '新增页面',
            new_tab : '500',
            color : "#000",
            fa : 'fa fa-unlink'
    	},
    	{
    		name : '成交订单',
            new_tab : '300',
            color : "#000",
            fa : 'fa fa-black-tie'
    	},
    	{
    		name : '昨日访问',
            new_tab : '15001',
            color : "#000",
            fa : 'fa fa-connectdevelop'
    	},
    	{
    		name : '在线用户',
            new_tab : '800',
            color : "#000",
            fa : 'fa fa-user'
    	}
    ],
    task : [
    	{
    		id : '1',
            name : '张晓敏',
            last : "下单平台设计",
            seccess : '1'
    	},
    	{
    		id : '2',
            name : '奇缘',
            last : "公司LOGO设计",
            seccess : '50'
    	},
    	{
    		id : '3',
            name : '珂珂',
            last : "平台UI设计",
            seccess : '20'
    	},
    	{
    		id : '4',
            name : '晓敏',
            last : "工厂生产系统",
            seccess : '1'
    	},
    	{
    		id : '5',
            name : '张晓敏',
            last : "个人博客",
            seccess : '1'
    	}
    ],
    browser : [
		{
			img : '',
            name : '浏览器',
            last : "访问量"
    	},{
			img : '../../imgs/admin-chrome.png',
            name : 'Google Chrome',
            last : "5000"
    	},{
			img : '../../imgs/admin-firefox.png',
            name : 'Mozilla Firefox',
            last : "10000"
    	},{
			img : '../../imgs/admin-ie.png',
            name : 'Internet Explorer',
            last : "5000"
    	},{
			img : '../../imgs/admin-opera.png',
            name : 'Opera',
            last : "800"
    	},
    	{
			img : '../../imgs/admin-safari.png',
            name : 'Safari',
            last : "300"
    	}
    ],
    massage : [
        {
            img : '../../imgs/ss.jpg',
            name : '某人 评论于 2018-2-12 15:30',
            last : '遵循 “移动优先（Mobile First）”、“渐进增强（Progressive enhancement）”的理念，可先从移动设备开始开发网站，逐步在扩展的更大屏幕的设备上，专注于最重要的内容和交互，很好。'
        },{
            img : '../../imgs/ss.jpg',
            name : '某人 评论于 2018-2-12 15:30',
            last : '遵循 “移动优先（Mobile First）”、“渐进增强（Progressive enhancement）”的理念，可先从移动设备开始开发网站，逐步在扩展的更大屏幕的设备上，专注于最重要的内容和交互，很好。'
        }
    ]
  }
});
