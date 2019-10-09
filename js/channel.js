$(function(){
	var dialog = new Dialog({
			maskOpacity:1
		});
	var bgSuc = false, navSuc = false;
	var bgPicLoaded = false, navPicLoaded = false;
	var showed = false;
	function show(){
		dialog.close();
		$('.nav_item').css({'left':0,'opacity':1});
		showed = true;
	}
	setTimeout(function(){
		if(!showed){
			show();
		}
	},10000);
	new bluemp.block.title({
		isDefault: false,
		fnSuccess: function(data) {
			bgSuc = true;
			console.log('bluemp.block.title-----');
			console.log(data);
			if (data.bgpic) {
				$('#bgImg')
					.attr('src',data.bgpic)
					.load(function(){
						$('#bgImg').removeClass('none');
						adjustBgSize();
						onBgPicLoaded();
					});
				$('#bgImg')[0].onerror = function(){
					onBgPicLoaded();
				};
				var onBgPicLoaded = function(){
					bgPicLoaded = true;
					if(navPicLoaded){
						show();
					}
				};
			}
		}
	});
	new bluemp.block.mainNav({
		isDefault: false,
		fnSuccess: function(data) {
			navSuc = true;
			console.log('bluemp.block.mainNav-----');
			console.log(data);
			if(data && data.length>0){
				/*
				 <div class="nav_item">
					<img src="" class="nav_bg none" />
					<div class="nav_title">
						饭团社区
					</div>
				</div>
				 * */
				var scroller = $('#nav .scroller');
				var totalCnt=0, cnt=0;
				var onNavPicLoaded = function(){
					navPicLoaded = true;
					if(bgPicLoaded){
						show();
					}
				};
				$.each(data,function(i){
					var pic = this.pic,
						name = this.name,
						url = this.url;
					var item = $('<div class="nav_item">'),
						img = $('<img src="" class="nav_bg none" />'),
						title = $('<div class="nav_title">');
					if(url){
						item.attr('data-url',url);
					}
					if(pic){
						totalCnt++;
						img.attr('src',pic)
							.load(function(){
								cnt++;
								console.log('cnt:'+cnt);
								$(this).removeClass('none');
								if(cnt==totalCnt){
									onNavPicLoaded();
								}
							});
						img[0].onerror = function(){
							cnt++;
								console.log('cnt:'+cnt);
							if(cnt==totalCnt){
								onNavPicLoaded();
							}
						};
						item.append(img);
					}
					console.log('totalCnt:'+totalCnt);
					if(totalCnt==0){
						onNavPicLoaded();
					}
					item.append(title.html(name));
					scroller.append(item);
					var delay = .1*i+'s';
					item.css({'-webkit-transition-delay':delay,'transition-delay':delay});
				});
				updateScroller();
				mui('#nav').scroll({
					scrollY: false, //是否竖向滚动
					scrollX: true, //是否横向滚动
				});
			}
		}
	});
	$(window).resize(function() {
		adjustBgSize();
		updateScroller();
	});
	var touchX1,touchY1,touchTime;
	$(document).on(start_ev,'.nav_item',function(e){
		var pos = getPos(e);
		touchX1 = pos.x;
		touchY1 = pos.y;
		touchTime = new Date().getTime();
	}).on(end_ev,'.nav_item',function(e){
		var pos = getPos(e);
		var x = pos.x;
		var y = pos.y;
		var time = new Date().getTime();
		if(Math.abs(x-touchX1)>5 || Math.abs(y-touchY1)>5 || time-touchTime>500){
			return;
		}
		var url = $(this).attr('data-url');
		window.location.href = url;
	});
});
function adjustBgSize(){
	var bgImg = $('#bgImg'),
		imgW = bgImg.width(),
		imgH = bgImg.height();
	if(imgW && imgH && imgW > 0 && imgH > 0){
		var body = $('body'),
			winW = body.width(),
			winH = body.height();
		if(winW / winH > imgW / imgH){
			bgImg.css({'width':'100%','height':'auto'});
		}else{
			var imgW2 = winH * imgW / imgH;
			bgImg.css({'width':'auto','height':'100%','left':-(imgW2-winW)/2});
		}
	bgImg.removeClass('none');
	}
}
function updateScroller(){
	var items = $('.nav_item');
	$('#nav .scroller').width((items.width()+1)*items.length);
}
