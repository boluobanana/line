console.log('line js version 0.0');
var config = CONFIG_JS || {};


if(!config){
	line('你没有设置配置文件');
}
if(config instanceof  Array){
	console.log('is array');
	config.forEach( function ( cur, index, config ) {
		line(cur);
	});
}else{

}

//line({text:12313} ).write();
//line({text:'中国人'} ).write();
line({text:'abcdde中国馆啊啊啊啊啊阿尔法we12312424'} ).write();


