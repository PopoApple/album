$(function(){
	var dialog = new Dialog({
			delay:10000
		});
	/*
	<div class="mui-slider-item">
		<img draggable="false" src="">		
	</div>
	 * */
	new bluemp.block.articleDetail({
        isDefault: false,
        fnSuccess: function(data) {
			dialog.close();
			console.log('article----------------');
			console.log(data);
			var hasImg = false;
			if(data){
				var content = data.content;
				if(content){
					var wrap = $('<div>');
					wrap.html(content);
		            var imgs = wrap.find('img');
		            if(imgs.length > 0){
		            	hasImg = true;
		            	$('.container').css('background-color','#000');
		            	$('#pager').removeClass('none');
		            	$('#currPage').html(1);
		            	$('#totalPage').html(imgs.length);
		            	var root = $('.mui-slider-group');
			            for(var i=0;i<imgs.length;i++){
			            	var item = $('<div class="mui-slider-item">');
			            	var imgEle = $('<img draggable="false" src="" class="none">');
			            	imgEle.attr('src',imgs.eq(i).attr('src'))
			            		.load(function(){
			            			$(this).removeClass('none');
			            			adjustImgSize(this);
			            		});
			            	if(i==0){
			            		item.addClass('mui-active');
			            	}
			            	item.append(imgEle);
			            	root.append(item);
			            }
			            mui('.mui-slider').slider();
			            $('.mui-slider')[0].addEventListener('slide',function(e){
			            	$('#currPage').html(e.detail.slideNumber+1);
			            });
		            }
				}
			}
			if(!hasImg){
				new Dialog({
					maskOpacity:0,
					maskEventNone:true,
					winOpacity:.65,
					delay:1200,
					icon:null,
					shadow:true,
					message:'暂无图片'
				});
			}
        }
    });
	winW = $(window).width();
	winH = $(window).height();
	$(window).resize(function() {
		winW = $(window).width();
		winH = $(window).height();
		$('.mui-slider-item img').each(function(){
			adjustImgSize(this);
		});
	});
});
var winW,winH;
function adjustImgSize(img){
	var imgW = img.width,
		imgH = img.height;
	if(winW / winH > imgW / imgH){
		var newW = winH * imgW / imgH;
		$(img).css({'width':newW,'height':winH,'margin-left':(winW - newW)/2});
	}else{
		var newH = winW * imgH / imgW;
		$(img).css({'width':winW,'height':newH,'margin-top':(winH - newH)/2});
	}
}
