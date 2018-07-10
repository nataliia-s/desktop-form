let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

$(document).ready(function () {

    $(window).resize(function () {
        $('.screen').css('min-height', $(window).height())
    }).resize();

    $('#userName').focus(function () {
        $(this).removeClass('error-placeholder error-border');
    }).blur(function () {
        if ($(this).val() == '') {
            $(this).attr("placeholder", "Введите свое имя").addClass('error-placeholder error-border');
        }
    });
    $('#userEmail').focus(function () {
        $(this).removeClass('error-placeholder error-border');
        $('.email-error').remove();
    }).blur(function () {
        $('.email-error').remove();
        if ($(this).val() == "") {
            $(this).attr("placeholder", "Неверный формат email").addClass('error-placeholder error-border');
        } else if (!emailReg.test($(this).val())) {
            $(this).after('<span class="email-error">Неверный формат email</span>');
        }
    });
    $('#userPsw').focus(function () {
        $(this).removeClass('error-placeholder error-border');
    }).blur(function () {
        if ($(this).val() == '') {
            $(this).attr("placeholder", "Придумайте новый пароль").addClass('error-placeholder error-border');
        }
    });

    $('#screen-1').css({'display': 'flex'});
    $('#start-btn').click(function () {
        $('.screen').hide();
        $('#screen-2').css({'display': 'flex'});
    });

    $('#continue-btn').click(function () {
        $('.screen').hide();
        $('#screen-3').css({'display': 'flex'});
    });

    $('.option-label').click(function () {
        $('#continue-btn').show();
        $('.vote-screen .left-content').addClass('vote-selected');
        $('.vote-text').find('span').text($(this).text());

        var percents = {
            variant1: 52.4,
            variant2: 47.6
        };

        $('.vote-percent').text(percents[$(this).attr('for')] + '%');
    });

    $('#user-form').submit(function (event) {
        event.preventDefault();

        var isValid = true;
        if ($('#userName').val() == '') {
            isValid = false;
            $('#userName').attr("placeholder", "Введите свое имя").addClass('error-placeholder error-border');
        } else {
            $('#userName').removeClass('error-placeholder error-border');
        }

        $('.email-error').remove();
        if ($('#userEmail').val() == "") {
            isValid = false;
            $('#userEmail').attr("placeholder", "Неверный формат email").addClass('error-placeholder error-border');
        } else if (!emailReg.test($('#userEmail').val())) {
            isValid = false;
            $('#userEmail').after('<span class="email-error">Неверный формат email</span>');
        } else {
            $('#userEmail').removeClass('error-placeholder error-border');
        }

        if ($('#userPsw').val() == '') {
            isValid = false;
            $('#userPsw').attr("placeholder", "Придумайте новый пароль").addClass('error-placeholder error-border');
        } else {
            $('#userPsw').removeClass('error-placeholder error-border');
        }

        if (isValid) {
            console.log('submitted');
        }
    });
});