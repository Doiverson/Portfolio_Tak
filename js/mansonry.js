
    var $grid = $('.grid').masonry({
        columnWidth: 300,
        itemSelector: '.grid-item',
        gutter: 5,
        fitWidth: true
    });

$(window).on('load',function() {
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });
});
