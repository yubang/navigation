
var arrs = [
	{url: 'http://mail.163.com/', img: 'https://github.com/yubang/navigation/raw/master/src/pic/8.png', text: '163邮箱'},
	{url: 'https://mp.weixin.qq.com/', img: 'https://github.com/yubang/navigation/raw/master/src/pic/9.png', text: '微信公众平台'},
	{url: 'http://www.jianshu.com/', img: 'https://github.com/yubang/navigation/raw/master/src/pic/10.png', text: '简书'},
	{url: 'https://tongji.baidu.com/web/welcome/login', img: 'https://github.com/yubang/navigation/raw/master/src/pic/11.png', text: '百度统计'},
	{url: 'http://blog.yubangweb.com/', img: 'https://github.com/yubang/navigation/raw/master/src/pic/12.jpg', text: 'yubang博客'},
];

var arrs2 = [
	{url: 'https://juejin.im/timeline', img: 'https://github.com/yubang/navigation/raw/master/src/pic/2.png', text: '掘金'},
	{url: 'https://toutiao.io/posts/hot/7', img: 'https://github.com/yubang/navigation/raw/master/src/pic/3.png', text: '开发者头条'},
	{url: 'https://segmentfault.com/news', img: 'https://github.com/yubang/navigation/raw/master/src/pic/4.png', text: 'segmentfault'}
];

var arrs3 = [
	{url: 'https://www.v2ex.com/', img: 'https://github.com/yubang/navigation/raw/master/src/pic/5.png', text: 'v2ex'},
	{url: 'http://www.oschina.net/', img: 'https://github.com/yubang/navigation/raw/master/src/pic/1.png', text: '开源中国'},
	{url: 'https://segmentfault.com/questions', img: 'https://github.com/yubang/navigation/raw/master/src/pic/4.png', text: 'segmentfault'}
];

var arrs4 = [
	{url: 'http://www.bejson.com/', img: 'https://github.com/yubang/navigation/raw/master/src/pic/6.png', text: 'json格式化'},
	{url: 'http://tool.chinaz.com/Tools/urlencode.aspx', img: 'https://github.com/yubang/navigation/raw/master/src/pic/7.png', text: 'urlencode'}
];

app.init({
	data: {
		formInline: {},
		arrs: arrs,
		arrs2: arrs2,
		arrs3: arrs3,
		arrs4: arrs4
	},
	methods: {
		onSubmit: function(){
			var url = "https://www.baidu.com/s?wd=" + this.formInline.text;
			open(url);
		},
		t: function(url){
			
			open(url);
		}
		
	}
})