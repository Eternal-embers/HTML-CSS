/* 切换游戏的章节 */
var flag = [0, 0, 0, 0];
var currentChapter = 4;
function switchChapter(element, chapter) {
    document.querySelector("span.chapter").innerHTML = element.innerHTML;//更新章节选项
    document.getElementById("chapter" + currentChapter).style.display = "none";//取消显示之前章节的地图
    document.getElementById('chapter' + chapter).style.display = "flex";//显示所选章节的地图
    currentChapter = chapter;
    if (flag[chapter - 1] == 0) {
        alert("由于地图体积较大，第一次加载可能需要几秒时间，请耐心等待。\n");
        flag[chapter - 1] = 1;
    }
}

/* 浏览地图，创建一个新的块用于显示图片 */
var esc = null;
var wheel = null;
function showImage(img) {
    /* 创建容器 */
    var imageContainer = document.createElement("div");
    imageContainer.innerHTML = "";
    imageContainer.id = "imageContainer";
    document.body.appendChild(imageContainer);
    /* 创建图片 */
    var imageElement = document.createElement("img");
    imageElement.src = img.src;
    imageContainer.appendChild(imageElement);
    zoomOut();
    zoomOut();
    /* 提示快捷键 */
    shortcut = document.createElement('div');
    shortcut.innerHTML = "Esc 退出<br/>Alt+鼠标滚轮 放大/缩小";
    shortcut.className = "shortcut";
    imageContainer.appendChild(shortcut);
    /* 创建扩大的控件 */
    var expand = document.createElement("i");
    expand.className = "fa-solid fa-expand";
    expand.classList.add("expand");
    expand.onclick = zoomIn;
    imageContainer.appendChild(expand);
    /* 创建缩小的控件 */
    var minimize = document.createElement("i");
    minimize.className = "fa-solid fa-minimize";
    minimize.classList.add("minimize");
    minimize.onclick = zoomOut;
    imageContainer.append(minimize);
    /* 创建退出的控件 */
    var exit = document.createElement('i');
    exit.className = "fa-solid fa-xmark";
    exit.classList.add('exit');
    exit.onclick = exitImage;
    imageContainer.appendChild(exit);
    /* 进入图片浏览模式 */
    //按下ESC键退出图片的浏览
    esc = document.addEventListener('keydown', function (event) {
        if (event.keyCode === 27) {
            exitImage();
        }
    });
    wheel = document.addEventListener("wheel", handleScroll);
}

function handleScroll(event) {
    let scrollDirection;
    // 检测滚轮的方向
    if (event.deltaY > 0) {
        scrollDirection = "down";
    } else {
        scrollDirection = "up";
    }
    if (event.altKey) {
        if (scrollDirection == "up") {
            zoomIn(); // 放大图片
        } else {
            zoomOut(); // 缩小图片
        }
    }
}

/* 退出图片浏览 */
function exitImage() {
    /* 移除组件 */
    var imageContainer = document.getElementById('imageContainer');
    while (imageContainer.firstChild) {
        imageContainer.firstChild.remove();
    }
    imageContainer.remove();

    /* 移除鼠标滚轮的监听 */
    document.removeEventListener('wheel', null);//移除
}

/* 放大图片 */
var scale = 1;
function zoomIn() {
    var imageElement = document.querySelector("#imageContainer img");
    var imageContainer = document.getElementById('imageContainer');
    scale += 0.1;
    if (scale < 1) {
        imageContainer.style.transform = `scale(1})`;
        scale = 1;
    }
    else
        imageContainer.style.transform = `scale(${scale})`;
    imageElement.style.transform = `scale(${scale})`;
}

/* 缩小图片 */
function zoomOut() {
    var imageElement = document.querySelector("#imageContainer img");
    var imageContainer = document.getElementById('imageContainer');
    scale -= 0.1;
    imageElement.style.transform = `scale(${scale})`;
    if (scale > 1)
        imageContainer.style.transform = `scale(${scale})`;
}