/*
* @Author: apple
* @Date:   2016-04-19 18:54:11
* @Last Modified by:   apple
* @Last Modified time: 2016-04-19 19:09:40
*/

;(function (window, document) {
	var template = '<div class="loading">'
			     + '<div class="gb-panel">'
                 + '<div class="gb-cloud1"></div>'
                 + '<div class="gb-abs-full gb-globe">'
                 + '<div class="gb-abs-full gb-mask"></div>'
                 + '</div>'
                 + '<div class="gb-abs-full gb-map"></div>'
                 + '<div class="gb-abs-full">'
                 + '<img class="gb-logo" src="//rishiqing-front.oss-cn-beijing.aliyuncs.com/common/img/entrance-global/logo-shadow.46d60a83aa.png" />'
                 + '</div>'
                 + '<div class="gb-cloud2"></div>'
                 + '</div>'
                 + '</div>';
    var wrapperEle;
	var start = function (id) {
		wrapperEle = document.getElementById(id);
		if (wrapperEle) wrapperEle.innerHTML = template;
	};
	var stop = function () {
		if (wrapperEle) wrapperEle.style.display = 'none';
	};
	window.RsqLoading = {
		start: start,
		stop: stop
	};
})(window, document);