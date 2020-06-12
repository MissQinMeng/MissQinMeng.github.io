(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{348:function(t,n,e){t.exports=e.p+"assets/img/01.13ed9232.png"},357:function(t,n,e){"use strict";e.r(n);var s=e(43),a=Object(s.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"部署vue前端项目到服务器上（nginx处理跨域）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署vue前端项目到服务器上（nginx处理跨域）"}},[t._v("#")]),t._v(" 部署vue前端项目到服务器上（nginx处理跨域）")]),t._v(" "),s("p",[s("code",[t._v("2019-08-16")])]),t._v(" "),s("blockquote",[s("p",[t._v("注：本文选择了nginx做web服务器。\n因为在本文vue前端项目中，需要从接口获取数据，可是数据与vue前端项目是在同一ip地址但不同端口号，所以需要跨域读取数据。本文的跨域处理是使用了nginx。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("环境配置：")]),t._v(" "),s("p",[t._v("阿里云服务器（ubuntu 64bit）")]),t._v(" "),s("p",[t._v("xshell")]),t._v(" "),s("p",[t._v("nginx")])]),t._v(" "),s("h2",{attrs:{id:"安装nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx"}},[t._v("#")]),t._v(" 安装nginx")]),t._v(" "),s("p",[t._v("使用xshell登录到阿里云服务器，之后安装nginx（本文安装到/etc下）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cd /etc\napt-get update\napt-get install nginx\n")])])]),s("h2",{attrs:{id:"配置nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx"}},[t._v("#")]),t._v(" 配置nginx")]),t._v(" "),s("ul",[s("li",[t._v("打开/etc/nginx/nginx.conf文件")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("vim /etc/nginx/nginx.conf\n")])])]),s("ul",[s("li",[t._v("在nginx.conf中配置如下：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('user www-data;\nworker_processes auto;\npid /run/nginx.pid;\nevents {\n        worker_connections 768;\n        # multi_accept on;\n}\nhttp {\n \n        ##\n        # Basic Settings\n        ##\n \n        tcp_nodelay on;\n        keepalive_timeout 65;\n        types_hash_max_size 2048;\n        # server_tokens off;\n \n        # server_names_hash_bucket_size 64;\n        # server_name_in_redirect off;\n \n        include /etc/nginx/mime.types;\n        default_type application/octet-stream;\n \n        ##\n        # SSL Settings\n        ##\n \n        ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE\n        ssl_prefer_server_ciphers on;\n \n        ##\n        # Logging Settings\n        ##\n \n        access_log /var/log/nginx/access.log;\n        error_log /var/log/nginx/error.log;\n \n        ##\n        # Gzip Settings\n        ##\n \n        gzip on;\n        gzip_disable "msie6";\n \n        # gzip_vary on;\n        # gzip_proxied any;\n        # gzip_comp_level 6;\n        # gzip_buffers 16 8k;\n        # gzip_http_version 1.1;\n \n        ##\n        # Virtual Host Configs\n        ##\n \n \n        gzip on;\n        gzip_disable "msie6";\n \n        # gzip_vary on;\n        # gzip_proxied any;\n        # gzip_comp_level 6;\n        # gzip_buffers 16 8k;\n        # gzip_http_version 1.1;\n        # gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;\n \n        ##\n        # Virtual Host Configs\n        ##\n \n        include /etc/nginx/conf.d/*.conf;\n        include /etc/nginx/sites-enabled/*;\n        #以下为我们添加的内容\n       server {             \n              listen 80;\n              server_name your-ipaddress;   #阿里云服务器的ip地址\n \n              root /home/my-project/;\n              index index.html;\n              location /datas {\n              rewrite ^.+datas/?(.*)$ /$1 break;\n              include uwsgi_params;\n              proxy_pass http://ip:port;\n                              }\n             }\n}\n')])])]),s("h2",{attrs:{id:"跟进配置文件做下一步操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跟进配置文件做下一步操作"}},[t._v("#")]),t._v(" 跟进配置文件做下一步操作")]),t._v(" "),s("ol",[s("li",[t._v("配置文件中的listen是nginx监听的端口号，所以需要在阿里云服务器上为80端口添加安全组规则")])]),t._v(" "),s("p",[t._v("在本地的浏览器登录阿里云服务器->进入控制台->点击安全组->点击配置规则->点击添加安全组规则，之后配置如下（注：入方向和出方向都要配置）")]),t._v(" "),s("p",[s("img",{attrs:{src:e(348),alt:"avatar"}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("配置文件中的root和index那两行表示我们把项目文件夹放在/home/my-project下")])]),t._v(" "),s("p",[t._v("例如有两个项目文件夹分别为test1，test2，里面都有index.html。则目录结构如下")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/home\n\n       |--my-project\n\n              |--test1\n\n                      |--index.html\n\n              |--test2\n\n                      |--index.html\n")])])]),s("p",[t._v("如果在浏览器输入如下")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://ip/test1/index.html\n")])])]),s("p",[t._v("服务器便会在/home/my-project中找到test1下的index.html执行；")]),t._v(" "),s("p",[t._v("如果在浏览器中输入如下")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://ip/test2/index.html\n")])])]),s("p",[t._v("服务器便会在/home/my-project中找到test2下的index.html执行；")]),t._v(" "),s("p",[t._v("这样便可以在服务器下放多个项目文件夹。")]),t._v(" "),s("p",[t._v("所以我们也需要在本地项目的config/index.js里的build下进行修改,如果要把项目放到test1下，则")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("assetsPublicPath: '/test1/'\n")])])]),s("p",[t._v("如果用到了vue-router，则修改/router/index.js")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export default new Router({\n  base: '/test1/',   //添加这行\n  linkActiveClass: 'active',\n  routes\n});\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("nginx配置文件中的location则是针对跨域处理，表示把对/datas的请求转发给http://ip:port,本文中这个http://ip:port下就是需要的数据，例如http://ip:port/seller,在本地项目文件中ajax请求数据的地方如下")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("      const url = '/datas/seller';\n      this.$http.get(url).then((response) => {\n        .....\n      });\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("修改后在本地命令行下运行:cnpm run build 生成dist文件。把dist文件里的index.html和static文件上传到服务器的/home/my-project/test1下，目录结构如下")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/home\n\n       |--my-project\n\n              |--test1\n\n                      |--index.html\n\n                      |--static\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("启动nginx")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("service nginx start\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[t._v("至此项目部署成功，在浏览器下输入如下命令即可访问")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://ip/test1/index.html  \n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);