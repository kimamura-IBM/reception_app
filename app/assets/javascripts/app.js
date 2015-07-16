(function () {
//待機画面共通タイマー（秒数は自由に変更できる）
	var waitTime,
			waitTimer;

	function startTimer(waitTime){
		waitTimer=setInterval(function(){
			$('#form_main').fadeOut(1000);
			$('#waiting').fadeIn(1000);
			stopTimer();
		} , waitTime);
	}

	function stopTimer(){
		clearInterval(waitTimer);
	}

	$(function() {
//待機画面メイン起動
		$('#waiting').on('touchstart', function(e) {
			$('#waiting').fadeOut(1000);
			$('#form_main').fadeIn(1000);
			waitTime = 20000;
			startTimer(waitTime);
		});

//メイン画面タップ起動
		$('.form-group label').on('touchstart', function(e) {
			if(window.confirm('呼び出しますか？')){
				$('#contactform').submit();
			}else{
			}
		});

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

//読み込み時の処理
		window.onload = function() {
			for(var i=0; i<rects.length; i++) {
				$(rects[i]).css('width', wid);
				$(rects[i]).css('height', hei);
			}
			$('.rect').show();
			$('#waiting,#alert_success,#alert_warning').hide();
			waitTime = 20000;
			startTimer(waitTime);
		};

//呼び出しフォーム
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