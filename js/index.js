window.addEventListener('load', function () {
    // alert('1');
    // 1.鼠标经过轮播图，左右按键显示，离开隐藏
    var carsousel_left = document.querySelecter('.carsousel-left');
    var carsousel_right = document.querySelecter('.carsousel_right');
    // 要经过的地方，在显示
    var carsousel_first = document.querySelecter('.carsousel_first');
    carsousel_first.addEventListener('mouseenter', function () {
        carsousel_left.style.display = 'block';
        carsousel_right.style.display = 'block';
    })
    // 离开轮播图，自动隐藏
    carsousel_first.addEventListener('mouseleave', function () {
        carsousel_left.style.display = 'none';
        carsousel_right.style.display = 'none';
    })
    // 生成动态小圆圈，有几张图片，就自动生成几个
    var ul = carsousel_first.querySelecter('ul');
    var ol = carsousel_first.querySelecter('circle');
    // console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        ol.appendChild(li);
    }
    ol.children[0].className = 'current';
})