function loadHTML(elementId, filePath) {
  fetch(filePath)
    .then(res => res.text())
    .then(data => document.getElementById(elementId).innerHTML = data);
}

loadHTML('head', '../head.html');
loadHTML('header', '../header.html');
loadHTML('footer', '../footer.html');

// 此相对路径仅适用于pages,index不适用
