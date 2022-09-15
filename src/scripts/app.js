import $ from 'jquery';

$(function() {
    // Animate Scroll
    $(document).on('click', '[data-trigger="scroll"]', function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    // Link Disable
    $(document).on('click', '[data-trigger="click"]', function(e){
        e.preventDefault();
    })
    // Fancybox
    Fancybox.bind("[data-fancybox]", {
        autoFocus: false,
        dragToClose: false,
    });
});

import './mouseup';
import '../blocks/tabs/tabs';
import '../items/input/input';
import '../items/slider/slider';
import '../items/toggle/toggle';
import '../items/item/item';
import '../blocks/calculator/calculator';
import '../blocks/header/header';
