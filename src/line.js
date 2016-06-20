var line = function(opt){

	return line.fn.init(opt);
};

line.fn = {
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
	self_write: function(text){
		var div = document.createElement('div');
		div.innerHTML = text;
		this.center(div);
		document.body.appendChild(div);
	},
	center: function ( div ) {
		div.style.position = 'absolute';
		div.style.margin = 'auto';
		div.style.top = 0;
		div.style.left = 0;
		div.style.right = 0;
		div.style.bottom = 0;
		div.style.textAlign = 'center';
		div.style.fontSize = '30px';
		div.style.width = '100%';
		div.style.height = '50px';
	}
};
line.fn.init.prototype = line.prototype;

line({text:'234234'}).write();