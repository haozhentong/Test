(function() {
	change();

	function change() {
		/* 这里的html字体大小利用了一个简单书序公式（十字相乘），当我们默认设置以屏幕320px位基准此时的字体大小为20px(320    20px),那么浏览器窗口大小改变的时候新的html的fontSize（clientWidth  新的值）就是clientWidth*20/320 */
		document.documentElement.style.fontSize = document.documentElement.clientWidth * 20 / 375 + 'px';
	}
	/* 监听窗口大小发生改变时 */
	window.addEventListener('resize', change, false);
})();

$(function() {
	FastClick.attach(document.body);
});
