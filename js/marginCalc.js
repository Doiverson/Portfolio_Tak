
const girdWrapper = document.getElementById('grid-wrapper').clientWidth;
const topWrapper = document.getElementById('top-wrapper');


document.addEventListener('DOMContentLoaded', function () {
    const mqM = window.matchMedia('screen and (max-width: 760px)');
    const mqL = window.matchMedia('screen and (max-width: 1150px)');

    function checkBreakPoint(mqM, mqL) {
        if (mqM.matches) {
            topWrapper.style.marginRight = (girdWrapper - 760) / 2 + "px";
            topWrapper.style.marginLeft = (girdWrapper - 760) / 2 + "px";
        } else if (mqL.matches) {
            topWrapper.style.marginRight = (girdWrapper - 1150) / 2 + "px";
            topWrapper.style.marginLeft = (girdWrapper - 1150) / 2 + "px";
        } else {
            return false;
        }

    }

    mqM.addListener(checkBreakPoint);
    mqL.addListener(checkBreakPoint);
    checkBreakPoint(mqM, mqM);
});



