/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
    
    $document.ready(function(){
        // motio cloud motion
        var $example = $('.site-wrapper');
        var frame = $example.find('.motio-cloud-bg')[0];
        var offset = $example.offset();
        var motio = new Motio(frame, {
            fps: 30,
            bgWidth: 1024,
            bgHeight: 1024
        });

        // Play/Pause when mouse enters/leaves the frame
        $example.on('mouseenter mouseleave', function (event) {
            if (event.type === 'mouseenter') {
                motio.play();
            } else {
                motio.pause();
            }
        });

        // Update the animation speed & direction based on a cursor position
        $example.on('mousemove', function (event) {
            motio.set('speedX', event.pageX - offset.left - motio.width / 2);
            motio.set('speedY', event.pageY - offset.top - motio.height / 2);
        });
        motio.play();

    });
})(jQuery);
