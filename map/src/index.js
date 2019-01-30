import './style.css';
function mapdiv() {
  var element = document.createElement('div');
  element.setAttribute("id", "container");
  return element;
}
document.body.appendChild(mapdiv());

/** 地图 */
var map = new AMap.Map('container', {resizeEnable: true,zoom:11});
AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){
  /** 显示 比例尺寸 和 简易缩放按钮 */
  var scale = new AMap.Scale();/** 比例尺寸  */
  map.addControl(scale);
  map.addControl(new AMap.ToolBar({liteStyle: true}));
});

function avatardiv() {
  var element = document.createElement('div');
  element.classList.add('avatar');
  return element;
}
document.body.appendChild(avatardiv());
