!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(j){l=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),s=new O(n||[]);return a(i,"_invoke",{value:_(t,r,s)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(j){return{type:"throw",arg:j}}}r.wrap=d;var h={};function g(){}function p(){}function v(){}var m={};l(m,s,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(C([])));b&&b!==n&&o.call(b,s)&&(m=b);var w=v.prototype=g.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(e,r){function n(a,i,s,c){var u=f(e[a],e,i);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==t(d)&&o.call(d,"__await")?r.resolve(d.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):r.resolve(d).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}var i;a(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function _(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return $()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=k(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(z,this),this.reset(!0)}function C(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:$}}function $(){return{value:void 0,done:!0}}return p.prototype=v,a(w,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:p,configurable:!0}),p.displayName=l(v,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},x(L.prototype),l(L.prototype,c,(function(){return this})),r.AsyncIterator=L,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new L(d(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),l(w,u,"Generator"),l(w,s,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=C,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function s(t){r(i,o,a,s,c,"next",t)}function c(t){r(i,o,a,s,c,"throw",t)}s(void 0)}))}}System.register(["./index-legacy.1849bda6.js","./services-legacy.6b90f593.js","./folder-legacy.25752220.js"],(function(t,r){"use strict";var o,a,i,s,c,u,l,d,f,h,g;return{setters:[function(t){o=t.n,a=t.u,i=t.A,s=t.i,c=t.t,u=t.Q,l=t.b},function(t){d=t.a},function(t){f=t.a,h=t.c,g=t._}],execute:function(){var r={data:function(){return{isOpen:!1,model:{organizationName:""},user:a().get,storage:i().storage(),database:i().database(),organizations:{},isEmpty:s,isLoading:!1,urlParams:new URLSearchParams(window.location.search),activeElement:f,colors:h}},methods:{isActiveOrganization:function(t){return!!this.urlParams.has("org")&&this.urlParams.get("org")==t},setActiveOrganization:function(t,e){var r=this;this.$root.$emit("set_active_organization",{organization:t,shouldReload:!0}),document.querySelectorAll('[role="ctl-organizations"]').forEach((function(t){t.classList.remove(r.colors.Cyan),t.classList.add(r.colors.Teal),t.classList.remove("text-gray-100"),t.classList.add("text-gray-900")})),document.getElementById(e).classList.remove(this.colors.Teal),document.getElementById(e).classList.add(this.colors.Cyan),document.getElementById(e).classList.add("text-gray-100"),document.getElementById(e).classList.remove("text-gray-900")},closeOrganizations:function(){this.isOpen=!1},getOrganizations:function(){var t=this;return n(e().mark((function r(){return e().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.isLoading=!0,t.organizations=[],c((function(){t.database.collection(d.organization_table),t.database.index([u.equal("user_id",[t.user.$id]),u.orderDesc("$createdAt")]).then(function(){var r=n(e().mark((function r(n){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.organizations=n.documents);case 1:case"end":return e.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())})),t.isLoading=!1;case 4:case"end":return r.stop()}}),r)})))()},submitOrganization:function(){var t=this;return n(e().mark((function r(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c((function(){t.isLoading=!0,t.$root.$emit("set_loader_on"),t.database.collection(d.organization_table),t.database.create({name:t.model.organizationName,user_id:t.user.$id}).then((function(){t.$root.$emit("new_message",{responseType:"success",response:"Organization Created",hasResponse:!0}),t.$root.$emit("set_loader_off"),t.isLoading=!1,t.$root.$emit("reload_organizations")})),t.hasResponse=!0}));case 1:case"end":return e.stop()}}),r)})))()}},mounted:function(){var t=this;return n(e().mark((function r(){return e().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:l().user().then(function(){var r=n(e().mark((function r(n){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a().store(n),t.user=n,t.auth=!0,e.next=5,t.getOrganizations();case 5:case"end":return e.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()),t.$root.$on("reload_organizations",n(e().mark((function r(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getOrganizations();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),r)})))),t.$root.$on("open-organizations",(function(){return t.isOpen=!0}));case 3:case"end":return r.stop()}}),r)})))()}};t("default",o(r,(function(){var t=this,e=t._self._c;return t.isOpen?e("div",{staticClass:"translate-x-0 fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-[30vw] shadow-lg border border-gray-200 dark:bg-gray-800",attrs:{tabindex:"-1","aria-labelledby":"drawer-right-label"}},[t._m(0),e("button",{staticClass:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",attrs:{type:"button","data-drawer-hide":"drawer-right-example","aria-controls":"drawer-right-example"},on:{click:t.closeOrganizations}},[e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})]),e("span",{staticClass:"sr-only"},[t._v("Close menu")])]),e("div",{staticClass:"border border-x-0 mt-4 border-t-0 border-gray-200"}),e("div",{staticClass:"collection-form mt-3"},[e("label",{staticClass:"block mb-2 text-md font-semibold text-gray-900 dark:text-white",attrs:{for:"helper-text"}},[t._v("Organization Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.model.organizationName,expression:"model.organizationName"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",placeholder:"Neon.inc"},domProps:{value:t.model.organizationName},on:{input:function(e){e.target.composing||t.$set(t.model,"organizationName",e.target.value)}}}),e("button",{staticClass:"mt-3 text-white bg-green-800 hover:bg-green-800/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2",attrs:{type:"button"},on:{click:t.submitOrganization}},[t._v(" create now ")])]),e("div",{staticClass:"border border-gray-200 mt-4 rounded-[10px] bg-clip-border bg-[#f5f7fe] shadow-3xl shadow-shadow-500 p-2 overflow-y-auto h-auto"},[t.isEmpty(t.organizations)?e("div",{staticClass:"flex items-center grayscale justify-center"},[e("img",{staticClass:"w-32",attrs:{src:g,alt:""}})]):e("ul",{staticClass:"p-0 m-0"},t._l(t.organizations,(function(r){return e("li",{key:r.$id,staticClass:"cursor-pointer mb-2"},[e("a",{staticClass:"hover:bg-gray-300 border border-gray-200 flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-50 dark:hover:bg-gray-700",on:{click:function(e){return t.setActiveOrganization(r,r.$id)}}},[e("div",{class:t.isActiveOrganization(r.$id)?t.activeElement.active:t.activeElement.default,attrs:{role:"ctl-organizations",id:r.$id}},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"}})])]),e("span",{staticClass:"flex-1 ml-3 truncate font-semibold"},[t._v(" "+t._s(r.name)+" ")])])])})),0),t.isLoading?e("div",{staticClass:"flex justify-center items-center"},[e("span",{staticClass:"inline-flex h-6 w-6 animate-spin rounded-full border-4 border-dotted border-indigo-600"})]):t._e()])]):t._e()}),[function(){var t=this._self._c;return t("div",{staticClass:"flex items-center justify-center"},[t("h3",{staticClass:"mt-4 text-center inline-flex items-center mb-4 text-md font-semibold text-gray-500 dark:text-gray-400",attrs:{id:"drawer-right-label"}},[this._v(" Manage Organizations ")])])}],!1,null,null,null,null).exports)}}}))}();
