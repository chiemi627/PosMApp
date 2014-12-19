// ポスターデータのJSONを置いておく（仮）

// positionとのマッピング
// i要素目がicon-position.jsにあるpositionのj要素目に対応させる
var position_map = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117];

var presen =
[
{"presenid":"A1-1","title":"YAGOを用いた拡張固有表現抽出における新出語のクラス推定精度の検証","abstract":"固有表現抽出は，文書中から人名・地名・組織名などの固有表現を抜き出す技術であり，一般的に数種類程度の固有表現クラスに分類する．最近では 100 クラス以上に細分化・階層化した拡張固有表現が提案されているが，高い精度で拡張固有表現抽出を実現した事例は少ない．その中で，HYENA と呼ばれる手法は，Wikipedia の情報を利用することで F 値 0.9 程度の性能を達成している．しかし，この性能は Wikipedia の情報に依存するものであり，Wikipedia で定義されていないような新出語に対しては大きく精度が低下することが予測される．本研究では，HYENA の既出語と新出語に対する性能の差について検証し，また，その検証結果から，新出語に対応可能な手法のデザインについて模索する．","bookmark":0},
{"presenid":"A1-2","title":"Search for Images of Historical Objects Using Wikipedia","abstract":"We investigate the temporal image retrieval problem by utilizing knowledge from Wikipedia to help retrieve images. Since current search engines do not explicitly consider the time related to the objects displayed in images, we believe that our proposed temporal image retrieval algorithm can more completely satisfy search intentions. A search is done by inputting an entity name (with/without location and time information), and chronologically sorted search results are output tocapture the evolution of the queried entity and consider its co-occurrence with other historically important entities. We proposea novel way to map images to Wikipedia articles to utilize Wikipedia’s structure to estimate the historical importance ofdisplayed objects. A combination of criteria is proposed to measure the historical importance of images under entity evolutionscenarios and co-occurrence with other historically important objects.","bookmark":0},
{"presenid":"A1-4","title":"XML部分文書検索技術の Web 文書への適用","abstract":"NO DATA","bookmark":0},
{"presenid":"A2-2","title":"A Study of Many-Core Hardware Accelerated Hadoop MapReduce","abstract":"NO DATA","bookmark":0},
{"presenid":"A2-3","title":"フラッシュストレージ環境におけるアウトオブオーダ型データベースエンジンOoODEの実験的クエリ処理性能評価","abstract":"NO DATA","bookmark":0},
{"presenid":"A2-4","title":"128ノード規模のストレージインテンシブクラスタ環境におけるアウトオブオーダ型並列データ処理系の性能評価と実データを用いた有効性の検証","abstract":"NO DATA","bookmark":0},
{"presenid":"A2-5","title":"車載センサを用いたEVエネルギー消費ログDBの長期運用実験と精度評価","abstract":"NO DATA","bookmark":0},
{"presenid":"A4-1","title":"Win-Winランキングによる写真を介した対面コミュニケーション支援","abstract":"NO DATA","bookmark":0},
{"presenid":"A4-2","title":"An Exploratory Search Method for Presentation Contents based on User Browsing Behavior","abstract":"NO DATA","bookmark":0},
{"presenid":"A4-3","title":"振る舞い協調フィルタリングによるソーシャルストリームの効率的な閲覧手法","abstract":"NO DATA","bookmark":0},
{"presenid":"A4-4","title":"ソーシャル・カウンセリング： SNSは闘病者の心を癒すのか？","abstract":"NO DATA","bookmark":0},
{"presenid":"A4-5","title":"電子ドキュメント上での書き込みを支援する手書きアノテーション認識モデル","abstract":"NO DATA","bookmark":0},
{"presenid":"B1-1","title":"配信型授業のコミュニケーションを支援するコメント共有手法の提案","abstract":"NO DATA","bookmark":0},
{"presenid":"B1-2","title":"SNS・Web間のシームレスなコミュニケーションシステムの提案","abstract":"NO DATA","bookmark":0},
{"presenid":"B2-2","title":"SNS の投稿内容に含まれる地域情報を用いたアカウント到達可能性算出モデルの検討","abstract":"NO DATA","bookmark":0},
{"presenid":"B2-4","title":"投稿活動遷移に着目したマイクロブログユーザプロファイリングに関する一検討","abstract":"NO DATA","bookmark":0},
{"presenid":"B2-5","title":"スマートフォンユーザのコンテキストと利用アプリケーションの関連性調査","abstract":"NO DATA","bookmark":0},
{"presenid":"B2-6","title":"ツイート数上限付きのオンラインリツイート推薦手法","abstract":"NO DATA","bookmark":0},
{"presenid":"B3-3","title":"Twitterから有益な日常情報を発見するための特徴語による地域ユーザの検索","abstract":"NO DATA","bookmark":0},
{"presenid":"B3-4","title":"Twitterからの地域特徴語辞書の構築とその観光情報検索への応用","abstract":"NO DATA","bookmark":0},
{"presenid":"B3-5","title":"Tweetを用いた歩行者推移推定モデルに基づく二輪車ナビシステムの提案","abstract":"NO DATA","bookmark":0},
{"presenid":"B3-6","title":"マイクロブログマイニングによるイベント時の駅混雑原因の特定と状況の把握","abstract":"NO DATA","bookmark":0},
{"presenid":"B4-1","title":"大規模ソーシャルネットワークにおける時間的構造変化の解析手法の研究","abstract":"NO DATA","bookmark":0},
{"presenid":"B4-2","title":"外国人向け観光プロモーション支援のためのソーシャルメディア分析手法の研究","abstract":"NO DATA","bookmark":0},
{"presenid":"B4-3","title":"実世界ユーザ行動予測のための閲覧履歴に基づく欠損データ補間手法の提 案","abstract":"NO DATA","bookmark":0},
{"presenid":"B4-4","title":"ゲーミフィケーションをユーザに無負担で導入するためのLocal Expert抽出手法 ～浜松を対象とした地域ブログサイト全量解析によるVenueの発見～","abstract":"NO DATA","bookmark":0},
{"presenid":"B4-5","title":"大規模ソーシャル・ネットワークシミュレーション基盤の設計と実装","abstract":"NO DATA","bookmark":0},
{"presenid":"C1-2","title":"Wikipedia掲載事項との間の差分に着目したウェブ検索者の情報要求観点の分析","abstract":"NO DATA","bookmark":0},
{"presenid":"C1-3","title":"三事象間の因果関係分析のための因果関係ネットワーク構築の一手法","abstract":"NO DATA","bookmark":0},
{"presenid":"C1-5","title":"差異を明確化する「たとえ」の提示によるコンテンツ選別支援手法","abstract":"NO DATA","bookmark":0},
{"presenid":"C1-6","title":"タスクの汎化と特化に着目したWebからのタスク検索","abstract":"NO DATA","bookmark":0},
{"presenid":"C2-4","title":"対立語抽出に基づくWebニュースからのロボット漫才台本自動生成手法の提案","abstract":"NO DATA","bookmark":0},
{"presenid":"C3-1","title":"英語形容詞の語順決定システム","abstract":"NO DATA","bookmark":0},
{"presenid":"C3-2","title":"検索・分析のための手順文章からの意味構造抽出","abstract":"NO DATA","bookmark":0},
{"presenid":"C3-3","title":"条件付き連語を用いた名詞句の文脈抽出","abstract":"NO DATA","bookmark":0},
{"presenid":"C3-4","title":"流行先読みブロガー発見のための流行語分析手法","abstract":"NO DATA","bookmark":0},
{"presenid":"C4-1","title":"実生活tweetに対する局面の階層的推定法","abstract":"NO DATA","bookmark":0},
{"presenid":"C4-2","title":"Twitterにおけるトピックの同定手法の提案とそれを用いたトピックの変遷解析","abstract":"NO DATA","bookmark":0},
{"presenid":"C4-3","title":"時系列テキストにおけるクエリ依存の局所的なEmerging Topic の抽出","abstract":"NO DATA","bookmark":0},
{"presenid":"D1-3","title":"列指向バッファ管理を用いたMapReduceの高速化","abstract":"NO DATA","bookmark":0},
{"presenid":"D1-4","title":"大規模環境におけるHDFSの効率的なレプリカ再配置制御に向けたシミュレーション評価","abstract":"NO DATA","bookmark":0},
{"presenid":"D1-5","title":"カラム構造と圧縮によるHadoopからPostgreSQLへのロード高速化に関する実験と考察","abstract":"NO DATA","bookmark":0},
{"presenid":"D1-6","title":"Hadoopによる時系列画像分散データマイニングシステムの検討 -気象衛星画像への応用-","abstract":"NO DATA","bookmark":0},
{"presenid":"D2-1","title":"TPC-H実行時省電力化のためのストレージ制御手法の提案","abstract":"NO DATA","bookmark":0},
{"presenid":"D2-5","title":"Pub/Sub基盤におけるユーザエージェントの移動によるシステム最適化に関する一考察","abstract":"NO DATA","bookmark":0},
{"presenid":"D4-1","title":"カーネル法を用いたスパイク系列集合間の距離計測","abstract":"NO DATA","bookmark":0},
{"presenid":"D4-2","title":"大規模時系列データからの特徴自動抽出","abstract":"NO DATA","bookmark":0},
{"presenid":"D4-3","title":"マハラノビス距離によるトラフィック異常検知へのMSD法の適用","abstract":"NO DATA","bookmark":0},
{"presenid":"E1-1","title":"電力使用時の多様な状況組み合わせが可能なDBの構築と情報提示による評価","abstract":"社会的な電力削減要求が高まる中，オフィスなどの業務部門においては，生産性を損なわず，なおかつ効\n果的な電力削減が求められている．そのためには電力使用時の人・モノ・環境などの状況に応じて適切な措置をとる必要があるが，現在施行されている節電マニュアルや電力管理システムなどは，ミクロな状況まで考慮した情報を示すことはできない．本研究では，電力ログをタイムラインデータとして蓄積し，センサや情報端末により取得される人・モノ・環境の状況をタグ付けすることで，電力使用時の状況をキーとした検索・集約により消費電力を可視化する DB の構築を行う．また，その DB を用いた情報提示システムを実装し，実験により有用性の評価を行った．","bookmark":0},
{"presenid":"E1-2","title":"多様な検索結果を表示する可視化手法に関する一検討","abstract":"ユーザが求める多様で複雑な情報要求に応えるには，単純なキーワード検索で特定の Web ページを探すだ\nけでは不十分であり，関連するいくつかの Web ページを辿りながら横断的に閲覧する探索的な情報検索を行わなければならない．複数ページにまたがる情報を閲覧・収集するためには，ハイパーリンクを辿る方法などがある．しかし，ハイパーリンクを辿って閲覧ページを次々に切り替えることは，情報の整理や理解が難しくなるなどの問題がある．本研究では，検索条件を満たす候補ページへのリンク集である検索結果の横断的検索の支援を目的に，具体的には，検索結果を俯瞰しながら簡単に情報の比較・理解が出来る， 新しい検索インターフェースを提案する．検索結果を二次元平面に配置し，ハイパーリンク関係に基づいて個々のページ間の関係や全体の分布を可視化する．","bookmark":0},
{"presenid":"E1-3","title":"ジオタグ付き写真を用いた土地被覆の分析と可視化","abstract":"地球の地表面を表す土地被覆図は，衛星観測データに基づいて作成されるが，既存の土地被覆図を比較し\nた場合の一致率はあまり高くない．これは，既存の土地被覆の分類手法の違いや，分類の際に用いる衛星観測データの観測条件などによる誤差に起因する．実際に現地に赴けば，正しい土地被覆が判断できるが，全世界を網羅するのは現実的ではない．そこで我々は，Flickr などの写真共有サイトに投稿された大量の写真の画像特徴量，Exif，ジオタグを用いて，撮影場所付近の土地被覆を判別する手法を提案する．また，提案手法で得られた土地被覆を集約し，OpenLayers 上に土地被覆図として可視化を行うシステムを実装した．","bookmark":0},
{"presenid":"E1-4","title":"階層型SOMに基づいた大規模月地震波形の可視化システム","abstract":"1969 年から 1977 年の間，アポロミッションにおいて，膨大な量の月地震データが取得された．これらの\nデータを用いた先行研究により，複数の月地震波形間において高い類似性が発見されている．この波形の類似性は，震源の分類や，月地震の発生原因の究明において重要な情報であり，現在も人手による月地震の分類が行われている．しかし，膨大な量の月地震データを人手によって分類することは困難である．そこで，本研究では，月地震データの分類研究を促進するため，波形の類似性を考慮した月地震データの可視化システムを実装する．本システムでは，月地震データを 2 次元空間上へマッピングするため，階層型 Self-Organizing Map を用いる．また，システムのバックエンドに Hadoop を用いることにより，膨大な量の月地震データの処理に対応する．","bookmark":0},
{"presenid":"E1-5","title":"Twitterタイムラインの話題の可視化の一手法","abstract":"Twitter では，多くのユーザにより多様な話題に関する情報が投稿され，タイムラインが時々刻々と変化す\nるため，有用な情報を収集することが困難である．そこで本稿では，Twitter タイムラインの話題の内容理解を支援するために，その話題を可視化する一手法を提案する．提案する可視化手法は，タイムラインに現れる名詞や形容詞等の単語の出現頻度等を利用して，主要な話題や，時間経過による話題の変化を可視化する．実験では，Twitter のツイート検索で得られるツイートのログを利用し，提案手法の有効性を評価する．","bookmark":0},
{"presenid":"E1-6","title":"スポーツ競技戦略決定支援のための移動軌跡のマイニングと可視化システム","abstract":"本研究は，スポーツ競技の過去の試合データからチーム戦術や傾向を理解，発見するための，プレーデー\nタの複合的可視化システムを提案する．スポーツ競技では，過去の試合内容からチーム戦術を分析することは，競技水準の向上のために非常に大切である．チーム戦術分析には計数データと選手の動き (移動軌跡) が重要視される．しかし，スポーツ競技でも容易にデータを取得できるようになったため，大量の計数データと選手の動きを集約し，直感的に分かり易く表示するための技術が求められている．そこで本研究では，アメリカンフットボールを対象としたスポーツ競技戦略可視化システム (SportsVis) を提案する．本システムでは，コーチや選手等の利用者が入力したプレー状況を満たすプレーを求め，そのプレーでの選手の動きパターンを可視化することができる．本システムによりシーン別の戦術や傾向を見つけ出せるため，次戦術の決定や新戦術の立案に活用することができる．","bookmark":0},
{"presenid":"E2-1","title":"創造力テスト　；　n-gramを用いた拡散的思考力の定量的評価","abstract":"近年，デジタル機器の普及や技術の体系化により，一般の人々であってもアプリの開発や小説の執筆など創造的\nな活動を行える環境が整っている．人々が自らの創造的な能力を定量的に評価する簡便な手法があれば，それを高めるための努力に関してフィードバックを得ることができ，より効果的な訓練を行うことも可能になると考えられる．本研究では創造性のひとつの重要な要素とされる拡散的思考力に着目し，それを定量的に評価する手法を提案する．その実装として，被験者に数値を一定時間入力させ，その n-gram の偏り具合を求めることで拡散的思考力を推定する「創造力テスト」を提案する．実験の結果，多くの被験者において同じパターンの数列が繰り返し入力されていることが明らかとなった．これによって拡散的思考は意識的に行わなければ困難であり，訓練が必要であるという結果が示唆された．","bookmark":0},
{"presenid":"E2-2","title":"実世界プログラミングのための分散人力処理環境","abstract":"コンピュータの動作の手順書としてプログラムが、人間の行動の手順書としてマニュアルやレシピといっ\nたものが存在するが、両者を同一のフォーマットで記述することは実現されていない。本論文では、プログラム上で人の行動を記述するためのプログラミング環境 BabaScript を提案する。また、提案するプログラミング環境の応用例について述べ、考察を行う。BabaScript は、人への命令構文と命令を受け取り、値を返すことのできるクライアントアプリケーションを組み合わせることで実現する。BabaScript を用いることで、人とコンピュータの処理をプログラムという同一のフォーマットで記述し、実行することができるようになる。","bookmark":0},
{"presenid":"E2-3","title":"マイクロタスク型クラウドソーシング処理の変換","abstract":"近年，Amazon Mechanical Turk 等のマイクロタスク型クラウドソーシングプラットフォームの登場によ\nり，それらを利用した問題解決が注目を集めている．本論文では，そのようなマイクロタスク型クラウドソーシング処理の最適化について議論する．具体的には，与えられたマイクロタスクの集合を，同等の結果が期待される他のマイクロタスクの集合に変換する手法を提案する．本提案手法の特徴は次の通りである．(1) 既に存在するマイクロタスクからの書き換えを可能にする． (2) 既存のリレーショナル代数演算式等の変換とは異なる変換が可能になる．本論文では，変換手法の説明に加え，提案手法を利用することにより様々な観点からの最適化を行えることを示す．","bookmark":0},
{"presenid":"E2-4","title":"クラウドソーシングによるデータ列挙のための分割統治手法","abstract":"近年，Web 上の多くのサービスにおいて，クラウドソーシングによるデータ列挙が広く行われている．例\nえば，レストランのレビューサイトにおけるレストラン名の列挙は，不特定多数の人々によって行われている．このように，クラウドソーシングによるデータ列挙は，機械的にデータを列挙することが困難である場合に有用である．本論文では，マイクロタスク型のクラウドソーシングによるデータ列挙処理について焦点を当て，再現率が高くなるようにタスク分割を行いながらデータ列挙を行う手法を提案する．提案手法では，分割統治のプロセスに群衆が参加するという点に特徴がある．本論文は，提案手法の説明に加え，シミュレーションを用いた提案手法の詳細な評価について報告する．","bookmark":0},
{"presenid":"E3-2","title":"フリック入力型マップ操作機能を有するモバイルEMMA","abstract":"我々は，モバイル端末向け Focus+Glue+Context マップの開発を進めている．このマップシステムの操作\n手法として，フリック入力型マップ操作手法を提案し，その実現方法について述べる．この操作手法は，簡単なタッチ操作とフリック入力を組み合わせて，Focus，Glue，Context 領域の描画パラメータを変更できる手法である．EMMAにおいては，特に Focus の描画パラメータ ( 縮尺，大きさ，位置) を変更する操作が重要である．この手法では，領域のフリック入力により，その領域の縮尺と大きさを変更することができる．簡単なフリック入力により操作できるため，モバイル端末のような小さな画面上で地図を操作する場合でも，各領域の縮尺や大きさの変更操作が容易になる．また，提案手法を実装した Android 端末用マップシステムのプロトタイプについて述べる．","bookmark":0},
{"presenid":"E3-3","title":"学術論文閲覧支援インタフェースの試作","abstract":"iPad や Nexus といったタブレット端末，また Kindle や kobo 等で代表される電子書籍端末が普及したこ\nとにより，電子媒体で文書を読むことが以前よりも身近になった．電子書籍端末は複数の文書等を携帯する際，紙媒体よりも優位性を発揮するが，熟読する際には依然紙媒体のほうが優位である．そこで本稿では，iPad における電子文書から必要な情報を素早く参照することができる，学術論文の閲覧支援を目的とした学術論文閲覧インタフェースを提案する．提案する学術論文閲覧インタフェースは，学術論文 PDF から抽出した重要語に複数の有用な Web コンテンツへのリンクを生成し，そのリンク先のページを提示する．メディア間の移動が多い読み方に注目し，実験では本インタフェースと ibooks で，被験者が選択した単語の該当ページに到達するまでの擬似インタラクション数を比較した．その実験において，本インタフェースは他リーダよりも少ない擬似インタラクション数で該当ページに到達することができた．","bookmark":0},
{"presenid":"E3-4","title":"入力ストローク数削減による高速手書き入力手法","abstract":"コンピュータ上での手書き文字入力は認識エンジンが判別可能な品質で記入しようとするとキーボードによる\n入力と比較して入力に時間がかかる．一方，品質を犠牲にして高速に手書き入力しようとすると誤認識が増える結果となり，入力速度が低下してしまう．こうした問題に対し既存研究では，単語の予測入力や入力途中に随時変換することにより入力速度を向上させている．しかし多くの従来のシステムでは，各漢字を完全に書いた後でないと認識結果に書きたい文字が表示されず，画数の多い漢字を認識させるためには手の動きと時間をかなり要することになる．本研究では，単語を書く際に各漢字を途中までしか書かなくとも，希望する単語を動的に予測し，手書き入力を高速化する手法を提案する．評価実験では，提案手法と既存手法で同じテキストを入力し，入力にかかる時間とストローク数を記録する．提案手法を用いた場合，入力にかかる時間は削減できなかったが，ストローク数が既存手法より少なくなることより，提案手法の有効性を示すことができた．","bookmark":0},
{"presenid":"E3-6","title":"AssureNote: Wiki ベースのGSNオーサリングツール","abstract":"本論文では，Wiki 記法ベースの GSN エディタ AssureNote の提案を行う．GSN は，Assurance Cases\nのビジュアル表記法として標準化が進み，オーサリングツールが開発されている．しかし，従来のオーサリングツールは，図形エディタをベースにしており，エディタを利用出来ない環境では Assurance Cases の再利用性がえられない．我々は，Wiki 記法ベースの表記法を提案し，データ再利用性とグラフィカル編集の両立を実現するツールを開発した．","bookmark":0},
{"presenid":"E4-1","title":"Flickrは海岸線を描けるか？","abstract":"Flickr などで共有されている写真には，写真の撮影位置を示すジオタグや，写真が何であるかを表すタグ\nが付与されているものが数多くある．我々は，任意のタグ X を持つ写真群の，世界地図空間における撮影位置の偏在が，X の地理的な特徴を示しているのではないかという仮説を立てた．この仮説を検証するために，「beach」というタグから「海岸線」を描画する事に取り組んだ．我々の調査で，「beach」とタグづけられた写真の約 80%が実際の海岸線から 500m 以内で撮影されている事が分かった．そこで，その膨大な撮影位置の点群から，海岸線を描く手法を提案し評価する．提案手法は特定の地物のみに対応するものではないが，明確な正解を有する海岸線に着目して定量的な評価をする事でソーシャルタギング全体の信憑性の推定ができると考えている．","bookmark":0},
{"presenid":"E4-2","title":"写真に付与されたジオタグに基づいた道草発見","abstract":"NO DATA","bookmark":0},
{"presenid":"E4-3","title":"ジオタグ付き写真を用いたホットスポットの分類と関連の抽出","abstract":"NO DATA","bookmark":0},
{"presenid":"E4-4","title":"位置情報を利用した情報配信のための習慣度算出手法","abstract":"NO DATA","bookmark":0},
{"presenid":"F1-2","title":"論文とプレゼンテーションスライドの部分対応付けにおける粒度の検証","abstract":"NO DATA","bookmark":0},
{"presenid":"F1-3","title":"階層的意味を考慮したプレゼンテーションスライド図形の構造化手法の提案","abstract":"NO DATA","bookmark":0},
{"presenid":"F1-4","title":"演習問題個人化のためのユーザ添削に基づく理解箇所判定手法","abstract":"NO DATA","bookmark":0},
{"presenid":"F1-5","title":"講義型授業における受講状態の推定法の提案","abstract":"NO DATA","bookmark":0},
{"presenid":"F1-6","title":"プレゼンテーションスライドに対する分割手法の提案と講義スライドへの応用","abstract":"NO DATA","bookmark":0},
{"presenid":"F2-5","title":"歴史資料の新たな利活用を目的とした小袖屏風DBの設計と高度知的検索システムの構築","abstract":"NO DATA","bookmark":0},
{"presenid":"F2-6","title":"記事アーカイブを用いた歴史的事象の言及分析","abstract":"NO DATA","bookmark":0},
{"presenid":"F3-2","title":"因果関係分析に基づく投資関連商品の比較手法の検討","abstract":"NO DATA","bookmark":0},
{"presenid":"F3-3","title":"機械学習を用いたターゲティング広告の表示回数予測","abstract":"NO DATA","bookmark":0},
{"presenid":"F3-4","title":"オンライン広告におけるCVR予測モデルの素性評価","abstract":"NO DATA","bookmark":0},
{"presenid":"F3-5","title":"店舗クラスタを用いた購買行動に関するライフスタイルの推定","abstract":"NO DATA","bookmark":0},
{"presenid":"F4-1","title":"動向情報の根拠探索のためのテレビ番組からの図表画像検出","abstract":"NO DATA","bookmark":0},
{"presenid":"F4-2","title":"ダイジェスト映像自動生成のための観点の入れ替わりに基づいた特徴的シーン抽出","abstract":"NO DATA","bookmark":0},
{"presenid":"F4-3","title":"動画共有サイトにおける動画ナビゲーションのためのコメント要約手法","abstract":"NO DATA","bookmark":0},
{"presenid":"F5-1","title":"アセンブリ構造を持つ３Dモデルの投影データを用いた探索方法","abstract":"NO DATA","bookmark":0},
{"presenid":"P1-1","title":"Twitterユーザの印象選好の可視化","abstract":"NO DATA","bookmark":0},
{"presenid":"P1-2","title":"ソーシャルメディアの分析によるイベント開催支援","abstract":"NO DATA","bookmark":0},
{"presenid":"P1-3","title":"ブログ投稿数の時系列変化を考慮した対象キーワードの影響度分析手法の提案","abstract":"NO DATA","bookmark":0},
{"presenid":"P1-4","title":"対象トピックとの関連度の高いブロガーコミュニティ判定方式の実験的評価","abstract":"NO DATA","bookmark":0},
{"presenid":"P1-5","title":"場所に焦点を当てた複数ブログの自動要約","abstract":"NO DATA","bookmark":0},
{"presenid":"P2-1","title":"ラフ集合を用いた感性のモデル化に基づく推薦手法の提案","abstract":"NO DATA","bookmark":0},
{"presenid":"P2-2","title":"アイテムに対する認知度とユーザ評価を考慮したSerendipity指向情報推薦方式","abstract":"NO DATA","bookmark":0},
{"presenid":"P2-3","title":"類似度分析に基づく未知レシピへのメタデータ自動付与方式の提案","abstract":"NO DATA","bookmark":0},
{"presenid":"P2-4","title":"ナビ利用を伴う群集移動の分析に基づいた経路選択における集合知獲得手法の提案","abstract":"NO DATA","bookmark":0},
{"presenid":"P2-5","title":"身体データの解析による健康情報マイニング","abstract":"NO DATA","bookmark":0},
{"presenid":"P3-1","title":"映像の地理的メタデータに基づくストリートビュー制御方式","abstract":"NO DATA","bookmark":0},
{"presenid":"P3-2","title":"測域センサデータのリアルタイム可視化システム","abstract":"NO DATA","bookmark":0},
{"presenid":"P3-3","title":"グラフインタフェースにおけるクエリ操作に基づく検索結果予見システム","abstract":"NO DATA","bookmark":0},
{"presenid":"P3-4","title":"果物の販売促進のためのWebサイト構築","abstract":"NO DATA","bookmark":0},
{"presenid":"P3-5","title":"Analyzing Dissemination Processes of Mail-based Disaster Information Systems -A Case Study of Typhoon Man-yi in 2013-","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-4","title":"謎のX","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-5","title":"謎のX","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-6","title":"謎のX","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-7","title":"謎のX","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-8","title":"謎のX","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-9","title":"謎のX","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-10","title":"謎のX","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-11","title":"謎のX","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-12","title":"謎のX","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-13","title":"謎のX","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-14","title":"謎のX","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-15","title":"謎のX","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-16","title":"謎のX","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-17","title":"謎のX","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-18","title":"謎のX","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-19","title":"謎のX","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-20","title":"謎のX","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-21","title":"謎のX","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-22","title":"謎のX","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-23","title":"謎のX","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-24","title":"謎のX","abstract":"NO DATA","bookmark":0},
{"presenid":"X3-25","title":"謎のX","abstract":"NO DATA","bookmark":0}
];

