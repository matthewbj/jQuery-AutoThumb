/*
  jQuery AutoThumb Plugin - https://github.com/matthewbj/jQuery-AutoThumb
  Created by Matt Jordan
  Released under the CC BY-SA 3.0 License (http://creativecommons.org/licenses/by-sa/3.0/)  
*/
/*
  jQuery AutoThumb Plugin - https://github.com/matthewbj/jQuery-AutoThumb
  Created by Matt Jordan
  Released under the CC BY-SA 3.0 License (http://creativecommons.org/licenses/by-sa/3.0/)  
*/
(function ($) {
    $.fn.autoThumb = function (options) {
        var settings = $.extend({
            "maxWidth": 150,
            "maxHeight": 200,
            "lightbox": true
        }, options);
        return this.each(function () {
            var $this = $(this),
                rat = 0,
                width = $this.width(),
                height = $this.height();
            $this.data('original-size', {
                "width": width,
                "height": height
            });
            if (width > settings.maxWidth) {
                rat = settings.maxWidth / width;
                $this.attr({
                    "width": settings.maxWidth,
                    "height": height * rat
                });
                height = height * rat
            }
            var width = $this.width();
            var height = $this.height();
            if (height > settings.maxHeight) {
                rat = settings.maxHeight / height;
                $this.attr({
                    "height": settings.maxHeight,
                    "width": width * rat
                });
                width = width * rat
            }
            if (settings.lightbox !== false) {
                $this.css('cursor', 'pointer').attr('title', 'View Larger').on('click', function () {
                    _autoThumbModal($(this), width, height);
                });
            }
        });
    };
    var modalSet = false;

    function _autoThumbModal($this, width, height) {
        var dat = $this.data('original-size'),
            win = $(window),
            elHeight = dat.height,
            elWidth = dat.width,
            maxModalWidth = (win.width() - 25),
            maxModalHeight = (win.height() - 75);
        if (modalSet === false) {
            modalSet = true;
            $('<div id="autoThumb-modal" /><div id="autoThumb-modal-bg" />').appendTo('body');
        }
        if (elWidth > maxModalWidth) {
            elHeight = elHeight * (maxModalWidth / elWidth);
            elWidth = maxModalWidth;
        }
        if (elHeight > maxModalHeight) {
            elHeight = maxModalHeight;
            elWidth = width * (maxModalHeight / height);
        }
        var html = '<img src="' + $this.attr('src') + '" height="' + elHeight + '" width="' + elWidth + '" alt="Loading..." class="autoThumb-image"><div id="autoThumb-modal-close" />',
            css = {
                'width': elWidth,
                'height': elHeight,
                'margin-top': '-' + Math.round((elHeight / 2) + 6) + 'px',
                'margin-left': '-' + Math.round((elWidth / 2) + 6) + 'px'
            };
        $('#autoThumb-modal-bg').fadeIn(400);
        $('#autoThumb-modal').html(html).css(css).fadeIn(400);
    }
    $(document).on('click', '#autoThumb-modal-close, #autoThumb-modal-bg', function (e) {
        $("[id^=autoThumb-modal]").fadeOut(400, function () {
            $('#autoThumb-modal').html('');
        });
    });
})(jQuery);
