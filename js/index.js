window.addEventListener('load', function () {
    // alert('1');
    // 1.鼠标经过轮播图，左右按键显示，离开隐藏
    var carsousel_left = document.querySelecter('.carsousel-left');
    var carsousel_right = document.querySelecter('.carsousel_right');
    // 要经过的地方，在显示
    var carsousel_first = document.querySelecter('.carsousel_first');
    twelfth_content.addEventListener('mouseenter', function () {
        carsousel_left.style.display = 'block';
        carsousel_right.style.display = 'block';
    })
    // 离开轮播图，自动隐藏
    twelfth_content.addEventListener('mouseleave', function () {
        carsousel_left.style.display = 'none';
        carsousel_right.style.display = 'none';
    })
    // 
})