var presents = [
{"sessionid":"A1","presenid":"A1-1"},
{"sessionid":"A1","presenid":"A1-2"},
{"sessionid":"A1","presenid":"A1-4"},
{"sessionid":"A2","presenid":"A2-2"},
{"sessionid":"A2","presenid":"A2-3"},
{"sessionid":"A2","presenid":"A2-4"},
{"sessionid":"A2","presenid":"A2-5"},
{"sessionid":"A4","presenid":"A4-1"},
{"sessionid":"A4","presenid":"A4-2"},
{"sessionid":"A4","presenid":"A4-3"},
{"sessionid":"A4","presenid":"A4-4"},
{"sessionid":"A4","presenid":"A4-5"},
{"sessionid":"B1","presenid":"B1-1"},
{"sessionid":"B1","presenid":"B1-2"},
{"sessionid":"B2","presenid":"B2-2"},
{"sessionid":"B2","presenid":"B2-4"},
{"sessionid":"B2","presenid":"B2-5"},
{"sessionid":"B2","presenid":"B2-6"},
{"sessionid":"B3","presenid":"B3-3"},
{"sessionid":"B3","presenid":"B3-4"},
{"sessionid":"B3","presenid":"B3-5"},
{"sessionid":"B3","presenid":"B3-6"},
{"sessionid":"B4","presenid":"B4-1"},
{"sessionid":"B4","presenid":"B4-2"},
{"sessionid":"B4","presenid":"B4-3"},
{"sessionid":"B4","presenid":"B4-4"},
{"sessionid":"B4","presenid":"B4-5"},
{"sessionid":"C1","presenid":"C1-2"},
{"sessionid":"C1","presenid":"C1-3"},
{"sessionid":"C1","presenid":"C1-5"},
{"sessionid":"C1","presenid":"C1-6"},
{"sessionid":"C2","presenid":"C2-4"},
{"sessionid":"C3","presenid":"C3-1"},
{"sessionid":"C3","presenid":"C3-2"},
{"sessionid":"C3","presenid":"C3-3"},
{"sessionid":"C3","presenid":"C3-4"},
{"sessionid":"C4","presenid":"C4-1"},
{"sessionid":"C4","presenid":"C4-2"},
{"sessionid":"C4","presenid":"C4-3"},
{"sessionid":"D1","presenid":"D1-3"},
{"sessionid":"D1","presenid":"D1-4"},
{"sessionid":"D1","presenid":"D1-5"},
{"sessionid":"D1","presenid":"D1-6"},
{"sessionid":"D2","presenid":"D2-1"},
{"sessionid":"D2","presenid":"D2-5"},
{"sessionid":"D4","presenid":"D4-1"},
{"sessionid":"D4","presenid":"D4-2"},
{"sessionid":"D4","presenid":"D4-3"},
{"sessionid":"E1","presenid":"E1-1"},
{"sessionid":"E1","presenid":"E1-2"},
{"sessionid":"E1","presenid":"E1-3"},
{"sessionid":"E1","presenid":"E1-4"},
{"sessionid":"E1","presenid":"E1-5"},
{"sessionid":"E1","presenid":"E1-6"},
{"sessionid":"E2","presenid":"E2-1"},
{"sessionid":"E2","presenid":"E2-2"},
{"sessionid":"E2","presenid":"E2-3"},
{"sessionid":"E2","presenid":"E2-4"},
{"sessionid":"E3","presenid":"E3-2"},
{"sessionid":"E3","presenid":"E3-3"},
{"sessionid":"E3","presenid":"E3-4"},
{"sessionid":"E3","presenid":"E3-6"},
{"sessionid":"E4","presenid":"E4-1"},
{"sessionid":"E4","presenid":"E4-2"},
{"sessionid":"E4","presenid":"E4-3"},
{"sessionid":"E4","presenid":"E4-4"},
{"sessionid":"F1","presenid":"F1-2"},
{"sessionid":"F1","presenid":"F1-3"},
{"sessionid":"F1","presenid":"F1-4"},
{"sessionid":"F1","presenid":"F1-5"},
{"sessionid":"F1","presenid":"F1-6"},
{"sessionid":"F2","presenid":"F2-5"},
{"sessionid":"F2","presenid":"F2-6"},
{"sessionid":"F3","presenid":"F3-2"},
{"sessionid":"F3","presenid":"F3-3"},
{"sessionid":"F3","presenid":"F3-4"},
{"sessionid":"F3","presenid":"F3-5"},
{"sessionid":"F4","presenid":"F4-1"},
{"sessionid":"F4","presenid":"F4-2"},
{"sessionid":"F4","presenid":"F4-3"},
{"sessionid":"F5","presenid":"F5-1"},
{"sessionid":"P1","presenid":"P1-1"},
{"sessionid":"P1","presenid":"P1-2"},
{"sessionid":"P1","presenid":"P1-3"},
{"sessionid":"P1","presenid":"P1-4"},
{"sessionid":"P1","presenid":"P1-5"},
{"sessionid":"P2","presenid":"P2-1"},
{"sessionid":"P2","presenid":"P2-2"},
{"sessionid":"P2","presenid":"P2-3"},
{"sessionid":"P2","presenid":"P2-4"},
{"sessionid":"P2","presenid":"P2-5"},
{"sessionid":"P3","presenid":"P3-1"},
{"sessionid":"P3","presenid":"P3-2"},
{"sessionid":"P3","presenid":"P3-3"},
{"sessionid":"P3","presenid":"P3-4"},
{"sessionid":"P3","presenid":"P3-5"},
{"sessionid":"X3","presenid":"X3-4"},
{"sessionid":"X3","presenid":"X3-5"},
{"sessionid":"X3","presenid":"X3-6"},
{"sessionid":"X3","presenid":"X3-7"},
{"sessionid":"X3","presenid":"X3-8"},
{"sessionid":"X3","presenid":"X3-9"},
{"sessionid":"X3","presenid":"X3-10"},
{"sessionid":"X3","presenid":"X3-11"},
{"sessionid":"X3","presenid":"X3-12"},
{"sessionid":"X3","presenid":"X3-13"},
{"sessionid":"X3","presenid":"X3-14"},
{"sessionid":"X3","presenid":"X3-15"},
{"sessionid":"X3","presenid":"X3-16"},
{"sessionid":"X3","presenid":"X3-17"},
{"sessionid":"X3","presenid":"X3-18"},
{"sessionid":"X3","presenid":"X3-19"},
{"sessionid":"X3","presenid":"X3-20"},
{"sessionid":"X3","presenid":"X3-21"},
{"sessionid":"X3","presenid":"X3-22"},
{"sessionid":"X3","presenid":"X3-23"},
{"sessionid":"X3","presenid":"X3-24"},
{"sessionid":"X3","presenid":"X3-25"}
];

