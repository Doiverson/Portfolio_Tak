
    var $grid = $('.grid').masonry({
        columnWidth: 302,
        itemSelector: '.grid-item',
        gutter: 5,
        fitWidth: true
    });

$(window).on('load',function() {
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });
});
