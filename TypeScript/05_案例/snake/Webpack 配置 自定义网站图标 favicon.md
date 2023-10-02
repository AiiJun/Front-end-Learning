# `Webpack`配置: 自定义网站图标 favicon

##### **实现核心技术: html-webpack-plugin 插件**

我们可以透过 html-webpack-plugin 来实现自定义 favicon 的配置

从原生的角度来说，我们要自定义 favicon 需要在 html 文件的 `<head>` 标签内加上这句话

```html
<link rel="shortcut icon" type="image/icon" href="/favicon.ico">
```

在使用 webpack 打包的场景下我们则通过 html-webpack-plugin 插件来实现 icon 注入

**配置方式**  ``webpack.config.js``

```js
module.exports = {
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      // filename, titile, template ...
      
      favicon: './public/favicon32.ico',
    }),
  ],
}
```

**效果如下**

![image-20231002220833242](E:\图片\typora\image-20231002220833242.png)

**参考链接**

|                   Title                    |                            Link                            |
| :----------------------------------------: | :--------------------------------------------------------: |
|   jantimon/html-webpack-plugin - Github    |  https://github.com/jantimon/html-webpack-plugin#options   |
| React 中使用 webpack 动态添加 favicon 图标 | https://blog.csdn.net/m0_37128507/article/details/83269084 |
|                ico 图标制作                |             https://www.dute.org/ico-converter             |

