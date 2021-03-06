// HTMLが呼ばれた時の初期化処理
// TODO: 非同期化
$(window).load(function() {
	// 非同期で初期化処理
	setTimeout(function(){
		init();

//		// 固有識別IDが設定されていなければ、初期設定する
		$("#acceptCollectLog").acceptCollectLog();
		$("#denyCollectLog").denyCollectLog();
		$(".selectUserCategoryButton").selectUserCategory();
		//initUserData(); //一時的にログ機能を止める
		//initの中に入れると、初めてダウンロードしてから、二回事件を与えて、一回クリックすると、ブックマーク機能がおかしくなる
		$("#bookmarkbutton").touchBookmark();
	},0);
	$("#loading").hide();

});


// 初期化順は全体に影響するので、追加変更する場合は注意
function init() {
	// トップページの大きさ調整
	$("#topPageFrame")
		.css("width", window.innerWidth)
		.css("max-width", window.innerWidth);

	//　ポスターデータのダウンロード
	//　各mapに関する変数に値を与える
    checkDataVersion();
	downloadPoster();

	// データ格納変数に据え置きの初期データを格納する
	initData();

	//ダウンロード失敗ダイアログのボタン
	$("#ReDownload").reDownload();
	$("#CancelDownload").cancelDownload();

	//再ダウンロードdivのイベント
	$(".reDownloadDIVCLS").reDownloadFun();
	//「再読み込み」ボタンを押す
	$(".ReDownloadBtn").reDownloadFun();

	// loading中の画像が表示するかどうかを判断する
	// none:非表示
	if(localStorage.getItem("downloadSuccess")){
		//topPageの「再ダウンロード」ボタンを隠す
		$("#reDownloadDIV").hide();
		//リスト画面とマップ画面のボタンを表示しない
		$(".ReDownloadBtn").hide();
	}

    $("#eventBasicInfo").showBasicInfo();
    setTopPageProperties();


	initPosterMap();

	// 会場の画像を1日目に変更
	setChangePosterMapDate();
	changePosterMapDate(1);

	// 現在はWebSQLは使用していない
	// initDB();

	// ポスターアイコンの作成
	// JSONから直接呼び出す感じで
	// とりあえずデフォルトはセッションID
	setPosterIcons();

	// Hammer on stage
	initHammer();

	$("#resetScaleButtonFrame").css("zoom", window.innerWidth/1200);

	// ポスターアイコンを表示
	// TODO:showじゃなくて別の単語に変えたい
	showPosterIcons();

	// ポスターのラベルのサイズを設定
	setLabelSize();

	// // 基本情報が選択されていたらそのポスターを強調表示
	// if (sessionStorage.getItem("posterid") !== null) {
	// 	changeBasicInfoPanel(true);
	// 	pflag[sessionStorage.getItem("posterid")] = "t";
	// 	showPosterIcons();
	// }
	removeAllPosterInfo();

	// // 検索中状態だったら検索にヒットしたポスターを強調表示
	// // FIXME:もう一度検索しているので読み込み時遅くなる
	// if (sessionStorage.getItem("searching") === "true") {
	// 	//document.getElementById("search-bar-title").value = sessionStorage.getItem("searchWord");
	// 	$("#search-bar-title").attr("value", sessionStorage.getItem("searchWord"));
	// 	searchAll(sessionStorage.getItem("searchWord"));
	// }
	sessionStorage.removeItem("searching");
	sessionStorage.removeItem("searchWord");

	// もしLocal Storageにbookmarksがなければ追加
	if (localStorage.getItem("bookmarks") === null) {
		localStorage.setItem("bookmarks", "");
	}

	// もしラベルが変更されていたらそれに変更
	if (sessionStorage.getItem("label") !== null) {
		changeLabel(sessionStorage.getItem("label"));
	}

	// マップ上にブックマークスターをつける
	showBookmarkIcons();

	// 詳細情報画面を表示する
	$("#detailinfobutton").goToDetailPage("click");

	// 各ポスターアイコンのタッチイベント
	$(".postericon").touchPoster();

	// 基本情報画面を閉じる
	$("#basicinfo")
		.css("width", window.innerWidth - 80)
		.css("max-width", window.innerWidth - 80)
		.closeBasicInfo();


	// ラベルを変更する
	$(".changelabel").changeLabel();
	$("#changelabel").css("zoom", window.innerWidth/1200);

	// ブックマークスターのタッチイベント
	//　初めてアクセスして、マップでブックマークすると二回実行する。それを防ぐため、一回だけ事件を与える
	// $("#bookmarkbutton").touchBookmark();

	// ---------- 詳細情報画面 ----------
	setDetails();
	
	// $("#bookmarkList").showBookmarkList();


	// トップページ
	$("#goToMap").goToMapPage("click");
	$("#goToList").goToListPage("click");
	if(timetable != null){
		$("#goToInformation").goToInformationPage("click");
	}
	else{
		$("#goToInformation").attr("src","img/topmenu/schedule_gray.png");
	}
	if(venuemap != null){
		$("#goToVenue").goToVenuePage("click");
	}
	else{
		$("#goToVenue").attr("src","img/topmenu/venue_gray.png");
	}

	//トップページの背景を設定する
    if(toppage_img != null){
    	$("#topPageBackground").attr("src",toppage_img);
    }

    if(posmapp_bg != null && posmapp_bg.length>0){
    	$("#mapImg").attr("src",posmapp_bg[0]);
    }


	// HTML5 history API
	// popstate : history記録を取得する時呼び出される事件
	// 使用者がブラウザの「戻る」と「進む」ボタンを使う時タブバーの強調表示バグを修正するため、追加した
	// firefox対応できない
	window.addEventListener('popstate', function(event) {  
		// クリックで、画面遷移する時、新history記録が生成する前に、event.stateはnull
		// ブラウザの「戻る」と「進む」ボタンを使う時historyの中に、歴史もう存在しているので、event.stateはnullではない
		// ここで、ブラウザの「戻る」と「進む」ボタンを監視するので、event.stateの中身でクリック遷移と「戻る」と「進む」ボタンを区別する
		if(event.state){
			// eventから、前のページのアドレスを取得する
			changeActiveTab(event.state.hash);
		}
	});

	$("#timeTable").showTimeTable();
	$("#presenList").showPresenList();
	$("#bookmarkList").showBookmarkList();

	//リスト切替ボタン
	$("#listIconAll").on("click", function() {
		// saveLog("show_page", {page:"presenListPage"})
    	changeShowList("presenlist");
	});
	$("#listIconStar").on("click", function() {
    	changeShowList("bookmark");
	});
	//最初、プレゼンリストが表示される
	$("#presenList").show();
	$("#bookmarkList").hide();
	$("#listIconAll").addClass("ui-btn-active");
	$("#listIconStar").removeClass("ui-btn-active");
	sessionStorage.setItem("currentListPage", "#presenListPage");


	// 詳細表示画面の戻るボタン
	$("#detailBackButton").backToPreviousPage();

	// タブバー
	// $(".tabbar").createTabbar();
	$(".topPageButton").goToTopPage("click");
	$(".posterMapPageButton").goToMapPage("click");
	$(".presenListPageButton").goToListPage("click");

	if(venuemap != null){
		$(".venuePageButton").goToVenuePage("click");
	}
	else{
		$(".venuePageButton").text("(No Map)");
		$(".venuePageButton").css("color","#999999");
		$(".venuePageButton").addClass("ui-disabled");

	}

	if(timetable != null){
		$(".informationPageButton").goToInformationPage("click");
	}
	else{
		$(".informationPageButton").text("(No Data)");
		$(".informationPageButton").css("color","#999999");
		$(".informationPageButton").addClass("ui-disabled");

	}


	// セッションリストから発表リストに飛ぶ
	$(".jumpToPresen").jumpToPresen();


	for (var d in timetable){
	    var dno = Number(d)+1;
	    $("#changeDate0"+dno).changeDate('sessiontable'+dno);
	}

	// 1日目のセッションを表示しておく

	$("#changeDate01").trigger('click');


	// 星の大きさをリセット
	$(".bookmarkstar").sizeUpBookmarkStar();

	// セッションリストから会場マップへジャンプする
	$(".jumpToVenue").jumpToVenue();

	// タブバーの選択表示を変更
	changeActiveTab(window.location.hash);
	// window.location.hash = "";
}