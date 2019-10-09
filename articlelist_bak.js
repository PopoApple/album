$(function(){
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
					item.attr('id','nav_'+id);
					item.click(function(){
						$('.nav_item.active').removeClass('active');
						$(this).addClass('active');
						var cId = $(this).attr('id').replace('nav_','');
						$('.list.active').removeClass('active');
						$('#list_'+cId).addClass('active');
						var info = listInfo[cId];
						if(info && !info.init){
							reqQueue.push(cId);
							requestList();
						}
					});
					item.append(nameEle.html(name));
					scroller.append(item);
					/*
					 <div class="list active">
						<div class="scroller_v">
					 * */
					var list = $('<div class="list"><div class="scroller_v"></div></div>');
					list.attr('id','list_'+id);
					listWrap.append(list);
					var listScroll = mui(list[0]).scroll();
					list[0].addEventListener('scrollend',function () {
						var cId = $(this).attr('id').replace('list_','');
						if(listInfo[cId].done){
							return;
						}
						var scroll = listInfo[cId].scroll;
						var maxScrollY = scroll.maxScrollY,
							y = scroll.y;
						if(y - maxScrollY < 10){
							inQueue = false;
							for(var i=0;i<reqQueue.length;i++){
								if(reqQueue[i]==cId){
									inQueue = true;
									break;
								}
							}
							if(!inQueue){
						  		reqQueue.push(cId);
								requestList();
							}
						}
					});
					listInfo[id] = {scroll:listScroll};
				});
				$('.nav_item').eq(0).trigger('click');
				updateScroller();
				mui('#nav').scroll({
					scrollY: false, //是否竖向滚动
					scrollX: true, //是否横向滚动
				});
			}
		}
	});
	$(window).resize(function() {
		updateScroller();
	});
});
function updateScroller(){
	var w = 1;
	$('.nav_item').each(function(){
		w += $(this).width()+40;
	});
	$('#nav .scroller').width(w);
}
var listInfo = {};
var reqQueue = [];
var listReqing = false;
function requestList(){
	if(reqQueue.length==0 || listReqing){
		return;
	}
	listReqing = true;
	bluemp_cid = reqQueue.pop();
	var info = listInfo[bluemp_cid];
	if(!info.init){
		var articleList = new bluemp.block.articleList({
			isDefault: false,
			fnSuccess: function(data) {
				console.log('bluemp.block.articleList-----');
				console.log(data);
				info.init = 1;
				info.articleList = articleList;
				info.currPage = 0;
				if(data && data.length>0){
					builtArticleList(data);
				}
				listReqing = false;
				if(reqQueue.length > 0){
					requestList();
				}
			}
		});
	}else{
		info.articleList.getNextPage({cid:bluemp_cid,page:++info.currPage},function(data){
			if(data && data.length > 0){
				builtArticleList(data,true);
			}else{
				info.done = 1;
			}
			listReqing = false;
			if(reqQueue.length > 0){
				requestList();
			}
		});
	}
}
function builtArticleList(data,isAppend){
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
	var scroller = $('#list_'+bluemp_cid).find('.scroller_v');
	$.each(data,function(){
		var title = this.title,
			praise = this.praise,
			pic = this.pic;
		var item = $('<div class="list_item">'),
			picEle = $('<img src="" class="list_img none" draggable="false" />'),
			bar = $('<div class="list_bar">'),
			titleELe = $('<div class="list_title">'),
			praiseEle = $('<div class="list_praise">');
		if(pic){
			picEle.attr('src',pic);
			picEle.load(function(){
				$(this).removeClass('none');
			});
			item.append(picEle);
		}
		bar.append(titleELe.html(title));
		bar.append(praiseEle.html(praise));
		item.append(bar);
		scroller.append(item);
	});
}
