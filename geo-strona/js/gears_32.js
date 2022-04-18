
$(document).ready(function() {
// --uk-- trebuie schimbat pentru fiecare tara in parte //



    $('.mobileMenu').click(function() {
        $('#menu-left-menu').slideToggle();
    });

    var survey_id = $('#survey_id').text();

    $('.other_check').click(function() {
        $(this).parent().find("input:text[name='other_text']").disabled = !this.checked;

    });

    //Action 1 - pentru start , 2 - pentru cancel , 5 - pentru finished, 3,4,6,7 - pentru update si insert

    $("#start_survey").click(function() {

        $.ajax({
            type: "POST",
            url: window.location.origin + "/uk/wp-content/themes/YourOptionsOnline/survey_handler.php",
            data: {
                action: '1',
                survey_id: survey_id
            },

            success: function(response) {

                console.log(response);

            },
            error: function() {


            }
        });
    });

    $("#end_survey").click(function() {

        $.ajax({
            type: "POST",
            url: window.location.origin + "/uk/wp-content/themes/YourOptionsOnline/survey_handler.php",
            data: {
                action: '5',
                survey_id: survey_id
            },

            success: function(response) {

                console.log(response);

            },
            error: function() {


            }
        });

    });

    $("#end_survey2").click(function() {

        $.ajax({
            type: "POST",
            url: window.location.origin + "/uk/wp-content/themes/YourOptionsOnline/survey_handler.php",
            data: {
                action: '5',
                survey_id: survey_id
            },

            success: function(response) {

                console.log(response);

            },
            error: function() {


            }
        });

    });

    

    $(".next_button_only_check_has_other").click(function() {

        var myForm = $(this).parent().parent().parent();
        var question_id = myForm.find(':input:hidden').val();
        var $inputs = myForm.find(':input:checked');
        var other_text = $(this).parent().parent().parent().find("input:text[name='other_text']").val();


        var values = {};
        $inputs.each(function() {
            values[this.name] = $(this).val();
        });

        if (typeof values['answer'] != 'undefined') {

            var answer_id = values['answer'];

            $.ajax({
                type: "POST",
                url: window.location.origin + "/uk/wp-content/themes/YourOptionsOnline/survey_handler.php",
                data: {
                    action: '4',
                    answer_id: answer_id,
                    other_text: other_text
                },

                success: function(response) {


                    console.log(response);

                },
                error: function() {

                    console.log("Error");
                }
            });
        }

    });

    $(".next_button_only_check").click(function() {


        var myForm = $(this).parent().parent().parent();
        var question_id = myForm.find(':input:hidden').val();
        var $inputs = myForm.find(':input:checked');



        var values = {};
        $inputs.each(function() {
            values[this.name] = $(this).val();
        });

        

        if (typeof values['answer'] != 'undefined') {

            var answer_id = values['answer'];

            $.ajax({
                type: "POST",
                url: window.location.origin + "/uk/wp-content/themes/YourOptionsOnline/survey_handler.php",
                data: {
                    action: '3',
                    answer_id: answer_id
                },

                success: function(response) {

                    console.log(response);

                },
                error: function() {


                }
            });
        }
    });

    $(".next_button_multiple_check").click(function() {

        var myForm = $(this).parent().parent().parent();
        var question_id = myForm.find(':input:hidden').val();
        var $inputs = myForm.find(':input:checked');



        var values = {};
        var aux = 0;
        $inputs.each(function() {
            values[$(this).val()] = parseInt(this.name.substr(this.name.length - 1));

        });

        $.ajax({
            type: "POST",
            url: window.location.origin + "/uk/wp-content/themes/YourOptionsOnline/survey_handler.php",
            data: {
                action: '6',
                survey_id: survey_id,
                data: values
            },

            success: function(response) {

                console.log(response);

            },
            error: function() {


            }
        });



    });


 $(".next_button_only_input").click(function() {

        var myForm = $(this).parent().parent().parent();
        //var question_id = myForm.find(":input:hidden[name='hidden_id']").val();
        //var answer_id = myForm.find(":input:hidden[name='hidden_answer_id']").val();
        var question_id = myForm.find('input[type="hidden"][name="hidden_id"]').val();
        var answer_id = myForm.find('input[type="hidden"][name="hidden_answer_id"]').val();
        var other_text = $('textarea#only_input_textarea').val();

        $.ajax({
            type: "POST",
            url: window.location.origin + "/uk/wp-content/themes/YourOptionsOnline/survey_handler.php",
            data: {
                action: '7',
                survey_id: survey_id,
                answer_id: answer_id,
                question_id: question_id,
                other_text: other_text
            },

            success: function(response) {

                console.log(response);

            },
            error: function() {


            }
        });



    });


    $('body').on('click', '.mfp-close2', function() {

        $.ajax({
            type: "POST",
            url: window.location.origin + "/uk/wp-content/themes/YourOptionsOnline/survey_handler.php",
            data: {
                action: '2',
                survey_id: survey_id
            },

            success: function(response) {

                console.log(response);

            },
            error: function() {


            }
        });

    });

});