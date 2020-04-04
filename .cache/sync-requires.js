const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-blog-template-js": hot(preferDefault(require("/home/gnomish/workspaces/ncolletti.com/src/blogTemplate.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/gnomish/workspaces/ncolletti.com/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/gnomish/workspaces/ncolletti.com/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/gnomish/workspaces/ncolletti.com/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/gnomish/workspaces/ncolletti.com/src/pages/index.js")))
}

