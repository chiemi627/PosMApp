 // ポスターの一覧を表示する
$.fn.showBookmarkList = function() {
	$(this).html("");
	var posters = new Array();
	posters["id"] = new Array();
	posters["sessionid"] = new Array();
	posters["title"] = new Array();
	posters["author"] = new Array();
	
	var bookmarks = localStorage.getItem("bookmarks");
	if (bookmarks === null || bookmarks === "") {
		bookmarks = "";
	}
	var bookmarkArr = bookmarks.split(",");
	
	var str = "";
	str += '<table border="1" rules="rows" >';
	
	for(var i=0; i<=bookmarkArr.length; i++){
		for (var j=0; j<=poster.length-4; j++){
			if(bookmarkArr[i]==poster[j].id){
				authors = getAuthors(i+1).split(",").join(", ")
				posters["id"].push(poster[j].id.toString());
				posters["sessionid"].push(poster[j].sessionid);
				posters["title"].push(poster[j].title);
				posters["author"].push(getAuthors(j+1));
				str += "<tr><td><div>ポスターID: " + poster[j].sessionid + "<img class='bookmarklistToMapBtn' id='bookmarklistToMap" +poster[j].id.toString()+ "' src='img/logo_posmapp.png' style='zoom: 5%;'></img><br>";
				str += "<strong>" + poster[j].title + "</strong><br>";
				str += "著者: " + authors + "<br></td>";
				str += "<td><div><td><img class='bookmarklistToDetailBtn' id='bookmarklistToDetail"+poster[j].id.toString()+"' src='img/detailinfo.png' style='zoom: 3%;'> </img></div>";
			}
		}

	}


	
	//postdataをループする、各ポスターの情報を取り出す
	
	str += '</table>'

	$(this).html(str);

	$(".bookmarklistToMapBtn").bookmarklistToMapPage();
	$(".bookmarklistToDetailBtn").bookmarklistToDetailPage();

	return posters;
};


//ポスターリスト画面の各「詳細情報」ボタンをクリックする時
$.fn.bookmarklistToDetailPage = function() {
	$(this).on("touchstart", function(e) {
		// ポスターのIDを取得する
		var posterid = Number(e.target.id.substring(20));
		console.log(posterid);
		sessionStorage.setItem("previousPage", "posterListPage");
		listToDetail(posterid);
	});
};

//ポスターリスト画面の各「これどこ？」ボタンをクリックする時
$.fn.bookmarklistToMapPage = function() {
	$(this).on("touchstart", function(e) {
		// ポスターのIDを取得する
		var posterid = Number(e.target.id.substring(17));
		$(".topPageButton").removeClass("ui-btn-active ui-state-persist");
		$(".posterListPageButton").removeClass("ui-btn-active ui-state-persist");
		$(".bookmarkListPageButton").removeClass("ui-btn-active ui-state-persist");
		$(".posterMapPageButton").addClass("ui-btn-active ui-state-persist");
		listToMap(posterid);
	});
};

