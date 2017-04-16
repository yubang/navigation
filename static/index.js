// 这里填充每一个页面的数据（一个字典）
var html_and_css_and_js_data = {"/": {"title": "\u7f51\u5740\u5bfc\u822a", "html": "\n<!-- \u641c\u7d22\u533a\u57df -->\n<div class=\"css1\">\n<el-form :inline=\"true\" :model=\"formInline\" class=\"demo-form-inline\">\n<el-form-item label=\"\">\n<el-input placeholder=\"\u8bf7\u8f93\u5165\u8981\u641c\u7d22\u7684\u5185\u5bb9\" v-model=\"formInline.text\"></el-input>\n</el-form-item>\n<el-form-item>\n<el-button @click=\"onSubmit\" type=\"primary\">\u67e5\u8be2</el-button>\n</el-form-item>\n</el-form>\n</div>\n<div class=\"css2\">\n<template>\n<el-tabs value=\"1\">\n<el-tab-pane label=\"\u5e38\u7528\u7f51\u5740\" name=\"1\">\n<el-card @click.native=\"t(obj.url)\" class=\"box-card\" v-for=\"obj in arrs\">\n<img :src=\"obj.img\"/>\n<p align=\"center\">{{obj.text}}</p>\n</el-card>\n</el-tab-pane>\n<el-tab-pane label=\"\u9605\u8bfb\u76f8\u5173\" name=\"2\">\n<el-card @click.native=\"t(obj.url)\" class=\"box-card\" v-for=\"obj in arrs2\">\n<img :src=\"obj.img\"/>\n<p align=\"center\">{{obj.text}}</p>\n</el-card>\n</el-tab-pane>\n<el-tab-pane label=\"\u6280\u672f\u8bba\u575b\" name=\"3\">\n<el-card @click.native=\"t(obj.url)\" class=\"box-card\" v-for=\"obj in arrs3\">\n<img :src=\"obj.img\"/>\n<p align=\"center\">{{obj.text}}</p>\n</el-card>\n</el-tab-pane>\n<el-tab-pane label=\"\u5c0f\u5de5\u5177\" name=\"4\">\n<el-card @click.native=\"t(obj.url)\" class=\"box-card\" v-for=\"obj in arrs4\">\n<img :src=\"obj.img\"/>\n<p align=\"center\">{{obj.text}}</p>\n</el-card>\n</el-tab-pane>\n</el-tabs>\n</template>\n</div>\n<hr>\n<p align=\"center\"><small>\n\u8be5\u7f51\u7ad9\u90e8\u7f72\u4e8egithub\uff0c\u4f7f\u7528applet\uff08<a href=\"https://github.com/yubang/applet\">https://github.com/yubang/applet</a>\uff09\u6253\u5305</small>\n</p></hr>", "css": ".css1{\n\tmargin-top: 30px;\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n\tmargin-bottom: 10px;\n}\n\ninput[type=\"text\"]{width:300px;}\n\n.css2{\n\twidth: 70%;\n    margin-left: auto;\n    margin-right: auto;\n\tmin-height: 450px;\n}\n\nhr{\n\tborder-color:#7CEFE4;\n}\n\na{\n\ttext-decoration:none;\n}\n\n.box-card{\n\tfloat: left;\n    width: 30%;\n\tmargin-left: 2.5%;\n\tmargin-top:10px;\n}\n\n.box-card img{width:100%;height: 100px;}", "js": "\nvar arrs = [\n\t{url: 'http://mail.163.com/', img: '/src/pic/8.png', text: '163\u90ae\u7bb1'},\n\t{url: 'https://mp.weixin.qq.com/', img: '/src/pic/9.png', text: '\u5fae\u4fe1\u516c\u4f17\u5e73\u53f0'},\n\t{url: 'http://www.jianshu.com/', img: '/src/pic/10.png', text: '\u7b80\u4e66'},\n\t{url: 'https://tongji.baidu.com/web/welcome/login', img: '/src/pic/11.png', text: '\u767e\u5ea6\u7edf\u8ba1'},\n\t{url: 'http://blog.yubangweb.com/', img: '/src/pic/12.jpg', text: 'yubang\u535a\u5ba2'},\n];\n\nvar arrs2 = [\n\t{url: 'https://juejin.im/timeline', img: '/src/pic/2.png', text: '\u6398\u91d1'},\n\t{url: 'https://toutiao.io/posts/hot/7', img: '/src/pic/3.png', text: '\u5f00\u53d1\u8005\u5934\u6761'},\n\t{url: 'https://segmentfault.com/news', img: '/src/pic/4.png', text: 'segmentfault'}\n];\n\nvar arrs3 = [\n\t{url: 'https://www.v2ex.com/', img: '/src/pic/5.png', text: 'v2ex'},\n\t{url: 'http://www.oschina.net/', img: '/src/pic/1.png', text: '\u5f00\u6e90\u4e2d\u56fd'},\n\t{url: 'https://segmentfault.com/questions', img: '/src/pic/4.png', text: 'segmentfault'}\n];\n\nvar arrs4 = [\n\t{url: 'http://www.bejson.com/', img: '/src/pic/6.png', text: 'json\u683c\u5f0f\u5316'},\n\t{url: 'http://tool.chinaz.com/Tools/urlencode.aspx', img: '/src/pic/7.png', text: 'urlencode'}\n];\n\napp.init({\n\tdata: {\n\t\tformInline: {},\n\t\tarrs: arrs,\n\t\tarrs2: arrs2,\n\t\tarrs3: arrs3,\n\t\tarrs4: arrs4\n\t},\n\tmethods: {\n\t\tonSubmit: function(){\n\t\t\tvar url = \"https://www.baidu.com/s?wd=\" + this.formInline.text;\n\t\t\topen(url);\n\t\t},\n\t\tt: function(url){\n\t\t\t\n\t\t\topen(url);\n\t\t}\n\t\t\n\t}\n})"}};

