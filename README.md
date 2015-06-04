PosMApp （forked from Tsukuba S.A.Y. version）
=======
PosMAppは、ポスター展示を含むシンポジウムのための、スマートフォン用Webアプリケーションです。  
短めの口頭発表の後にポスター発表を行うスケジュールのシンポジウムを主に対象とし、  
タイムテーブル、発表リストからポスターマップ上での展示位置の表示、  
マップ上でのポスター検索やブックマーク機能があるので、  
ポスターのチラシを手に展示会を回る場合と比べ、  
スマートフォンを片手に興味深い発表に目を付けて優先的にポスター訪問するなど、  
実りのあるポスター展示会を過ごすことができます。

現在、 Tsukuba S.A.Y. 版からフォークして、オーソライズツール対応バージョンを開発中。

## DEIM バージョンから変更した部分

* data.js にjson ファイルURL を指定するようにしました。
* 会場図とタイムテーブルがない場合はメニューに No Dataと表示するようにしました。
* json に以下の情報がなくても適宜適切な表示ができるようにしました。（json ファイルサンプルは www/api/data_nosession.json をご参照ください。）
 - コメンテータがない場合は表示しない
 - セッション情報がない場合は発表情報一覧をセッションごとに分けない
 - ポスター開催日を１日からn 日まで対応
 - トップページとポスターマップの背景画像を指定できるようにしました
 - エリア情報が含まれていない場合は、エリアズーム機能を使わないようにしました