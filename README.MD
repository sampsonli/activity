# 活动项目-通用脚手架
1. 全部单页面
2. 模块加载， 用户访问某个活动， 只会加载某个活动对应的页面， 不会由于活动数量越来越多造成项目臃肿， 不好维护
3. 组件化， 所有组件都放在components目录下， 页面灵活引用组件
4. 活动之间可以进行数据共享， 需要共享的数据全部放在store里面
5. 打包后文件全部使用非覆盖式发布方式， 确保浏览器，cdn正确缓存
6. 加入了代码检查功能， 提交之前会检查代码有没有不规范的地方， 如果写的不规范， 会禁止你提交
7. 扩展性优秀， 新加一个活动， 只需要在pages目录加入相应页面， 和在components加入那个活动对应的组件， 最后在route里面加入相应路由就可以了
8. 区分本地开发环境和线上打包环境， 开发的时候只需要运行 npm run dev即可， 线上需要先运行npm run build 在dist目录下会生成静态文件， 只需要部署静态文件即可
9. 静态资源， 比如图片， 样式， 第三方库放入assets目录下
10. 全部兼容es6/7语法， 可以使用各种新功能特性
11. 开发的时候开启了热加载， 大大方便开发效率

# 项目初始化
1. 
~~~shell
git clone https://github.com/sampsonli/activity
~~~
2.
~~~shell
npm install
~~~
3. 运行
~~~shell
npm run dev
~~~


