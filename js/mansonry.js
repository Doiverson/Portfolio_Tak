
    var $grid = $('.grid').masonry({
        columnWidth: 300,
        itemSelector: '.grid-item',
        gutter: 20,
        fitWidth: true
    });

$(window).on('load',function() {
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });
});
