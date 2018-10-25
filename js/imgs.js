var body = document.getElementsByTagName("body")[0];
var theLast = document.getElementById("last");
// 多个onload事件加载函数
function addloadEvent(func) {
    var oldonload = window.onload;
    if (typeof oldonload != "function") {
        window.onload = func;
    }else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

//在一个已知元素之后添加新元素
function inserAfter(newElement,targetElement) {
    var parent = targetElement.parentElement;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function perparePlaceholder() {
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imageGallery")) return false;
    //添加img标签
    var image = document.createElement("img");
    image.setAttribute("id","zhanwei");
    image.setAttribute("src","images/kongbai.png");
    image.setAttribute("alt","My Image Gallery");
    //添加p标签
    var para = document.createElement("p");
    var text = document.createTextNode("图片描述");
    para.setAttribute("id","discrption");
    para.appendChild(text);
    var Gallery = document.getElementById("imageGallery");
    inserAfter(image,Gallery);
    inserAfter(para,image);
}

//检查对象并调用showpic函数
function prepareGallery() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById("imageGallery")) return false;
    var gallery = document.getElementById("imageGallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0;i<links.length;i++){
        links[i].onclick = function () {
            return !showpic(this);
        }
    }
}

//切换图片和图片描述
function showpic(whichpic) {
    if (!document.getElementById("zhanwei")) return false;
    var source = whichpic.getAttribute("href");
    var zhanwei = document.getElementById("zhanwei");
    zhanwei.setAttribute("src",source);
    if (document.getElementById("discrption")) {
        var text = whichpic.getAttribute("title")?  whichpic.getAttribute("title"): "";
        var discr = document.getElementById("discrption");
        discr.firstChild.nodeValue = text;
    }
    return true;
}

//调用addloadEvent函数，让这些函数在html文档加载完成后被调用。
addloadEvent(perparePlaceholder());
addloadEvent(prepareGallery);


