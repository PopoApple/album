$(function(){
	var dialog = new Dialog({
			maskOpacity:1,
			delay:20000
		});
	new bluemp.block.articleDetail({
        isDefault: false,
        fnSuccess: function(data) {
			console.log('article----------------');
			console.log(data);
			var hasImg = false;
			if(data){
				if(data.open_pay){
					dialog.close();
					new Dialog({
						maskOpacity:1,
						icon:null,
						btns:[
							{text:'付费查看图册',func:function(){
								if(bluemp.loginCheck()){
									window.location.href = 'http://pay.bluemp.cn/wxpay2/jsapi/payread.php?state='+bluemp_aid+'_'+viewer_id
								}
							}}
						]
					});
					return;
				}
				var wrap = $('<div>');
				wrap.html(data.content);
				var display_pic = data.display_pic;
				var pic = data.pic;
				if(display_pic=='1' && pic!=''){
					wrap.prepend('<img src='+pic+' >');
				}
				var imgs = wrap.find('img');
	            var totalCnt = imgs.length;
	            if(totalCnt > 0){
	            		hasImg = true;
					var items = [];
					var gallery;
		            for(var i=0;i<imgs.length;i++){
		            	var img = imgs[i];
		            	items.push({
						        src: img.src,
						        w: 580,
						        h: 580
						    });
					    img.id = i+'';
		            	img.onload = function(){
		            		if(gallery){
		            			return;
		            		}
		            		totalCnt--;
		            		var item = items[parseInt(this.id)];
		            		item.w = this.width;
		            		item.h = this.height;
		            		if(totalCnt==0){
		            			showGallery();
		            		}
		            	};
		            	img.onerror = function(){
		            		if(gallery){
		            			return;
		            		}
		            		totalCnt--;
		            		if(totalCnt==0){
		            			showGallery();
		            		}
		            	};
		            }
		            function showGallery(){
		            	dialog.close();
		            	var pswpElement = document.querySelectorAll('.pswp')[0];
		            	var options = {
						    pinchToClose : false,
						    closeOnScroll : false,
						    closeOnVerticalDrag : false,
						    closeEl : false,
							captionEl : false,
							fullscreenEl : false,
							shareEl : false,
							history : false,
							indexIndicatorSep: '/',
							errorMsg : '<div class="pswp__error-msg"><div class="img_fail"></div><div class="fail_txt">图片加载失败</div></div>'
						};
						
						gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
						gallery.init();
						gallery.close = function(){};
		            }
					setTimeout(function(){
						if(!gallery){
							showGallery();
						}
					},5000);
	            }
			}
			if(!hasImg){
				dialog.close();
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
});
