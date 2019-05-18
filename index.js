$(document).ready(function(){
	$("#xiala a").click(function(){
				
				$("#nav").slideToggle("slow");
				
			});
	$( window ).resize(function() {
				if (!$("#nav").is(":visible")) {
					$('#nav').attr('style', function(i, style)
						{
						    return style.replace(/display[^;]+;?/g, '');
						});
				};
			});
	$("#zhankai").click(function(){
		$("#wenzi1").show();
		$("#zhankai").hide();
		$("#zhedie").show();
	});
	$("#zhedie").click(function(){
		$("#wenzi1").hide();
		$("#zhankai").show();
		$("#zhedie").hide();
	});
	// 大图轮播
				$("#photo li").eq(2).hide("fast");
				$("#photo li").eq(1).hide("fast");
				$("#photo li").eq(0).fadeIn("slow");
				var i = 1;
				var u = 0;
				var t = window.setInterval(run,"2000");
				function run(){
					// 显示图片，隐藏图片
					$("#photo li").eq(i).fadeIn("3000").siblings().fadeOut("3000");
					// 显示按钮背景，隐藏按钮背景
					$("#btn li").eq(i).addClass("bg").siblings().removeClass("bg");
					i++;
					// i下标0 1 2
					if (i== $("#photo li").length) {
						i=0;
					}
				}
	//返回顶部
})