// jQuery(function($){
//     $(window).on('load',function(){
//     var $grid = $('.grid').imagesLoaded(function () {
//     $grid.masonry({
//         itemSelector: '.grid-item',
//         percentPosition: true,
//         columnWidth: 'grid-sizer'
//     });
//     });
//     });
// });

$('.grid').masonry({
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    percentPosition: true,
    gutter: 5,
    fitWidth: true
});
