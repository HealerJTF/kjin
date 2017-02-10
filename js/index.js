(function(){
	$(document).ready(function(){
		$('#fullpage').fullpage({
			'menu':"#myMenu",
			'verticalCentered': false,
	        'resize':true,//内容随窗口缩放而缩放
	        'css3': true,//确认是否使用css3动画
	        'easingcss3':"linear",//动画类型
	        anchors: ['all','introduce', 'primarySkill', 'worksShow', 'selfAssessment'],//定义导航的锚文本信息(在网址栏出现的锚点文本信息)
	        'slidesNavigation':true,//slide是否有小圆圈
	        afterLoad:function(anchorLink,index){
	        	if(index==1){
	        		$("#myMenu").css({
	        			"backgroundColor":"rgba(255,255,255,0.7)"
	        		});
	        		$("#person").css({
	        			"display":"block"
	        		});
	        		$("#myMenu li a").css({
	        			"color":"black"
	        		});
	        		$("#myMenu li a").each(function(){
	        			$(this).mouseover(function(){
		        			$(this).css({
			        			"backgroundColor":"rgba(62,38,26,0.8)",
			        			"color":"white"
			        		})
		        		}).mouseout(function(){
		        			$("#myMenu li a").css({
			        			"background":"none",
		        				"color":"black"
			        		})
		        		})
	        		});
	        	}else if(index == 1){
	        		$("#myMenu").css({
	        			"backgroundColor":"rgba(255,255,255,0.7)"
	        		});
	        	}
	        },
	    })
	})
})();