closeSidebar();
function openSidebar() {
    var open = document.getElementById('open');
    var sidebar = document.getElementById('sidebar');
    var children = sidebar.children;
    var length = children.length;

    open.style.display = "none";//隐藏打开菜单的控件
    sidebar.style.width = "20%";//设置侧边栏宽度
    for (var i = 0; i < length; i++) {
        children[i].style.display = "block";//显示子元素
    }
    sidebar.style.border = "1px solid rgba(0, 0, 0, 0.3)";//显示侧边栏边框

    var images = document.querySelector('div.images');
    images.style.transform = 'translateX(0)';//设置图片为第一张
    index = 0;
}

function closeSidebar() {
    var open = document.getElementById('open');
    var sidebar = document.getElementById('sidebar');
    var children = sidebar.children;
    var length = children.length;

    sidebar.style.width = "0";//设置侧边栏宽度
    for (var i = 0; i < length; i++) {
        children[i].style.display = "none";//隐藏子元素
    }
    sidebar.style.border = "none";//不显示侧边栏边框

    var images = document.querySelector('div.images');
    images.style.transform = 'translateX(0)';//设置图片为第一张
    index = 0;

    setTimeout(function () {
        open.style.display = "block";//显示打开菜单的控件
    }, 800);
}