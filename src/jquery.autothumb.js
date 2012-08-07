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
            "clickExpand": true
        }, options);
        return this.each(function () {
            var $this = $(this),
                rat = 0,
                width = $this.width(),
                height = $this.height();
            $this.data('return-size', {
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
            if (settings.clickExpand === true) {
                $this.css('cursor', 'pointer').attr('title', 'Click me to expand/contract').on('click', function () {
                    var dat = $this.data('return-size');
                    $this.data('return-size', {
                        "width": $this.width(),
                        "height": $this.height()
                    }).attr({
                        "height": dat.height,
                        "width": dat.width
                    });
                });
            }
        });
    };
})(jQuery);