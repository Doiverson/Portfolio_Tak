
const slideElement = document.getElementsByClassName('slider-element');
TweenMax.to(slideElement, 2, {opacity:1, x:0 , ease:Sine.easeOut, delay:0.5});

const slideIamge = document.getElementsByClassName('slider-image');
TweenMax.to(slideIamge, 2, {opacity:1, x:0 , ease:Sine.easeOut, delay:0.2});
