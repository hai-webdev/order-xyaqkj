// 多页配置
module.exports = {
  // 页面名称（对应 chunk 名）
  index: {
    js: "./src/pages/index", // 页面入口js
    html: "./src/pages/index/index.html", // 页面使用的html模板
    out: "index.html", // 输出目录中的页面文件名
  },
  company: {
    js: "./src/pages/company",
    html: "./src/pages/company/index.html",
    out: "company.html",
  },
  product_index: {
    js: "./src/pages/product_index",
    html: "./src/pages/product_index/index.html",
    out: "product_index.html",
  },
  product_list: {
    js: "./src/pages/product_list",
    html: "./src/pages/product_list/index.html",
    out: "product_list.html",
  },
  product_view: {
    js: "./src/pages/product_view",
    html: "./src/pages/product_view/index.html",
    out: "product_view.html",
  },
  news_view: {
    js: "./src/pages/news_view",
    html: "./src/pages/news_view/index.html",
    out: "news_view.html",
  },
  message: {
    js: "./src/pages/message",
    html: "./src/pages/message/index.html",
    out: "message.html",
  },
  qualified: {
    js: "./src/pages/qualified",
    html: "./src/pages/qualified/index.html",
    out: "qualified.html",
  },
  serve: {
    js: "./src/pages/serve",
    html: "./src/pages/serve/index.html",
    out: "serve.html",
  },
  contact: {
    js: "./src/pages/contact",
    html: "./src/pages/contact/index.html",
    out: "contact.html",
  },
};
