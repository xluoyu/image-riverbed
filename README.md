## 图床专用项目

操作方法：

> 如果图片是连接

1. 在`urlLink.js`添加地址，`root`为存储目录
2. 执行 `node .`，自动从`urlLink.js`请求图片存放到相应目录

> 如果图片是文件

直接放置需要的目录下

3. 执行`node run update` 或 `yarn update` 直接传至github，并提供新增的文件链接