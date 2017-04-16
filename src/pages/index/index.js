
var arrs = [
	{url: 'http://mail.163.com/', img: '/src/pic/8.png', text: '163邮箱'},
	{url: 'https://mp.weixin.qq.com/', img: '/src/pic/9.png', text: '微信公众平台'},
	{url: 'http://www.jianshu.com/', img: '/src/pic/10.png', text: '简书'},
	{url: 'https://tongji.baidu.com/web/welcome/login', img: '/src/pic/11.png', text: '百度统计'},
	{url: 'http://blog.yubangweb.com/', img: '/src/pic/12.jpg', text: 'yubang博客'},
];

var arrs2 = [
	{url: 'https://juejin.im/timeline', img: '/src/pic/2.png', text: '掘金'},
	{url: 'https://toutiao.io/posts/hot/7', img: '/src/pic/3.png', text: '开发者头条'},
	{url: 'https://segmentfault.com/news', img: '/src/pic/4.png', text: 'segmentfault'}
];

var arrs3 = [
	{url: 'https://www.v2ex.com/', img: '/src/pic/5.png', text: 'v2ex'},
	{url: 'http://www.oschina.net/', img: '/src/pic/1.png', text: '开源中国'},
	{url: 'https://segmentfault.com/questions', img: '/src/pic/4.png', text: 'segmentfault'}
];

var arrs4 = [
	{url: 'http://www.bejson.com/', img: '/src/pic/6.png', text: 'json格式化'},
	{url: 'http://tool.chinaz.com/Tools/urlencode.aspx', img: '/src/pic/7.png', text: 'urlencode'}
];

function checkSubmit(){
	var url = "https://www.baidu.com/s?wd=" + app.vm.formInline.text;
	open(url);
	return false;
}

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