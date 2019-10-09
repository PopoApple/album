var bluemp_cid,bluemp_aid,viewer_id;
testMode = true;
function getParam(paramName) {  
    paramValue = "", isFound = !1;  
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {  
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;  
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++  
    }  
    return paramValue == "" && (paramValue = null), paramValue  
}  
bluemp_cid = getParam('cid');
var dataTitle = {
	webname: '城市在线',
	logo: 'imgs/iconfont-shenghuo.png',
	bgpic: 'http://f.seals.qq.com/filestore/10037/c5/b3/2e/1000/20140522/thumb_640_1008_20140522212435916.jpg'
};
var dataBanner = {
	carouselpic: [{
		pic: 'imgs/22.jpg',
		title: '',
		url: 'http://baidu.com'
	}, {
		pic: 'imgs/33.jpg',
		title: '',
		url: 'http://baidu.com'
	}, {
		pic: 'imgs/332.png',
		title: '',
		url: 'http://baidu.com'
	}]
};
var dataNav = [{
	name: '饭团社区',
	url: 'javascript:;',
	pic: 'http://f.seals.qq.com/filestore/10037/c5/b3/2e/1000/20140618/thumb_170_376_20140618100831594.jpg',
	nav_url: ''
}, {
	name: '写真',
	url: 'list.html?cid=11',
	pic: 'http://f.seals.qq.com/filestore/10037/c5/b3/2e/1000/20140616/thumb_170_376_20140616222228845.jpg',
	nav_url: ''
}, {
	name: '影视',
	url: 'list.html?cid=22',
	pic: 'http://f.seals.qq.com/filestore/10037/c5/b3/2e/1000/20140711/thumb_170_376_20140711000209183.jpg',
	nav_url: ''
}, {
	name: '资讯',
	url: 'www.baidu.com',
	pic: 'http://f.seals.qq.com/filestore/10037/c5/b3/2e/1000/20140616/thumb_170_376_20140616222016686.jpg',
	nav_url: 'list.html?cid=33'
}, {
	name: '变形记',
	url: 'http://www.baidu.com',
	pic: 'http://f.seals.qq.com/filestore/10037/c5/b3/2e/1000/20140616/thumb_170_376_20140616222447858.jpg',
	nav_url: ''
}, {
	name: '借记卡',
	url: 'www.baidu.com',
	pic: 'http://img1.juimg.com/140923/330696-1409230AH093.jpg',
	nav_url: ''
}, {
	name: '征婚其实',
	url: 'www.baidu.com',
	pic: 'imgs/icon5.png',
	nav_url: ''
}, {
	name: '外卖的快捷快递件',
	url: 'www.baidu.com',
	pic: 'imgs/icon1.png',
	nav_url: ''
}];
var dataBottomNav = [{
	name: '首页',
	url: 'www.baidu.com',
	pic: 'imgs/iconfont-tupian.png',
	nav_url: ''
}, {
	name: '我的订单',
	url: 'www.baidu.com',
	pic: 'imgs/iconfont-tupian.png',
	nav_url: ''
}, {
	name: '收藏',
	url: 'www.baidu.com',
	pic: 'imgs/iconfont-tupian.png',
	nav_url: ''
}];
var dataChannel = [{
	id: '11',
	name: '时尚大片'
}, {
	id: '22',
	name: '影视剧照'
}, {
	id: '33',
	name: '独家私照'
}, {
	id: '44',
	name: '自拍写真'
}, {
	id: '55',
	name: '广告'
}, {
	id: '66',
	name: 'MV'
}];
var dataArticleList = [{
	id: '11',
	href: 'www.baidu.com',
	pic: 'imgs/44.jpg',
	title: '摄影大赛投票',
	summary: '摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票开始了贷款分类看沙漠里的美丽的地方',
	updatetime: '1451380351',
	pv:229
}, {
	id: '11',
	href: 'www.baidu.com',
	pic: 'imgs/11.jpg',
	title: '摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票',
	updatetime: '1451380351',
	pv:0
}, {
	id: '11',
	href: 'www.baidu.com',
	pic: '',
	title: '摄影大赛投票',
	summary: '',
	updatetime: '1451380351',
	pv:5
}, {
	id: '11',
	href: 'www.baidu.com',
	pic: '',
	title: '摄影大赛投票',
	summary: '',
	updatetime: '1451380351',
	pv:33
}, {
	id: '22',
	href: 'www.baidu.com',
	pic: 'imgs/11.jpg',
	title: '摄影大赛投票',
	summary: '',
	updatetime: '1451380351',
	pv:2
}];
var dataExtendInfo = {
	copyrightinfo: '©2014-2016研究院赶集网'
};
var dataArticle = {
	id: '11',
	href: 'www.baidu.com',
	pic: 'imgs_fake/cbd.jpg',
	display_pic:'1',
	title: '摄影大赛投票',
	summary: '摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票',
	posttime: '2016-01-19',
	author: "大苹果头小宝宝",
	open_pay:false,
	content:'<p><img src="http://img4.imgtn.bdimg.com/it/u=575594483,1979213933&fm=21&gp=0.jpg&tt=55" ><span style="color: rgb(47, 79, 79); font-family: 微软雅黑; word-wrap: break-word; font-size: x-small;"></span></p><p><span style="color: rgb(47, 79, 79); font-family: 微软雅黑; word-wrap: break-word; font-size: x-small;"><img src="http://www.xiaoxiongbizhi.com/wallpapers/1366_768_85/3/z/3z024xb3h.jpg" /><img src="http://img5q.duitang.com/uploads/item/201507/07/20150707095418_rKMXe.jpeg" /><img src="http://www.sanguosha.com/uploads/201509/56065522751ef.jpg" /><img src="http://www.bz55.com/uploads/allimg/130831/1-130S10S203.jpg" /><img src="http://image.bluemp.cn/Img/editor/20160721/579085755bbae.png@580w_1l.png" title="579085755bbae.png" alt="图层 19.png" width="387" height="174" style="width: 387px; height: 174px;"></span><br></p><p><span style="color: rgb(47, 79, 79); font-family: 微软雅黑; word-wrap: break-word; font-size: x-small;"></span></p><section class="wwei-editor"><section style="max-width: 100%;margin: 0.8em 0px 0.5em; overflow: hidden; "><section placeholder="请输入标题" style="box-sizing: border-box !important;  height:36px;display: inline-block;color: #FFF; font-size: 16px;font-weight:bold; padding:0 10px;line-height: 36px;float: left; vertical-align: top; background-color: rgb(249, 110, 87); " class="wweibrush"><span style="font-size: 14px;">婚礼纸杯蛋糕成为了一种流行趋势</span></section><section style="box-sizing: border-box !important; display: inline-block;height:36px; vertical-align: top; border-left-width: 9px; border-left-style: solid; border-left-color: rgb(249, 110, 87); border-top-width: 18px !important; border-top-style: solid !important; border-top-color: transparent !important; border-bottom-width: 18px !important; border-bottom-style: solid !important; border-bottom-color: transparent !important;"></section></section></section><p><span style="font-size: 14px;">在欧美，纸杯蛋糕已经取代了传统意义的多层蛋糕，现身于各种婚礼。婚礼上可人的纸杯蛋糕塔，低碳且个性化的甜蜜选择。五彩缤纷的纸杯蛋糕端坐于婚礼蛋糕架之上，自然而然地成为了整场婚礼的亮点。</span></p><section class="wwei-editor"><section style="max-width: 100%;margin: 0.8em 0px 0.5em; overflow: hidden; "><section placeholder="请输入标题" style="box-sizing: border-box !important;  height:36px;display: inline-block;color: #FFF; font-size: 16px;font-weight:bold; padding:0 10px;line-height: 36px;float: left; vertical-align: top; background-color: rgb(249, 110, 87); " class="wweibrush"><span style="font-size: 14px;">通过纸杯蛋糕，你可以体验甜蜜总导演</span></section><section style="box-sizing: border-box !important; display: inline-block;height:36px; vertical-align: top; border-left-width: 9px; border-left-style: solid; border-left-color: rgb(249, 110, 87); border-top-width: 18px !important; border-top-style: solid !important; border-top-color: transparent !important; border-bottom-width: 18px !important; border-bottom-style: solid !important; border-bottom-color: transparent !important;"></section></section></section><p><span style="font-size: 14px;">与传统婚礼蛋糕相比，婚礼纸杯蛋糕可以做出更多样的口味和造型。你可以天 马行空地设想，把各种故事和话语融汇到每一个小蛋糕里，让我们来执行;你也可以参与到共同制作的快乐之中，留一段甜蜜影像，做一枚最与众不同的蛋糕，献给心爱的TA或者父母，让他们从心到口，开出一朵花。</span></p><section class="wwei-editor"><section style="max-width: 100%;margin: 0.8em 0px 0.5em; overflow: hidden; "><section placeholder="请输入标题" style="box-sizing: border-box !important;  height:36px;display: inline-block;color: #FFF; font-size: 16px;font-weight:bold; padding:0 10px;line-height: 36px;float: left; vertical-align: top; background-color: rgb(249, 110, 87); " class="wweibrush"><span style="font-size: 14px;">纸杯蛋糕帮助你准备出最恰当的分量</span></section><section style="box-sizing: border-box !important; display: inline-block;height:36px; vertical-align: top; border-left-width: 9px; border-left-style: solid; border-left-color: rgb(249, 110, 87); border-top-width: 18px !important; border-top-style: solid !important; border-top-color: transparent !important; border-bottom-width: 18px !important; border-bottom-style: solid !important; border-bottom-color: transparent !important;"></section></section></section><p><span style="font-size: 14px;">如果你喜欢乐活的生活理念和低碳的生活方式，并且希望把每分钱用得实惠，那纸杯蛋糕刚好可以满足你的所有要求。精打细算而又追求生活品质的你可以按照人数来定制纸杯蛋糕的数量和大小，再也不用担心婚礼过后到处是蛋糕的残渣。</span></p><section class="wwei-editor"><section style="max-width: 100%;margin: 0.8em 0px 0.5em; overflow: hidden; "><section placeholder="请输入标题" style="box-sizing: border-box !important;  height:36px;display: inline-block;color: #FFF; font-size: 16px;font-weight:bold; padding:0 10px;line-height: 36px;float: left; vertical-align: top; background-color: rgb(249, 110, 87); " class="wweibrush"><span style="font-size: 14px;">&nbsp;同时满足作为新人的你和你邀请的宾客</span></section><section style="box-sizing: border-box !important; display: inline-block;height:36px; vertical-align: top; border-left-width: 9px; border-left-style: solid; border-left-color: rgb(249, 110, 87); border-top-width: 18px !important; border-top-style: solid !important; border-top-color: transparent !important; border-bottom-width: 18px !important; border-bottom-style: solid !important; border-bottom-color: transparent !important;"></section></section></section><p><span style="font-size: 14px;">通常的婚礼体验，蛋糕只是一个摆设，只是好看，却不好吃，分到盘子里也只能是乱糟糟的一份。有过这种体验的我们，希望能够让你既拥有和TA共同切下蛋糕的美好一刻，有能够让每一个来宾手中能有一只完整美丽且可口的小蛋糕。让每个人再想到你的时候，都是一股甜蜜幸福的回忆。</span></p><p><span style="color: rgb(47, 79, 79); font-family: 微软雅黑; word-wrap: break-word; font-size: x-small;"><img src="http://pro.wwei.cn/Public/wxeditor/css/05.jpg"></span></p><p><br></p><p><span style="color: rgb(47, 79, 79); font-family: 微软雅黑; word-wrap: break-word; font-size: x-small;"></span><br></p>'
//content:'<img src="http://www.xiaoxiongbizhi.com/wallpapers/1366_768_85/3/z/3z024xb3h.jpg" />'
};
var bluemp = new Object();
var block = new Object();
var tool = new Object();
bluemp.block = block;
bluemp.tool = tool;
bluemp.login = function(){
	sessionStorage.userInfo = JSON.stringify({
		id: '82739',
		name: '小烨子', 
		nick: '小烨子', 
		head: 'http://q.qlogo.cn/qqapp/101139311/23380EC26B96B4FFB4FC1C305627901B/40', 
		gender: '1',
		is_login: 1
	});
	location.reload();
};
bluemp.logout = function(){
	sessionStorage.userInfo = JSON.stringify({
		is_login: 0
	});
	location.reload();
};
bluemp.loginCheck = function(){
	return true;
};
block.options = function(opt) {
	
}
block.replyList = function(opt) {
	
}
block.userLogin = function(opt) {
	setTimeout(function() {
		var userInfo = sessionStorage.userInfo;
		opt.fnSuccess(userInfo?JSON.parse(userInfo):{is_login: 0});
	}, 100);
}
tool.Vote = function(opt) {
	
}
block.title = function(opt) {
	setTimeout(function() {
		opt.fnSuccess(dataTitle);
	}, 100);
}
block.banner = function(opt) {
	setTimeout(function() {
		opt.fnSuccess(dataBanner);
	}, 100);
}
block.mainNav = function(opt) {
	setTimeout(function() {
		opt.fnSuccess(dataNav);
	}, 1000);
}
block.bottomNav = function(opt) {
	setTimeout(function() {
		opt.fnSuccess(dataBottomNav);
	}, 100);
}
block.channelList = function(opt) {
	setTimeout(function() {
		opt.fnSuccess(dataChannel);
	}, 100);
}
block.articleDetail = function(opt) {
	console.log(sessionStorage.cid);
	dataArticle.open_pay = sessionStorage.cid=='22'?true:false;
	dataArticle.display_pic = sessionStorage.cid=='33'?'0':'1';
	setTimeout(function() {
		opt.fnSuccess(dataArticle);
	}, 1000);
}
block.articleList = function(opt) {
	var arry = [];
	var cnt = 5;
	/*if(bluemp_cid=='22'){
		cnt = 5;
	}else if(bluemp_cid=='33'){
		cnt = 0;
	}*/
	sessionStorage.cid = bluemp_cid;
	var pics = [
		'http://f.seals.qq.com/filestore/10037/c5/b3/2e/1000/20160822/shipei_20160822134119862_05f7b5bcb5ffe0f96c06dfa685b37fc8_1.jpg',
		'http://image.bluemp.cn/Img/article/20160908/57d0c57d13ea4.jpg@580w_580h_1l.jpg',
		'http://img4.duitang.com/uploads/item/201312/10/20131210170210_WWzne.thumb.600_0.jpeg',
		'http://pro.wwei.cn/Public/wxeditor/css/05.jpg',
		'http://f.seals.qq.com/filestore/10037/c5/b3/2e/1000/20160822/shipei_20160822134226608_30a22d4f85a6a95358d03df09505516b_1.jpg'
	];
	for (var i = 0; i < cnt; i++) {
		var article = {
			cid: bluemp_cid,
			id: bluemp_cid+'0'+i,
			href: 'a.html?aid=123',
			pic: pics[i%5],
			title: '摄影'+bluemp_cid+'-0-'+i,
			summary: '摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票',
			updatetime: '1451380351',
			pv:Math.floor(Math.random()*200),
			praise:Math.floor(Math.random()*200)
		}
		arry.push(article);
	}
	setTimeout(function() {
		opt.fnSuccess(arry);
	}, 1000);
}
block.articleList.prototype.getNextPage = function(opt,callback){
    var cnt = 10;
    var page = opt.page;
	if(page<0 || page>1){
		cnt = 0;
	}else if(page==1){
		cnt = 5;
	}
	var arry = [];
	for (var i = 0; i < cnt; i++) {
		var article = {
			cid: bluemp_cid,
			id: bluemp_cid+''+opt.page+i,
			href: 'www.baidu.com',
			pic: 'http://f.seals.qq.com/filestore/10037/c5/b3/2e/1000/20160808/shipei_20160808132358354_a3ccb9cfb74cf74388351e59d68f8246_1.jpg',
			title: '摄影'+bluemp_cid+'-'+opt.page+'-'+i,
			summary: '摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票',
			updatetime: '1451380351',
			pv:Math.floor(Math.random()*200),
			praise:Math.floor(Math.random()*200)
		}
		arry.push(article);
	}
	setTimeout(function() {
		callback(arry);
	}, 1000);
}
block.extendInfo = function(opt) {
	setTimeout(function() {
		opt.fnSuccess(dataExtendInfo);
	}, 100);
}