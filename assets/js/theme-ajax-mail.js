// Registration Form
// ---------------------------------------------------------------------------------------
$(function () {
    var $form = $('#registration-form');
    $form.find('.form-control').tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    $form.find('.form-control').on('blur', function(){
        $(this).tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    });

    // validate and process form
    $form.find('.submit-button').on('click', function () {

        // First Name
        var first_name = $form.find('.input-first-name').val();
        if (first_name == '' || first_name == 'First Name') {
            $form.find('.input-first-name').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-first-name').focus();
            return false;
        }

        // Last Name
        var last_name = $form.find('.input-last-name').val();
        if (last_name == '' || last_name == 'Last Name') {
            $form.find('.input-last-name').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-last-name').focus();
            return false;
        }

        // Email address
        var email = $form.find('.input-email').val();
        //var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
        var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
        //console.log(filter.test(email));
        if (!filter.test(email)) {
            $form.find('.input-email').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-email').focus();
            return false;
        }

        // Phone number
        var phone = $form.find('.input-phone').val();
        if (phone == 'Phone Number') {
            phone = '';
        }

        // Ticket Type
        var tixtype = $form.find('.input-tixtype').val();
        if (tixtype == 'Student') {
          tixtype = 'Student';
        }
        else {
          tixtype = 'Professional';
        }

        // School or Organization
        var org = $form.find('.input-org').val();
        if (org == '' || org == 'School or Organization') {
            $form.find('.input-org').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-org').focus();
            return false;
        }

        // Field
        var field = $form.find('.input-field').val();
        if (field == 'Graphic Design') {
          field = 'Graphic Design';
        }
        else if (field == 'Motion Graphics') {
          field = 'Motion Graphics';
        }
        else if (field == 'Web') {
          field = 'Web';
        }
        else if (field == 'Video') {
          field = 'Video';
        }
        else {
          field = 'Interactive Media';
        }

        // Interests at D3
        var interest = $form.find('.input-interest').val();
        if (interest == '') {
            $form.find('.input-interest').tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $form.find('.input-interest').focus();
            return false;
        }

        var dataString = 'first_name=' + first_name + '&last_name=' + last_name + '&email=' + email + '&phone=' + phone + '&tixtype=' + tixtype + '&org=' + org + '&field=' + field + '&interest=' + interest;


        //alert(dataString); return false;

        $.ajax({
            type: 'POST',
            url: 'assets/php/registration-form.php',
            data: dataString,
            success: function () {
                $form.find('.form-alert').append('' +
                    '<div class=\"alert alert-success registration-form-alert fade in\">' +
                    '<button class=\"close\" data-dismiss=\"alert\" type=\"button\">&times;</button>' +
                    '<strong>Registration Form Submitted!</strong> Thank you for entering your information, please <strong><a style="color:#ed3287; text-decoration:underline;" href="http://www.eventbrite.com/e/d3-art-design-conference-expo-tickets-22742651884" target="_blank">CLICK HERE to get your ticket.</a></strong>' +
                    '</div>' +
                    '');
                $form[0].reset();
                $form.find('.form-control').focus().blur();
            }
        });
        return false;
    });
});
