import $ from 'jquery';

$(function() {
    $(".tabs-toggle .tabs-toggle__item").on("click", function(){
        let $item = $(this);
        let itemContentId = $item.data("tab");

        let $parent = $item.closest(".tabs-toggle");
        let $itemActive = $parent.find(".tabs-toggle__item--active");
        let itemContentIdActive = $itemActive.data("tab");

        if( !$item.hasClass("tabs-toggle__item--active") ){
            $itemActive.removeClass("tabs-toggle__item--active");
            $(itemContentIdActive).removeClass("tabs-content--active");

            $item.addClass("tabs-toggle__item--active");
            $(itemContentId).addClass("tabs-content--active");

        }
    });
});