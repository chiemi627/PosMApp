// セッションテーブルからセッションリストに飛ぶやつ
$.fn.jumpToPresen = function() {
	$(this).on("touchstart", function() {
		var id = $(this).attr("id");
		var sessionid = id.substr(10);
		sessionStorage.setItem("gotosessionid",sessionid);
		$(document).on("pageshow", "#presenListPage", scrollToTr);
		changePage("#presenListPage");
	});
}
function scrollToTr() {
	if(!localStorage.getItem("downloadResult")){
		var target = $("#session" + sessionStorage.getItem("gotosessionid"));
		console.log(sessionStorage.getItem("gotosessionid"));
		var position = target.offset().top;
		var speed = 500;
		// $('body,html').animate({scrollTop:position}, speed, 'linear');
		$('body,html').scrollTop(position);

		$(document).off("pageshow");
		sessionStorage.removeItem("gotosessionid");
	}
	
}

$.fn.changeDate = function(dateId) {
	var date = $(this).html();
	$(this).on('click', function(e) {
		$("#sessionDate").html(date);
		//全部消す
		document.getElementById('sessiontable1').style.display ='none';
		document.getElementById('sessiontable2').style.display ='none';
		document.getElementById('sessiontable3').style.display ='none';
		//指定箇所のみ表示
		document.getElementById(dateId).style.display = 'block';
	});
}