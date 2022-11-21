import $ from 'jquery';

$(function() {
    let heightServiceItem;
    $(".services.services_animate .services__item .services__item-intro").each(function(){
        let heightServiceItem = $(this).outerHeight();

        // console.log( Math.ceil(heightServiceItem) );

        $(this).css("height", Math.ceil(heightServiceItem));

        if( !$(this).hasClass("services__item-intro--active") ){
            $(this).addClass("services__item-intro--load");
        }
    });

    $(".services.services_animate .services__item").on({
        mouseenter: function () {
            //stuff to do on mouse enter
            let $item = $(this);
            let $itemTitle = $item.find(".services__item-title");
            let $itemIntro = $item.find(".services__item-intro");

            let $parent = $item.closest(".services");
            let $itemActive = $parent.find(".services__item--active");
            let $itemTitleActive = $parent.find(".services__item-title--active");
            let $itemIntroActive = $parent.find(".services__item-intro--active");

            if( !$item.hasClass("services__item--active") ){
                $itemActive.removeClass("services__item--active");
                $itemTitleActive.removeClass("services__item-title--active");
                $itemIntroActive.removeClass("services__item-intro--active").addClass("services__item-intro--load");

                $item.addClass("services__item--active");
                $itemTitle.addClass("services__item-title--active");
                $itemIntro.removeClass("services__item-intro--load").addClass("services__item-intro--active");
            }else{
                // console.log("active");
            }
            // $parent.find(".services__item--active")
        },
        mouseleave: function () {
            //stuff to do on mouse leave
        }
    });
});

