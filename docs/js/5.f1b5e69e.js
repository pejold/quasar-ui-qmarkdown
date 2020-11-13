(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0960":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("hero",[e("div",[e("example-title",{attrs:{title:"Markdown"}}),e("q-markdown",[t._v("\n::: warning\nNote that below, markdown is being used to display markdown examples, which could be interpreted, so you may not be able to see the exact markup being used. If you suspect this to be the case, view the source on Github instead (click Github icon).\n:::\n      ")]),e("example-viewer",{attrs:{title:"Abbreviations",file:"Abbreviations","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[e("q-markdown",[t._v("\nHover over the word **HTML** below to see the abbreviation.\n        ")])],1),e("example-viewer",{attrs:{title:"Blockquotes",file:"Blockquotes","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),e("example-viewer",{attrs:{title:"Code",file:"Code","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),e("example-viewer",{attrs:{title:"Containers",file:"Containers","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),e("example-viewer",{attrs:{title:"Definition Lists",file:"DefinitionLists","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),e("q-markdown",[t._v("\n::: info\nEmojis are rendered as appropriate unicode chars and are universal. This means what you see is based on what is installed on the client system, but the unicode char is the same intent for all systems.\n\nFor instance, different versions of Linux can have different sets of emojies as can browsers. So, what you see on one system may not match exactly what you see on another system. But, a :heart: is still a **heart** and :joy: is still **joy**.\n:::\n      ")]),e("example-viewer",{attrs:{title:"Emojies",file:"Emojies","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),e("example-viewer",{attrs:{title:"Emphasis",file:"Emphasis","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),e("example-viewer",{attrs:{title:"Footnotes",file:"Footnotes","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),e("example-viewer",{attrs:{title:"Heading",file:"Heading","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),e("example-viewer",{attrs:{title:"Horizontal Rules",file:"HorizontalRules","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),e("example-viewer",{attrs:{title:"Images",file:"Images","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),e("example-viewer",{attrs:{title:"Insert",file:"Insert","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),e("example-viewer",{attrs:{title:"Links",file:"Links","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[e("q-markdown",[t._v("\nLinks are auto-detected for local or external. External links use `.q-markdown--link-external:after` to show an icon indicator.\n\nYou can override in CSS the `content` attribute to change the icon. Otherwise, you need to load Material icons.\n        ")])],1),e("example-viewer",{attrs:{title:"Lists",file:"Lists","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),e("example-viewer",{attrs:{title:"Mark",file:"Mark","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),e("example-viewer",{attrs:{title:"Subscript/Superscript",file:"SubscriptSuperscript","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),e("example-viewer",{attrs:{title:"Tables",file:"Tables","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),e("example-viewer",{attrs:{title:"Task Lists",file:"TaskLists","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[e("q-markdown",[t._v("\nTask list have some special settings. By default, turning on these other options won't do anything. It is up to you to provide the CSS to support these options.\n\nHere is some example CSS that you can take and modify to your liking:\n\n```css\n.task-list-item label {\n  color: blue;\n}\n.task-list-item-label {\n  color: red !important;\n}\n```\nThis is what is used in the example below. Play with the controls to see how the tasklist items are affected.\n        ")])],1),e("example-viewer",{attrs:{title:"Titles",file:"Titles","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),e("example-viewer",{attrs:{title:"Typography",file:"Typography","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),e("example-viewer",{attrs:{title:"Extend (add plugins)",file:"extend","location-url":t.locationUrl,"no-edit":""}},[e("q-markdown",[t._v("\nQMarkdown can be extended with **markdown-it plugins** by using the `extend` property.\n\nUnfortunately, the `markdown-it-mermaid` plugin used in this example does not have a UMD version and therefore cannot be displayed with CodePen.\n        ")])],1)],1),e("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[e("q-btn",{class:{"text-black bg-grey-4":t.$q.dark.isActive,"text-white bg-primary":!t.$q.dark.isActive},attrs:{fab:"",icon:"keyboard_arrow_up"}})],1)],1)},o=[],i=e("2514"),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:t.slugifiedTitle},on:{click:function(s){return t.copyHeading(t.slugifiedTitle)}}},[t._v(t._s(t.title))])},l=[];e("ac1f"),e("5319"),e("498a");function r(t){var s=document.createElement("textarea");s.className="fixed-top",s.value=t,document.body.appendChild(s),s.focus(),s.select(),document.execCommand("copy"),document.body.removeChild(s)}function c(t){var s=window.location.origin+window.location.pathname+"#"+t,e=document.getElementById(t);e&&(e.id=""),window.location.hash="#"+t,e&&setTimeout((function(){e.id=t}),300),r(s),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function h(t){return encodeURIComponent(String(t).trim().replace(/\s+/g,"-"))}var d={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return h(this.title)}},methods:{copyHeading:c}},p=d,m=e("2877"),u=Object(m["a"])(p,n,l,!1,null,null,null),f=u.exports,w=e("384e"),b={name:"Examples",components:{Hero:i["a"],ExampleTitle:f},data:function(){return{tempToc:[],locationUrl:"https://github.com/quasarframework/quasar-ui-qmarkdown/tree/dev/demo/src/examples/",jsPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmarkdown@".concat(w["c"],"/dist/index.umd.min.js")],cssPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmarkdown@".concat(w["c"],"/dist/index.min.css"),"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.0/css/all.css"]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("Markdown"),this.addToToc("Abbreviations",2),this.addToToc("Blockquotes",2),this.addToToc("Code",2),this.addToToc("Containers",2),this.addToToc("Definition Lists",2),this.addToToc("Emojies",2),this.addToToc("Emphasis",2),this.addToToc("Footnotes",2),this.addToToc("Heading",2),this.addToToc("Horizontal Rules",2),this.addToToc("Images",2),this.addToToc("Insert",2),this.addToToc("Links",2),this.addToToc("Lists",2),this.addToToc("Mark",2),this.addToToc("Subscript/Superscript",2),this.addToToc("Tables",2),this.addToToc("Task Lists",2),this.addToToc("Titles",2),this.addToToc("Typography",2),this.addToToc("Extend (add plugins)",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(t){this.$store.commit("common/toc",t)}}},methods:{addToToc:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=t;s>1&&(e="example-"+e);var a=h(e);this.tempToc.push({children:[],id:a,label:t,level:s})}}},v=b,T=e("5096"),x=e("9c40"),y=e("eebe"),j=e.n(y),k=Object(m["a"])(v,a,o,!1,null,null,null);s["default"]=k.exports;j()(k,"components",{QPageScroller:T["a"],QBtn:x["a"]})},2514:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("section",{staticClass:"page-header"},[e("div",{staticClass:"donate"},[e("a",{attrs:{href:t.donateUrl,target:"_blank",title:"Donate"}},[e("i",{staticClass:"fas fa-heart",staticStyle:{color:"red"}})])]),e("div",{staticClass:"text-h1 project-name"},[t._v(t._s(t.title))]),e("div",{staticClass:"text-h2 project-tagline"},[t._v(t._s(t.tagline))]),e("q-btn",{staticClass:"btn",attrs:{type:"a",href:t.locationUrl,target:"_blank",label:"View on GitHub","no-caps":"",flat:""}}),e("q-btn",{staticClass:"btn",attrs:{to:"/docs",label:"Docs","no-caps":"",flat:""}}),e("q-btn",{staticClass:"btn",attrs:{to:"/examples",label:"Examples","no-caps":"",flat:""}}),t.hasInteractiveDemo?e("q-btn",{staticClass:"btn",attrs:{to:"/demo",label:"Interactive Demo","no-caps":"",flat:""}}):t._e(),e("q-btn",{staticClass:"btn",attrs:{type:"a",href:t.donateUrl,target:"_blank",label:"Donate","no-caps":"",flat:""}}),e("div",{staticClass:"row justify-evenly items-center q-ma-sm"},[e("div",{staticClass:"quasar"},[t._v(t._s(t.quasarDesc))]),e("div",{staticClass:"byline"},[t._v(t._s(t.byline)),e("a",{attrs:{href:t.bylineTwitter,target:"_blank",title:"Twitter"}},[e("i",{staticClass:"fab fa-twitter"})])])])],1),e("main",{staticClass:"flex flex-start justify-center inset-shadow"},[e("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg inset-shadow",staticStyle:{width:"100%",height:"3px"}}),e("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg shadow-1",staticStyle:{"max-width":"800px",width:"100%"}},[t._t("default")],2)])])},o=[],i={name:"Hero",data:function(){return{title:"QMarkdown",tagline:"Inline markdown for your Quasar App",byline:"Created and maintained by Jeff Galbraith",bylineTwitter:"https://twitter.com/jgalbraith64",quasarDesc:"A Quasar Framework Component and App Extension",locationUrl:"https://github.com/quasarframework/quasar-ui-qmarkdown",donateUrl:"https://github.com/sponsors/hawkeye64",hasInteractiveDemo:!0}}},n=i,l=e("2877"),r=e("9c40"),c=e("eebe"),h=e.n(c),d=Object(l["a"])(n,a,o,!1,null,null,null);s["a"]=d.exports;h()(d,"components",{QBtn:r["a"]})}}]);