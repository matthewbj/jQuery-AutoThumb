# jQuery AutoThumb

A simple and easy to use jQuery plugin for creating small thumbnails of larger images.

View a [Live Example](http://blog.howgreatthouart.com/post/28923158047/art-the-bible-for-children-artwork).

### How to Use

    $(document).ready(function () {
        $("my-selector").autoThumb();
    });

Easy peasy... The above code will take every image that matches the selector and scale it down to either 150px wide or 200px high by default. When the image is clicked, it will expand to it's normal size.

#### Current options:

    $("my-selector").autoThumb({
        maxWidth: xxx, // Number in pixels. Default _150_
        maxHeight: xxx, // Number in pixels. Default _200_
        clickExpand: true|false // When set to false, image will not expand on click.
    });

Use only numbers for maxWidth & maxHeight. 'px' is not reqiured.

<small>LICENSE: Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0) </small>
