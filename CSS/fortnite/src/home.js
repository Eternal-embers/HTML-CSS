var index = 0;//第一张图的序号为0
function translateX(shift) {
    var videos = document.querySelectorAll('div.images video');
    for (var i = 0; i < videos.length; i++) {
        videos[i].pause();
    }
    var images = document.querySelector('div.images');
    var length = images.children.length;
    var width = images.offsetWidth;
    index += shift;

    /* 切换下一组预览图 */
    if (shift < 0 && -index % 5 == 0 || index < -length)//向前切换
        next(-1);
    else if (shift > 0 && -index % 5 == 4 || index > 0)//向后切换
        next(1);

    /* 切换下一张展览图或视频 */
    if (index <= -length)
        index = 0;
    if (index > 0)
        index = -(length - 1);
    images.style.transform = `translateX(${index * width}px)`;

    var children = document.querySelector('div.preview').children;
    /* 将相应的预览图取消高亮 */
    children[cur].style.filter = "brightness(0.6) contrast(0.9)";
    /* 将相应的预览图高亮 */
    jump(index);

}

var cur = 0;
function jump(position) {
    var videos = document.querySelectorAll('div.images video');
    for (var i = 0; i < videos.length; i++) {
        videos[i].pause();
    }
    var images = document.querySelector('div.images');
    var width = images.offsetWidth;
    images.style.transform = `translateX(${position * width}px)`;

    var children = document.querySelector('div.preview').children;
    /* 将相应的预览图取消高亮 */
    children[cur].style.filter = "brightness(0.6) contrast(0.9)";
    /* 将相应的预览图高亮 */
    if (position == 0) {
        children[0].style.filter = "brightness(1) contrast(1)";
        cur = 0;
        index = 0;
    }
    else if (position == -1) {
        children[2].style.filter = "brightness(1) contrast(1)";
        cur = 2;
        index = -1;
    }
    else {
        children[-position + 2].style.filter = "brightness(1) contrast(1)";
        cur = -position + 2;
        index = position;
    }
}

var maxGroup = 2;//预览图的最大分组数
var group = 0;//初始组从0开始
function next(step) {
    var preview = document.querySelector('div.preview');
    var width = preview.offsetWidth;
    if (group + step > 0) {
        preview.style.transform = `translateX(${-1 * width}px)`;
        group = -(maxGroup - 1);
    }
    else if (group + step <= -maxGroup) {
        preview.style.transform = `translateX(0px)`;
        group = 0;
    }
    else {
        group += step;
        preview.style.transform = `translateX(${group * width}px)`;
    }
}

switchOption(document.querySelector('div.config span'));
function switchOption(element) {
    var option = document.querySelectorAll('div.config span');
    for (i = 0; i < option.length; i++) {
        option[i].style.color = "rgba(180, 180, 180, 1)";
        option[i].style.borderBottom = "none";
    }
    element.style.borderBottom = " 1px solid white";
    element.style.color = "white";
}