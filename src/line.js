

(function (win) {

	var line = function(opt){

		return line.fn.init(opt);
	};
	win.line = line;

	line.fn = {
		config:{
			lines: 0
		},
		init: function (opt) {
			this.opt = opt;
			return this;
		},
		write: function () {
			if(typeof this.opt == "object"){
				if(this.opt.text){
					this.self_write(this.opt.text);
				}
			}
			if(typeof this.opt == "string" ){
				this.self_write(this.opt);
			}
			if(typeof this.opt == "number" ){
				this.self_write(this.opt);
			}
		},
		test:function(){
			console.log('test');
		},
		self_write: write,
		center: center,
		left: left,
		top: top,
		transition: transition,
		animate: animate,
		delay: delay,
		count: count
	};
	line.fn.init.prototype = line.prototype;


	function write (text){
		var div = document.createElement('div');
		div.innerHTML = text;

		this.count();
		this.animate(div);
		document.body.appendChild(div);

	}
	function animate(div){

		this.transition(div);
		this.center(div);
		var scope = this;

		(function ( lines ) {
			delay(lines * 500, function () {
				scope.left( div );
				scope.top( div, lines );
			})
		})(this.config.lines);


	}

	function center(div){

		div.style.position = 'absolute';
		div.style.margin = 'auto';
		div.style.top = 0;
		div.style.left = 0;
		div.style.right = 0;
		div.style.bottom = 0;
		div.style.textAlign = 'center';
		div.style.fontSize = '30px';
		//div.style.width = '100%';
		div.style.height = '50px';
	}
	function transition(div){
		div.style.transition = 'all 1s';
	}
	function left(div){
		var cnFontSize = div.style.fontSize.replace(/px/,'' ),
			enFontSize = cnFontSize / 2;
		var cnLength = 0,enLength = 0;

		[].forEach.call(div.innerHTML, function ( cur ) {
			if(isChinese(cur)){
				cnLength++;
			}else {
				enLength++;
			}
		});

		var left = - window.innerWidth + enLength * enFontSize + cnLength * cnFontSize;
		div.style.left = left + 'px';

		function isChinese(temp)
		{
			var re=/[^\u4e00-\u9fa5]/;
			if(re.test(temp)) return false;
			return true;
		}
	}
	function top(div,lines){
		console.log(lines);
	}
	function delay(time, cb){
		setTimeout( cb,time);
	}
	function count(){
		this.config.lines ++ ;
	}
})(window);