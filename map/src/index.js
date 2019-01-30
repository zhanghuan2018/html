import './style.css';
function component() {
  var element = document.createElement('div');
  element.setAttribute("id", "container");
  return element;
}
document.body.appendChild(component());
var map = new AMap.Map('container', {resizeEnable: true,zoom:11});
