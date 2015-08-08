// Execute JavaScript on page load
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
            alert(data.message);
            setTimeout(function(){
                $('#alert_success').hide();
            },20000); //n秒間表示し続ける
        }).fail(function() {
            //alert('エラーが発生しました。');
            $('#alert_warning').show();
            setTimeout(function(){
                $('#alert_warning').hide();
            },20000); //n秒間表示し続ける
        }).always(function() {
            $submit.removeAttr('disabled');
        });

    });
});
