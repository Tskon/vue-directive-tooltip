(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tests"],{"11e9":function(t,e,o){var i=o("52a7"),n=o("4630"),s=o("6821"),r=o("6a99"),c=o("69a8"),a=o("c69a"),l=Object.getOwnPropertyDescriptor;e.f=o("9e1e")?l:function(t,e){if(t=s(t),e=r(e,!0),a)try{return l(t,e)}catch(o){}if(c(t,e))return n(!i.f.call(t,e),t[e])}},"36bd":function(t,e,o){"use strict";var i=o("4bf8"),n=o("77f1"),s=o("9def");t.exports=function(t){var e=i(this),o=s(e.length),r=arguments.length,c=n(r>1?arguments[1]:void 0,o),a=r>2?arguments[2]:void 0,l=void 0===a?o:n(a,o);while(l>c)e[c++]=t;return e}},"43ea":function(t,e,o){},"5dbc":function(t,e,o){var i=o("d3f4"),n=o("8b97").set;t.exports=function(t,e,o){var s,r=e.constructor;return r!==o&&"function"==typeof r&&(s=r.prototype)!==o.prototype&&i(s)&&n&&n(t,s),t}},"6c7b":function(t,e,o){var i=o("5ca1");i(i.P,"Array",{fill:o("36bd")}),o("9c6c")("fill")},"7b46":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"tests"},[o("h3",[t._v("Tests")]),o("section",[o("h4",[t._v("Usage")]),o("section",[o("p",[t._v("\n                Basic "),o("br"),o("code",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"simple way",expression:"'simple way'"}]},[t._v("<span v-tooltip=\"'simple way'\"...")])]),o("p",[t._v("\n                Object way "),o("br"),o("code",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Object way"},expression:"{ content: 'Object way' }"}]},[t._v("<span v-tooltip=\"{ content: 'Object way' }\"...")])])]),o("section",[o("h5",[t._v("Referencing an HTMLElement")]),o("h6",[t._v("Standard html element")]),o("p",[o("code",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{html:"id-of-html-content-by-html"},expression:"{ html: 'id-of-html-content-by-html' }"}]},[t._v("<span v-tooltip=\"{ html: 'id-of-html-content' }\"...")]),o("br")]),o("p",[t._v("OR")]),o("p",[o("code",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{id:"id-of-html-content-by-id"},expression:"{ id: 'id-of-html-content-by-id' }"}]},[t._v("<span v-tooltip=\"{ id: 'id-of-html-content' }\"...")])]),o("p",[t._v("Target")]),t._m(0),o("div",{staticClass:"tooltip-content",attrs:{id:"id-of-html-content-by-html"}},[o("p",{domProps:{textContent:t._s(t.time)}}),t._m(1),t._m(2)]),o("div",{staticClass:"tooltip-content",attrs:{id:"id-of-html-content-by-id"}},[o("p",{domProps:{textContent:t._s(t.time)}}),t._m(3),t._m(4)]),t._m(5),o("p",[o("code",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{ref:"tooltipRef"},expression:"{ ref: 'tooltipRef' }"}]},[t._v("<span v-tooltip=\"{ ref: 'ref-of-html-content' }\"...")])]),o("p",[t._v("Target")]),t._m(6),o("div",{ref:"tooltipRef",staticClass:"tooltip-content"},[o("p",{domProps:{textContent:t._s(t.time)}}),o("p",[t._v("Let's use some HTML in this tooltip")]),t._m(7)])])]),o("section",[o("h4",[t._v("Positions")]),o("p",[t._v("\n            Default "),o("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"bottom",expression:"'bottom'"}],staticClass:"tooltip-target"},[t._v("position")]),o("br"),o("code",[t._v("<span v-tooltip=\"'I am on the bottom'\"...")])]),o("p",[t._v("\n            Position "),o("span",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:"I am on the right",expression:"'I am on the right'",modifiers:{right:!0}}],staticClass:"tooltip-target"},[t._v("right")]),o("br"),o("code",[t._v("<span v-tooltip.right=\"'I am on the right'\"...")])]),o("p",[t._v("\n            Position "),o("span",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:"I am on the top",expression:"'I am on the top'",modifiers:{top:!0}}],staticClass:"tooltip-target"},[t._v("top")]),o("br"),o("code",[t._v("<span v-tooltip.top=\"'I am on the top'\"...")])]),o("p",[t._v("\n            I need a longer sentence to position "),o("span",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:"I am on the left",expression:"'I am on the left'",modifiers:{left:!0}}],staticClass:"tooltip-target"},[t._v("left")]),o("br"),o("code",[t._v("<span v-tooltip.left=\"'I am on the left'\"...")])])]),o("section",[o("h4",[t._v("Events")]),o("p",[t._v("\n            There are several options to trigger the display of the tooltip:\n        ")]),t._m(8),o("p",[o("code",{directives:[{name:"tooltip",rawName:"v-tooltip.click",value:{content:"show on click"},expression:"{ content: 'show on click' }",modifiers:{click:!0}}]},[t._v("<span v-tooltip.click=\"{ content: 'Show on: click' }\"...")])]),o("p",[o("code",{directives:[{name:"tooltip",rawName:"v-tooltip.focus.hover",value:{content:"Show on: focus, hover"},expression:"{ content: 'Show on: focus, hover' }",modifiers:{focus:!0,hover:!0}}]},[t._v("<span v-tooltip.focus.hover=\"{ content: 'Show on: focus, hover' }\"...")])]),o("p",[t._v("\n            Click to open AND close"),o("br"),o("code",{directives:[{name:"tooltip",rawName:"v-tooltip.click.manual",value:{content:"show/hide on click"},expression:"{ content: 'show/hide on click' }",modifiers:{click:!0,manual:!0}}]},[t._v("\n                <span v-tooltip.click.manual=\"{ content: 'Show on click' }\"...")])])]),o("section",[o("h4",[t._v("Visibility")]),o("p",[o("button",{on:{click:function(e){t.visibility=!t.visibility}}},[t.visibility?o("span",[t._v("hide")]):o("span",[t._v("show")]),t._v("\n                tooltip\n            ")]),t._v("\n             \n            "),o("button",{directives:[{name:"tooltip",rawName:"v-tooltip.hover.right",value:{content:"Hovering!",visible:t.visibility},expression:"{ content: 'Hovering!', visible: visibility }",modifiers:{hover:!0,right:!0}}],on:{click:function(e){t.visibility=!t.visibility}}},[t.visibility?o("span",[t._v("Hover Hide Tooltip")]):o("span",[t._v("Hover Show Tooltip")])])]),o("p",[t._v("\n            In case you need to toggle a tooltip's visibility, you can use the "),o("b",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:{content:"change the visibility",visible:t.visibility},expression:"{ content: 'change the visibility', visible: visibility }",modifiers:{top:!0}}],staticClass:"tooltip-target"},[t._v("visible")]),t._v(" option\n        ")]),o("p",[o("code",[t._v("<span v-tooltip=\"{ content: 'change the visibility', visible: "),o("span",{domProps:{textContent:t._s(t.visibility)}}),t._v(' }"...')])]),o("p",[t._v("\n            Toggle visibility AND disable triggers (hover, click, focus) "),o("b",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom.notrigger",value:{content:"change the visibility",visible:t.visibility},expression:"{ content: 'change the visibility', visible: visibility }",modifiers:{bottom:!0,notrigger:!0}}],staticClass:"tooltip-target"},[t._v("visible")]),t._v(" option\n        ")]),o("p",[o("code",[t._v("<span v-tooltip.notrigger=\"{ content: 'change the visibility', visible: "),o("span",{domProps:{textContent:t._s(t.visibility)}}),t._v(' }"...')])])]),o("section",[o("h4",[t._v("Tooltip offset")]),o("p",[o("code",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:{content:"let's offset this",offset:20},expression:"{ content: 'let\\'s offset this', offset: 20 }",modifiers:{top:!0}}]},[t._v('\n                <span v-tooltip="{ offset: 20 }"...')])])]),o("section",[o("h4",[t._v("Custom CSS classes")]),o("p",[o("code",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:{content:"custom class",class:"tooltip-custom tooltip-other-custom"},expression:"{ content: 'custom class', class: 'tooltip-custom tooltip-other-custom' }",modifiers:{top:!0}}]},[t._v("\n                <span v-tooltip=\"{ class: 'tooltip-custom tooltip-other-custom' }\"...")])])]),o("section",[o("div",{attrs:{id:"perf-test"}},t._l(t.perfList,function(e,i){return o("div",{key:i},[o("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.time,expression:"time"}],staticClass:"tooltip-target"},[t._v("Performance item "),o("span",{domProps:{textContent:t._s(i)}})])])}),0)])])},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("code",[t._v('\n                    <div id="id-of-html-content"...\n                ')])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v("Let's use some "),o("b",[t._v("HTML")]),t._v(" in this tooltip")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ol",[o("li",[t._v("set "),o("strong",[t._v("v-tooltip")]),t._v(" with the "),o("strong",[t._v("html")]),t._v(" attribute")]),o("li",[o("strong",[t._v("html")]),t._v(" should be the "),o("strong",[t._v("id")]),t._v(" attribute of the html target element")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v("Let's use some "),o("b",[t._v("HTML")]),t._v(" in this tooltip")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ol",[o("li",[t._v("set "),o("strong",[t._v("v-tooltip")]),t._v(" with the "),o("strong",[t._v("id")]),t._v(" attribute")]),o("li",[o("strong",[t._v("id")]),t._v(" should be the "),o("strong",[t._v("id")]),t._v(" attribute of the html target element")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h6",[t._v("Vue.js way "),o("code",[t._v("ref")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("code",[t._v('\n                    <div ref="ref-of-html-content"...\n                ')])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ol",[o("li",[t._v("set "),o("strong",[t._v("v-tooltip")]),t._v(" with the "),o("strong",[t._v("ref")]),t._v(" attribute")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v("\n            you can use a combination of these keywords: "),o("strong",[t._v("click, hover, focus")])])}],s=(o("c5f6"),o("6c7b"),{data:function(){return{perfList:Array(1e3).fill("text",0,1e3),visibility:!0,timeNow:""}},mounted:function(){this.getTime()},computed:{time:function(){return this.timeNow},seconds:function(){return Number(this.timeNow[this.timeNow.length-5])}},methods:{getTime:function(){var t=this;setInterval(function(){var e=new Date;t.timeNow="".concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getSeconds(),":").concat(e.getMilliseconds())},1e3)}}}),r=s,c=(o("eecd"),o("2877")),a=Object(c["a"])(r,i,n,!1,null,null,null);e["default"]=a.exports},"8b97":function(t,e,o){var i=o("d3f4"),n=o("cb7c"),s=function(t,e){if(n(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=o("9b43")(Function.call,o("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,o){return s(t,o),e?t.__proto__=o:i(t,o),t}}({},!1):void 0),check:s}},9093:function(t,e,o){var i=o("ce10"),n=o("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,n)}},aa77:function(t,e,o){var i=o("5ca1"),n=o("be13"),s=o("79e5"),r=o("fdef"),c="["+r+"]",a="​",l=RegExp("^"+c+c+"*"),v=RegExp(c+c+"*$"),p=function(t,e,o){var n={},c=s(function(){return!!r[t]()||a[t]()!=a}),l=n[t]=c?e(f):r[t];o&&(n[o]=l),i(i.P+i.F*c,"String",n)},f=p.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(v,"")),t};t.exports=p},c5f6:function(t,e,o){"use strict";var i=o("7726"),n=o("69a8"),s=o("2d95"),r=o("5dbc"),c=o("6a99"),a=o("79e5"),l=o("9093").f,v=o("11e9").f,p=o("86cc").f,f=o("aa77").trim,m="Number",u=i[m],h=u,_=u.prototype,d=s(o("2aeb")(_))==m,b="trim"in String.prototype,g=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():f(e,3);var o,i,n,s=e.charCodeAt(0);if(43===s||45===s){if(o=e.charCodeAt(2),88===o||120===o)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+e}for(var r,a=e.slice(2),l=0,v=a.length;l<v;l++)if(r=a.charCodeAt(l),r<48||r>n)return NaN;return parseInt(a,i)}}return+e};if(!u(" 0o1")||!u("0b1")||u("+0x1")){u=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof u&&(d?a(function(){_.valueOf.call(o)}):s(o)!=m)?r(new h(g(e)),o,u):g(e)};for(var y,w=o("9e1e")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;w.length>N;N++)n(h,y=w[N])&&!n(u,y)&&p(u,y,v(h,y));u.prototype=_,_.constructor=u,o("2aba")(i,m,u)}},eecd:function(t,e,o){"use strict";var i=o("43ea"),n=o.n(i);n.a},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=tests.7998c074.js.map