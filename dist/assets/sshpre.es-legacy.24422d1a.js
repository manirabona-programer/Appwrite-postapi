!function(){function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var a,o,r,i,s=[],l=!0,c=!1;try{if(r=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(a=r.call(n)).done)&&(s.push(a.value),s.length!==e);l=!0);}catch(u){c=!0,o=u}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return s}}(t,n)||e(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}System.register([],(function(n,o){"use strict";return{execute:function(){function o(t,e,n,o,r,i,s,l){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(c=function(t){!(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)&&("undefined"==typeof __VUE_SSR_CONTEXT__?"undefined":a(__VUE_SSR_CONTEXT__))<"u"&&(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):r&&(c=l?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var d=u.render;u.render=function(t,e){return c.call(e),d(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:u}}var r={quote:/("(?:\\"|[^"])*")|('(?:\\'|[^'])*')/,comment:/(\/\/.*?(?:\n|$)|\/\*.*?(?:\*\/|$))/,doctype:/(&lt;\!DOCTYPE.*?&gt;)/,htmlTag:/&lt;(?:([a-z][\w\d-]*)((?:[\w\d\- ]+=(?:"[^"]*"|'[^']*'))*|(?:(?!&(?:lt|amp);).)*?)(\s*\/?)|(\/?)([a-z][\w\d-]*))&gt;/,htmlentity:/(&amp;(?:[a-z]+|#x?\d+);)/,punctuation:new RegExp("(!==?|(?:[[\\](){}.:,+\\-?=!])+|(?<!&(?:[a-z]+|#x?\\d+));|\\|\\||&lt;|&gt;|&amp;)"),number:/(-?(?:\.\d+|\d+(?:\.\d+)?))/,boolean:/\b(true|false)\b/},i={shell:{quote:r.quote,comment:/(#.*?)(?:\n|$)/,keyword:/\b(p?npm|yarn|i(?:nstall)?|run|audit|outdated|update|publish|whoami|cd|sudo|chmod|chown|ls|cat|vim?|scp|rm|mv|mkdir|ln|open|cwd|which|clear|curl|ping|systemctl|echo|export|open|bash|exit)\b/,param:/( --(?:save|save-dev))(?:\s|$)/},xml:{doctype:r.doctype,quote:r.quote,comment:/(&lt;!--.*?(?:--&gt;|$))/,htmlentity:r.htmlentity,tag:r.htmlTag},html:{doctype:r.doctype,quote:r.quote,comment:/(&lt;!--.*?(?:--&gt;|$))/,htmlentity:r.htmlentity,tag:r.htmlTag},"html-vue":{doctype:r.doctype,quote:r.quote,comment:/(&lt;!--.*?(?:--&gt;|$))/,htmlentity:r.htmlentity,tag:r.htmlTag},pug:{text:/((?:^|\n)[ \t]*|^)\|([ \t]*)([^\n]+(?=\s*(?:\n|$)))/,text2:/([ \t]*)([.#\-\w\d]+(?:\([^)]*\))*)\.\n((?:\n+(?=\4[ \t]+)|(?=\4[ \t]+).+?(?:\n|$)*?)*)(?=\s*(?:\n|$))/,quote:r.quote,comment:/(^|\n)([ \t]*|^)(\/\/-[ \t]*(?:[^\n]*?(?:\n\10[ \t]+[^\n]*)+|[^\n]+(?=\n|$)))/,tag:/([a-z][\w\d-]*|)([.#][a-z][-.\w\d]*|)\b(?:\(((?:[\w\d\- ]+=(?:"[^"]*"|'[^']*'))*|(?:(?!&(?:lt|amp);).)*?)\))?(\.?)([ \t]*)([^\n]+)?(?=\n|$)/,"inline-tag":/#\[([^\[\]]+)\]/},css:{comment:/(\/\*.+?(?:\*\/|$))/,quote:/("(?:\\"|[^"])*")|('(?:\\'|[^'])*')/,pseudo:/(:(?:hover|active|focus|visited|not|before|after|(?:first|last|nth)-child))/,"selector keyword vendor":/(@-(?:moz|o|webkit|ms)-(?=keyframes\s))/,"selector keyword":/((?:@(?:import|media|font-face|keyframes)|screen|print|and)(?=[\s({])|keyframes|\s(?:ul|ol|li|table|div|pre|p|a|img|br|hr|h[1-6]|em|strong|span|html|body|iframe|video|audio|input|button|form|label|fieldset|small|abbr|i|dd|dt)\b)(?=.*\{})/,variable:/(--[a-z0-9\-]+)/,selector:/((?:[.#-\w*+ >:,[\]="~\n]|&gt;)+)(?=\s*\{)/,"attribute keyword vendor":/(-(?:moz|o|webkit|ms)-(?=transform|transition|user-select|tap-highlight-color|animation|background-size|box-shadow))/,"attribute keyword":/\b(content|float|display|position|top|left|right|bottom|(?:(?:max|min)-)?width|(?:(?:max|min|line)-)?height|font(?:-(?:family|style|size|weight|variant|stretch))?|vertical-align|color|opacity|visibility|z-index|pointer-events|user-select|transform(?:-(?:origin|style|delay|duration|property|timing-function))?|transition(?:-(?:delay|duration))?|animation(?:-(?:name|delay|duration|direction|fill-mode))?|backface-visibility|backdrop-filter|background(?:-(?:color|position|image|repeat|size|attachment|origin|clip|blend-mode))?|(?:padding|margin|border)(?:-(?:top|left|right|bottom))?|border(?:-(?:radius|color|width|style|spacing))|white-space|text-(?:align|transform|decoration|shadow|indent)|overflow(?:-(?:x|y))?|(?:letter|word)-spacing|word-break|box-(?:sizing|shadow)|stroke(?:-(?:width|opacity|dasharray|dashoffset|linecap|linejoin))?|fill|speak|outline|user-select|cursor|flex(?:-(?:direction|flow|grow|shrink|basis|wrap))?|(?:justify|align)-(?:content|self|items))(?=\s*:)/,"value keyword vendor":/(-(?:moz|o|webkit|ms)-(?=linear-gradient))/,"value keyword":/\b(inherit|initial|normal|none|unset|auto|inline(?:-(?:block|flex))?|block|flex|absolute|relative|static|fixed|sticky|hidden|visible|top|left|right|bottom|center|middle|baseline|solid|dotted|dashed|line-through|(?:over|under)line|wavy|double|(?:pre-|no)?wrap|pre|break-word|(?:upper|lower)case|capitalize|italic|bold|attr\(.*?\)|linear|ease(?:-in)?(?:-out)?|all|infinite|cubic-bezier|(?:translate|rotate)(?:[X-Z]|3d)?|skew[XY]?|scale|(?:no-)?repeat|repeat(?:-x|-y)|contain|cover|url|(?:repeating-)?(?:linear|radial)-gradient|inset|pointer|(?:flex-)?(?:start|end)|space-(?:between|evenly|around)|stretch|revert|row(?:-reverse)?|column(?:-reverse)?)(?=\s*[,;}(]|\s+[\da-z!])/,"value keyword important":/( ?!important)/,number:r.number,color:/(transparent|#(?:[\da-f]{6}|[\da-f]{3})|rgba?\([\d., ]*\))/,htmlentity:r.htmlentity,punctuation:/([:,;{}@#()!]+)/,attribute:/([a-z-]+)(?=\s*:)/,unit:/(px|pt|cm|%|r?em|m?s|deg|vh|vw|vmin|vmax)(?=(?:\s*[;,{}})]|\s+[-\da-z#]))/,error:/([:,;{}@#()!]+|&lt;|&gt;|&amp;)/},json:{quote:/("(?:\\"|[^"])*")/,number:r.number,boolean:r.boolean,punctuation:/([[\](){}:,]+)/,error:/(&(:?lt|gt|amp);|(?!\s).)/},js:{quote:r.quote,comment:r.comment,number:/\b(\d+(?:\.\d+)?|null)\b/,boolean:r.boolean,this:/\b(this)(?=\W)/,keyword:/\b(new|getElementsBy(?:Tag|Class|)Name|getElementById|querySelector|querySelectorAll|arguments|if|else|do|return|case|default|(?:f|F)unction|typeof|instanceof|undefined|document(?:Element)?|window|console|while|for|forEach|switch|in|break|continue|delete|length|var|let|const|export|import|as|require|from|Class|constructor|Number|Boolean|String|Array|Object|RegExp|Integer|Date|Promise|Proxy|WeakMap|WeakSet|Symbol|SyncManager|File(?:Reader)?|DataTransfer|DocumentFragment|async|await|(?:clear|set)(?:Timeout|Interval)|parse(?:Int|Float)|Math(?=\.)|isNaN|atob|btoa|getComputedStyle)(?=\W)/,htmlentity:r.htmlentity,punctuation:/(!==?|[[\]!(){}:;,+\-%*/?=]+|\.+(?![a-z])|\|\||&lt;|&gt;|&amp;)/,variable:/(\.?[a-z_][\w\d]*)/,"external-var":/(\$|jQuery|JSON)(?=\W|$)/},php:{quote:r.quote,comment:r.comment,special:/(&lt;\?(?:php)?|\?&gt;|__(?:DIR|FILE|LINE|CLASS|METHOD|FUNCTION|NAMESPACE|TRAIT)__)/,punctuation:r.punctuation,number:r.number,boolean:r.boolean,variable:/(\$[\w\d_]+)/,keyword:/\b(define|echo|die|exit|print_r|var_dump|if|else|elseif|do|return|case|default|function|\$this|while|foreach|for|switch|in|break|continue|empty|isset|unset|parse_ini_file|session_(?:start|destroy|id)|header|json_(?:encode|decode)|error_log|(require|include)(:?_once)?|try|throw|new|Exception|catch|finally|preg_(?:match|replace)|list|strlen|substr|str_replace|array_(?:keys|values))(?=\W|$)/},sql:{quote:r.quote,comment:/((?:\-\-|#)\s.*?(?:\n|$)|\/\*.*?\*\/)/,punctuation:r.punctuation,number:/\b(\d+(?:\.\d+)?|null)\b/,boolean:r.boolean,keyword:/\b(\*|DECLARE|BEGIN|END|RETURNS|FUNCTION|CREATE|DATABASE|TABLE|VIEW|COLUMN|INDEX|GRANT|REVOKE|ALL|PRIVILEGES|IDENTIFIED|FLUSH|ALTER|MODIFY|DROP|TRUNCATE|CONSTRAINT|ADD|CHECK|(?:(?:PRIMARY|FOREIGN|UNIQUE) )?KEY|REFERENCES|AUTO_INCREMENT|COMMENT|DEFAULT|UNSIGNED|CHARSET|COLLATE|CHARACTER|ENGINE|SQL_MODE|USE|IF|THEN|NULL|EXISTS|UNIQUE|SELECT|UPDATE|DELETE|(?:INSERT|REPLACE)(?: INTO)?|VALUES|SET|FROM|WHERE|(?:ORDER|GROUP) BY|LIMIT|(?:(?:LEFT|RIGHT|INNER|OUTER|CROSS) |)JOIN|AS|ON|COUNT|AVG|SUM|MIN|MAX|CASE|TO|WHEN|BETWEEN|AND|OR|NOT|IN|LIKE|IS|CONCAT|SUBSTRING|CURRENT_(?:DATE|TIMESTAMP)|USING|HAVING?)(?=\W|$)/,"var-type":/\b((?:var)?char|(?:tiny|small|medium|big)?int|decimal|float|double|real|bit|boolean|date(?:time)?|time(?:stamp)?|year|(?:tiny|medium|long)?(?:text|blob)|enum)\b/}},s={xml:/(\s*)([a-z\d\-:]+)(?:=("|')(.*?)\3)?/g,html:/(\s*)([a-z-]+)(?:=("|')(.*?)\3)?/g,"html-vue":/(\s*)([@:#]?[a-z\d-]+)(?:(?:=("|')(.*?)\3)|)/g,pug:/(\s*|,)([@:#]?[a-z\d-]+)(?:(?:=("|')(.*?)\3)|)/g},l={shell:{quote:2},xml:{quote:2,tag:5},html:{quote:2,tag:5},"html-vue":{quote:2,tag:5},pug:{text:3,text2:3,quote:2,comment:3,tag:6},json:{},php:{quote:2},sql:{quote:2},css:{quote:2},js:{quote:2}},c=function t(e){return e.map((function(e){return e.text&&"string"!=typeof e.text?Array.isArray(e.text)?t(e.text):e.text.default?t(e.text.default):void 0:e.text||""})).join("")},u={name:"sshpre",props:{language:{type:String,default:""},label:{type:[String,Boolean],default:!1},tab:{type:[Boolean,String],default:"  "},dark:{type:Boolean,default:!1},copyButton:{type:Boolean,default:!1},editable:{type:Boolean,default:!1}},data:function(){return{knownLanguages:Object.keys(i),content:"",slotTexts:""}},methods:{htmlize:function(t){return t.replace(/&(lt|gt|amp);/g,(function(t,e){return{lt:"<",gt:">",amp:"&"}[e]}))},unhtmlize:function(t){return t.replace(/[<>]/g,(function(t){return{"<":"&lt;",">":"&gt;"}[t]}))},isColorDark:function(t){var e,n,a,o,r,i;if(e=t.match(/rgba?\((.*),\s*(.*),\s*(.*?)(?:,\s*([^)]*))\)/))a=parseInt(e[1])<=100,o=parseInt(e[2])<=100,r=parseInt(e[3])<=100,i=parseFloat(e[4])<.3;else if(n=t.match(/#([\da-f]{3}(?:[\da-f]{3})?)/)){var s=3===n[1].length;a=parseInt(n[1][0])<=9,o=parseInt(n[1][s?1:2])<=9,r=parseInt(n[1][s?2:4])<=9}return(a&&o&&r||a&&o&&!r||!a&&o&&r)&&!i},createRegexPattern:function(){var t="",e=[];for(var n in i[this.language]){for(var a=l[this.language][n]||1,o=0;o<a;o++)e.push(n);t+=(t?"|":"")+i[this.language][n].source}return[t,e]},syntaxHighlightHtmlTag:function(e){var n=function(t,e,n,a,o){return"".concat(e,'<span class="attribute">').concat(n,"</span>")+(a||o?'<span class="punctuation">=</span>':"")+(a||o?'<span class="quote">'.concat(a||"").concat(o||"").concat(a||"","</span>"):"")};if("pug"===this.language){var a=t(e,6),o=a[0],r=a[1],i=void 0===r?"":r,l=a[2],c=void 0===l?"":l,u=a[3],d=void 0===u?"":u,p=a[4],f=void 0===p?"":p,g=a[5],h=void 0===g?"":g;return i=i.replace(/#[a-z\d-]+/g,(function(t){return'<span class="id">'.concat(t,"</span>")})).replace(/\.[a-z\d-]+/g,(function(t){return'<span class="class">'.concat(t,"</span>")})),c&&(c='<span class="punctuation">(</span>'+(c=c.replace(s.pug,n))+'<span class="punctuation">)</span>'),h&&(h=this.highlightPugInlineTag(h)),'<span class="tag-name">'.concat(o,"</span>").concat(i).concat(c)+(d?'<span class="punctuation">.</span>':"")+(f||"")+(h?'<span class="text">'.concat(h,"</span>"):"")}var m=t(e,5),y=m[0],b=m[1],v=void 0===b?"":b,E=m[2],w=void 0===E?"":E,x=m[3],T=void 0===x?"":x,S=m[4],C=v.replace(s[this.language],n);return'<span class="punctuation">&lt;'.concat(T,'</span><span class="tag-name">').concat(y||S,"</span>")+C+'<span class="punctuation">'.concat(w,"&gt;</span>")},highlightPugInlineTag:function(t){var e=this;return t.replace(new RegExp(i.pug["inline-tag"],"gsi"),(function(t,n){return'<span class="inline-tag">#[</span>'+n.replace(new RegExp(i.pug.tag,"si"),(function(t){for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return a=a.slice(0,a.length-2),e.syntaxHighlightHtmlTag(a)}))+'<span class="inline-tag">]</span>'}))},highlightInPre:function(){if(this.knownLanguages.includes(this.language)){var t=this.getCaretPositionInPlainText();this.$refs.code.innerHTML=this.syntaxHighlightContent(this.$refs.code.innerText),this.reinjectCaret(this.$refs.code.childNodes,t)}},getCaretPositionInPlainText:function(){var t=window.getSelection();t.collapseToEnd();var e=new Range;return e.setStart(this.$refs.code,0),e.setEnd(t.extentNode,t.extentOffset),e.toString().length},reinjectCaret:function(t,n){var a,o,r,i=0,s=function(t,n){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=e(t))||n&&t&&"number"==typeof t.length){a&&(t=a);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return s=t.done,t},e:function(t){l=!0,i=t},f:function(){try{s||null==a.return||a.return()}finally{if(l)throw i}}}}(t);try{for(s.s();!(r=s.n()).done;){var l=r.value,c=(null==(a=l.innerText)?void 0:a.length)||l.length;if(i+c>=n){l.childNodes.length>1?this.reinjectCaret(l.childNodes,n-i):document.getSelection().setPosition((null==(o=l.childNodes)?void 0:o[0])||l,n-i);break}i+=c}}catch(u){s.e(u)}finally{s.f()}},onKeydown:function(t){switch(t.which){case 9:this.injectAtCaret(this.tab),t.preventDefault();break;case 13:this.injectAtCaret("\n"),t.preventDefault()}},injectAtCaret:function(t){var e=window.getSelection(),n=e.getRangeAt(0),a=document.createTextNode(t);n.insertNode(a),e.collapseToEnd()},syntaxHighlightContent:function(e){var n=this;if(!this.knownLanguages.includes(this.language))return e;var a=t(this.createRegexPattern(),2),o=a[0],r=a[1];return this.unhtmlize(e.replace(/&/g,"&amp;")).replace(new RegExp(o,"gsi"),(function(e){for(var a=arguments.length,o=new Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];var s;o=o.slice(0,o.length-2);var l="pug"===n.language,c=o.find((function(t,e){return t&&(s=r[e])&&t}));if(["punctuation","quote","htmlentity"].includes(s))c=n.unhtmlize(c);else if("comment"===s)if(l){var u=t(o.slice(r.indexOf("comment")),3),d=u[0],p=u[1],f=u[2];c="".concat(d).concat(p).concat(n.unhtmlize(f))}else c=n.unhtmlize(c);else{if("text"===s&&l){var g=t(o,3),h=g[0],m=g[1],y=g[2];return y=n.highlightPugInlineTag(y),"".concat(h,'<span class="punctuation">|</span>').concat(m,'<span class="text">').concat(y,"</span>")}if("text2"===s&&l){var b=t(o,6),v=b[3],E=b[4],w=b[5],x=n.syntaxHighlightContent(E);return"".concat(v).concat(x,'<span class="punctuation">.</span>\n<span class="text">').concat(w,"</span>")}if("tag"===s&&["xml","html","html-vue","pug"].includes(n.language))return n.syntaxHighlightHtmlTag(o.slice(r.indexOf("tag")));if("variable"===s&&"."===c[0]&&"js"===n.language)return'<span class="punctuation">.</span><span class="obj-attr">'.concat(c.substr(1),"</span>")}var T="";return"color"===s&&"css"===n.language&&(T=' style="background-color: '.concat(c,";color: #").concat(n.isColorDark(c)?"fff":"000",'"')),s&&'<span class="'.concat(s,'"').concat(T,">").concat(c,"</span>")||""}))},getSlotContent:function(){return this.$slots.default&&c(this.$slots.default)||""},copyCode:function(t){t.target.insertAdjacentHTML("afterend",'<textarea id="clipboard-textarea">'.concat(this.$refs.code.innerText,"</textarea>"));var e=document.getElementById("clipboard-textarea");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),e.remove(),this.$emit("copied",this.$refs.code.innerText)}},mounted:function(){var t=this.getSlotContent();this.$refs.code.innerText=t,this.$refs.code.innerHTML=this.syntaxHighlightContent(this.$refs.code.innerText)},beforeUpdate:function(){this.$refs.code.innerHTML=this.syntaxHighlightContent(this.getSlotContent())}};n("default",o(u,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ssh-pre",class:{"ssh-pre--dark":t.dark},attrs:{"data-type":t.language,"data-label":t.label||null}},[t.copyButton?e("button",{staticClass:"ssh-pre__copy",on:{click:t.copyCode}},[t._t("copy-button",(function(){return[t._v("Copy")]}))],2):t._e(),t._v(" "),e("pre",{ref:"code",staticClass:"ssh-pre__content",attrs:{contenteditable:t.editable?"true":"false"},on:{keydown:function(e){t.editable&&t.onKeydown(e)},input:t.highlightInPre}},[t._v("    ")]),t._v(" "),e("div",{staticClass:"ssh-pre__original"},[t._t("default")],2)])}),[],!1,null,null,null,null).exports)}}}))}();
