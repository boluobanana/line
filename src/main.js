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



