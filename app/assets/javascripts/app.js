(function () {
//待機画面タイマー（startTimerには、待機時間、消したい要素、表示したい要素を追加）
	var waitTime,
			hideLayer,
			showLayer,
			waitTimer;

	function startTimer(waitTime,hideLayer,showLayer){
		waitTimer=setInterval(function(){
			$(hideLayer).fadeOut(1000);
			$(showLayer).fadeIn(1000);
			stopTimer();
		} , waitTime);
	}

	function stopTimer(){
		clearInterval(waitTimer);
	}

	$(function() {
//読み込み時の処理
//画面組み立て
		var wid = $(window).width() + "px",
				hei = $(window).height(),
				headh = $('#header').height(),
				radioh = hei - headh,
				layer = $('#wrapper,#waiting,#alert_success,#alert_warning'),
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
			$('#waiting,#alert_success,#alert_warning').hide();
			startTimer(2000,'#form_main','#waiting');
		};

//待機画面メイン起動
		$('#waiting').on('touchstart', function(e) {
			stopTimer();
			startTimer(0,'#waiting','#form_main');
			startTimer(2000,'#form_main','#waiting');
		});

//呼び出し起動
		$('.form-group label').on('touchstart', function(e) {
			var pop = window.confirm('呼び出しますか？');
			stopTimer();
			setTimeout(function() {
				$(pop).hide();
			}, 2000);
			if(pop == true){
				$('#contactform').submit();
			}else{
				startTimer(2000,'#form_main','#waiting');
			}
		});

//キャンセルボタン
		$('#alert_success .cancelbtn').on('touchstart', function(e) {
			stopTimer();
			startTimer(0,'#alert_success','#form_main');
			startTimer(2000,'#form_main','#waiting');
		});

		$('#alert_warning .cancelbtn').on('touchstart', function(e) {
			stopTimer();
			startTimer(0,'#alert_warning','#form_main');
			startTimer(2000,'#form_main','#waiting');
		});

//呼び出しフォームの設定
		$('#phoneNumber').intlTelInput({
			responsiveDropdown: true,
			autoFormat: true,
			utilsScript: 'assets/intl-phone/libphonenumber/build/utils.js'
		});

//呼び出し処理
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
				stopTimer();
				startTimer(0,'#form_main','#alert_success');
				startTimer(2000,'#alert_success','#form_main');
			}).fail(function() {
				//alert('エラーが発生しました。');
				stopTimer();
				startTimer(0,'#form_main','#alert_warning');
				startTimer(2000,'#alert_warning','#form_main');
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