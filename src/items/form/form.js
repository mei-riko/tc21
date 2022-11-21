import $ from 'jquery';

$(function() {
    $(document).on("click", ".form.form_quiz .form_quiz__step--active .btn[data-action='next']", function(){
        let $stepActive = $(this).closest(".form_quiz__step");
        // console.log($stepActive);
        let marker = true;
        $($stepActive).find(".form__input").each(function(){
            if( $(this).val() === "" ){
                marker = false;
                return false;
            }
        });
        // console.log( marker );
        if( marker ){
            $stepActive.find(".form__notification_error").hide();
            $stepActive.removeClass("form_quiz__step--active");
            $stepActive.next(".form_quiz__step").addClass("form_quiz__step--active");
        }else{
            $stepActive.find(".form__notification_error").slideDown();
        }
    });
});