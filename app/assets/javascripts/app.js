(function () {
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
		var wid = $(window).width() + "px",
				hei = $(window).height(),
				headh = $('#header').height(),
				radioh = hei - headh,
				layer = $('#wrapper,#waiting,#modal_window,#alert_success,#alert_warning'),
				rects = document.getElementsByClassName("rect");

		hei = hei + "px";
		radioh = radioh + "px";

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
			timerWaiting01.reject();
			changeLayer('#waiting','#form_main');
			timerWaiting01Func();
		});

//呼び出し起動
		$('.form-group label').on('touchstart', function(e) {
			var callName,
					callImg;
			timerWaiting01.reject();
			timerRefresh = $.wait(40000).done(function(){
				location.reload(false);
			}).fail(function(){
				console.log('timerRefreshreject');
			});
			callName = $(this).text().replace(/[\n\r]/g,'');
			callImg = $(this).find('img').attr('src');
			$('#modal_window p').text(callName+'を呼び出しますか？');
			$('#alert_success .nametxt').text(callName);
			$('#alert_success .img-rounded').attr('src',callImg);
			$('#modal_window').show();
		});

		$('#modal_window #call').on('touchstart', function(e) {
			timerRefresh.reject();
			$('#modal_window').hide();
			$('#contactform').submit();
			timerSuccess01 = $.wait(2000).done(function(){
				changeLayer('#form_main','#alert_success');
				$('#alert_success .maintxt-response,#alert_success .img-response').hide();
				$('#alert_success .maintxt').fadeIn(1000);
			}).fail(function(){
				console.log('timerSuccess01reject');
			});
			timerMain01 = $.wait(35000).done(function(){
				changeLayer('#alert_success','#form_main');
			}).fail(function(){
				console.log('timerMain01reject');
			});
			timerWaiting01Func();
		});

		$('#modal_window #cancel').on('touchstart', function(e) {
			timerRefresh.reject();
			$('#modal_window').hide();
			timerWaiting01Func();
		});


//呼び出し後キャンセルボタン
		$('#alert_success .cancelbtn').on('touchstart', function(e) {
			request.abort();
			timerMain01.reject();
			timerWaiting01.reject();
			changeLayer('#alert_success','#form_main');
			timerWaiting01Func();
		});

		$('#alert_warning .cancelbtn').on('touchstart', function(e) {
			request.abort();
			timerMain02.reject();
			timerWaiting01.reject();
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
				$('#alert_success .maintxt').hide();
				$('#alert_success .maintxt-response,#alert_success .img-response').show();
			}).fail(function(XMLHttpRequest, textStatus, errorThrown) {
				//エラー;
				var errStatus = XMLHttpRequest.status;
				console.log(errStatus);
				if(errStatus == 503){
					$('#alert_warning .maintxt').html('誰もいないようです<br>弊社の営業時間は月曜日から金曜日の<br>10時半から20時までです');
				}else{
					$('#alert_warning .maintxt').html('うまくつながらないようです<br>あらためて呼び出してください<br>それでもつながらない場合はドアからお入りいただき、<br>エントランスの呼び鈴を鳴らしてください');
				}
				timerSuccess01.reject();
				timerMain01.reject();
				timerWaiting01.reject();
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
			});
		});
	});
}());

/*
$(function() {
		$('#phoneNumber').intlTelInput({
				responsiveDropdown: true,
				autoFormat: true,
				utilsScript: 'assets/intl-phone/libphonenumber/build/utils.js'
		});
		var $form = $('#contactform'),
				$submit = $('#contactform input[type=submit]');

		// Intercept form submission
		$form.on('submit', function(e) {
				// Prevent form submission and repeat clicks
				e.preventDefault();
				$submit.attr('disabled', 'disabled');

				// Submit the form via ajax
				$.ajax({
						url:'/call',
						method:'POST',
						data: $form.serialize()
				}).done(function(data) {
						//alert('呼び出し中です。しばらくお待ちください。');
						$('#alert_success').show();
						setTimeout(function(){
								$('#alert_success').hide();
						},10000);
				}).fail(function() {
						//alert('エラーが発生しました。');
						$('#alert_warning').show();
						setTimeout(function(){
								$('#alert_warning').hide();
						},10000);
				}).always(function() {
						$submit.removeAttr('disabled');
				});

		});
});
*/