var session = [];

var commentator = [];

var poster = [];

var author =

[
{"presenid":"A1-1","name":"真嶋 温佳","belongs":"大阪大学","first":1}
{"presenid":"A1-1","name":"白川 真澄","belongs":"大阪大学","first":0}
{"presenid":"A1-1","name":"原 隆浩","belongs":"大阪大学","first":0}
{"presenid":"A1-1","name":"西尾 章治郎","belongs":"大阪大学","first":0}
{"presenid":"A1-2","name":"Zhang Yating","belongs":"Kyoto University","first":1}
{"presenid":"A1-2","name":"Jatowt Adam","belongs":"Kyoto University","first":0}
{"presenid":"A1-2","name":"Tanaka Katsumi","belongs":"Kyoto University","first":0}
{"presenid":"A1-4","name":"欅 惇志","belongs":"奈良先端科学技術大学院大学","first":1}
{"presenid":"A1-4","name":"宮崎 純","belongs":"東京工業大学","first":0}
{"presenid":"A1-4","name":"波多野 賢治","belongs":"同志社大学","first":0}
{"presenid":"A1-4","name":"山本 豪志朗","belongs":"奈良先端科学技術大学院大学","first":0}
{"presenid":"A1-4","name":"武富 貴史","belongs":"奈良先端科学技術大学院大学","first":0}
{"presenid":"A1-4","name":"加藤 博一","belongs":"奈良先端科学技術大学院大学","first":0}
{"presenid":"A2-2","name":"Luo Min","belongs":"NTT","first":1}
{"presenid":"A2-2","name":"Honjo Toshimori","belongs":"NTT","first":0}
{"presenid":"A2-3","name":"早水 悠登","belongs":"東京大学","first":1}
{"presenid":"A2-3","name":"合田 和生","belongs":"東京大学","first":0}
{"presenid":"A2-3","name":"喜連川 優","belongs":"東京大学／国立情報学研究所","first":0}
{"presenid":"A2-4","name":"山田 浩之","belongs":"東京大学","first":1}
{"presenid":"A2-4","name":"合田 和生","belongs":"東京大学","first":0}
{"presenid":"A2-4","name":"喜連川 優","belongs":"東京大学","first":0}
{"presenid":"A2-5","name":"萩本 真太朗","belongs":"横浜国立大学","first":1}
{"presenid":"A2-5","name":"出縄 誠","belongs":"横浜国立大学","first":0}
{"presenid":"A2-5","name":"林 拓也","belongs":"横浜国立大学","first":0}
{"presenid":"A2-5","name":"讃井 崚","belongs":"横浜国立大学","first":0}
{"presenid":"A2-5","name":"富井 尚志","belongs":"横浜国立大学","first":0}
{"presenid":"A2-5","name":"本藤 祐樹","belongs":"横浜国立大学","first":0}
{"presenid":"A4-1","name":"武田 十季","belongs":"九州大学","first":1}
{"presenid":"A4-1","name":"牛尼 剛聡","belongs":"九州大学","first":0}
{"presenid":"A4-2","name":"王 元元","belongs":"兵庫県立大学","first":1}
{"presenid":"A4-2","name":"河合 由起子","belongs":"京都産業大学","first":0}
{"presenid":"A4-2","name":"角谷 和俊","belongs":"兵庫県立大学","first":0}
{"presenid":"A4-3","name":"顔 洪","belongs":"九州大学","first":1}
{"presenid":"A4-3","name":"牛尼 剛聡","belongs":"九州大学","first":0}
{"presenid":"A4-4","name":"仲村 哲明","belongs":"京都大学","first":1}
{"presenid":"A4-4","name":"久保 圭","belongs":"京都大学","first":0}
{"presenid":"A4-4","name":"臼田 泰如","belongs":"京都大学","first":0}
{"presenid":"A4-4","name":"荒牧 英治","belongs":"京都大学／JSTさきがけ","first":0}
{"presenid":"A4-5","name":"浅井 洋樹","belongs":"早稲田大学","first":1}
{"presenid":"A4-5","name":"山名 早人","belongs":"早稲田大学／国立情報学研究所","first":0}
{"presenid":"B1-1","name":"川上 未来","belongs":"筑波大学","first":1}
{"presenid":"B1-1","name":"佐藤 哲司","belongs":"筑波大学","first":0}
{"presenid":"B1-2","name":"安井 豪基","belongs":"京都産業大学","first":1}
{"presenid":"B1-2","name":"王 元元","belongs":"兵庫県立大学","first":0}
{"presenid":"B1-2","name":"細川 侑士","belongs":"京都産業大学","first":0}
{"presenid":"B1-2","name":"河合 由起子","belongs":"京都産業大学","first":0}
{"presenid":"B1-2","name":"秋山 豊和","belongs":"京都産業大学","first":0}
{"presenid":"B1-2","name":"角谷 和俊","belongs":"兵庫県立大学","first":0}
{"presenid":"B2-2","name":"吉國 綺乃","belongs":"お茶の水女子大学","first":1}
{"presenid":"B2-2","name":"吉國 綺乃","belongs":"筑波大学","first":0}
{"presenid":"B2-2","name":"小林 一郎","belongs":"お茶の水女子大学","first":0}
{"presenid":"B2-4","name":"山口 裕太郎","belongs":"筑波大学","first":1}
{"presenid":"B2-4","name":"山本 修平","belongs":"筑波大学","first":0}
{"presenid":"B2-4","name":"佐藤 哲司","belongs":"筑波大学","first":0}
{"presenid":"B2-5","name":"大澤 純","belongs":"大阪大学","first":1}
{"presenid":"B2-5","name":"岩田 麻佑 ","belongs":"KDDI","first":0}
{"presenid":"B2-5","name":"原 隆浩","belongs":"大阪大学","first":0}
{"presenid":"B2-5","name":"西尾 章治郎","belongs":"大阪大学","first":0}
{"presenid":"B2-6","name":"趙 驍騏","belongs":"京都大学","first":1}
{"presenid":"B2-6","name":"田島 敬史","belongs":"京都大学","first":0}
{"presenid":"B3-3","name":"田原 琢士","belongs":"京都大学","first":1}
{"presenid":"B3-3","name":"馬 強","belongs":"京都大学","first":0}
{"presenid":"B3-4","name":"長谷川 馨亮","belongs":"京都大学","first":1}
{"presenid":"B3-4","name":"馬 強","belongs":"京都大学","first":0}
{"presenid":"B3-4","name":"吉川 正俊","belongs":"京都大学","first":0}
{"presenid":"B3-5","name":"中井 寿一","belongs":"京都産業大学","first":1}
{"presenid":"B3-5","name":"山本 美佳","belongs":"京都産業大学","first":0}
{"presenid":"B3-5","name":"河合 由起子","belongs":"京都産業大学","first":0}
{"presenid":"B3-5","name":"川崎 洋","belongs":"鹿児島大学","first":0}
{"presenid":"B3-5","name":"赤木 康宏","belongs":"鹿児島大学","first":0}
{"presenid":"B3-5","name":"若宮 翔子","belongs":"兵庫県立大学","first":0}
{"presenid":"B3-5","name":"角谷 和俊","belongs":"兵庫県立大学","first":0}
{"presenid":"B3-6","name":"村山 敬祐","belongs":"首都大学東京","first":1}
{"presenid":"B3-6","name":"佐伯 圭介","belongs":"首都大学東京","first":0}
{"presenid":"B3-6","name":"遠藤 雅樹","belongs":"首都大学東京","first":0}
{"presenid":"B3-6","name":"横山 昌平","belongs":"静岡大学","first":0}
{"presenid":"B3-6","name":"石川 博","belongs":"首都大学東京","first":0}
{"presenid":"B4-1","name":"渡部 優","belongs":"東京工業大学／JST CREST","first":1}
{"presenid":"B4-1","name":"上野 晃司","belongs":"東京工業大学／JST CREST","first":0}
{"presenid":"B4-1","name":"鈴村 豊太郎","belongs":"IBM Research／University College Dublin／JST CREST","first":0}
{"presenid":"B4-2","name":"佐伯 圭介","belongs":"首都大学東京","first":1}
{"presenid":"B4-2","name":"村山 敬祐","belongs":"首都大学東京","first":0}
{"presenid":"B4-2","name":"遠藤 雅樹","belongs":"首都大学東京","first":0}
{"presenid":"B4-2","name":"横山 昌平","belongs":"静岡大学","first":0}
{"presenid":"B4-2","name":"石川 博","belongs":"首都大学東京","first":0}
{"presenid":"B4-3","name":"丸山 直樹","belongs":"京都産業大学","first":1}
{"presenid":"B4-3","name":"若宮 翔子","belongs":"兵庫県立大学","first":0}
{"presenid":"B4-3","name":"細川 侑士","belongs":"京都産業大学","first":0}
{"presenid":"B4-3","name":"河合 由起子","belongs":"京都産業大学","first":0}
{"presenid":"B4-3","name":"秋山 豊和","belongs":"京都産業大学","first":0}
{"presenid":"B4-3","name":"角谷 和俊","belongs":"兵庫県立大学","first":0}
{"presenid":"B4-4","name":"三浦 惇貴","belongs":"静岡大学","first":1}
{"presenid":"B4-4","name":"廣田 雅春","belongs":"静岡大学","first":0}
{"presenid":"B4-4","name":"野澤 浩樹","belongs":"シーポイント","first":0}
{"presenid":"B4-4","name":"横山 昌平","belongs":"静岡大学","first":0}
{"presenid":"B4-5","name":"岡田 瑞穂","belongs":"東京工業大学／JST CREST","first":1}
{"presenid":"B4-5","name":"鈴村 豊太郎","belongs":"IBM Research／University College Dublin／JST CREST","first":0}
{"presenid":"C1-2","name":"守谷 一朗","belongs":"筑波大学","first":1}
{"presenid":"C1-2","name":"小池 大地","belongs":"筑波大学","first":0}
{"presenid":"C1-2","name":"今田 貴和","belongs":"筑波大学","first":0}
{"presenid":"C1-2","name":"宇津呂 武仁","belongs":"筑波大学","first":0}
{"presenid":"C1-2","name":"河田 容英","belongs":"ログワークス","first":0}
{"presenid":"C1-2","name":"神門 典子","belongs":"国立情報学研究所","first":0}
{"presenid":"C1-3","name":"津川 敦朗","belongs":"岡山大学","first":1}
{"presenid":"C1-3","name":"新妻 弘崇","belongs":"岡山大学","first":0}
{"presenid":"C1-3","name":"太田 学","belongs":"岡山大学","first":0}
{"presenid":"C1-5","name":"松尾 昇","belongs":"九州大学","first":1}
{"presenid":"C1-5","name":"牛尼 剛聡","belongs":"九州大学","first":0}
{"presenid":"C1-6","name":"加藤 龍","belongs":"京都大学","first":1}
{"presenid":"C1-6","name":"大島 裕明","belongs":"京都大学","first":0}
{"presenid":"C1-6","name":"山本 岳洋","belongs":"京都大学","first":0}
{"presenid":"C1-6","name":"加藤 誠","belongs":"京都大学","first":0}
{"presenid":"C1-6","name":"田中 克己","belongs":"京都大学","first":0}
{"presenid":"C2-4","name":"真下 遼","belongs":"甲南大学","first":1}
{"presenid":"C2-4","name":"灘本 明代","belongs":"甲南大学","first":0}
{"presenid":"C3-1","name":"松井 悠太郎","belongs":"岡山大学","first":1}
{"presenid":"C3-1","name":"新妻 弘崇","belongs":"岡山大学","first":0}
{"presenid":"C3-1","name":"太田 学","belongs":"岡山大学","first":0}
{"presenid":"C3-2","name":"前田 浩邦","belongs":"京都大学","first":1}
{"presenid":"C3-2","name":"山肩 洋子","belongs":"京都大学","first":0}
{"presenid":"C3-2","name":"森 信介","belongs":"京都大学","first":0}
{"presenid":"C3-3","name":"園田 匠","belongs":"法政大学","first":1}
{"presenid":"C3-3","name":"三浦 孝夫","belongs":"法政大学","first":0}
{"presenid":"C3-4","name":"朝永 聖也","belongs":"京都産業大学","first":1}
{"presenid":"C3-4","name":"中島 伸介","belongs":"京都産業大学","first":0}
{"presenid":"C3-4","name":"稲垣 陽一","belongs":"きざしカンパニー","first":0}
{"presenid":"C3-4","name":"中本 レン","belongs":"きざしカンパニー","first":0}
{"presenid":"C3-4","name":"張 建偉","belongs":"筑波技術大学","first":0}
{"presenid":"C4-1","name":"山本 修平","belongs":"筑波大学","first":1}
{"presenid":"C4-1","name":"佐藤 哲司","belongs":"筑波大学","first":0}
{"presenid":"C4-2","name":"藤野 巖","belongs":"東海大学","first":1}
{"presenid":"C4-2","name":"星野 祐子","belongs":"東海大学","first":0}
{"presenid":"C4-3","name":"遠藤 結城","belongs":"NTT","first":1}
{"presenid":"C4-3","name":"戸田 浩之","belongs":"NTT","first":0}
{"presenid":"C4-3","name":"鷲崎 誠司","belongs":"NTT","first":0}
{"presenid":"D1-3","name":"小沢 健史","belongs":"NTT","first":1}
{"presenid":"D1-3","name":"及川 一樹","belongs":"NTT","first":0}
{"presenid":"D1-3","name":"本庄 利守","belongs":"NTT","first":0}
{"presenid":"D1-3","name":"鬼塚 真","belongs":"NTT","first":0}
{"presenid":"D1-4","name":"日開 朝美","belongs":"お茶の水女子大学","first":1}
{"presenid":"D1-4","name":"竹房 あつ子","belongs":"産業技術総合研究所","first":0}
{"presenid":"D1-4","name":"中田 秀基","belongs":"産業技術総合研究所","first":0}
{"presenid":"D1-4","name":"小口 正人","belongs":"お茶の水女子大学","first":0}
{"presenid":"D1-5","name":"若森 拓馬","belongs":"NTT","first":1}
{"presenid":"D1-5","name":"山室 健","belongs":"NTT","first":0}
{"presenid":"D1-5","name":"寺本 純司","belongs":"NTT","first":0}
{"presenid":"D1-5","name":"西村 剛","belongs":"NTT","first":0}
{"presenid":"D1-6","name":"西前 光","belongs":"高知大学","first":1}
{"presenid":"D1-6","name":"三好 智也","belongs":"高知大学","first":0}
{"presenid":"D1-6","name":"本田 理恵","belongs":"高知大学","first":0}
{"presenid":"D2-1","name":"飯村 奈穂","belongs":"お茶の水女子大学","first":1}
{"presenid":"D2-1","name":"西川 記史","belongs":"東京大学","first":0}
{"presenid":"D2-1","name":"中野 美由紀","belongs":"芝浦工業大学","first":0}
{"presenid":"D2-1","name":"小口 正人","belongs":"お茶の水女子大学","first":0}
{"presenid":"D2-5","name":"檜垣 貴良","belongs":"京都産業大学","first":1}
{"presenid":"D2-5","name":"秋山 豊和","belongs":"京都産業大学","first":0}
{"presenid":"D4-1","name":"古谷 遼平","belongs":"筑波大学","first":1}
{"presenid":"D4-1","name":"手塚 太郎","belongs":"筑波大学","first":0}
{"presenid":"D4-2","name":"松原 靖子","belongs":"熊本大学","first":1}
{"presenid":"D4-2","name":"櫻井 保志","belongs":"熊本大学","first":0}
{"presenid":"D4-2","name":"Christos Faloutsos","belongs":"Carnegie Mellon University","first":0}
{"presenid":"D4-3","name":"松井 友哉","belongs":"京都産業大学","first":1}
{"presenid":"D4-3","name":"秋山 豊和","belongs":"京都産業大学","first":0}
{"presenid":"E1-1","name":"藤原 国久","belongs":"横浜国立大学","first":1}
{"presenid":"E1-1","name":"高橋 慶多","belongs":"横浜国立大学","first":0}
{"presenid":"E1-1","name":"細澤 直人","belongs":"横浜国立大学","first":0}
{"presenid":"E1-1","name":"高橋 佳久","belongs":"横浜国立大学","first":0}
{"presenid":"E1-1","name":"西本 直樹","belongs":"横浜国立大学","first":0}
{"presenid":"E1-1","name":"富井 尚志","belongs":"横浜国立大学","first":0}
{"presenid":"E1-1","name":"本藤 祐樹","belongs":"横浜国立大学","first":0}
{"presenid":"E1-2","name":"玉田 雄基","belongs":"筑波大学","first":1}
{"presenid":"E1-2","name":"佐藤 哲司","belongs":"筑波大学","first":0}
{"presenid":"E1-3","name":"大羽 洋隆","belongs":"静岡大学","first":1}
{"presenid":"E1-3","name":"廣田 雅春","belongs":"静岡大学","first":0}
{"presenid":"E1-3","name":"石川 博","belongs":"首都大学東京","first":0}
{"presenid":"E1-3","name":"横山 昌平","belongs":"静岡大学","first":0}
{"presenid":"E1-4","name":"後藤 康路","belongs":"静岡大学","first":1}
{"presenid":"E1-4","name":"山田 竜平","belongs":"国立天文台","first":0}
{"presenid":"E1-4","name":"山本 幸生","belongs":"宇宙航空研究開発機構","first":0}
{"presenid":"E1-4","name":"石川 博","belongs":"首都大学東京","first":0}
{"presenid":"E1-4","name":"横山 昌平","belongs":"静岡大学","first":0}
{"presenid":"E1-5","name":"松尾 哉太","belongs":"岡山大学","first":1}
{"presenid":"E1-5","name":"新妻 弘崇","belongs":"岡山大学","first":0}
{"presenid":"E1-5","name":"太田 学","belongs":"岡山大学","first":0}
{"presenid":"E1-6","name":"谷 俊廣","belongs":"立命館大学","first":1}
{"presenid":"E1-6","name":"黄 宏軒","belongs":"立命館大学","first":0}
{"presenid":"E1-6","name":"川越 恭二","belongs":"立命館大学","first":0}
{"presenid":"E2-1","name":"安政 駿","belongs":"筑波大学","first":1}
{"presenid":"E2-1","name":"手塚 太郎","belongs":"筑波大学","first":0}
{"presenid":"E2-2","name":"馬場 匠見","belongs":"慶應義塾大学","first":1}
{"presenid":"E2-2","name":"橋本 翔","belongs":"慶應義塾大学","first":0}
{"presenid":"E2-2","name":"増井 俊之","belongs":"慶應義塾大学","first":0}
{"presenid":"E2-3","name":"権守 健嗣","belongs":"筑波大学","first":1}
{"presenid":"E2-3","name":"森嶋 厚行","belongs":"筑波大学","first":0}
{"presenid":"E2-3","name":"北川 博之","belongs":"筑波大学","first":0}
{"presenid":"E2-4","name":"青木 秀人","belongs":"筑波大学","first":1}
{"presenid":"E2-4","name":"森嶋 厚行","belongs":"筑波大学","first":0}
{"presenid":"E3-2","name":"細井 純太","belongs":"名古屋工業大学","first":1}
{"presenid":"E3-2","name":"山本 大介","belongs":"名古屋工業大学","first":0}
{"presenid":"E3-2","name":"高橋 直久","belongs":"名古屋工業大学","first":0}
{"presenid":"E3-3","name":"前野 明子","belongs":"岡山大学","first":1}
{"presenid":"E3-3","name":"太田 学","belongs":"岡山大学","first":0}
{"presenid":"E3-3","name":"高須 淳宏","belongs":"国立情報学研究所","first":0}
{"presenid":"E3-4","name":"王 L)","belongs":"早稲田大学","first":1}
{"presenid":"E3-4","name":"鬼沢 和也","belongs":"早稲田大学","first":0}
{"presenid":"E3-4","name":"浅井 洋樹","belongs":"早稲田大学","first":0}
{"presenid":"E3-4","name":"山名 早人","belongs":"早稲田大学／国立情報学研究所","first":0}
{"presenid":"E3-6","name":"松村 哲郎","belongs":"横浜国立大学","first":1}
{"presenid":"E3-6","name":"志田 駿介","belongs":"横浜国立大学","first":0}
{"presenid":"E3-6","name":"倉光 君郎","belongs":"横浜国立大学","first":0}
{"presenid":"E4-1","name":"大森 雅己","belongs":"静岡大学","first":1}
{"presenid":"E4-1","name":"廣田 雅春","belongs":"静岡大学","first":0}
{"presenid":"E4-1","name":"石川 博","belongs":"首都大学東京","first":0}
{"presenid":"E4-1","name":"横山 昌平","belongs":"静岡大学","first":0}
{"presenid":"E4-2","name":"青山 賢","belongs":"静岡大学","first":1}
{"presenid":"E4-2","name":"廣田 雅春","belongs":"静岡大学","first":0}
{"presenid":"E4-2","name":"石川 博","belongs":"首都大学東京","first":0}
{"presenid":"E4-2","name":"横山 昌平","belongs":"静岡大学","first":0}
{"presenid":"E4-3","name":"白井 元浩","belongs":"静岡大学","first":1}
{"presenid":"E4-3","name":"廣田 雅春","belongs":"静岡大学","first":0}
{"presenid":"E4-3","name":"石川 博","belongs":"首都大学東京","first":0}
{"presenid":"E4-3","name":"横山 昌平","belongs":"静岡大学","first":0}
{"presenid":"E4-4","name":"林 亜紀","belongs":"NTT","first":1}
{"presenid":"E4-4","name":"松林 達史","belongs":"NTT","first":0}
{"presenid":"E4-4","name":"澤田 宏","belongs":"NTT","first":0}
{"presenid":"F1-2","name":"川上 優平","belongs":"京都大学","first":1}
{"presenid":"F1-2","name":"清水 敏之","belongs":"京都大学","first":0}
{"presenid":"F1-2","name":"吉川 正俊","belongs":"京都大学","first":0}
{"presenid":"F1-3","name":"櫻木 優輝","belongs":"立命館大学","first":1}
{"presenid":"F1-3","name":"青山 敦","belongs":"立命館大学","first":0}
{"presenid":"F1-3","name":"木村 文則","belongs":"立命館大学","first":0}
{"presenid":"F1-3","name":"前田 亮","belongs":"立命館大学","first":0}
{"presenid":"F1-4","name":"鈴木 尚樹","belongs":"工学院大学","first":1}
{"presenid":"F1-4","name":"北山 大輔","belongs":"工学院大学","first":0}
{"presenid":"F1-5","name":"清野 悠希","belongs":"筑波大学","first":1}
{"presenid":"F1-5","name":"佐藤 哲司","belongs":"筑波大学","first":0}
{"presenid":"F1-6","name":"坂本 祥之","belongs":"京都大学","first":1}
{"presenid":"F1-6","name":"清水 敏之","belongs":"京都大学","first":0}
{"presenid":"F1-6","name":"吉川 正俊","belongs":"京都大学","first":0}
{"presenid":"F2-5","name":"萩生田 明徳","belongs":"横浜国立大学","first":1}
{"presenid":"F2-5","name":"藤村 雄基","belongs":"横浜国立大学","first":0}
{"presenid":"F2-5","name":"富井 尚志","belongs":"横浜国立大学","first":0}
{"presenid":"F2-6","name":"田中 祥太郎","belongs":"京都大学","first":1}
{"presenid":"F2-6","name":"ヤトフト アダム","belongs":"京都大学","first":0}
{"presenid":"F2-6","name":"田中 克己","belongs":"京都大学","first":0}
{"presenid":"F3-2","name":"粟納 裕貴","belongs":"京都大学","first":1}
{"presenid":"F3-2","name":"馬 強","belongs":"京都大学","first":0}
{"presenid":"F3-2","name":"吉川 正俊","belongs":"京都大学","first":0}
{"presenid":"F3-3","name":"堀田 徹","belongs":"ヤフー","first":1}
{"presenid":"F3-3","name":"瀬賀 信一郎","belongs":"ヤフー","first":0}
{"presenid":"F3-3","name":"下羅 弘樹","belongs":"ヤフー","first":0}
{"presenid":"F3-3","name":"高木 潤","belongs":"ヤフー","first":0}
{"presenid":"F3-3","name":"田島 玲","belongs":"ヤフー","first":0}
{"presenid":"F3-4","name":"田頭 幸浩","belongs":"ヤフー","first":1}
{"presenid":"F3-4","name":"小野 真吾","belongs":"ヤフー","first":0}
{"presenid":"F3-4","name":"田島 玲","belongs":"ヤフー","first":0}
{"presenid":"F3-5","name":"土井 千章","belongs":"NTTドコモ","first":1}
{"presenid":"F3-5","name":"小西 哲平","belongs":"NTTドコモ","first":0}
{"presenid":"F3-5","name":"中川 智尋","belongs":"NTTドコモ","first":0}
{"presenid":"F3-5","name":"片桐 雅二","belongs":"NTTドコモ","first":0}
{"presenid":"F3-5","name":"稲村 浩","belongs":"NTTドコモ","first":0}
{"presenid":"F3-5","name":"太田 賢","belongs":"NTTドコモ","first":0}
{"presenid":"F4-1","name":"梅澤 啓史","belongs":"京都産業大学","first":1}
{"presenid":"F4-1","name":"宮森 恒","belongs":"京都産業大学","first":0}
{"presenid":"F4-2","name":"山内 嶺","belongs":"工学院大学","first":1}
{"presenid":"F4-2","name":"北山 大輔","belongs":"工学院大学","first":0}
{"presenid":"F4-3","name":"松原 宏和","belongs":"岡山大学","first":1}
{"presenid":"F4-3","name":"新妻 弘崇","belongs":"岡山大学","first":0}
{"presenid":"F4-3","name":"太田 学","belongs":"岡山大学","first":0}
{"presenid":"F5-1","name":"碓井 義彬","belongs":"首都大学東京","first":1}
{"presenid":"F5-1","name":"飛田 雄樹","belongs":"首都大学東京","first":0}
{"presenid":"F5-1","name":"王 天宇","belongs":"首都大学東京","first":0}
{"presenid":"F5-1","name":"片山 薫","belongs":"首都大学東京","first":0}
{"presenid":"P1-1","name":"鈴木 智也","belongs":"千葉工業大学","first":1}
{"presenid":"P1-1","name":"熊本 忠彦","belongs":"千葉工業大学","first":0}
{"presenid":"P1-2","name":"藤原 泰士","belongs":"広島市立大学","first":1}
{"presenid":"P1-2","name":"難波 英嗣","belongs":"広島市立大学","first":0}
{"presenid":"P1-2","name":"竹澤 寿幸","belongs":"広島市立大学","first":0}
{"presenid":"P1-3","name":"並木 賢太郎","belongs":"京都産業大学","first":1}
{"presenid":"P1-3","name":"朝永 聖也","belongs":"京都産業大学","first":0}
{"presenid":"P1-3","name":"中島 伸介","belongs":"京都産業大学","first":0}
{"presenid":"P1-3","name":"稲垣 陽一","belongs":"きざしカンパニー","first":0}
{"presenid":"P1-3","name":"中本 レン","belongs":"きざしカンパニー","first":0}
{"presenid":"P1-3","name":"田中 昇太郎","belongs":"きざしカンパニー","first":0}
{"presenid":"P1-3","name":"張 建偉","belongs":"筑波技術大学","first":0}
{"presenid":"P1-4","name":"寺田 有佑","belongs":"京都産業大学","first":1}
{"presenid":"P1-4","name":"朝永 聖也","belongs":"京都産業大学","first":0}
{"presenid":"P1-4","name":"小倉 僚","belongs":"京都産業大学","first":0}
{"presenid":"P1-4","name":"中島 伸介","belongs":"京都産業大学","first":0}
{"presenid":"P1-4","name":"稲垣 陽一","belongs":"きざしカンパニー","first":0}
{"presenid":"P1-4","name":"中本 レン","belongs":"きざしカンパニー","first":0}
{"presenid":"P1-4","name":"張 建偉","belongs":"筑波技術大学","first":0}
{"presenid":"P1-5","name":"前田 剛","belongs":"広島市立大学","first":1}
{"presenid":"P1-5","name":"河野 有希","belongs":"広島市立大学","first":0}
{"presenid":"P1-5","name":"石野 亜耶","belongs":"広島市立大学","first":0}
{"presenid":"P1-5","name":"難波 英嗣","belongs":"広島市立大学","first":0}
{"presenid":"P1-5","name":"竹澤 寿幸","belongs":"広島市立大学","first":0}
{"presenid":"P2-1","name":"西澤 健吾","belongs":"京都産業大学","first":1}
{"presenid":"P2-1","name":"荻野 晃大","belongs":"京都産業大学","first":0}
{"presenid":"P2-1","name":"中島 伸介","belongs":"京都産業大学","first":0}
{"presenid":"P2-2","name":"山崎 隼也","belongs":"京都産業大学","first":1}
{"presenid":"P2-2","name":"井狩 憲幸","belongs":"京都産業大学","first":0}
{"presenid":"P2-2","name":"中島 伸介","belongs":"京都産業大学","first":0}
{"presenid":"P2-3","name":"高田 夏彦","belongs":"京都産業大学","first":1}
{"presenid":"P2-3","name":"佐々江 駿","belongs":"京都産業大学","first":0}
{"presenid":"P2-3","name":"上田 真由美","belongs":"流通科学大学","first":0}
{"presenid":"P2-3","name":"中島 伸介","belongs":"京都産業大学","first":0}
{"presenid":"P2-3","name":"森下 幸俊","belongs":"大日本印刷株式会社","first":0}
{"presenid":"P2-4","name":"浅川 拓","belongs":"京都産業大学","first":1}
{"presenid":"P2-4","name":"濱田 恵輔","belongs":"京都産業大学","first":0}
{"presenid":"P2-4","name":"中島 伸介","belongs":"京都産業大学","first":0}
{"presenid":"P2-4","name":"北山 大輔","belongs":"工学院大学","first":0}
{"presenid":"P2-4","name":"角谷 和俊","belongs":"兵庫県立大学","first":0}
{"presenid":"P2-5","name":"北林 宏樹","belongs":"京都大学","first":1}
{"presenid":"P2-5","name":"吉川 正俊","belongs":"京都大学","first":0}
{"presenid":"P3-1","name":"三原 真衣子","belongs":"兵庫県立大学","first":1}
{"presenid":"P3-1","name":"王 元元","belongs":"兵庫県立大学","first":0}
{"presenid":"P3-1","name":"北山 大輔","belongs":"工学院大学","first":0}
{"presenid":"P3-1","name":"角谷 和俊","belongs":"兵庫県立大学","first":0}
{"presenid":"P3-2","name":"小島 光平","belongs":"神奈川工科大学","first":1}
{"presenid":"P3-2","name":"岡崎 有彩","belongs":"神奈川工科大学","first":0}
{"presenid":"P3-2","name":"佐藤 充","belongs":"神奈川工科大学","first":0}
{"presenid":"P3-2","name":"蒔田 圭佑","belongs":"神奈川工科大学","first":0}
{"presenid":"P3-2","name":"白井 暁彦","belongs":"神奈川工科大学","first":0}
{"presenid":"P3-2","name":"大塚 真吾","belongs":"神奈川工科大学","first":0}
{"presenid":"P3-3","name":"市倉 丈寛","belongs":"工学院大学","first":1}
{"presenid":"P3-3","name":"北山 大輔","belongs":"工学院大学","first":0}
{"presenid":"P3-4","name":"青木 孝文","belongs":"神奈川工科大学","first":1}
{"presenid":"P3-4","name":"笹本 芳和","belongs":"神奈川工科大学","first":0}
{"presenid":"P3-4","name":"小林 愛実","belongs":"神奈川工科大学","first":0}
{"presenid":"P3-4","name":"小林 寛高","belongs":"神奈川工科大学","first":0}
{"presenid":"P3-4","name":"大塚 真吾","belongs":"神奈川工科大学","first":0}
{"presenid":"P3-5","name":"友安 航太","belongs":"兵庫県立大学","first":1}
{"presenid":"P3-5","name":"王 元元","belongs":"兵庫県立大学","first":0}
{"presenid":"P3-5","name":"木村 玲欧","belongs":"兵庫県立大学","first":0}
{"presenid":"P3-5","name":"角谷 和俊","belongs":"兵庫県立大学","first":0}
{"presenid":"X3-4","name":"Xさん","belongs":"X大学","first":1}
{"presenid":"X3-5","name":"Xさん","belongs":"X大学","first":1}
{"presenid":"X3-6","name":"Xさん","belongs":"X大学","first":1}
{"presenid":"X3-7","name":"Xさん","belongs":"X大学","first":1}
{"presenid":"X3-8","name":"Xさん","belongs":"X大学","first":1}
{"presenid":"X3-9","name":"Xさん","belongs":"X大学","first":1}
{"presenid":"X3-10","name":"Xさん","belongs":"X大学","first":1}
{"presenid":"X3-11","name":"Xさん","belongs":"X大学","first":1}
{"presenid":"X3-12","name":"Xさん","belongs":"X大学","first":1}
{"presenid":"X3-13","name":"Xさん","belongs":"X大学","first":1}
{"presenid":"X3-14","name":"Xさん","belongs":"X大学","first":1}
{"presenid":"X3-15","name":"Xさん","belongs":"X大学","first":1}
{"presenid":"X3-16","name":"Xさん","belongs":"X大学","first":1}
{"presenid":"X3-17","name":"Xさん","belongs":"X大学","first":1}
{"presenid":"X3-18","name":"Xさん","belongs":"X大学","first":1}
{"presenid":"X3-19","name":"Xさん","belongs":"X大学","first":1}
{"presenid":"X3-20","name":"Xさん","belongs":"X大学","first":1}
{"presenid":"X3-21","name":"Xさん","belongs":"X大学","first":1}
{"presenid":"X3-22","name":"Xさん","belongs":"X大学","first":1}
{"presenid":"X3-23","name":"Xさん","belongs":"X大学","first":1}
{"presenid":"X3-24","name":"Xさん","belongs":"X大学","first":1}
{"presenid":"X3-25","name":"Xさん","belongs":"X大学","first":1}
];

