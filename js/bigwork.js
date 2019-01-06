/*window.onload = function(){
	var cover = document.getElementsByClassName('cover')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			cover.style.position = 'fixed'
		}else{
			cover.style.position = 'static'
		}
	}
}    */ /* 
        var box = document.getElementById('box');
		var oNavlist = document.getElementById('nav').children;
		var slider = document.getElementById('slider');
		var left = document.getElementById('left');
		var right = document.getElementById('right');
		var index = 1;
		var timer;
		var isMoving = false;
		box.onmouseover = function(){
			animate(left,{opacity:50})
			animate(right,{opacity:50})
			clearInterval(timer)
		}
		box.onmouseout = function(){
			animate(left,{opacity:0})
			animate(right,{opacity:0})
			timer = setInterval(next, 2000);
		}
		right.onclick = next;
		left.onclick = prev;
		for( var i=0; i<oNavlist.length; i++ ){
			oNavlist[i].index = i;
			oNavlist[i].onclick = function(){
				index = this.index+1;
				navmove();
				animate(slider,{left:-800*index});
			}
		}
		function next(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index++;
			navmove();
			animate(slider,{left:-800*index},function(){
				if(index==7){
					slider.style.left = '-800px';
					index = 1;
				}
				isMoving = false;
			});
		}
		function prev(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index--;
			navmove();
			animate(slider,{left:-800*index},function(){
				if(index==0){
					slider.style.left = '-4800px';
					index = 6;
				}
				isMoving = false;
			});
		}
		function navmove(){
			for( var i=0; i<oNavlist.length; i++ ){
				oNavlist[i].className = "";
			}
			if(index >6 ){
				oNavlist[0].className = "active";
			}else if(index<=0){
				oNavlist[4].className = "active";
			}else {
				oNavlist[index-1].className = "active";
			}
		}
		timer = setInterval(next, 2000);*/
		/*var bo = document.getElementById('bo');
		var slider = document.getElementById('slider');
		var left = document.getElementById('left');
		var right = document.getElementById('right');
		var oNavlist = document.getElementById('nav').children;
		var index = 1; //打开页面生效的图片的下标为1
		var timer;
		var isMoving = false;
		box.onmouseover = function () {
			animate(left, {
				opacity: 0.6
			})
			animate(right, {
				opacity: 0.6
			})
			clearInterval(timer); //图片停止滚动
		}
		box.onmouseout = function () {
			animate(left, {
				opacity: 0
			})
			animate(right, {
				opacity: 0
			})
			timer = setInterval(next, 1000); //图片开始接着滚动
		}
		right.onclick = next;
		left.onclick = prev;

		function next() {
			if (isMoving) {
				return;
			}
			isMoving = true;
			index++;
			navmove();
			animate(slider, {
				left: -800 * index
			}, function () {
				if (index == 6) {
					slider.style.left = '-800px';
					index = 1;
				}
				isMoving = false;
			});
		}

		function prev() {
			if (isMoving) {
				return;
			}
			isMoving = true;
			index--;
			navmove();
			animate(slider, {
				left: -1200 * index
			}, function () {
				if (index == 0) {
					slider.style.left = '-6000px';
					index = 5;
				}
				isMoving = false;
			});
		}
		//按钮点击切换事件
		for (var i = 0; i < oNavlist.length; i++) {
			oNavlist[i].index = i;
			oNavlist[i].onclick = function () {
				index = this.index + 1;
				navmove();
				animate(slider, {
					left: -800 * index
				});
			}

		}
		//图片切换时按钮样式跟着切换
		function navmove() {
			for (var i = 0; i < oNavlist.length; i++) {
				//先全部清除
				oNavlist[i].className = "";
			}
			if (index > 5) {
				oNavlist[0].className = "active";
			} else if (index <= 0) {
				oNavlist[4].className = "active";
			} else {
				oNavlist[index - 1].className = "active";
			}
		}
		//页面打开时自动滚动切换
		timer = setInterval(next, 3000);*/
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}