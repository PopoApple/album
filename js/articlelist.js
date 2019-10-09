$(function(){
	var dialog = new Dialog({
			delay:10000
		});
	new bluemp.block.channelList({
		isDefault: false,
		fnSuccess: function(data) {
			console.log('bluemp.block.channelList-----');
			console.log(data);
			if(data && data.length>0){
				/*
				 <div class="nav_item">
					<div class="nav_name">
						时尚大片
					</div>
				</div>
				 * */
				var scroller = $('#nav .scroller');
				var listWrap = $('#listWrap');
				$.each(data,function(i){
					var name = this.name,
						id = this.id;
					var item = $('<div class="nav_item">'),
						nameEle = $('<div class="nav_name">');
					if(id==bluemp_cid){
						item.addClass('active');
					}
					item.attr('id','nav_'+id);
					item.append(nameEle.html(name));
					scroller.append(item);
				});
				updateNavScroller();
				var navScroll = mui('#nav').scroll({
					scrollY: false, //是否竖向滚动
					scrollX: true, //是否横向滚动
					indicators: true //是否显示滚动条
				});
				var scrollW = $('#nav .scroller').width();
				var winW = $(window).width();
				if(scrollW > winW){
					var actNavItem = $('.nav_item.active');
					var x = actNavItem.offset().left,
						w = actNavItem.width()+40;
					var posX = (winW - w) / 2 - x;
					posX = posX > 0?0:posX;
					posX = posX < navScroll.maxScrollX?navScroll.maxScrollX:posX;
					navScroll.scrollTo(posX,0,0);
				}
			}
		}
	});
	var articleList = new bluemp.block.articleList({
		isDefault: false,
		fnSuccess: function(data) {
			dialog.close();
			console.log('bluemp.block.articleList-----');
			console.log(data);
			if(data && data.length>0){
				builtArticleList(data);
				var listScroll = mui('.list').scroll();
				$('.list')[0].addEventListener('scrollend',function () {
					if(listReqing || listDone){
						return;
					}
					var maxScrollY = listScroll.maxScrollY,
						y = listScroll.y;
					if(y - maxScrollY < 10){
						$('#moreLoading').removeClass('none');
						articleList.getNextPage({cid:bluemp_cid,page:++currPage},function(data){
							$('#moreLoading').addClass('none');
							if(data && data.length > 0){
								builtArticleList(data);
							}else{
								listDone = true;
							}
						});
					}
				});
			}else{
				new Dialog({
					maskOpacity:0,
					maskEventNone:true,
					winOpacity:.65,
					delay:1200,
					icon:null,
					shadow:true,
					message:'暂无内容'
				});
			}
		}
	});
	$(window).resize(function() {
		updateNavScroller();
		updateListItem();
	});
	var touchX1,touchY1,touchTime;
	$(document).on(start_ev,'.nav_item,.list_item',function(e){
		var pos = getPos(e);
		touchX1 = pos.x;
		touchY1 = pos.y;
		touchTime = new Date().getTime();
	}).on(end_ev,'.nav_item,.list_item',function(e){
		var pos = getPos(e);
		var x = pos.x;
		var y = pos.y;
		var time = new Date().getTime();
		if(Math.abs(x-touchX1)>5 || Math.abs(y-touchY1)>5 || time-touchTime>500){
			return;
		}
		if($(this).is('.nav_item')){
			$('.nav_item.active').removeClass('active');
			$(this).addClass('active');
			var cId = $(this).attr('id').replace('nav_','');
			var href;
			if(testMode){
				href = 'list.html?cid=' + cId;
			}else{
				href = '/Portal/articlelist.html?cid=' + cId;
			}
			//location.href = href;
			location.replace(href);
		}else if($(this).is('.list_item')){
			var url = $(this).attr('data-url');
			window.location.href = url;
		}
	});
});
function updateListItem(){
	var winW = $(window).width();
	$('.list_item').css('max-height',winW * .6);
}
function updateNavScroller(){
	var w = 1;
	$('.nav_item').each(function(){
		w += $(this).width()+40;
	});
	$('#nav .scroller').width(w);
}
var listReqing = false;
var currPage = 0;
var listDone = false;
function builtArticleList(data){
	/*
	 <div class="list_item">
			<img src="" class="list_img" />
			<div class="list_bar">
				<div class="list_title">
					2016 时尚芭莎
				</div>
				<div class="list_praise">
					616
				</div>
			</div>
		</div>
	 * */
	var moreLoading = $('#moreLoading');
	$.each(data,function(){
		var title = this.title,
			praise = this.praise,
			pic = this.pic,
			href = this.href;
		var item = $('<div class="list_item">'),
			picEle = $('<img src="" class="list_img none" draggable="false" />'),
			bar = $('<div class="list_bar">'),
			titleELe = $('<div class="list_title">'),
			praiseEle = $('<div class="list_praise">');
		if(href){
			item.attr('data-url',href);
		}
		if(pic){
			picEle.attr('src',pic);
			picEle.load(function(){
				$(this).removeClass('none');
			});
			item.append(picEle);
		}
		bar.append(titleELe.html(title));
		//bar.append(praiseEle.html(praise));
		item.append(bar);
		moreLoading.before(item);
	});
	updateListItem();
}
