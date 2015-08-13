(function () {
//共通仕様フラグ
var callFlag = true;

//待機画面タイマー
var timerRefresh,
	timerWaiting01,
	timerMain01,
	timerMain02,
	timerSuccess01;

	$.extend({
		wait: function(waitTime){
			var dfd = $.Deferred();
			setTimeout(dfd.resolve, waitTime);
			return dfd;
		}
	});

	function changeLayer(hideLayer,showLayer){
		$(hideLayer).fadeOut(1000);
		$(showLayer).fadeIn(1000);
	}

//待機画面の予約(セット時点より60s後)
	function timerWaiting01Func(){
		timerWaiting01 = $.wait(60000).done(function(){
			changeLayer('#form_main','#waiting');
		}).fail(function(){
			console.log('timerWaiting01reject');
		});
	}


	$(function() {
//読み込み時の処理
//画面組み立て
		var wid = $(window).width() + 'px',
			hei = $(window).height(),
			headh = $('#header').height(),
			radioh = hei - headh,
			layer = $('#wrapper,#waiting,#modal_window,#alert_success,#alert_warning'),
			rects = document.getElementsByClassName('rect');

		hei = hei + 'px';
		radioh = radioh + 'px';

		layer.css('width', wid);
		layer.css('height', hei);

		$('#radio_area').css('height', radioh);

//読み込み終了直後の処理
		window.onload = function() {
			for(var i=0; i<rects.length; i++) {
				$(rects[i]).css('width', wid);
				$(rects[i]).css('height', hei);
			}
			$('.rect').show();
			$('#waiting,#modal_window,#alert_success,#alert_warning').hide();
			timerWaiting01Func();
		};

//待機画面メイン起動
		$('#waiting').on('touchstart', function(e) {
			e.preventDefault();
			timerWaiting01.reject();
			changeLayer('#waiting','#form_main');
			timerWaiting01Func();
		});

//呼び出し起動
var startLeft, startTop;
/* タッチできる環境なら true、そうでないなら false 。
   ここで先に判別しておきます。 */
var isTouch = ('ontouchstart' in window);

/* hoge のイベントを jQuery.on で捕獲します。 */
$('.form-group label').on({
	/* タッチの開始、マウスボタンを押したとき */
	'touchstart': function(e) {
		// ページが動いたり、反応を止める
		e.preventDefault();
		// 開始位置 X,Y 座標を覚えておく
		// （touchmove イベントを通らず終了したときのために必ず覚えておくこと）
		this.pageX = (isTouch ? event.changedTouches[0].pageX : e.pageX);
		this.pageY = (isTouch ? event.changedTouches[0].pageY : e.pageY);
		// タッチ処理を開始したフラグをたてる
		this.touched = true;
	},
	/* タッチしながら移動、マウスのドラッグ */
	'touchmove': function(e) {
		// 開始していない場合は動かないようにする
		// 過剰動作の防止
		if (!this.touched) {
			return;
		}
		// ページが動くのを止める
		e.preventDefault();
		// 移動先の hoge の位置を取得する
		this.left = this.left - (this.pageX - (isTouch ? event.changedTouches[0].pageX : e.pageX) );
		this.top = this.top - (this.pageY - (isTouch ? event.changedTouches[0].pageY : e.pageY) );
		// 位置 X,Y 座標を覚えておく
		this.pageX = (isTouch ? event.changedTouches[0].pageX : e.pageX);
		this.pageY = (isTouch ? event.changedTouches[0].pageY : e.pageY);
	},
	/* タッチの終了、マウスのドラッグの終了 */
	'touchend': function(e) {
		if (!this.touched) {
			return;
		}
		// タッチ処理は終了したため、フラグをたたむ
		this.touched = false;
		// 必要なら以下で最終の hoge の位置を取得し何かに使う
		moveLeft = startLeft - this.pageX;
		moveTop = startTop - this.pageY;
		console.log(moveLeft);
		console.log(moveTop);

		//タップ位置が動いているか判定し、動いてなければコンソール呼び出し
		if( -50 <= moveLeft ||moveLeft <= 50 || moveTop <= 50 || -50 <= moveTop ){
			var callName,
				callImg;
			timerWaiting01.reject();
			timerRefresh = $.wait(40000).done(function(){
				$('#modal_window').hide();
				timerWaiting01Func();
			}).fail(function(){
				console.log('timerRefreshreject');
			});
			callName = $(this).text().replace(/[\n\r]/g,'');
			callImg = $(this).find('img').attr('src');
			$('#modal_window p').html(callName+'を<br>呼び出しますか？');
			$('#alert_success .nametxt').text(callName);
			$('#alert_success .img-rounded').attr('src',callImg);
			$(this).find('input').prop('checked', true);
			$('#modal_window').show();
		}
	}
});
/*		$('.form-group label').on('touchend', function(e) {
			var callName,
				callImg;
			timerWaiting01.reject();
			timerRefresh = $.wait(40000).done(function(){
				$('#modal_window').hide();
				timerWaiting01Func();
			}).fail(function(){
				console.log('timerRefreshreject');
			});
			callName = $(this).text().replace(/[\n\r]/g,'');
			callImg = $(this).find('img').attr('src');
			$('#modal_window p').html(callName+'を<br>呼び出しますか？');
			$('#alert_success .nametxt').text(callName);
			$('#alert_success .img-rounded').attr('src',callImg);
			$(this).find('input').prop('checked', true);
			$('#modal_window').show();
		});
*/

		$('#modal_window #call').on('touchstart', function(e) {
			e.preventDefault();
			console.log('callFlag'+callFlag);
			if(callFlag == true){
				callFlag = false;
				console.log('callFlag'+callFlag);
				timerRefresh.reject();
				$('#modal_window').hide();
				console.log($("input[name='phone']:checked").val());
				$('#contactform').submit();
				timerSuccess01 = $.wait(2000).done(function(){
					changeLayer('#form_main','#alert_success');
					$('#alert_success .maintxt-response,#alert_success .img-response').hide();
					$('#alert_success .maintxt').fadeIn(1000);
				}).fail(function(){
					console.log('timerSuccess01reject');
				});
			}
		});

		$('#modal_window #cancel').on('touchstart', function(e) {
			e.preventDefault();
			timerRefresh.reject();
			$('#modal_window').hide();
			timerWaiting01Func();
		});


//呼び出し後キャンセルボタン
		$('#alert_success .cancelbtn').on('touchstart', function(e) {
			e.preventDefault();
			request.abort();
			changeLayer('#alert_success','#form_main');
			timerWaiting01Func();
		});

		$('#alert_warning .cancelbtn').on('touchstart', function(e) {
			e.preventDefault();
			request.abort();
			timerMain02.reject();
			changeLayer('#alert_warning','#form_main');
			timerWaiting01Func();
		});

//呼び出しフォームの設定
		$('#phoneNumber').intlTelInput({
			responsiveDropdown: true,
			autoFormat: true,
			utilsScript: 'assets/intl-phone/libphonenumber/build/utils.js'
		});

//呼び出し処理
		var $form = $('#contactform'),
			$submit = $('#contactform input[type=submit]'),
			request;

// Intercept form submission
		$form.on('submit', function(e) {
// Prevent form submission and repeat clicks
			e.preventDefault();
			$submit.attr('disabled', 'disabled');
// Submit the form via ajax
			request = $.ajax({
				url:'/call',
				method:'POST',
				data: $form.serialize()
			}).done(function(data) {
//呼び出し成功;
				console.log(data.message);
				if(data.message == 'yes'){
					$('#alert_success .maintxt').hide();
					$('#alert_success .maintxt-response,#alert_success .img-response').show();
					timerMain01 = $.wait(30000).done(function(){
						changeLayer('#alert_success','#form_main');
					}).fail(function(){
						console.log('timerMain01reject');
					});
					timerWaiting01Func();
				}else{
					$('#alert_warning .maintxt').html('誰もいないようです<br>弊社の営業時間は月曜日から金曜日の<br>10時半から20時までです');
					timerSuccess01.reject();
					changeLayer('#alert_success,#form_main','#alert_warning');
					timerMain02 = $.wait(30000).done(function(){
						changeLayer('#alert_warning','#form_main');
					}).fail(function(){
						console.log('timerMain02reject');
					});
					timerWaiting01Func();
				}
			}).fail(function(XMLHttpRequest) {
//エラー処理
				var errStatus = XMLHttpRequest.status;
				console.log(errStatus);
				if(errStatus == 503){
					$('#alert_warning .maintxt').html('誰もいないようです<br>弊社の営業時間は月曜日から金曜日の<br>10時半から20時までです');
				}else{
					$('#alert_warning .maintxt').html('うまくつながらないようです<br>あらためて呼び出してください<br>それでもつながらない場合はドアからお入りいただき、<br>エントランスの呼び鈴を鳴らしてください');
				}
				timerSuccess01.reject();
				if(errStatus == 0){
				}else{
					changeLayer('#alert_success,#form_main','#alert_warning');
					timerMain02 = $.wait(30000).done(function(){
						changeLayer('#alert_warning','#form_main');
					}).fail(function(){
						console.log('timerMain02reject');
					});
					timerWaiting01Func();
				}
			}).always(function() {
				$submit.removeAttr('disabled');
				callFlag = true;
				console.log('callFlag'+callFlag);
			});
		});

//休止モード
		$('#sleep_wrapper,#sleep_status,#sleep_attention').css({
			'width': wid,
			'min-height': hei
		});


		$('#sleep_attention .cancelbtn').on('touchstart', function(e) {
			e.preventDefault();
			changeLayer('#sleep_attention','#sleep_status');
		});

		$('#sleep_status .cancelbtn').on('touchstart', function(e) {
			e.preventDefault();
			changeLayer('#sleep_status','#sleep_attention');
		});
	});
}());