// 404页面地址
var not_found_path = "/404";

// js name
var js_label_name = "js_";
var js_label_index = 0;

// 路由处理
function goto_url(url){
    if(html_and_css_and_js_data[url]){
        $("#css").html(html_and_css_and_js_data[url]['css']);
        $("#html").html(html_and_css_and_js_data[url]['html']);

        $("#" + js_label_name + js_label_index).remove();
        js_label_index++;
        $("body").append('<script id="'+js_label_name + js_label_index+'">'+html_and_css_and_js_data[url]['js']+'</script>');
    }else{
        if(html_and_css_and_js_data[not_found_path]){
            $("#css").html(html_and_css_and_js_data[not_found_path]['css']);
            $("#html").html(html_and_css_and_js_data[not_found_path]['html']);
            $("#" + js_label_name + js_label_index).remove();
            js_label_index++;
            $("body").append('<script id="'+js_label_name + js_label_index+'">'+html_and_css_and_js_data[not_found_path]['js']+'</script>');
        }else{
            alert("你访问的页面已经被吃掉了！");
        }
    }
}

// 组件js


// app内置的方法
function Applet(){

    this.vm = null;
    this.data = null;

    // 是否显示loading
    this.show_loading = function(sign){
        if(sign){
            $("#html").hide();
            $("#loading").show();
        }else{
            $("#html").show();
            $("#loading").hide();
        }
    }

    this.render = function(d){
        var that = this;
        this.vm = new Vue({
            el: '#html',
            data: d['data'] || {},
            methods: d['methods'] || {},
            mounted: function(){
                that.show_loading(false);
            }
        });
    }

    // 渲染页面
    this.init = function(vue_data){
        // 显示loadin动画
        this.show_loading(true);

        var api = vue_data['api'] || {};
        // 获取api数据
        var api_url = api['url'] || null;
        var api_data = api['data'] || {};
        var api_method = api['method'] || "GET";
        var api_headers = api['headers'] || {};
        var success = api['success'] || function(d){return d;}
        var error = api['error'] || function(){}
        var before_success = api['before_success'] || function(d){return true;};

        if(api_url == null){
            this.render(vue_data);
        }else{
            var that = this;
            $.ajax({
                url: api_url,
                type: api_method,
                headers: api_headers,
                data: api_data,
                success: function(d){
                    if(before_success(d)){
                        vue_data['data'] = success(d);
                        that.render(vue_data);
                    }
                },
                error: function(){
                    error();
                    that.render(vue_data);
                }
            });

        }

    }

    // 无刷新跳转页面
    this.goto = function(url){
        window.history.pushState({}, null,url);
        goto_url(window.location.pathname);
    }

    // 获取get参数
    this.get_args = function(name){
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return unescape(r[2]);
      }
      return false;
    }

}

var app = new Applet();


window.addEventListener('popstate', function(event) {
   goto_url(window.location.pathname);
});


// 全局js



$(document).ready(function(){
    goto_url(window.location.pathname);
});