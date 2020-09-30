(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{2514:function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("section",{staticClass:"page-header"},[t("div",{staticClass:"donate"},[t("a",{attrs:{href:n.donateUrl,target:"_blank",title:"Donate"}},[t("i",{staticClass:"fas fa-heart",staticStyle:{color:"red"}})])]),t("div",{staticClass:"text-h1 project-name"},[n._v(n._s(n.title))]),t("div",{staticClass:"text-h2 project-tagline"},[n._v(n._s(n.tagline))]),t("q-btn",{staticClass:"btn",attrs:{type:"a",href:n.locationUrl,target:"_blank",label:"View on GitHub","no-caps":"",flat:""}}),t("q-btn",{staticClass:"btn",attrs:{to:"/docs",label:"Docs","no-caps":"",flat:""}}),t("q-btn",{staticClass:"btn",attrs:{to:"/examples",label:"Examples","no-caps":"",flat:""}}),n.hasInteractiveDemo?t("q-btn",{staticClass:"btn",attrs:{to:"/demo",label:"Interactive Demo","no-caps":"",flat:""}}):n._e(),t("q-btn",{staticClass:"btn",attrs:{type:"a",href:n.donateUrl,target:"_blank",label:"Donate","no-caps":"",flat:""}}),t("div",{staticClass:"row justify-evenly items-center q-ma-sm"},[t("div",{staticClass:"quasar"},[n._v(n._s(n.quasarDesc))]),t("div",{staticClass:"byline"},[n._v(n._s(n.byline)),t("a",{attrs:{href:n.bylineTwitter,target:"_blank",title:"Twitter"}},[t("i",{staticClass:"fab fa-twitter"})])])])],1),t("main",{staticClass:"flex flex-start justify-center inset-shadow"},[t("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg inset-shadow",staticStyle:{width:"100%",height:"3px"}}),t("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg shadow-1",staticStyle:{"max-width":"800px",width:"100%"}},[n._t("default")],2)])])},a=[],s={name:"Hero",data:function(){return{title:"QMarkdown",tagline:"Inline markdown for your Quasar App",byline:"Created and maintained by Jeff Galbraith",bylineTwitter:"https://twitter.com/jgalbraith64",quasarDesc:"A Quasar Framework Component and App Extension",locationUrl:"https://github.com/quasarframework/quasar-ui-qmarkdown",donateUrl:"https://github.com/sponsors/hawkeye64",hasInteractiveDemo:!0}}},r=s,i=t("2877"),d=t("9c40"),l=t("eebe"),c=t.n(l),m=Object(i["a"])(r,o,a,!1,null,null,null);e["a"]=m.exports;c()(m,"components",{QBtn:d["a"]})},"8b24":function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("hero",[t("q-markdown",{attrs:{src:n.markdown,toc:""},on:{data:n.onToc}}),t("json-api-viewer",{attrs:{title:"QMarkdown API",json:n.json}}),t("q-markdown",[n._v("\n# Donate\nIf you appreciate the work that went into this, please consider donating to [Quasar](https://donate.quasar.dev) or [Jeff](https://github.com/sponsors/hawkeye64).\n\n---\n\nThis page created with [QMarkdown](https://quasarframework.github.io/quasar-ui-qmarkdown), another great Quasar App Extension.\n    ")]),t("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[t("q-btn",{class:{"text-black bg-grey-4":n.$q.dark.isActive,"text-white bg-primary":!n.$q.dark.isActive},attrs:{fab:"",icon:"keyboard_arrow_up"}})],1)],1)},a=[],s=t("2514"),r="QMarkdown\n===\n\nQMarkdown is a Quasar component as well as a [Quasar App Extension](https://v1.quasar.dev/app-extensions/introduction). It provides the ability for your Quasar app to display markdown. If you don't know how to use Markdown or need a refresher, this site is recommended: [Markdown Guide](https://www.markdownguide.org/).\n\n# Features\n\n## Markdown Constructs\n\n- Abbreviations\n- Blockquotes\n- Code and Code Highlighting\n- Containers\n- Definition Lists\n- Emojies\n- Emphasis\n- Footnotes\n- Headings\n- Images\n- Inserts\n- Links (+ Anchor Links)\n- Lists\n- Marks\n- Rules\n- Subscript/Superscript\n- Tables\n- Tasklists\n- Titles\n- Typography\n\n## Loaders\nThe loaders are only available if you installed via the QMarkdown App Extension.\n\n- markdown (.md) loader that can load your markdown as text to be processed by QMarkdown\n- vue+markdown (.vmd) loader that can process markdown, then hand off to Vue to be processed\n\n## Front-Matter\n- The front-matter functonality is only available to vue+markdown (`.vmd`) files.\n\n## Utility Functions\n- `getTagParts` that can process a Vue SFC file and return the `template`, `script` and `style` parts\n\n# Installation Types\n\n## Quasar CLI\n\n**App Extension**\n\n:::\n#### Install\n\nTo add as an App Extension to your Quasar application, run the following (in your Quasar app folder):\n```\nquasar ext add @quasar/qmarkdown\n```\n\n#### Uninstall\n\nTo remove as an App Extension from your Quasar application, run the following (in your Quasar app folder):\n```\nquasar ext remove @quasar/qmarkdown\n```\n\n#### Describe\nWhen installed as an App Extension, you can use `quasar describe QMarkdown`\n:::\n\n**OR**:\n\n:::\nCreate and register a boot file:\n\n```js\nimport Vue from 'vue'\nimport Plugin from '@quasar/quasar-ui-qmarkdown'\nimport '@quasar/quasar-ui-qmarkdown/dist/index.css'\n\nVue.use(Plugin)\n```\n:::\n\n**OR**:\n\n:::\n```html\n<style src=\"@quasar/quasar-ui-qmarkdown/dist/index.css\"></style>\n\n<script>\nimport { QMarkdown } from '@quasar/quasar-ui-qmarkdown'\n\nexport default {\n  components: {\n    QMarkdown\n  }\n}\n<\/script>\n```\n:::\n\n## Vue CLI project\n\n:::\n```js\nimport Vue from 'vue'\nimport Plugin from '@quasar/quasar-ui-qmarkdown'\nimport '@quasar/quasar-ui-qmarkdown/dist/index.css'\n\nVue.use(Plugin)\n```\n:::\n\n**OR**:\n\n:::\n```html\n<style src=\"@quasar/quasar-ui-qmarkdown/dist/index.css\"></style>\n\n<script>\nimport { QMarkdown } from '@quasar/quasar-ui-qmarkdown'\n\nexport default {\n  components: {\n    QMarkdown\n  }\n}\n<\/script>\n```\n:::\n\n## UMD variant\n\nExports `window.QMarkdown`.\n\nAdd the following tag(s) after the Quasar ones:\n\n:::\n```html\n<head>\n  \x3c!-- AFTER the Quasar stylesheet tags: --\x3e\n  <link href=\"https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmarkdown/dist/index.min.css\" rel=\"stylesheet\" type=\"text/css\">\n</head>\n<body>\n  \x3c!-- at end of body, AFTER Quasar script(s): --\x3e\n  <script src=\"https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmarkdown/dist/index.umd.min.js\"><\/script>\n</body>\n```\nIf you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):\n```html\n<link href=\"https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmarkdown/dist/index.rtl.min.css\" rel=\"stylesheet\" type=\"text/css\">\n```\n:::\n\n## Testing on Codepen\n[UMD Example on Codepen](https://codepen.io/Hawkeye64/pen/ExxzdMp?editors=1010)\n\n\n# Docs\nCan be found [here](https://quasarframework.github.io/quasar-ui-qmarkdown).\n\n# Examples\nCan be found [here](https://quasarframework.github.io/quasar-ui-qmarkdown/examples).\n\n# Interactive Demo\nCan be found [here](https://quasarframework.github.io/quasar-ui-qmarkdown/demo).\n\n# Demo (source) Project\nCan be found [here](https://github.com/quasarframework/quasar-ui-qmarkdown/tree/master/demo).\n\n---\n\n# Working with markdown\n::: tip\nWhen working with markdown, you must always left-justify the content to avoid it being converted to blockquotes or other issues.\n:::\n\nThere are two way to pass your markdown content to QMarkdown: Vue slot or property.\n\nQMarkdown App Extension also comes with a Webpack loader that allows you to import your markdown directly into your code.\n\nYou have the ability to get the TOC (Table of Contents), if one is generated, and display that as well.\n\n## Using the `src` property\nIt's as simple as:\n```html\n<q-markdown src=\":::\\nThis is a **test** of markdown\\n:::\"></q-markdown>\n```\n**Output**:\n\n:::\nThis is a **test** of markdown\n:::\n\n\n## Using a Vue slot\nYou can simply use a Vue slot to display markdown.\n\nIn your HTML:\n```html\n<q-markdown>\n:::\nPut your markdown here\n\nClassic markup: :wink: :joy: :cry: :angel: :heart: :beers: :laughing: :yum:\n\nShortcuts (emoticons): :-) :-( 8-) ;)\n:::\n</q-markdown>\n```\n**Output**:\n\n:::\nPut your markdown here\n\nClassic markup: :wink: :joy: :cry: :angel: :heart: :beers: :laughing: :yum:\n\nShortcuts (emoticons): :-) :-( 8-) ;)\n:::\n\nA couple of caveats to remember.\n\nAlways keep your markdown left justified. It does not have to line up with your HTML. This way, the markdown processor won't process it as a blockquote.\n\nIf you start getting weird linting errors, consider a markdown file and importing it.\n\n## Importing Markdown\nQMarkdown App Extesnion comes with a Webpack loader for importing markdown files directly into your code.\n\nIn your JavaScript:\n```js\nimport markdown from '../markdown/calendar.md'\n\nexport default {\n  data () {\n    return {\n      markdown: markdown\n    }\n  },\n...\n```\n\nAnd, in your HTML:\n```html\n<q-markdown :src=\"markdown\" />\n```\n\nOr, alternatively, you can import it in your vue-router `routes.js` file:\n\n```js\nconst routes = [\n  {\n    path: '/',\n    component: () => import('layouts/MyLayout.vue'),\n    children: [\n      { path: '', component: () => import('pages/Index.vue') },\n      { path: 'contact', component: () => import('pages/contact.vmd') }\n    ]\n  }\n]\n```\n\n# Setting up Table of Contents\nYou enable a TOC by setting `:toc=\"true\"`. The data in the TOC is based on HTML Headings (H1-H6). You can change the number of headings that you are interested in by using the `toc-start` and `toc-end` properties.\n\nTo get the data for the TOC, you must use the `@data` event.\n\nHTML\n```html\n<q-markdown :src=\"markdown\" toc @data=\"onToc\" />\n```\n\nJavaScript:\n```js\nmethods: {\n  onToc (toc) {\n    this.toc = toc\n  }\n}\n```\n\nThe TOC data looks like this:\n```\n[\n  {id: 'h2-Heading', label: 'h2 Heading', level: 2, children: []},\n  {id: 'h3-Heading', label: 'h3 Heading', level: 3, children: []}\n]\n```\n\nIf you desire a hierarchical tree of data instead, do the following:\n\nHTML\n```html\n<q-markdown ref=\"markdown\" :src=\"markdown\" toc @data=\"onToc\" />\n```\n\nJavaScript:\n```js\nmethods: {\n  onToc (toc) {\n    this.toc = this.$refs.markdown.makeTree(toc)\n  }\n}\n```\n\nThe TOC data will be transformed to the following:\n```\n[\n  {id: 'h2-Heading', title: 'h2 Heading', level: 2, children: [\n    {id: 'h3-Heading', title: 'h3 Heading', level: 3, children: []}\n  ]}\n\n]\n```\n\n# Importing Vue+Markdown (.vmd)\n\nYou are able to mix Vue (SFC: single-file component) and Markdown together. This must be in a file with an extension of `.vmd` (vue+markdown). The markdown can only reside in the `<template>` section of the Vue SFC file.\n\nThe minimal viable `.vmd` file must contain a `<template>` section. All other sections are optional.\n\nExample:\n\n```html\n<template>\n  <div class=\"q-pa-md q-gutter-sm q-markdown\">\n\nQMarkdown\n===\n\nQMarkdown is a [Quasar App Extension](https://v1.quasar.dev/app-extensions/introduction). It provides the ability for your web app to display markdown.\n\n# Features\n... // the rest of the markdown\n</template>\n```\n\nAs you may have noticed, your HTML code should add the `q-markdown` class to the wrapper html in order to get all proper syntax highlighting.\n\nNow, as far as getting it to be displayed on your page, do the following in your `<script>` section:\n\n```js\nimport markdownVue from '../markdown/markdown.vmd'\n\nexport default {\n\n  components: {\n    markdownVue\n  },\n\n```\n\nand in your HTML `<template>` section:\n\n```html\n<template>\n  <markdown-vue />\n</template>\n```\n\n## TOC with Vue+Markdown\n\nIf you would like to generate a TOC (Table of Contents) derived from the header components (h1, h2, h3, etc), you will need to add some code to your `.vmd` file so it can be accepted. Just add the following to your `data ()` instance in the `.vmd`:\n\n```\n  data () {\n    return {\n      // eslint-disable-next-line\n      tocData: []\n    }\n  },\n```\n\nThe Vue+Markdown (`.vmd`) loader will replace the `tocData: []`, if found, and add the TOC data.\n\n::: warning\nNotice the commented line `eslint-disable-next-line`? The data added is not formatted and eslint will complain during compilation time. If you use something other than eslint, you may need to add an appropriate **ignore** statement for your linter.\n:::\n\nFinally, if your TOC data is used elsewhere, like the right-drawer in these docs, you need a way of getting it there and if you are using a Vuex store, this is relative easy:\n\n```\n  mounted () {\n    this.toc = this.tocData\n  },\n\n  computed: {\n    toc:\n    {\n      get () {\n        return this.$store.state.common.toc\n      },\n      set (toc) {\n        this.$store.commit('common/toc', toc)\n      }\n    }\n  }\n```\n\n## Vue+Markdown Issues\nSo far, a couple of issues have been found.\n1. When using `-` over multiple rows for an unorder list, the markdown processor sometimes is not putting in the end `</ul>` tag which causes an issue with Vue transpiling. You can make this an ordered list with `1.` notation.\n2. When using text interpolation, better known as moustache or handle bars, the Vue Loader sees these in the markdown and tries to do substitution which will cause Vue Loader to complain that the variable does not exist. You can fix this, by taking the text from the interpolation and use the `v-text=\"my text\"` instead (like a `span` tag).\n\n## Vue+Markdown Comments\nVue+Markdown is experimental. There are a few other authors doing it, like **Vue Press** and **Sable**, as well as the **Quasar Documentation**. However, none of them are using a `.vmd` extension. This was used to distinguish `vue+markdown` from regular markdown. As such, your favorite editor may not have syntax highlighting that works with `.vmd` files. Hopefully, in the future, this will be resolved.\n\n## Front-Matter with Vue+Markdown\nFront-Matter is a way of extracting meta data from the beginning of a file and converting it to object format. The format for Front-Matter is in YAML format.\n\n::: tip\nAll Front-Matter meta data defined in your .vmd file **must** be at the top of the file.\n:::\n\nAn example of Front-Matter YAML:\n\n```yaml\n---\ntitle: QMarkdown Docs\ndesc: This is the documentation for QMarkdown\n---\n```\n\nThis will be converted to:\n\n```js\n{\n  title: \"QMarkdown Docs\",\n  desc: \"This is the documentation for QMarkdown\"\n}\n```\n\nThis is injected into your Vue data by having the following:\n\n```js\n  data () {\n    return {\n      // eslint-disable-next-line\n      frontMatter: {}\n    }\n  },\n```\n\nThe Vue+Markdown (`.vmd`) loader will replace the `frontMatter: {}`, if found, and add the Front-Matter data.\n\n::: warning\nNotice the commented line `eslint-disable-next-line`? The data added is not formatted and eslint will complain during compilation time. If you use something other than eslint, you may need to add an appropriate **ignore** statement for your linter.\n:::\n\nFinally, you can use the Front-Matter data like this:\n\n```js\n  mounted () {\n    document.title = this.frontMatter.title\n  },\n```\n\n## Importing markdown in a VMD (Vue+Markdown)\nDid you know you can also import markdown in a `.vmd` component?\n\nHere is an example of how to do just that:\n\n```html\n---\ntitle: Contact us\ndesc: Our contact details\n---\n\n<template>\n<div>\n  <qm-toc ref=\"qm-toc\" :toc-tree=\"tocTree\"></qm-toc>\n  <q-markdown\n    :src=\"markdown\"\n    toc\n    :toc-start=\"2\"\n    :toc-end=\"3\"\n    @data=\"onToc\"\n    ref=\"markdown\"\n    class=\"q-pa-md\"\n  />\n</div>\n</template>\n\n<script>\nimport mdMixin from 'src/md/md-mixin'\nimport markdown from './contact.md'\n\nexport default {\n  mixins: [mdMixin],\n\n  data () {\n    return {\n      // eslint-disable-next-line\n      frontMatter: {},\n      // eslint-disable-next-line\n      tocData: [],\n\n      markdown\n    }\n  }\n}\n<\/script>\n```\n\nNotice the mixin used?\n\nHere is the code for that to generate your table of contents:\n```html\n<template>\n  \x3c!-- We display the TOC only if it is not empty (v-if) and the screen is wide\n  enough (class: gt-xs). We apply a medium margin: 'q-ma-md' --\x3e\n  <q-card\n    v-if=\"tocTree.length\"\n    class=\"gt-xs float-right q-ma-md\"\n    flat\n    bordered\n  >\n    \x3c!-- We use the 'horizontal' to remove paddings --\x3e\n    <q-card-section horizontal>\n      \x3c!-- We use 'q-expansion-item' to enable toggling (hide/show) the TOC --\x3e\n      <q-expansion-item\n        default-opened\n        icon=\"toc\"\n        label=\"Table of contents\"\n      >\n        <q-separator />\n        <q-list>\n          \x3c!-- loop through items of tocTree --\x3e\n          <template v-for=\"item in tocTree\">\n            \x3c!-- if the item does not have children we use 'q-item' --\x3e\n            <q-item\n              v-if=\"!item.children.length\"\n              :key=\"item.id\"\n              :to=\"`#${item.id}`\"\n            >\n              <q-item-section>{{ item.label }}</q-item-section>\n            </q-item>\n            \x3c!-- if the item has children we use 'q-expansion-item' to enable\n            toggling (hiding/showing) them --\x3e\n            <q-expansion-item\n              v-else\n              :key=\"item.id\"\n              default-opened\n              :label=\"item.label\"\n              :to=\"`#${item.id}`\"\n            >\n              \x3c!-- children are displayed in a q-list below their parent --\x3e\n              <q-list>\n                \x3c!-- each child is indented a little (inset-level).\n                Dense mode uses less space --\x3e\n                <q-item\n                  v-for=\"childItem in item.children\"\n                  :key=\"childItem.id\"\n                  dense\n                  :inset-level=\"0.2\"\n                  :to=\"`#${childItem.id}`\"\n                >\n                  <q-item-section>{{ childItem.label }}</q-item-section>\n                </q-item>\n              </q-list>\n            </q-expansion-item>\n          </template>\n        </q-list>\n      </q-expansion-item>\n    </q-card-section>\n  </q-card>\n</template>\n\n<script>\nexport default {\n  props: {\n    // 'tocTree' will be provided by the component using QmToc (vmd components)\n    tocTree: {\n      type: Array,\n      default () { return [] }\n    }\n  }\n}\n<\/script>\n\n<style lang=\"sass\">\n// When navigating (scrolling) to an anchor and to avoid that the anchor gets\n// hidden by the fixed page header we offset the scrolling by the header height.\n.q-markdown [class^=\"q-markdown--heading-h\"]\n  scroll-margin-top: $toolbar-min-height\n</style>\n```\n\n# Overriding Links\nQMarkdown requires the `Material Design` font for external links. If you wish to override this to avoid the font dependency or provide a different icon, you can override this sass:\n\n```sass\n.q-markdown--link-external\n  &:after\n    content: '\\e895'\n    font-family: Material Icons\n```\nTo change colors of your links you can do the following:\n\n```sass\n.q-markdown--link\n  color: blue\n  &:hover\n    color: green\n```\n\nAnd to change it for dark mode:\n\n```sass\n.body--dark\n  .q-markdown--link\n    color: $green-10\n    &:hover\n      color: yellow\n```\n\n# Anchor Links\nAn **Anchor Link** is simply a link that points to an element on a page with a corresponding **id**.\n\nTo show an achor link on this page, to the **Installation Types** (above), then you must use the slugified verion that matches the id, which in this case is **Installation-Types** (notice the hypen).\n\nYou do it in Markdown like this:\n```\n[Jump to Installation Types](#Installation-Types)\n```\n\nNotice, that for the current page only, you use the hashtag to start. This produces the following (be aware you will jump to **Installation Types** if you click it):\n\n[Jump to Installation Types](#Installation-Types)\n\n# Extracting Vue SFC parts\nAdditionally, QMarkdown comes with a utility function to extract SFC files into their tag parts (where tag is one of `template`, `script` and `style`). To import, do the following:\n\n```js\nimport { getTagParts } from '@quasar/quasar-ui-qmarkdown'\n```\n\nAnd then, you can use it like this:\n\n```\n  mounted () {\n    // eslint-disable-next-line import/no-webpack-loader-syntax\n    const results = getTagParts(require('!!raw-loader!../components/Hero.vue').default)\n\n    console.log('template', results.template)\n    console.log('script', results.script)\n    console.log('css', results.css)\n  },\n```\n\nThis makes use of the `raw-loader` Webpack loader. The exclamations (or bang characters) are needed to tell Webpack to override the default loader.\n\n::: tip\n`raw-loader` is already loaded via QMarkdown App Extension and you do not need to install it. If you do not install via the App extension, just include `raw-loader` in your `devDependencies`.\n:::\n\nNow, you will have access to the tag parts of the Vue file.\n\n# Extending\n\n## Extending Markdown-it!\nYou can use the `extend` property to extend the Markdown-it! markdown processor. The extend function takes a single argument of the md (markdown) instance.\n\nNow, you can extend QMarkdown with either your own code or Markdown-it! [plugins](https://www.npmjs.com/search?q=keywords:markdown-it-plugin). Please read the Markdown-It [documentation](https://github.com/markdown-it/markdown-it#readme) on how to do this.\n\nSyntax:\n\n```html\n<q-markdown :extend=\"extendMarkdown\" />\n```\n\n```js\nmethods: {\n  // to extend links\n  extendMarkdown (md) {\n    md.renderer.rules.link_open = (tokens, idx, options, env, self) => {\n      const token = tokens[idx]\n\n      const hrefIndex = token.attrIndex('href')\n      if (token.attrs[hrefIndex][1][0] === '/') {\n        token.attrSet('class', 'q-markdown--link q-markdown--link-local')\n      } else {\n        token.attrSet('class', 'q-markdown--link q-markdown--link-external')\n        token.attrSet('target', '_blank')\n      }\n\n      return self.renderToken(tokens, idx, options)\n    }\n  }\n}\n```\n\n## Extend the Code Highlighting\nQMarkdown uses **Prism** for code highlighting. You can use the `extendPrism` property with a function.\n\nSyntax:\n\n```html\n<q-markdown :extendPrism=\"extendPrism\" />\n```\n\n```js\nmethods: {\n  // to extend Prism\n  extendPrism (Prism) {\n    // this uses the 'autoloader' plugin\n    // https://prismjs.com/plugins/autoloader/\n    Prism.plugins.autoloader.languages_path = 'path/to/grammars/'\n  }\n}\n```\n",i=t("fd03"),d={name:"PageIndex",components:{Hero:s["a"]},data:function(){return{markdown:r,json:i}},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(n){this.$store.commit("common/toc",n)}}},methods:{onToc:function(n){n.push({id:"QMarkdown-API",label:"QMarkdown API",level:1,children:Array(0)}),n.push({id:"Donate",label:"Donate",level:1,children:Array(0)}),this.toc=n}}},l=d,c=t("2877"),m=t("5096"),h=t("9c40"),u=t("eebe"),p=t.n(u),y=Object(c["a"])(l,o,a,!1,null,null,null);e["default"]=y.exports;p()(y,"components",{QPageScroller:m["a"],QBtn:h["a"]})},fd03:function(n){n.exports=JSON.parse('{"type":"component","meta":{"docsUrl":"https://quasarframework.github.io/quasar-ui-qmarkdown/docs"},"props":{"src":{"type":"String","category":"model","desc":"[optional] Pass markdown in as a property","examples":["src=\\"Classic markup: :wink: :joy: :cry: :angel: :heart: :beers: :laughing: :yum:\\""]},"no-abbreviation":{"type":"Boolean","category":"content","desc":"Disable abbreviation conversion"},"no-blockquote":{"type":"Boolean","category":"content","desc":"Disable blockquote conversion"},"no-breaks":{"type":"Boolean","category":"content","desc":"Disable conversion of \'\\\\n\' into <br>"},"no-container":{"type":"Boolean","category":"content","desc":"Disable container conversion"},"no-deflist":{"type":"Boolean","category":"content","desc":"Disable definition list conversion"},"no-emoji":{"type":"Boolean","category":"content","desc":"Disable emojie conversion"},"no-footnote":{"type":"Boolean","category":"content","desc":"Disable footnote conversion"},"no-highlight":{"type":"Boolean","category":"content","desc":"Disable code highlighter"},"no-html":{"type":"Boolean","category":"content","desc":"Disable HTML tags in source"},"no-image":{"type":"Boolean","category":"content","desc":"Disable image conversion"},"no-insert":{"type":"Boolean","category":"content","desc":"Disable insert conversion"},"no-line-numbers":{"type":"Boolean","category":"content","desc":"Disable line numbers on code blocks"},"no-link":{"type":"Boolean","category":"content","desc":"Disable conversion of links"},"no-linkify":{"type":"Boolean","category":"content","desc":"Disable auto-convert URL-like text to links"},"no-mark":{"type":"Boolean","category":"content","desc":"Disable mark conversion"},"no-subscript":{"type":"Boolean","category":"content","desc":"Disable subscript conversion"},"no-superscript":{"type":"Boolean","category":"content","desc":"Disable superscript conversion"},"no-tasklist":{"type":"Boolean","category":"content","desc":"Disable tasklist conversion"},"no-typographer":{"type":"Boolean","category":"content","desc":"Disable language-neutral replacement + quotes beautification"},"line-number-alt":{"type":"String","category":"content","desc":"Provide an alternative character to be used instead of line numbers - must be 1 char in length","examples":["line-number-alt=\\"$\\"","line-number-alt=\\">\\""]},"toc":{"type":"Boolean","category":"behavior","desc":"Set to true if you want a TOC automatically generated"},"toc-start":{"type":"Number","category":"behavior","desc":"The starting Header number for generating a TOC","values":[1,2,3,4,5]},"toc-end":{"type":"Number","category":"behavior","desc":"The ending Header number for generating a TOC. Must be greater than tocStart","values":[2,3,4,5,6]},"task-lists-enable":{"type":"Boolean","category":"content","desc":"Set to true to enable (not read-only) Task Lists"},"task-lists-label":{"type":"Boolean","category":"style","desc":"Set to true to wrap the rendered list items in a <label> element for UX purposes"},"task-lists-label-after":{"type":"Boolean","category":"style","desc":"To add the label after the checkbox (requires `task-lists-label` to be set to `true`)"},"extend":{"type":"Function","category":"extend","desc":"Used to extend the markdown processor. You can use any \'markdown-it\' plugin or write your own","params":{"md":{"type":"Object","desc":"The `markdown-it` instance"}},"examples":[":extend=\\"extendMarkdownFn\\"",":extend=\\"(md) => extendMarkdownFn(md)\\""],"returns":null},"extend-prism":{"type":"Function","category":"extend","addedIn":"v1.0.0","desc":"Used to extend the [Prism](https://prismjs.com/extending.html) code highlighter","params":{"Prism":{"type":"Object","desc":"The `Prism` instance"}},"examples":[":extendPrism=\\"extendPrismFn\\"",":extendPrism=\\"(Prism) => extendPrismFn(Prism)\\""],"returns":null},"content-class":{"type":["Array","String","Object"],"category":"style","desc":"Class definitions to be attributed to the markdown container","examples":["my-special-class",":content-class=\\"{ \'my-special-class\': <condition> }\\""]},"content-style":{"type":["Array","String","Object"],"category":"style","desc":"Style definitions to be attributed to the markdown container","examples":["background-color: #ff0000",":content-style=\\"{ backgroundColor: \'#ff0000\' }\\""]}},"slots":{"default":{"desc":"This is the default slot to be used for markdown"}},"events":{"toc":{"desc":"If `toc` property is `true` then if a TOC is generated it is emitted via this event","params":{"tocData":{"type":"Array","desc":"Array of one or more TOC data objects","definition":{"id":{"type":"String","desc":"The id for the TOC header"},"label":{"type":"String","desc":"The TOC header label"},"level":{"type":"Number","desc":"The TOC header type (1=h1, 2=h2, etc)"},"children":{"type":"Array","desc":"This is normally empty, unless you pass this toc array to the `makeTree` method"}}}}}},"methods":{"makeTree":{"type":"Function","desc":"Pass into this function the results from the `@data` event to have the data array transformed into a hierarchical tree","params":{"data":{"type":"Array","desc":"The results from the `@data` event"}},"returns":{"type":"Array","desc":"A modified version of the passed in data in a hierachical format","definition":{"id":{"type":"String","desc":"The slugified heading used for the html key","examples":["the-heading"]},"label":{"type":"String","desc":"The original label","examples":["The Heading"]},"level":{"type":"Number","desc":"The heading level: h1 == 1, h2 == 2m, etc.","examples":["1","2"]},"children":{"type":"Array","desc":"If this object is level 1, then any level 2 objects will be in the `children` key and so on"}}}}}}')}}]);