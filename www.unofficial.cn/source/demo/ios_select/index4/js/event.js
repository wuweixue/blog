/**
 * @desc 事件封装tap事件以及pan事件，仅仅针对移动端，通过touchstart/touchend/touchmove来模拟tap与pan
 */
;(function(root) {

	// 常量
	var isTouchEnd = true,
		toucher;

	// 仅仅封装了部分事件
	function Somevent(ele, eventName, eventHandle) {
		// ele.addEventListener(eventName, eventHandle);
		this.ele = ele;
		this.eventName = eventName;
		this.eventHandle = eventHandle;
		this.start();
		this.end();
	}

	// 触摸开始
	Somevent.prototype.start = function() {
		this.ele.addEventListener('touchstart', function(e) {
			// 第一触摸点 时间 位置
			isTouchEnd = false;
			toucher = e.touches[0];
			// e.preventDefault();
		})
	}
	// 触摸移动
	Somevent.prototype.move = function() {

	}
	// 触摸结束
	Somevent.prototype.end = function() {
		var self = this;
		this.ele.addEventListener('touchend', function(e) {
			console.log('end', e);
			//
			console.log(isTouchEnd, toucher);
			console.log(self.ele == toucher.target)
			self.dispatch();
			e.preventDefault();	
		})
	}			

	// 派发事件
	Somevent.prototype.dispatch = function() {
		var event = new Event(this.eventName);
		this.ele.addEventListener(this.eventName, this.eventHandle);
		this.ele.dispatchEvent(event);
	}

	root.Somevent = Somevent;
})(window)