var keyword =

[{"presenid":"X3-4","keyword":"ダミーポスター"}
{"presenid":"X3-5","keyword":"ダミーポスター"}
{"presenid":"X3-6","keyword":"ダミーポスター"}
{"presenid":"X3-7","keyword":"ダミーポスター"}
{"presenid":"X3-8","keyword":"ダミーポスター"}
{"presenid":"X3-9","keyword":"ダミーポスター"}
{"presenid":"X3-10","keyword":"ダミーポスター"}
{"presenid":"X3-11","keyword":"ダミーポスター"}
{"presenid":"X3-12","keyword":"ダミーポスター"}
{"presenid":"X3-13","keyword":"ダミーポスター"}
{"presenid":"X3-14","keyword":"ダミーポスター"}
{"presenid":"X3-15","keyword":"ダミーポスター"}
{"presenid":"X3-16","keyword":"ダミーポスター"}
{"presenid":"X3-17","keyword":"ダミーポスター"}
{"presenid":"X3-18","keyword":"ダミーポスター"}
{"presenid":"X3-19","keyword":"ダミーポスター"}
{"presenid":"X3-20","keyword":"ダミーポスター"}
{"presenid":"X3-21","keyword":"ダミーポスター"}
{"presenid":"X3-22","keyword":"ダミーポスター"}
{"presenid":"X3-23","keyword":"ダミーポスター"}
{"presenid":"X3-24","keyword":"ダミーポスター"}
{"presenid":"X3-25","keyword":"ダミーポスター"}
];


