var testMode;
var isTouchPad = (/hp-tablet/gi).test(navigator.appVersion),
    hasTouch = 'ontouchstart' in window && !isTouchPad;
if(hasTouch){
	document.body.addEventListener('touchmove', function(event) {
		event.preventDefault();
	}, false);
}
var start_ev = hasTouch?'touchstart':'mousedown',
	end_ev = hasTouch?'touchend':'mouseup';
function getPos(ev){
	var e = window.event || ev;
	var pos = {x:0,y:0};
	if(hasTouch){
		var t = e.changedTouches[0];
		t = t?t:e.touches[0];
		pos.x = t.pageX;
		pos.y = t.pageY;
	}else{
		pos.x = e.clientX;
		pos.y = e.clientY;
	}
	return pos;
}
function px2Int(str){
	var len = str.length;
	return parseFloat(str.substring(0,len-2));
}
var Dialog = function(config){
	var _this_ = this;
	//默认的参数配置
	this.config = {
		//遮罩层透明度
		maskOpacity:0.25,
		//遮罩层可穿透
		maskEventNone:false,
		//窗口透明度
		winOpacity:null,
		//窗口阴影
		shadow:false,
		//宽高
		width:null,
		height:null,
		//文字信息
		message:null,
		//图标
		icon:'loading',
		//图标颜色
		iconColor:'white',
		//弹出多久关闭
		delay:null,
		//关闭时淡出
		animOut:true,	
		//按钮
		btns:null
	};
	//默认参数扩展
	if(config && $.isPlainObject(config)){
		$.extend(this.config,config);
	}
	/*
	 
	<div class="dialog-container">
		<div class="dialog-window">
			<div class="dialog-icon loading white"></div>
			<div class="dialog-content">加载失败！</div>
		</div>
	</div>
	 * */
	//创建基本DOM
	this.body = $('body');
	this.mask = $('<div class="dialog-container">');
	this.win = $('<div class="dialog-window">');
	this.winIcon = $('<div class="dialog-icon">');
	this.winContent = $('<div class="dialog-content">');
	this.winFooter = $('<div class="dialog-footer">');
	//渲染DOM
	this.creat();
};
Dialog.prototype = {
	creat:function(){
		var _this_ = this,
			config = this.config,
			mask = this.mask,
			win = this.win,
			icon = this.winIcon,
			content = this.winContent,
			footer = this.winFooter,
			body = this.body;
		if(config.icon){
			win.append(icon.addClass(config.icon));
			if(config.iconColor){
				icon.addClass(config.iconColor);
			}
		}
		if(config.message){
			win.append(content.html(config.message));
		}
		var btns = config.btns;
		if(btns && btns.length>0){
			var _this_ = this;
			for(i in btns){
				var btn = btns[i];
				var btnELe = $('<button class="dialog-btn"></button>')
								.html(btn.text)
								.click(function(){
									btn.func();
									//_this_.close();
								});
				footer.append(btnELe);
			}
			win.append(footer);
		}
		mask.append(win);
		body.append(mask);
		
		if(config.maskEventNone){
			mask.addClass('event_none');
		}
		if(config.width){
			win.width(config.width);
		}
		if(config.height){
			win.height(config.height);
		}
		if(config.maskOpacity){
			mask.css('background','rgba(0,0,0,'+config.maskOpacity+')');
		}
		if(config.winOpacity){
			win.css('background','rgba(0,0,0,'+config.winOpacity+')');
		}
		if(config.shadow){
			win.addClass('shadow');
		}
		if(config.delay && config.delay != 0){
			window.setTimeout(function(){
				_this_.close();
			},config.delay);
		}
	},
	close:function(){
		var _this_ = this;
		if(this.config.animOut){
			this.mask.css('opacity',0).addClass('event_none');
			setTimeout(function(){
				_this_.mask.remove();
			},620);
		}else{
			_this_.mask.remove();
		}
	}
}
window.Dialog = Dialog;
